let elUsername = document.querySelector(".username ")
const userData = JSON.parse(window.localStorage.getItem("userData"))
elUsername.textContent = userData.username


function handleClickLOgOutBtn() {
    let elConfirmLogOut = confirm("Do you want to log out!")
    if(elConfirmLogOut) {
        location.pathname = "index.html"
        window.localStorage.clear()
    }
}