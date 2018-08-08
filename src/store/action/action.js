import ActionTypes from '../constant/constant'
// import history from '../../History';
import firebase from 'firebase'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

// const hsitory = createBrowserHistory()

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCuPoP6oc0_8-ZCmwmYcp2gevLjqe63too',
  authDomain: 'bykea-income-cash-memo.firebaseapp.com',
  databaseURL: 'https://bykea-income-cash-memo.firebaseio.com',
  projectId: 'bykea-income-cash-memo',
  storageBucket: 'bykea-income-cash-memo.appspot.com',
  messagingSenderId: '178095791304'
}
firebase.initializeApp(config)

export default function userSignupAction (user, historyUse) {
  console.log(historyUse)
  return dispatch => {
    console.log('user', user)
    // history.push('/signin');

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(createdUser => {
        console.log('signed up successfully', createdUser.uid)
        delete user.password
        user.uid = createdUser.uid
        firebase.database().ref('Users/' + createdUser.uid + '/').set(user)

        historyUse.push('/usersignin')
      })
  }
}

export function userSigninAction (user,historyUse) {
    console.log(historyUse)
  return dispatch => {
    console.log('user in signin', user)
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(signedinUser => {
        console.log(signedinUser.uid)
        // let currentUserUid = firebase.auth().R
        // console.log(currentUserUid)
        // firebase.database().ref('users/').on('child_added', userData => {
        //   let allUsers = userData.val()

        //   dispatch({ type: ActionTypes.ALLUSERS, payload: allUsers })

        //   console.log(allUsers)
        // })
        dispatch({ type: ActionTypes.CURRENTUSERUID, payload: signedinUser.uid })

                            firebase.database().ref('Users/').once('value', (userData) => {
                                let allUsers = userData.val();
        //                         // let currentStudentUid = firebase.auth().currentUser.uid;
                              
        //                     // let allCompanies = userData.val(); ************************
        //                     // console.log(username,'usersssssss')
                            // for(var key in allUsers){
                            //     allUsersArr.push(allUsers[key]);
                            //     }
                            //     console.log(allUsersArr, "********************** important**************");
        //                         // console.log(allUsers)

        //                         var allCompany = [];

                //                 userData.forEach(function(childSnapshot) {
                // let item = childSnapshot.val();
        //         //  item.key = childSnapshot.key;

                // allUsersArr.push(item);
                // console.log(allUsersArr)
                dispatch({ type: ActionTypes.ALLUSERS, payload: allUsers })
              });

    
        historyUse.push('/home')
      })
  

      }}
