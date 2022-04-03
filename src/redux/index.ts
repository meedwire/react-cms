import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { notificationReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";
import { notificationSaga } from "./sagas";

export interface IRootState {
  notification: { visible: boolean; title: string };
}

const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers({
  notification: notificationReducer,
});

const makeStore = () => {
  const store = createStore<IRootState, AnyAction, {}, {}>(
    combinedReducers,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(notificationSaga);

  return { store };
};

export const { store } = makeStore();
