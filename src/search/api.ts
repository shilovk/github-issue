export const getIssuesList = (username, repository) => {
  const usernameRepoPart = `%20repo:${username}/${repository}`;
  return fetch(`https://api.github.com/search/issues?q=is:issue${usernameRepoPart}`);
};
