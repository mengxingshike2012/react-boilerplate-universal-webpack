import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from './header'
import LeftNav from './leftNav'
import TabList from './tabList'

import './base.css'
import './style.css'

@connect(
  (state, props) => ({
    navMenuType: state.navMenuType,
  }),
  dispatch => ({ actions: bindActionCreators({}, dispatch) })
)
export default class Container extends Component {
  render() {
    const { location, children, navMenuType } = this.props
    return (
      <div id="container" className="effect easeInOutBack mainnav-lg">
        <Header />
        <div className="boxed">
          <div id="content-container" className={`content-container-${navMenuType}`}>
            <div id="page-content">
              <TabList location={location} />
              {children}
            </div>
          </div>
          <LeftNav location={location} />
        </div>
      </div>
    )
  }
}
