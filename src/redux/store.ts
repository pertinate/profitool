import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authView from "./reducers/authView";
import userProfile from "./reducers/userProfile";
import sideBar from "./reducers/sideBar";
// import { } from './reducers';

const rootReducer = combineReducers({
    authView,
    userProfile,
    sideBar
});

// initialize a state for every reducer value
const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
