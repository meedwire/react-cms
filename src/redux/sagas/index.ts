import {
  actionChannel,
  all,
  call,
  delay,
  fork,
  put,
  take,
} from "redux-saga/effects";
import { NotificationActions, showNotification } from "../actions";

function* showAndHideNotification(title: string) {
  yield delay(5000);
  yield put(showNotification({ title }));
}

function* makeNotificationDelay(title: string) {
  yield call(showAndHideNotification, title);
  yield take(NotificationActions.HIDDEN_NOTIFICATION);
}

function* watchRequests() {
  const requestChan = yield actionChannel("REQUEST");
  while (true) {
    const { payload } = yield take(requestChan);
    yield call(makeNotificationDelay, payload);
  }
}

function* getNotifications() {
  const notifications = [
    {
      title: "Notificação 1",
    },
    {
      title: "Notificação 2",
    },
  ];

  yield all(
    notifications.map(({ title }) => put({ type: "REQUEST", payload: title }))
  );
}

export function* notificationSaga() {
  yield all([getNotifications(), watchRequests()]);
}
