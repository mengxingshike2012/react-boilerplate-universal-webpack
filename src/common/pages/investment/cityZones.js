import React from 'react'
import css from 'react-css-modules'
import {
  Table,
} from 'antd'
import Panel from 'components/panel'
import AddButton from 'components/addButton'
import SearchBar from 'components/searchbar'

import styles from './cityZone.scss'

const datas = [{
  city: '杭州',
  region: '杭州一区',
  alliance: '张三',
  phone: '18812345678'
}, {
  city: '杭州',
  region: '杭州二区',
  alliance: '张三',
  phone: '18812345678'
}, {
  city: '杭州',
  region: '杭州三区',
  alliance: '张三',
  phone: '18812345678'
}, {
  city: '杭州',
  region: '杭州四区',
  alliance: '张三',
  phone: '18812345678'
}]

@css(styles)
export default class CityZones extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      modalKey: +new Date(),
    }
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

  columns = [{
    title: '城市',
    dataIndex: 'city',
  }, {
    title: '区域名称',
    dataIndex: 'region',
  }, {
    title: '加盟商',
    dataIndex: 'alliance',
  }, {
    title: '加盟商电话',
    dataIndex: 'phone'
  }, {
    title: '操作'
  }]

  render() {
    const fields = [
      {
        title: '区域',
        type: 'select',
        key: 'city',
        items: () => [{ key: '1', value: '杭州' }, { key: '2', value: '上海' }, { key: '3', value: '南京' }],
      },
      {
        title: '加盟商',
        type: 'input',
        key: 'released',
      },
      {
        title: '加盟商电话',
        type: 'input',
        key: 'notReleased',
        validator: text => text.replace(/[^0-9]/ig, '')
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
        <div styleName="title">
          杭州市待发布加盟商区域数据
        </div>
        <SearchBar
          fields={fields}
        />
        <div styleName="operation-bar">
          <AddButton type="primary" onClick={this.openAddCityModal} />
        </div>
        <Table
          rowKey="region"
          bordered
          columns={this.columns}
          dataSource={datas}
          pagination={pagination}
        />
      </Panel>
    )
  }
}
