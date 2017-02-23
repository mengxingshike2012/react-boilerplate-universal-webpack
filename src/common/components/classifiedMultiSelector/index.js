import React, { PropTypes } from 'react'
import css from 'react-css-modules'
import {
  Button,
  Checkbox,
  Modal,
  Tag,
} from 'antd'

import _ from 'lodash'

import styles from './index.scss'

@css(styles)
export default class Selector extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: [],
      currentClassfication: props.dataSource[0] && props.dataSource[0].classfication,
    }
  }

  onCloseTagOf = tagId => () => {
    const selected = this.state.selected.filter(s => s.id !== tagId)
    this.setState({
      selected: selected,
    })
  }

  onCheckOf = item => (e) => {
    const { selected } = this.state
    const checked = e.target.checked
    if (checked) {
      selected.push(item)
      this.setState({
        selected,
      })
    } else {
      const newValues = selected.filter(s => s.id !== item.id)
      this.setState({
        selected: newValues,
      })
    }
  }

  onSelectClassOf = classfication => () => {
    this.setState({
      currentClassfication: classfication,
    })
  }

  onCancel = () => {
    const { onCancel } = this.props
    onCancel && onCancel()
  }

  onOk = () => {
    const { onOk } = this.props
    onOk && onOk()
  }

  render() {
    const { selected, currentClassfication } = this.state
    const { modalKey, visible, title, dataSource, onCancel } = this.props
    const classfication = _.uniq(dataSource.map(i => i.classfication))
    const items = dataSource.filter(i => i.classfication === currentClassfication)
    return (
      <Modal
        key={modalKey}
        title={title}
        visible={visible}
        onCancel={onCancel}
        footer={null}
      >
        <div styleName="selected-items">
          {selected.map(s =>
            <Tag key={s.id} closable onClose={this.onCloseTagOf(s.id)}>{s.name}</Tag>)}
        </div>
        <div styleName="main">
          <div styleName="classfication">
            {
              classfication.map((c, index) =>
                (<div
                  key={index}
                  styleName={c === currentClassfication ? 'selected' : 'not-selected'}
                  onClick={this.onSelectClassOf(c)}
                >{c}</div>))
            }
          </div>
          <div styleName="selections">
            {
              items.map(item =>
                <Checkbox
                  key={item.id}
                  onChange={this.onCheckOf(item)}
                  checked={~selected.findIndex(s => s.id === item.id)}
                >
                  {item.name}
                </Checkbox>)
            }
          </div>
        </div>
        <div styleName="buttons">
          <Button onClick={this.onCancel}>取消</Button>
          <Button type="primary" onClick={this.onOk}>确定</Button>
        </div>
      </Modal>
    )
  }
}

Selector.propTypes = {
  modalKey: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  dataSource: PropTypes.arrayOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}
