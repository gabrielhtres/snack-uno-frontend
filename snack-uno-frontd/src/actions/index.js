import { CLICK_UPDATE_VALUE, NOTIFICATION_VALUE, MINHA_CESTA_VALUE } from './actionsTypes.js';

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});

export const clickNotification = value => ({
  type: NOTIFICATION_VALUE,
  newValue: value
});

export const clickMinhaCesta = value => ({
  type: MINHA_CESTA_VALUE,
  newValue: value
});