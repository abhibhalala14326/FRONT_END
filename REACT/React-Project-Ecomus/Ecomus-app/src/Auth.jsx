const Signuppagesstep = (user) =>
{
const users = JSON.parse(localStorage.getItem('usedata')) || []
users.push(user)
localStorage.setItem('usedata' , localStorage.setItem(JSON.stringify(users)))
}


const Loginpagestep = (email) =>
{
let users  = JSON.parse(localStorage.getItem('usedata')) || []
return users.find(user => user.email === email)

}