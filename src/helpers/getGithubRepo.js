export const getGithubRepo = async (method = "GET") => {
  const BaseUrl = `https://api.github.com/users/bdanielmr/repos`;
  const resp = await fetch(BaseUrl, {
    method,
    headers: {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
    },
  })
    .then((response) => response.json())
    .catch((err) => err);
  return resp;
};
