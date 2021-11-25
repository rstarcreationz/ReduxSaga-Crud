
import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore, compose  } from "redux";
import rootReducer from "./Reducer"
import rootSaga from "./Saga/rootSaga";
import logger from "redux-logger"


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// if(process.env.NODE_ENV === "development"){
//     middleware.push(logger)
// }

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(rootSaga)

export default store;

