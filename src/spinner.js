export class Spinner {
  constructor(src) {
    this._src = src;
  }

  render(container) {
    if (!container) {
      throw new Error('No container');
    };

    const imageElement = document.createElement('img');
    imageElement.src = this._src;
    container.appendChild(imageElement);
  }
}
