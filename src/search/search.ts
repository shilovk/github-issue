import { getIssuesList } from "./api.ts";
import { showNotification } from "../notifications/notifications.ts";
import {
  renderIssues,
  Loader,
} from "../issues/issues.ts";

const form = document.getElementById("issue-search-form");

const getFormValues = () => {
  const formData = new FormData(form as any);
  const repository = formData.get("repository");
  const username = formData.get("username");
  return {
    repository,
    username,
  };
};

const recieveIssues = async (username, repository) => {
  const loader = new Loader();
  try {
    loader.startLoading();
    const result = await getIssuesList(username, repository);

    if (result.status === 200) {
      const jsonResult = await result.json();
      renderIssues(jsonResult.items);
    } else {
      const error = await result.json();
      showNotification({
        type: "danger",
        message: error.message,
        status: result.status,
        errors: error.errors,
        timeout: 10000,
      });
    }
  } catch (e) {
    console.error(e);
  } finally {
    loader.stopLoading();
  };
};

const submitHandler = (e) => {
  const { repository, username } = getFormValues();
  recieveIssues(username, repository);
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
};

form.addEventListener("submit", submitHandler);
