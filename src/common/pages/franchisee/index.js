import React from 'react'
import { connect } from 'react-redux'
import SearchBar from 'components/searchbar';
import Table from 'components/table';

import { loadTable } from './redux'


@connect(
  state => ({
    table: state.franchiseeState.table,
  }),
)
export default class Franchisee extends React.Component {
  componentDidMount() {
    this.loadTableList(this.props.table.currentPage);
  }

  loadTableList(currentPage) {
    this.props.dispatch(loadTable({ currentPage }));
  }

  onSearch = (fields) => {
    console.log(fields);
  }

  render() {
    return (
      <div>
        <SearchBar
          onSubmit={this.onSearch}
          fields={[{
            title: '城市',
            key: 'city',
            type: 'cascader',
            items() {
              return [{
                value: 0,
                label: '浙江',
                children: [{
                  value: 1,
                  label: '杭州区'
                }]
              }]
            }
          }, {
            title: '区域',
            key: 'region',
            type: 'select',
            items() {
              return [{
                key: 1,
                value: '无',
              }]
            }
          }, {
            title: '姓名',
            key: 'name',
          }, {
            title: '登录手机号',
            key: 'phone',
            validator(value) {
              const result = value.match(/[0-9]+/);
              if (result) return result[0];
              return '';
            }
          }, {
            title: '状态',
            type: 'select',
            key: 'status',
            items() {
              return [{
                key: 0,
                value: '合作中',
              }, {
                key: 1,
                value: '停止合作',
              }]
            }
          }]}
        />
        <div style={{ margin: 50 }}>
          <Table
            onChange={page => console.log(page)}
            currentPage={this.props.table.currentPage}
            total={this.props.table.total}
            header={[{
              dataIndex: 'city',
              title: '城市',
            }, {
              dataIndex: 'name',
              title: '姓名'
            }, {
              dataIndex: 'region',
              title: '负责区域'
            }, {
              dataIndex: 'status',
              title: '状态'
            }, {
              dataIndex: 'phone',
              title: '登录手机号',
            }, {
              dataIndex: 'identityNumber',
              title: '身份证',
            }, {
              dataIndex: 'email',
              title: '邮箱',
            }]}
            data={this.props.table.data}
            action={(row) => {
              if (row.status === '合作中') {
                return [{
                  key: 'edit',
                  name: '修改',
                  color: 'blue',
                }, {
                  key: 'stop',
                  name: '停止合作',
                  color: 'red',
                }]
              }
              return []
            }}
          />
        </div>
      </div>
    )
  }
}
