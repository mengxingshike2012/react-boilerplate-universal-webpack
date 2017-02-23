import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import styles from './index.scss'

@CSSModules(styles)
export default class Panel extends Component {

  render() {
    const children = this.props.children

    return (
      <div styleName="panel">
        <div styleName="panel-body">{children}</div>
      </div>
    );
  }
}
