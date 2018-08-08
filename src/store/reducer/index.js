import Reducer from './reducer';
import {combineReducers} from 'redux';
import { sessionReducer } from 'redux-react-session';


export default combineReducers({
    reducer: Reducer,
    session: sessionReducer

});

