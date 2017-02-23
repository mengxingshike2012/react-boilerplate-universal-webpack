import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Popover, Row, Col } from 'antd'
import CSSModules from 'react-css-modules'
import { updateNavMenuType } from './redux/menu'

import styles from './header.scss'

const Qrcode = ({ url, title }) => (
  <div>
    <img src={url} style={{ height: 200 }} />
    <h3 style={{ textAlign: 'center' }}>{title}</h3>
  </div>
)

@connect(
  (state, props) => ({
    config: state.config,
    navMenuType: state.navMenuType,
  })
)
@CSSModules(styles, {
  allowMultiple: true,
})
export default class Header extends Component {
  logout = () => {
    sessionStorage.removeItem('tabList')
  }

  handleToggleMenu = () => {
    const { navMenuType } = this.props
    this.props.dispatch(updateNavMenuType(navMenuType))
  }

  render() {
    const { navMenuType } = this.props
    return (
      <header id="navbar" styleName="navbar">
        <div id="navbar-container" className="boxed easeInOutBack">
          <div className="navbar-header">
            <a href="index.html" className={`navbar-brand ${navMenuType}`}>
              <div className={`brand-title ${navMenuType}`}>
                <span className={`brand-text ${navMenuType}`}>点我达加盟业务</span>
              </div>
            </a>
          </div>
          <div className={`navbar-content ${navMenuType}`}>
            <Row>
              <Col span={1}>
                <i styleName="anticon-header bars" className="anticon" onClick={this.handleToggleMenu} />
              </Col>
              <Col span={4}>
                <div styleName="user-name">sdfsdfsdf</div>
              </Col>
              <Col span={1}>
                <i styleName="anticon-header sound" className="anticon" />
              </Col>
              <Col span={9} push={9}>
                <Row>
                  <Col span={8} styleName="header-link">
                    <Popover trigger="click" content={<Qrcode url="/shop-qrcode.png" title="商家团队版" />}>
                      <Row>
                        <Col span={12}><a>APP下载</a></Col>
                        <Col span={12}><i styleName="anticon-header qrcode" className="anticon" /></Col>
                      </Row>
                    </Popover>
                  </Col>
                  <Col span={13} styleName="header-link header-user">
                    <a style={{ color: '#000' }}>登录用户：{global.__data.loginUsername}</a>
                  </Col>
                  <Col span={2} styleName="header-link header-logout">
                    <a href="/auth/logout" onClick={this.logout}>注销</a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </header>
    )
  }
}
