import React from 'react';
import ReactDOM from 'react-dom';
import {
    Input,
    Button,
    Select,
    DatePicker,
    Cascader,
} from 'antd';
import css from 'react-css-modules';
import styles from './index.scss';
import ResetPNG from './reset.png';
import SearchPNG from './search.png';


@css(styles)
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      autoComplete: {},
    };
  }

  setField(field, value) {
    const { fields } = this.state;
    let newValue = value;
    if (field.validator) {
      newValue = field.validator(value);
    }
    fields[field.key] = newValue;
    this.setState({
      fields,
    })
  }

  componentDidMount() {
    // eslint-disable-next-line no-restricted-syntax
    for (const component of this.needToEmptyStyleComponents) {
      // eslint-disable-next-line react/no-find-dom-node
      const dom = ReactDOM.findDOMNode(component);
      dom.setAttribute('style', '');
    }
  }

  generateInputs(fields) {
    const components = [];
    this.needToEmptyStyleComponents = [];
    let i = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const field of fields) {
      let component = null;
      switch (field.type) {
      case 'input':
      default:
        if ('autoComplete' in field) {
          component = (<Select
            combobox
            value={this.state.fields[field.key]}
            showArrow={false}
            filterOption={false}
            style={{
              width: '100%',
            }}
            onChange={(value) => {
              this.setField(field, value);
              field
                                    .autoComplete(value)
                                    .then((result) => {
                                      const { autoComplete } = this.state;
                                      autoComplete[field.key] = result;
                                      this.setState({ autoComplete });
                                    })
            }}
          >
            {(this.state.autoComplete[field.key] || []).map((value, key) =>
              <Select.Option key={key} value={value}>{value}</Select.Option>)}
          </Select>)
        } else {
          component = (<Input
            value={this.state.fields[field.key]}
            onChange={e => this.setField(field, e.target.value)}
          />)
        }
        break;
      case 'cascader':
        component = (<Cascader
          options={field.items()}
          placeholder="请选择"
          value={this.state.fields[field.key]}
          onChange={value => this.setField(field, value)}
        />);
        break;
      case 'select':
        component = (<Select
          placeholder="请选择"
          value={this.state.fields[field.key]}
          onChange={value => this.setField(field, value)}
          style={{
            width: '100%',
          }}
        >
          {field.items().map(({ key, value }) =>
            <Select.Option key={key.toString()} value={key.toString()}>{value}</Select.Option>)}
        </Select>);
        break;
      case 'date':
        component = (<DatePicker
          value={this.state.fields[field.key]}
          onChange={value => this.setField(field, value)}
          placeholder="请选择日期"
        />)
        break;
      case 'datetime':
        component = (<DatePicker
          showTime
          format="YYYY-MM-DD HH:mm"
          value={this.state.fields[field.key]}
          onChange={value => this.setField(field, value)}
          placeholder="请选择时间"
          ref={item => this.needToEmptyStyleComponents.push(item)}
        />)
        break;
      }
      components.push(<div key={i++} styleName="field">
        <div styleName="title">{field.title}:</div>
        <div style={{ width: field.width || 130 }} styleName="input">{component}</div>
      </div>);
    }
    return components;
  }

  handleReset = () => {
    if ('onReset' in this.props) {
      this.props.onReset();
    }
    this.setState({
      fields: {},
    });
  }

  handleSubmit = () => {
    if ('onSubmit' in this.props) {
      this.props.onSubmit(this.state.fields);
    }
  }

  render() {
    return (<div styleName="dwd-searchbar">
      {this.generateInputs(this.props.fields)}
      <div styleName="button-group">
        <Button
          onClick={this.handleReset}
        >
          <img src={ResetPNG} />
        </Button>
        <Button
          onClick={this.handleSubmit}
        >
          <img src={SearchPNG} />
        </Button>
      </div>
    </div>);
  }
}
