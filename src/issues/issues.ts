import spinner from "../assets/spinner.gif";
import { stringToDom } from "../common/common.ts";

const issueContainer = document.querySelector(".content-container .list-group");

const createIssueTemplate = (issue) => {
  return `
    <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${issue.title}</h5>
        <small>3 days ago</small>
      </div>
      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small>Donec id elit non mi porta.</small>
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
