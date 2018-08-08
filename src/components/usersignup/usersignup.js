import React, { Component } from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import userSignupAction from '../../store/action/action';
import './signup.css'





class UserSignup extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            email: '',
            userName: '',
            password: '',
            city:'',
            country:'',
            phoneNo:''
        }


        this.signup = this.signup.bind(this);
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onChangeUserName = this._onChangeUserName.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);
        this._onChangeCity = this._onChangeCity.bind(this);
        this._onChangeCountry = this._onChangeCountry.bind(this);
        this._onChangePhone = this._onChangePhone.bind(this)

    }

    signup() {
        let user = {
            email: this.state.email,
            username: this.state.userName,
            password: this.state.password,
            city: this.state.city,
            country: this.state.country,
            phoneNo: this.state.phoneNo
        }
        this.setState({
            email: '',
            userName: '',
            password: '',
            city:'',
            country: '',
            phoneNo: ''

        })
        console.log(user)
        this.props.signupwithEmailPassword(user,this.props.history);
    }
    _onChangeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    _onChangeUserName(event){
        this.setState({
            userName:event.target.value
        })
    }
    _onChangePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    _onChangeCity(event){
        this.setState({
            city:event.target.value
        })
    }
    _onChangeCountry(event){
        this.setState({
            country:event.target.value
        })
    }

    _onChangePhone(event){
        this.setState({
            phoneNo:event.target.value
        })
    }

    render() {
        // console.log(this.props.history)
        return (
            
            <div className='container'>
                {/* <center>
                <h1  id='SignUpH1' >Student Sign Up</h1>
                <label>Email : <input type='text' className='input' name='email' placeholder='Email...' value={this.state.email} onChange={this._onChangeEmail} /></label>
                <br />
                <br/>
                <label>User Name : <input type='text' className='input' name='username' placeholder='Username...' value={this.state.userName} onChange={this._onChangeUserName}/></label>
                <br />
                <br />
                <label>Password : <input type='password'  className='input' name='password' placeholder='Password...' value={this.state.password} onChange={this._onChangePassword}/></label>
                <br />
                <br />
                <label>Class : <input type='text'  className='input' name='class' placeholder='Enter Your Class...' value={this.state.class} onChange={this._onChangeClass}/></label>
                <br />
                <br />
                <label>Marks: <input type='text'  className='input' name='marks' placeholder='mark (e.g.100...)' value={this.state.marks} onChange={this._onChangeMarks}/></label>
                <br />
                <br />
                <button className='SignUp1' onClick={this.signup}>Signup</button>
            </center> */}
                           <center> <h1 className='' style={{margin: '40px 0px 50px', fontSize: '60px', color: 'green'}}>Bykea Cash Memo</h1></center>

      <div className="card">
                        <div className="card-header">
                           <center> <h3 className="mb-0">Sign Up</h3> </center>
                        </div>
                        <div className="card-body">
                            <form className="form" autoComplete="off">
                                <div className="form-group">
                                    <label htmlFor="inputName">User Name :</label>
                                    <input type="text" className="form-control" id="inputName" placeholder="Full name" value={this.state.userName} onChange={this._onChangeUserName} required='required'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputEmail3">Email :</label>
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email" value={this.state.email} onChange={this._onChangeEmail} required="required"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword3">Password :</label>
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" value={this.state.password} onChange={this._onChangePassword} required="required"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City :</label>
                                    <input type="text" className="form-control" id="city" placeholder="Karachi" value={this.state.city} onChange={this._onChangeCity} required='required'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">Country :</label>
                                    <input type="text" className="form-control" id="country" placeholder="Pakistan" value={this.state.country} onChange={this._onChangeCountry} required="required"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number :</label>
                                    <input type="text" className="form-control" id="phone" placeholder="0345-xxxxxxx" value={this.state.phoneNo} onChange={this._onChangePhone} required="required"/>
                                </div>
                               
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-lg float-right" onClick={this.signup}>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
            
            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({
        // userName: state.root.userName
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        signupwithEmailPassword: (userDetails,historyUse)=>{
            dispatch(userSignupAction(userDetails,historyUse));
        }
    })
}

export default withRouter(connect(mapStateToProp, mapDispatchToProp)(UserSignup));

