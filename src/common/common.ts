export const stringToDom = (stringElement) => {
  const template = document.createElement("template");
  template.innerHTML = stringElement.trim();
  return template.content.firstChild;
};

export const ruDate = (time) => {
  return new Date(time).toLocaleString('ru');
};
