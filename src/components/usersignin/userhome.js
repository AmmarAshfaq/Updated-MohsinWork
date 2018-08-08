import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as firebase from 'firebase'
import { _uid } from '../../store/action/action'
// import StudentSingleNavbar from './studentnavbars/studentsinglenavbar'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: ''
    }

    this.textHandler = this.textHandler.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  textHandler (event) {
    this.setState({
      // for multiple value
      [event.target.id]: event.target.value

      // for single value
      // property : event.target.value
    })
  }

  signOut () {
    firebase.auth().signOut()
    console.clear()
    window.location.href = window.location.href
  }

  sendMessage () {
    let messageData = {
      message: this.state.text
    }
    console.log(messageData, 'messageDatamessageData')
    // this.props.sendMessage(messageData);
  }

  getUid (uid) {
    // console.log(uid)
    this.props.getUid(uid)
  }

  render () {
    // console.log(this.props.user.users)
    // let style = {
    //     textDecoration: 'none',
    //     color: 'white',
    // }

    return (
      <div>

        {/* <StudentSingleNavbar /> */}

        {/* <div>
    <button onClick={this.signOut.bind(this)} ><Link to='/'>Sign Out</Link></button>
</div> */}

        <div>

          <h1 className='companyHead'> COMPANIES </h1>

          {this.props.user.users.map((item, index) => {
            console.log(item, index, 'ffffffffffffffffffffff')
            return (
              <div className='card' key={index}>
                <div className='card-body'>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <b>Name: {item.username}</b>
                    </li>

                    <li className='list-group-item'>Class:</li>
                    <li className='list-group-item'>Marks :</li>
                    <li class='list-group-item'>Email : </li>
                  </ul>
                </div>

              </div>
            )
          })}

        </div>

      </div>
    )
  }
}

function mapStateToProp (state) {
  console.log(state.reducer.users)
  return {
    // userName: state.root.userName,
    // currentUser: state.root.currentUser,
    // allUsers: state.root.users,
    // allMessages: state.root.messages,
    user: state.reducer
  }
}
function mapDispatchToProp (dispatch) {
  return {
    // sendMessage: (msg)=>{
    // dispatch(sendMessage(msg));
    // }
    // getUid: (uid)=>{
    //     dispatch( _uid({uid}))
    // }
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(Home)
