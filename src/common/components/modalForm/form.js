import React from 'react'
import ReactDOM from 'react-dom'
import css from 'react-css-modules'
import {
  Button,
  Input,
  Select,
  DatePicker,
  Form,
  Radio,
} from 'antd'

import styles from './index.scss'

const FormItem = Form.Item
const RadioGroup = Radio.Group


@Form.create()
@css(styles)
export default class ModalForm extends React.Component {

  componentDidMount() {
    // eslint-disable-next-line no-restricted-syntax
    for (const component of this.needToEmptyStyleComponents) {
      // eslint-disable-next-line react/no-find-dom-node
      const dom = ReactDOM.findDOMNode(component);
      dom.setAttribute('style', '');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { onOk } = this.props
        onOk && onOk(values)
      }
    })
  }
  doCancel = () => {
    const { onCancel } = this.props
    onCancel && onCancel()
  }

  generateFormItem = ({ formItemLayout, label, hasFeedBack, name, options, component }) => {
    const { getFieldDecorator } = this.props.form
    return (<FormItem
      {...formItemLayout}
      key={name}
      label={label}
      hasFeedBack={hasFeedBack}
    >
      {getFieldDecorator(name, options)(component)}
    </FormItem>)
  }

  getTextField = field => <span className="ant-form-text">{field.options && field.options.initialValue}</span>

  getInputField = field => (<Input />)

  getSelectField = field => (<Select
    placeholder="请选择"
    style={{
      width: '100%',
    }}
  >
    {field.items().map(({ key, value }) =>
      <Select.Option key={key.toString()} value={key.toString()}>{value}</Select.Option>)}
  </Select>)

  getRadioGroupField = field => <RadioGroup>
    {field.items().map(({ key, value }) =>
      <Radio key={key.toString()} value={key.toString()}>{value}</Radio>
    )}
  </RadioGroup>

  getDateField = field => (<DatePicker
    placeholder="请选择日期"
  />)

  getDateTimeField = field =>
    (<DatePicker
      showTime
      format="YYYY-MM-DD HH:mm"
      placeholder="请选择时间"
      ref={item => this.needToEmptyStyleComponents.push(item)}
    />)


  generateFormFields(fields) {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
    const components = [];
    this.needToEmptyStyleComponents = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const field of fields) {
      let component = null;
      switch (field.type) {
      case 'input':
        component = this.getInputField(field)
        break;
      case 'select':
        component = this.getSelectField(field)
        break;
      case 'radioGroup':
        component = this.getRadioGroupField(field)
        break;
      case 'date':
        component = this.getDateField(field)
        break;
      case 'datetime':
        component = this.getDateTimeField(field)
        break;
      default:
        component = this.getTextField(field)
        break
      }
      component = this.generateFormItem({
        formItemLayout,
        component,
        label: field.label,
        name: field.name,
        options: field.options,
        hasFeedBack: field.type === 'input',
      })
      components.push(component);
    }
    const buttons = (<FormItem
      key="control-buttons"
      wrapperCol={{
        span: 14,
        offset: 6,
      }}
    >
      <div styleName="buttons">
        {this.props.showCancel && <Button onClick={this.doCancel} >取消</Button>}
        <Button type="primary" htmlType="submit">确定</Button>
      </div>

    </FormItem>)
    components.push(buttons)
    return components;
  }

  render() {
    const {
      fields,
    } = this.props
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          {this.generateFormFields(fields)}
        </Form>
      </div>
    )
  }
}
