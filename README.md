<<<<<<< HEAD
## searchbar
```
<SearchBar
  onSubmit={this.onSearch}
  fields={[{
    title: '城市',
    key: 'city',
    type: 'cascader', // select, cascader, input, date, datetime, 
    autoComplete(value) {  // 自动补全用, 只适用于input.
      return ['123', '456']
    },
    validator(value) {  // 数据输入规则
      const result = value.match(/[0-9]+/);
      if (result) return result[0];
      return '';
    }, 
    items() {  // select和cascader才有 , select 返回 [{ key, value }]
      return [{
        value: 0,
        label: '浙江',
        children: [{
          value: 1,
          label: '杭州区'
        }]
      }]
    }
  }}
  />
```

## table
```
<Table
    onChange={page => console.log(page)}
    currentPage={}
    total={}
    header={[{
      dataIndex: 'city',
      title: '城市',
    }, {
      dataIndex: 'status',
      title: '状态',
    }]}
    data={this.props.table.data}
    action={row => {
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
    }}
  />
```
=======
# npm install


## about the .babelrc

currently the setting of this file is extremely confusing as we use webpack2, setting `es2015 module false`

+ one in the root of project is read by the server.babel, as to transform server-side
+ one in the client directory has the development plugin and it's appended as query param, see more in webpack/dev.config.js
+ one in the common directory is no needed for development, but found for npm run build(which means production) and testing.
>>>>>>> feature/components
