import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'
import { Menu, Icon, Popover } from 'antd'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import { menuIcon, allMenu } from 'utils/config'
import { updateTabList } from './redux/tabList'

import styles from './leftnav.scss'

const SubMenu = Menu.SubMenu

@connect(
  (state, props) => ({ config: state.config, navMenuType: state.navMenuType }),
  dispatch => ({
    actions: bindActionCreators(routerActions, dispatch),
    dispatch: dispatch,
  })
)
@CSSModules(styles)
export default class LeftNav extends Component {
  onClick = (e) => {
    const { actions } = this.props
    const key = e.key.split('.$')[1]
    actions.push(key)
    this.props.dispatch(updateTabList({ title: e.item.props.name, content: '', key: key }))
  }

  render() {
    const { navMenuType } = this.props
    return (
      <nav styleName="mainnav-container">
        <Menu
          mode={'inline'}
          onClick={this.onClick}
          style={navMenuType === 'inline' ? { width: 220 } : { width: 60 }}
          selectedKeys={[`.$${this.props.location.pathname}`]}
          className={`menu-${navMenuType}`}
        >
          {
            allMenu.map(subMenu => (
              <SubMenu key={subMenu.id} title={
                <span>
                  <Icon type={menuIcon[subMenu.name]} />
                  <span className={`sub-menu-name-${navMenuType}`}>{subMenu.name}</span>
                </span>}
              >
                {
                  subMenu.children.map(menu => (
                    <Menu.Item key={`${menu.url}`}
                      name={menu.name}
                      className={`menu-box-${navMenuType}`}
                    >
                      {
                        navMenuType === 'vertical' ? (
                          <Popover
                            content={<Link to={menu.url}>{menu.name}</Link>}
                            trigger="hover"
                            placement="right"
                          >
                            <div className={`menu-item-${navMenuType}`}>{menu.name}</div>
                          </Popover>
                        ) : (
                          <div className={`menu-item-${navMenuType}`}>{menu.name}</div>
                        )
                      }
                    </Menu.Item>)
                  )
                }
              </SubMenu>
            ))
          }
        </Menu>
      </nav>
    )
  }
}
