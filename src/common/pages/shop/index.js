import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
} from 'antd'

import { addM1 } from './redux/m1'
import { addM2 } from './redux/m2'

@connect(
  state => ({
    m1: state.shopState.m1,
    m2: state.shopState.m2,
  }),
)
export default class Shop extends React.Component {
  render() {
    return (
      <div>
        <h1>M1: {this.props.m1.count}, M2: {this.props.m2.count}</h1>
        <Button onClick={() => { this.props.dispatch(addM1()) }}>click to add m1</Button>
        <Button onClick={() => { this.props.dispatch(addM2()) }}>click to add m2</Button>
      </div>
    )
  }
}
