import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';

import logo from '../../Assets/logo.png';

import './style.css';
import './media.css';

import {
  Forget_Pass_Url,
  SignUp_Url,
} from '../../routes_url';

export default class Login extends Component {

  state = {
    EmailAddress: '',
    Password: '',
    errMsg: '',
    errType: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    // const { history } = this.props;
    const { EmailAddress, Password } = this.state;
    if (EmailAddress && Password) {
      console.log(11111, EmailAddress)
    } else {
      if(!EmailAddress){
        this.setState({ 
          errMsg: 'Email is required !', 
          err: true,
          errType: 'emptyEmail'
        })
      } else {
        this.setState({ 
          errMsg: 'Password is required !', 
          err: true,
          errType: 'emptyPass'
        })
      }
    }
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value, errMsg: '', errType: '', err: false });

  render() {
    const { errMsg, errType } = this.state;
    return (
      <>
        <div className='login__container'>
        <img src={logo} alt="spanat_logo" className="logo-img"/>
          <div className='login__container-form'>
            <div className="login-header">
              <h2 className="login-title">Login to your account</h2>
              <span className="title-hint">Welcome back :)</span>
            </div>
            <Form onSubmit={this.handleSubmit} className="login-form" >
            <div className={`${errMsg ? 'visible-err-box' : 'hidden-err-box'}`}>
                <span className="err-msg">{errMsg}</span>
            </div>
            <Form.Item className="login-form-item">
              <Input
                name="EmailAddress"
                placeholder="Work WorkEmail Address"
                className={`login-email-input ${errMsg && errType === 'emptyEmail' && 'err-msg-border'}`}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item className="login-form-item password-item">
              <Input
                type="password"
                name="Password"
                placeholder="Password"
                className={`login-password-input ${errMsg && errType === 'emptyPass' && 'err-msg-border'}`}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item className="login-form-item remember-item">
              <Checkbox className="login-checkbox">Remember Me</Checkbox>
              <Link to={Forget_Pass_Url}><span className="forget-password-hint">Forget Password?</span></Link>
            </Form.Item>
            <Form.Item className="login-form-item">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button">
                Login
              </Button>
            </Form.Item>
            <Form.Item className="login-form-item">
              <span>Don't have an Account? <Link to={SignUp_Url} className="signup-link"> Signup for free</Link> </span>
            </Form.Item>
            </Form>
          </div>
          {/* <Footer className="footer"/> */}
        </div>
      </>
    )
  }
}
