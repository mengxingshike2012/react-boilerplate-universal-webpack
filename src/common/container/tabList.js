import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'
import { is } from 'immutable';
import { Tabs } from 'antd'
import CSSModules from 'react-css-modules'
import { updateTabChecked, deleteTabFromList } from './redux/tabList'
import styles from './tabList.scss'

const TabPane = Tabs.TabPane

@connect(
    (state, props) => ({ tabList: state.tabListResult }),
    dispatch => ({ actions: bindActionCreators(routerActions, dispatch),
      dispatch: dispatch })
)
@CSSModules(styles)
export default class TabList extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onChange(key) {
    const { actions } = this.props;
    const activeKey = key.split('.$').length <= 1 ? key : key.split('.$')[1]
    this.props.dispatch(updateTabChecked({ activeKey: activeKey }))
    actions.push(activeKey)
  }

  onEdit(targetKey, action) {
    this[action](targetKey);
  }

  remove(key) {
    const { actions, tabList } = this.props;
    const targetKey = key.split('.$')[1]
    let delIndex
    let activeKey

    if (targetKey === tabList.activeKey) {
      tabList.list.map((tab, index) => {
        tab.key === targetKey ? delIndex = index : null;
      });
      // eslint-disable-next-line no-nested-ternary
      activeKey = tabList.list[delIndex + 1] ?
        tabList.list[delIndex + 1].key : (tabList.list[delIndex - 1] ?
        tabList.list[delIndex - 1].key : '');
      actions.push(activeKey);
    }
    this.props.dispatch(deleteTabFromList({ targetKey: targetKey }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    const thisProps = this.props || {};
    if (nextProps.tabList.activeKey !== nextProps.location.pathname) {
      this.onChange(nextProps.location.pathname)
      return false;
    }
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
      return true;
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const key in nextProps) {
      if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
        return true;
      }
    }
    return false;
  }

  render() {
    const { tabList } = this.props
    return (
      <div styleName="tablist">
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={`.$${tabList.activeKey}`}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {
            tabList.list.map(tab =>
              <TabPane tab={tab.title} key={tab.key}>{tab.content}</TabPane>)
          }
        </Tabs>
      </div>
    )
  }
}
