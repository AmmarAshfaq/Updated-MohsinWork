import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as firebase from 'firebase';
// import Navbar from './navbar/navbar'


class StudentMultiNavbar extends Component {

   

    signOutToCover(){
        firebase.auth().signOut()
        console.clear()
        window.location.href=window.location.href
    }

    signOutToSignIn(){
        firebase.auth().signOut()
        console.clear()
        window.location.href=window.location.href
    }



    render() {
        let style = {
            textDecoration: 'none',
            color: 'white',
        }
        
        return (
            <div>


<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <h3>Campus Recruitment System</h3>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-sm-0">
      <li className="nav-item active">
        <button className='btn btn-outline-info' style={{marginLeft : '13px'}}> <Link  style={{color: 'white'}} to='/studenthome'>Home</Link></button>
      </li>
      <li className="nav-item active">
        <button className='btn btn-outline-info' style={{marginLeft : '5px'}}> <Link  style={{color: 'white'}} to='/jobpost'>Jobs</Link></button>
      </li>
      <li className="nav-item active">
        <button className='btn btn-outline-info' style={{marginLeft : '5px'}}> <Link  style={{color: 'white'}} to='/jobapplyform'>Apply Form</Link></button>
      </li>
      <li className="nav-item active">
        <button className='btn btn-outline-info' style={{marginLeft : '5px'}}> <Link  style={{color: 'white'}} to='/jobapplystudent'>View Apply</Link></button>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <button className="btn btn-outline-danger my-2 my-sm-0" onClick={this.signOutToSignIn.bind(this)} ><Link style={style}  to='/signin'>Go To Sign In</Link></button>
      <button className="btn btn-outline-danger my-2 my-sm-0 " onClick={this.signOutToCover.bind(this)}> <Link style={style}  to='/'>Go To Cover</Link></button>
    </form>
  </div>
</nav>
</div>

    )
 }
}

function mapStateToProp(state){
console.log(state)
    return({

    })
}
function mapDispatchToProp(dispatch){
    return({

    })
}

export default connect(mapStateToProp,mapDispatchToProp)(StudentMultiNavbar);

