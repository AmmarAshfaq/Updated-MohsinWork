import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {_jobuid} from '../../store/action/action';
import * as firebase from 'firebase';
import StudentSingleNavbar from './studentnavbars/studentsinglenavbar'
import './jobposts.css'

class Jobpost extends Component {
  
  
    getUid(id){
        // console.log(id)
        this.props.getJobUid(id)
            }


            signOut(){
                firebase.auth().signOut()
                console.clear()
                window.location.href=window.location.href

            }

    render() {
        console.log(this.props.companies.job)
        return (
            <div>

<StudentSingleNavbar />

{/* <div>
    <button onClick={this.signOut.bind(this)} ><Link to='/'>Sign Out</Link></button>
</div> */}
<div className='jobHead text-white bg-info' >
<h1> Jobs </h1>
</div>
{
    this.props.companies.job.map( (data,index)=>{
        console.log(data.uid)
        let jobuid = data.uid
        let companyuid = this.props.companyUid


        if (companyuid === jobuid)
    return(
        
<div className='jobCard' key={index} >
<div className="card">
  <div className="card-body" >
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <ul className="list-group list-group-flush" >
    <li className="list-group-item" ><b> Job Title : {data.title}</b></li>

    <li className="list-group-item">Description : {data.description}</li>
    <li className="list-group-item">Salary: {data.salary}</li>
    {/* <li class="list-group-item">Email : {item.email}</li> */}
 <li className="list-group-item" > <button className='btn btn-info' style={{margin: '5px'}}><Link to='/jobapplyform' className='jobButtons' onClick={this.getUid.bind(this,data.id)}>Apply Now</Link></button>
 <button className='btn btn-info' style={{margin: '5px'}}><Link to='/jobapplystudent' className='jobButtons' onClick={this.getUid.bind(this,data.id)} >View Data</Link></button></li>

  </ul>
  {/* <button className='btn btn-danger' onClick={this.onDeleteCompany.bind(this,items.uid,index)} >Delete</button> */}

  </div>

</div>
</div>
               


         
        //  <div key={index}>
        //     <h3>
        //        TItle: {data.title}
        //     </h3>
            
        //     Description: {data.description}
        //     <br/>
        //     Salary: {data.salary}
        //     <button><Link to='/jobapplyform' onClick={this.getUid.bind(this,data.id)} >Apply Now</Link></button>
        //     <button><Link to='/jobapplystudent' onClick={this.getUid.bind(this,data.id)} >View Applies </Link></button>
        //     <hr />

        // </div>


)
else 
    console.log('null')

    })
}
   
            
            </div>
        )
    }
}




function mapStateToProp(state){
   console.log(state.student.companyuid.uid)
    return({
companies: state.companies,
companyUid : state.student.companyuid.uid    
})
}


function mapDispatchToProp(dispatch){
    return({
        // sendMessage: (msg)=>{
            // dispatch(sendMessage(msg));
        // }
        getJobUid: (id)=>{
            dispatch( _jobuid({id}))
            console.log(id)
        }
    })
}


export default connect(mapStateToProp,mapDispatchToProp)(Jobpost);
