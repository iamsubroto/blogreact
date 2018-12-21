import { combineReducers } from 'redux';
import PostsReducer from '../reducers/posts_reducers'

const allRecords = {
    Posts: PostsReducer
}

const rootReducer = combineReducers(allRecords);

export default rootReducer;