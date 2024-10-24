export const formDataSaveFromLocalStorage = (users) => {

  const user = JSON.parse(localStorage.getItem('usedata')) || []
  user.push(users)
  localStorage.setItem('usedata' , JSON.stringify(user))
};

export const getFormDataFromLocalStorage = (email) => {
  const user = JSON.parse(localStorage.getItem('usedata')) || []
  return user.find(user=>user.email === email )
 };
