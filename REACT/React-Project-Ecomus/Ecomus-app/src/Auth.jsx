export const formDataSaveFromLocalStorage = (user) => {
  const users = JSON.parse(localStorage.getItem("usedata")) || [];
  users.push(user);
  localStorage.setItem("usedata", JSON.stringify(users));
};


export const getFormDataFromLocalStorage = (email) => {
  let users = JSON.parse(localStorage.getItem("usedata")) || [];
  return users.find((user) => user.email === email);
};