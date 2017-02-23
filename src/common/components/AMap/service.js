import React, { Component, Children } from 'react';
import differenceWith from 'lodash/differenceWith'

const AMapServices = []

export default class AMapServiceContainer extends Component {
  static contextTypes = {
    AMap: React.PropTypes.object,
    mapObj: React.PropTypes.object,
  }
  state = {
    loaded: false,
  }

  componentWillMount() {
    const { AMap, mapObj } = this.context;
    const { services, behaviour } = this.props;
    const globalAMap = AMap
    const plugins = differenceWith(services, AMapServices)
    if (!globalAMap) {
      throw new Error('It seems that AMap has not been loaded to the context yet!')
    }
    if (plugins.length) {
      globalAMap.service(plugins.map(p => `AMap.${p}`), () => {
        plugins.forEach(s => AMapServices.push(s))
        this.setState({
          loaded: true,
        })
        behaviour && behaviour(AMap, mapObj)
      })
    } else {
      this.setState({
        loaded: true,
      })
      behaviour && behaviour(AMap, mapObj)
    }
  }

  render() {
    const { loaded } = this.state
    if (loaded && this.props.children) {
      return Children.only(this.props.children)
    }
    return <p>loading plugins...please wait</p>
  }
}
