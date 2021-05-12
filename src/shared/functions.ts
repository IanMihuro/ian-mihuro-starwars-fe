export const getPageFromURL = (url: string): string | null => {
  console.log("url", url);
  const urlParams = new URLSearchParams(url);
  const page = urlParams.get("page");
  console.log("page", page);
  return page;
};

export const getParameterByName = (name: string, url: string) => {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};
