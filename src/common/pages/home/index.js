import React from 'react'
import { connect } from 'react-redux'
import css from 'react-css-modules'
import {
  Button,
} from 'antd'
import Panel from 'components/panel'
import { Form, FormModal } from 'components/modalForm'

import styles from './index.scss'

@connect(
  state => ({
    count: state.homeState.count,
  })
)
@css(styles)
export default class Home extends React.Component {

  state = {
    modalVisible: false,
    modalKey: +new Date(),
  }

  showModal = () => {
    this.setState({
      modalVisible: true,
      modalKey: +new Date(),
    })
  }
  onOk = (value) => {
    this.setState({
      modalVisible: false
    })
    console.log('form value is', value)
  }
  onCancel = () => {
    this.setState({
      modalVisible: false
    })
  }
  checkPhone = (rule, value, callback) => {
    setTimeout(() => {
      callback('always invalid phone number')
    }, 5000)
  }

  render() {
    const fields = [
      {
        type: 'text',
        label: '姓名',
        name: 'name',
        options: { initialValue: '点我达小哥' }
      },
      {
        type: 'input',
        label: '手机号',
        name: 'phone',
        options: {
          rules: [{ required: true, message: '请输入你的手机号' }, { validator: this.checkPhone }]
        }
      },
      {
        type: 'select',
        label: '所属区域',
        name: 'region',
        options: {
          initialValue: '2',
          rules: [{ required: true, message: '请输入你的区域' }]
        },
        items: () => [
          {
            key: '1',
            value: '上海市'
          },
          {
            key: '2',
            value: '杭州市'
          },
          {
            key: '3',
            value: '北京市'
          }
        ]
      },
      {
        type: 'radioGroup',
        label: '工作性质',
        name: 'workType',
        options: {
          initialValue: 'full'
        },
        items: () => [{ key: 'full', value: '全职' }, { key: 'part', value: '兼职' }]
      },
      {
        type: 'date',
        label: '签约日期',
        name: 'signDate1',
        options: {

        }
      },
      {
        type: 'datetime',
        label: '签约日期(分秒)',
        name: 'signDate2',
        options: {

        }
      }
    ]
    return (
      <Panel>
        <Form
          fields={fields}
        />
        <Button type="primary" onClick={this.showModal}>show modal</Button>
        <FormModal
          title="添加账号"
          modalKey={this.state.modalKey.toString()}
          visible={this.state.modalVisible}
          onOk={this.onOk}
          onCancel={this.onCancel}
          fields={fields}
        />
      </Panel>
    )
  }
}
