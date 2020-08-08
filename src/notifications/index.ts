const notificationContainer = document.querySelector('.notification-container');

const renderNotification = (element, removeTimeout) => {
  notificationContainer.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, removeTimeout || 1000);
};

const stringToDom = (stringElement) => {
  const template = document.createElement('template');
  template.innerHTML = stringElement.trim();
  return template.content.firstChild;
};

const generateErrorContent = (message) => stringToDom(`
  <div class="alert alert-danger" role="alert">
    <b>${message}</b>
  </div>
  `);

export const showErrorNotification = params => {
  const { message, timeout } = params;
  const errorElement = generateErrorContent(message);
  renderNotification(errorElement, timeout);
};
