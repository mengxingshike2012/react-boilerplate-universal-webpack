import React from 'react';
import css from 'react-css-modules';
import {
    Table as AntTable,
} from 'antd';
import styles from './index.scss';

@css(styles)
export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.mountProps(props);
  }

  willReceiveProps(props) {
    this.mountProps(props);
  }

  mountProps(props) {
    const {
            header,
            action,
            headerWidth,
            currentPage,
            data,
        } = props;
    this.state = {
      currentPage,
    }
    this.makeColumns(header, action, headerWidth, data);
  }

  makeColumns(headers, action, headerWidth, data) {
    this.columns = [{
      dataIndex: 'rowIndex',
      title: '序号',
      width: 50,
    }];
    // eslint-disable-next-line no-restricted-syntax
    for (const header of headers) {
      this.columns.push({
        ...header,
      });
    }
    if (action) {
      const maxActionCount = Math.max(...(data.map(action).map(i => (i ? i.length : 0))));
      this.columns.push({
        key: 'x',
        title: '操作',
        width: maxActionCount * 50,
        render: (row) => {
          const actions = action(row);
          if (!actions) {
            return <div />;
          }
          const buttons = actions.map(({ color, name, key }) =>
            <a
              key={key}
              onClick={(e) => {
                e.preventDefault();
                if ('onCtrlClick' in this.props) {
                  this.props.onCtrlClick(key, row);
                }
              }}
              style={{
                color,
                marginRight: 8,
              }}
            >{name}</a>
          );
          return (<div>
            {buttons}
          </div>);
        },
      });
    }
  }

  onPageChangeHandler = (currentPage) => {
    this.setState({
      currentPage,
    });
  }

  render() {
    return (
      <div styleName="dwd-table">
        <AntTable
          dataSource={this.props.data.map((row, i) => ({ ...row, rowIndex: i + 1, key: i + 1 }))}
          columns={this.columns}
          pagination={{
            total: this.props.total,
            pageSize: 20,
            current: this.state.currentPage,
            onChange: this.onPageChangeHandler,
            showTotal(total, range) {
              return <span className={styles.pageTotal}>共<span className={styles.count}>{total}</span>条</span>;
            },
          }}
        />
      </div>
    );
  }
}
