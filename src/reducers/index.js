import { combineReducers } from 'redux';
import succsss from './successReducer'
import posts from './posts/reducer';

export default combineReducers({
    succsss,
    posts
});