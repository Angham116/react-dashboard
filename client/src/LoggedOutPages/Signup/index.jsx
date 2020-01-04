import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';

import logo from '../../Assets/logo.png';

import {
  Login_Url
} from '../../routes_url';

import './style.css';
import './media.css';

const generalMsgErr = 'All Fields are required, and Should be at least 3 character!';
const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validPass = /^(((?=.*[a-z]))|((?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
export default class CreateAccount extends Component {

  state = {
    FirstName: '',
    LastName: '',
    WorkEmail: '',
    ConfirmEmail: '',
    CompanyName: '',
    Password: '',
    ConfirmPassword: '',
    checked: false,
    errMsg: '',
    errType: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    const { 
      FirstName, 
      LastName,
      WorkEmail,
      ConfirmEmail,
      CompanyName,
      Password,
      ConfirmPassword,
      checked
    } = this.state;
    
    // const newAccount = {
    //   FirstName,
    //   LastName,
    //   WorkEmail,
    //   ConfirmEmail,
    //   CompanyName,
    //   Password,
    //   ConfirmPassword
    // };

    if(FirstName.length < 3) {
      this.setState({errMsg: generalMsgErr, errType: 'fNameRequired'})
    } else if(LastName.length < 3){
      this.setState({errMsg: generalMsgErr, errType: 'lNameRequired'})
    } else if(CompanyName.length < 3){
      this.setState({errMsg: generalMsgErr, errType: 'compNameRequired'})
    } else if(WorkEmail.length < 3){
      this.setState({errMsg: generalMsgErr, errType: 'workEmail'})
    } 
    else if(!validEmail.test(WorkEmail)){
      this.setState({errMsg: 'Enter valid email', errType: 'workEmail'})
    } 
    else if(WorkEmail !== ConfirmEmail ){
      this.setState({errMsg: 'Work Email and confirm Work Email should be equal!', errType: 'workEmail'})
    }
    else if(!validPass.test(Password)){
      this.setState({errMsg: 'The Password should be at least 6 characters', errType: 'passwordRequired'})
    } 
    else if(Password !== ConfirmPassword ){
      this.setState({errMsg: 'Password and confirm password should be equal!', errType: 'passwordRequired'})
    } else if(!checked){
      this.setState({errMsg: 'You Should Accept the terms!', errType: ''})
    }
    else {
      // const { history } = this.props;
      console.log(1111111, WorkEmail)  
    }
  }

  handleChange = (e) => this.setState({ 
    [e.target.name] : e.target.value , 
    errMsg: '',
    errType: ''
  });

  render() {
    const { checked, errMsg, errType } = this.state;
    return (
        <div className='signup__container'>
          <img src={logo} alt="spanat_logo" className="logo-img"/>
          <div className='signup__container-form'>
            <div className="signup-header">
              <h1 className="signup-title"> Create Account</h1>
              <span className="signup-header-span">100% free, No credit card required</span>
            </div>
            <Form onSubmit={this.handleSubmit} className="signup-form" >
              <div className={`${errMsg ? 'visible-err-box' : 'hidden-err-box'}`}>
                <span className="err-msg">{errMsg}</span>
              </div>
              <Form.Item className="signup-form-item">
                <Input
                  name="FirstName"
                  placeholder="First Name"
                  className = {
                    `first-name-input ${errMsg &&   errType === 'fNameRequired' 
                    ? 
                    'err-msg-border' : '' }`
                  }
                  onChange={this.handleChange}  
                  />
                <Input
                  name="LastName"
                  placeholder="Last Name"
                  className = {
                    `last-name-input ${errType && errType === 'lNameRequired' 
                    ? 
                    'err-msg-border' : '' }`
                  }
                  onChange={this.handleChange}
                />
              </Form.Item>
              <Form.Item className="signup-form-item">
                <Input
                  name="WorkEmail"
                  placeholder="Work Email Address"
                  className = {`
                    email-input ${errMsg && errType === 'workEmail' 
                    ?
                    'err-msg-border' : '' }`
                  }
                  onChange={this.handleChange}
                />
              </Form.Item>
              <Form.Item className="signup-form-item">
                <Input
                  name="ConfirmEmail"
                  placeholder="Confirm Work Email Address"
                  className={
                    `confirm-email-input ${errMsg && errType === 'workEmail' 
                    ? 
                    'err-msg-border' : '' }`
                  }
                  onChange={this.handleChange}
                />
              </Form.Item>
              <Form.Item className="signup-form-item">
                <Input
                  name="CompanyName"
                  placeholder="Company Name"
                  className={
                    `company-name-input ${errMsg && errType === 'compNameRequired' 
                    ? 
                    'err-msg-border' : '' }`
                  }
                  onChange={this.handleChange}
                />
              </Form.Item>
              <Form.Item className="signup-form-item password-form-item">
                <Input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  className = {
                    `password-input ${errMsg && errType === 'passwordRequired' 
                    ? 
                    'err-msg-border' : '' }`
                  }
                  onChange={this.handleChange}
                />
                <Input
                  type="password"
                  name="ConfirmPassword"
                  placeholder="Confirm Password"
                  className = {
                    `confirm-password-input ${errMsg && errType === 'passwordRequired' 
                    ? 
                    'err-msg-border' : '' }`
                  }
                  onChange={this.handleChange}
                />
              </Form.Item>
              <Form.Item className="signup-form-item check-item">
                <Checkbox
                className="checkbox-item"
                  onClick={() => this.setState({checked : !checked})}
                >
                  Accept <Link to="/terms" className="accept-terms-text"> terms and conditions</Link>
                </Checkbox>
              </Form.Item>
              <Form.Item className="signup-form-item form-item-btn">
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  className="signup-form-button">
                    Sign Up
                </Button>
              </Form.Item>
              <Form.Item className="signup-form-item hint-msg-text">
                <span>Already have an Account? <Link to={Login_Url} className="login-link">Login</Link></span>
              </Form.Item>
            </Form>
          </div>
          {/* <Footer className="footer"/> */}
        </div>
    )
  }
}
