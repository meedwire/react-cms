export const NotificationActions = {
  SHOW_NOTIFICATION: "@@notification/SHOW_NOTIFICATION",
  HIDDEN_NOTIFICATION: "@@notification/HIDDEN_NOTIFICATION",
};

export const showNotification = (data: any) => {
  return {
    type: NotificationActions.SHOW_NOTIFICATION,
    payload: { visible: true, ...data },
  };
};

export const hiddenNotification = () => {
  return {
    type: NotificationActions.HIDDEN_NOTIFICATION,
  };
};
