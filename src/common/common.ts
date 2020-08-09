export const stringToDom = (stringElement) => {
  const template = document.createElement("template");
  template.innerHTML = stringElement.trim();
  return template.content.firstChild;
};
