import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    userUid: '',
    users:[],

}


let Reducer =  (state = INITIAL_STATE, action) => {
    // console.log(state)
    
    switch (action.type) {
        
        
        // ///////////////////////// For Current User UID //////////////////////////
        case ActionTypes.CURRENTUSERUID:
            return ({
                ...state,
                userUid: action.payload 
            }) 
        
        ///////////////////////// For UserName //////////////////////////
        case ActionTypes.STUDENTNAME:
        console.log(action.payload)    
        return ({
            ...state,
            studentName: action.payload
        })
        

        ///////////////////////// For All Users //////////////////////////
        case ActionTypes.ALLUSERS:
            let user = state.users
            for(var key in action.payload){
                    user.push(action.payload[key]);
            }
            
console.log(user)
            return ({
                ...state,
                users: user
            }) 



            case ActionTypes.GETUID:


            return ({
                ...state,
                companyuid: action.payload 
            }) 

            case ActionTypes.GETJOBID:

console.log(action.payload.id)
            return ({
                ...state,
                jobid : action.payload
            }) 



            case ActionTypes.APPLYJOB:

let apply = state.applyjobs
apply.push(action.payload)
            return ({
                ...state,
                applyjobs : apply
            }) 
            




        // ///////////////////////// For All Messages //////////////////////////
        // case ActionTypes.MESSAGES:
            
        //    let allmessage = state.messages     
        //     allmessage.push(action.payload)
        //     console.log(allmessage)
        
        //     return ({
        //         ...state,
        //         messages: allmessage
        //     })
        
        
        default:
            return state;
    }

}




export default Reducer;