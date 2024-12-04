let form= document.getElementById('form')
console.log(form)

form.addEventListener("submit", (e)=>{
e.preventDefault()
let loginUser= document.getElementById('email').value;
let password = document.getElementById('pwd').value;
console.log(loginUser, password)
let username = localStorage.getItem('username')
let pwd = localStorage.getItem('password')
console.log(username, pwd)

if(loginUser == "" || password ==""){
    alert("please fill the deatils")
}else if(loginUser !== username  || password !== pwd){
    alert("logined failed")
}else{
    alert("logged successfully")
    window.open("./home.html")
}

})