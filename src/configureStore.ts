import { createStore, applyMiddleware, compose } from 'redux';
import { createCycleMiddleware } from 'redux-cycles';
import rootReducer from './reducers';
import cycles from './cycle';
import {run} from '@cycle/run';
import {makeHTTPDriver} from '@cycle/http';
import {timeDriver} from '@cycle/time';

export default function configureStore() {
    const cycleMiddleware = createCycleMiddleware();
    const { makeActionDriver, makeStateDriver } = cycleMiddleware;

    const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
    const middlewares = [cycleMiddleware];
    const enhancers = [applyMiddleware(...middlewares)];
    const store = createStore(
        rootReducer,
        composeEnhancers(...enhancers)
    )
    run(cycles, {
        ACTION: makeActionDriver(),
        STATE: makeStateDriver(),
        Time: timeDriver,
        HTTP: makeHTTPDriver(),
    })
    return store;
}