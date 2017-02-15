import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
} from 'antd'

import { addByClick } from './redux'


@connect(
  state => ({
    count: state.homeState.count,
  }),
)
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <Button type="primary" onClick={() => this.props.dispatch(addByClick())}>Click Me!</Button>
      </div>
    )
  }
}
