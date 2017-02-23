import React from 'react'
import { connect } from 'react-redux'
import css from 'react-css-modules'
import {
  Button,
  Table,
} from 'antd'
import Panel from 'components/panel'
import AddButton from 'components/addButton'
import SearchBar from 'components/searchbar'
import Selector from 'components/classifiedMultiSelector'

import { Actions } from './redux/businessCityList'
import styles from './businessCityList.scss'

@connect(state => ({
  openCities: state.investment.businessCity.openCities,
  unOpenCities: state.investment.businessCity.unOpenCities,
}))
@css(styles)
export default class InvestmentAreaListView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      modalKey: +new Date(),
    }
  }

  componentWillMount() {
    this.props.dispatch(Actions.fetchBusinessCityList())
  }


  openAddCityModal = () => {
    this.setState({
      modalVisible: true,
      modalKey: +new Date(),
    })
  }
  addNewCity = (cities) => {
    this.setState({
      modalVisible: false,
    })
  }
  hideModal = () => {
    this.setState({
      modalVisible: false,
    })
  }

  renderZoneOfReleased = (data) => {
    if (data.maps) {
      return (<div className={styles.released}><span>地图</span><span>加盟商区域</span></div>)
    }
    return null
  }

  renderZoneToBeReleased = (data) => {
    if (!data.maps) {
      return (
        <div className={styles.notReleased}>
          <Button className={styles.empty} onClick={this.addNewZoneOfCity}>新增</Button>
        </div>)
    }
    return (
      <div className={styles.notReleased}>
        <div className={styles.op1}>
          <span>地图</span>
          <span>加盟商区域</span>
          {!data.confirmed && <span className={styles.delete}>删除</span> }
        </div>
        <div className={styles.op2}>
          <span className={styles.state}>{data.confirmed ? '发布已确认' : '发布未确认'}</span>
          {data.confirmed ? <Button className={styles.cancel}>取消发布</Button> : <Button className={styles.confirm}>确认发布</Button>}
        </div>

      </div>
    )
  }

  columns = [{
    title: '城市',
    dataIndex: 'city',
  }, {
    title: '已发布数据',
    dataIndex: 'released',
    render: this.renderZoneOfReleased,
  }, {
    title: '待发布数据',
    dataIndex: 'notReleased',
    render: this.renderZoneToBeReleased,
  }]

  render() {
    const fields = [
      {
        title: '城市',
        type: 'select',
        key: 'city',
        items: () => this.props.openCities.map(c => ({ key: c.id, value: c.city })),
      },
      {
        title: '是否有已发布',
        type: 'select',
        key: 'released',
        items: () => [{ key: '1', value: '请选择' }, { key: '2', value: '有' }, { key: '3', value: '无' }],
      },
      {
        title: '是否有待发布',
        type: 'select',
        key: 'notReleased',
        items: () => [{ key: '1', value: '请选择' }, { key: '2', value: '有' }, { key: '3', value: '无' }],
      },
    ]

    const pagination = {
      current: 1,
      total: 50,
      pageSize: 20,
      showTotal: total => `共${total}条`
    }
    return (
      <Panel>
        <SearchBar
          fields={fields}
        />
        <div styleName="operation-bar">
          <AddButton type="primary" onClick={this.openAddCityModal} />
        </div>
        <Table
          rowKey="city"
          bordered
          columns={this.columns}
          dataSource={this.props.openCities}
          pagination={pagination}
        />
        <Selector
          modalKey={`${this.state.modalKey}`}
          visible={this.state.modalVisible}
          title="请选择需要启用的城市"
          dataSource={this.props.unOpenCities}
          onOk={this.addNewCity}
          onCancel={this.hideModal}
        />
      </Panel>
    )
  }
}
