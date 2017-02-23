import React, { Component, PropTypes, Children } from 'react';

const loadAMapSDK = (key, callback) => {
  if (global.AMap) {
    callback(global.AMap)
  } else {
    /* eslint global-require: 0 */
    const $script = require('scriptjs');
    const load = () => {
      $script(`//webapi.amap.com/maps?v=1.3&key=${key}`, () => {
        callback(global.AMap);
      });
    };
    load();
  }
};

export default class AMapConainer extends Component {
  static propTypes = {
    sdkKey: PropTypes.string.isRequired,
  };

  static defaultProps = {
    loadSDK: loadAMapSDK,
  };

  static childContextTypes = {
    AMap: PropTypes.object,
    mapObj: PropTypes.object,
  };

  state = {
    AMap: null,
    mapObj: null,
  };

  getChildContext() {
    return {
      AMap: this.state.AMap,
      mapObj: this.state.mapObj,
    };
  }

  componentDidMount() {
    const { id, options, loadSDK, sdkKey } = this.props;
    loadSDK(sdkKey, (AMap) => {
      const mapObj = new AMap.Map(id, options)
      this.setState({
        AMap,
        mapObj,
      });
    });
  }

  isAMapLoaded() {
    return !!this.state.AMap;
  }

  render() {
    const style = this.props.style || { width: '100%', height: '400px' }
    return (
      <div id={this.props.id} style={style}>
        {this.isAMapLoaded() && this.props.children ? Children.only(this.props.children) : null}
      </div>
    )
  }
}
