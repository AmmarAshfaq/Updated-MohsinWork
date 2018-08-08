import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { userSigninAction } from '../../store/action/action'
// import { Link } from 'react-router-dom';
import './signin.css'

class UserLogin extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.signin = this.signin.bind(this)
    this._onChangeEmail = this._onChangeEmail.bind(this)
    this._onChangePassword = this._onChangePassword.bind(this)
  }

  signin () {
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    this.setState({
      email: '',
      password: ''
    })
    this.props.signinWithEmailPassword(user, this.props.history)
  }
  _onChangeEmail (event) {
    this.setState({
      email: event.target.value
    })
  }
  _onChangePassword (event) {
    this.setState({
      password: event.target.value
    })
  }

  render () {
    return (
      <div className='container'>
        {/* <h1 id='SignInH1'>Student Login</h1>

               <center>
                <label>Email:  <input type='text'  className='input' name='email' placeholder='Email...' value={this.state.email} onChange={this._onChangeEmail} /></label>
                <br />
                <br />
                <label>Password:  <input type='password' className='input' name='password'  placeholder='Password...' value={this.state.password} onChange={this._onChangePassword}/></label>
                <br />
                <br />
                <button className='SignIn1' onClick={this.signin}>Signin</button>
            </center> */}

        <center>
          {' '}
          <h1
            className=''
            style={{
              margin: '40px 0px 50px',
              fontSize: '60px',
              color: 'green'
            }}
          >
            Bykea Cash Memo
          </h1>
        </center>

        <div className='card'>
          <div className='card-header'>
            <center> <h3 className='mb-0'>Sign In</h3> </center>
          </div>
          <div className='card-body'>
            <div className='form-group'>
              <label htmlFor='inputEmail3'>Email :</label>
              <input
                type='email'
                className='form-control'
                id='inputEmail3'
                placeholder='Email'
                value={this.state.email}
                onChange={this._onChangeEmail}
                required='required'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='inputPassword3'>Password :</label>
              <input
                type='password'
                className='form-control'
                id='inputPassword3'
                placeholder='Password'
                value={this.state.password}
                onChange={this._onChangePassword}
                required='required'
              />
            </div>

            <div className='form-group'>
              <button
                type='submit'
                className='btn btn-success btn-lg float-right'
                onClick={this.signin}
              >
                Sign In
              </button>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProp (state) {
  return {
    // userName: state.root.userName
  }
}
function mapDispatchToProp (dispatch) {
  return {
    // changeUserName: ()=>{dispatch(changeUserName())}
    signinWithEmailPassword: (user, historyUser) => {
      dispatch(userSigninAction(user, historyUser))
    }
  }
}

export default withRouter(connect(mapStateToProp, mapDispatchToProp)(UserLogin))
