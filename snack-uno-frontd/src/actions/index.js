import { CLICK_UPDATE_STATUS_USER,CLICK_UPDATE_VALUE, NOTIFICATION_VALUE, MINHA_CESTA_VALUE } from './actionsTypes.js';


export const clickUser = value => ({
  type: CLICK_UPDATE_STATUS_USER,
  newValue: value
});



export const clickConnect = value => ({
  type: CLICK_UPDATE_VALUE,
  userConnect: value
});

export const clickNotification = value => ({
  type: NOTIFICATION_VALUE,
  newValue: value
});

export const clickMinhaCesta = value => ({
  type: MINHA_CESTA_VALUE,
  newValue: value
});