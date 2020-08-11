import { stringToDom } from "../common/common.ts";

const notificationContainer = document.querySelector(".notification-container");

const renderNotification = (element, removeTimeout) => {
  notificationContainer.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, removeTimeout || 1000);

  element.addEventListener("click", () => {
    element.remove();
  });
};

const generateItemsRows = (items) => items.map((item) => `<span class="notification-message">${item.message}</span>`);

const generateNotificationContent = (type, message, items) => stringToDom(`
  <div class="alert alert-${type}" role="alert">
    <b>${message}</b>
    ${items ? generateItemsRows(items) : ""}
  </div>
  `);

export const showNotification = (params) => {
  const {
    type, message, status, errors, timeout,
  } = params;
  const text = status ? `HTTP status: ${status}, ${message}` : message;
  const element = generateNotificationContent(type, text, errors);
  renderNotification(element, timeout);
};
