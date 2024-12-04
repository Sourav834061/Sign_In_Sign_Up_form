let form = document.getElementById('form')
console.log(form)

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let username = document.getElementById('fname').value;
    let mob = document.getElementById('mob').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pwd').value;
    let confirmPassword = document.getElementById('cpwd').value;

    if (username == "" || mob == "" || email == "" || password == "" || confirmPassword == "") {
        alert("please fill the deatils")
    } else if (password !== confirmPassword) {
        alert("password should match")
    } else {
        alert("registration successfully")
        console.log(username, mob, email, password, confirmPassword)
        localStorage.setItem('username', email)
        localStorage.setItem('password', password)
        window.open("./Login.html")
        window.location.reload()
    }

})