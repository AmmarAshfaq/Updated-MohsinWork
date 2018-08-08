import rootReducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { sessionService } from 'redux-react-session';


const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

const validateSession = (session) => {
    // check if your session is still valid
    return true;
  }
  const options = { refreshOnCheckAuth: true, redirectPath: '/home', driver: 'COOKIES', validateSession };
   
  sessionService.initSessionService(store, options)
    .then(() => console.log('Redux React Session is ready and a session was refreshed from your storage'))
    .catch(() => console.log('Redux React Session is ready and there is no session in your storage'));
  

export default store;