import spinner from "../assets/spinner.gif";
import { stringToDom } from "../common/common.ts";

const issueContainer = document.querySelector(".content-container .list-group");

const ruDate = (time) => {
  return new Date(time).toLocaleString('ru');
}

const createIssueTemplate = (issue) => {
  return `
    <a href="#" class="list-group-item list-group-item-action">
      <b>${issue.number}</b>
      <small>${ruDate(issue.created_at)}</small>
      <div class="d-flex w-100 justify-content-between">
        <h6 class="mb-1">${issue.title}</h6>
      </div>
      <p class="mb-1">${issue.body}</p>
    </a>
  `;
};

const cleanContainer = () => {
  issueContainer.innerHTML = "";
};

export const Loader = function() {
  const image = document.createElement("img");
  image.src = spinner;

  this.startLoading = () => {
    cleanContainer();
    issueContainer.appendChild(image);
  };

  this.stopLoading = () => {
    if (image) {
      image.remove();
    };
  };
};

export const renderIssues = (issuesList) => {
  issuesList.forEach(issue => {
    const issueElement = stringToDom(createIssueTemplate(issue));
    issueContainer.appendChild(issueElement);
  });
};
