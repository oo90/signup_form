const form = document.getElementById("signUp")
const firstName = document.getElementById("fName");
const errorFname = document.getElementById("errorFname");
const lastName = document.getElementById("lName");
const errorLname = document.getElementById("errorLname");
const email = document.getElementById("mail");
const errorMail = document.getElementById("errorMail");
const password = document.getElementById("pword")
const errorPass = document.getElementById("errorPass");

firstName.addEventListener("blur", function () {
 if (firstName.value.trim() == '') {
 }else {
  errorFname.innerHTML = ""

   }
 })

lastName.addEventListener("blur", function () {
if (lastName.value.trim() == '') {
 } else {
  errorLname.innerHTML = ""
}

})

email.addEventListener("blur", function () {
if (email.value.trim() == '') {
 } else {
  errorMail.innerHTML = ""
}

})

password.addEventListener("blur", function () {
if (password.value.trim() == '') {
 } else {
  errorPass.innerHTML = ""
}

})



form.addEventListener("submit", (e) => {

 e.preventDefault()

 if (firstName.value.trim() == '') {
  errorFname.innerHTML = "First name required!"
  errorFname.style.fontSize = "13px"
  errorFname.style.color = "red"
  errorFname.style.fontFamily = "arial"

 } 

 if (lastName.value.trim() == '') {
   errorLname.innerHTML = "Last name required!"
  errorLname.style.fontSize = "13px"
  errorLname.style.color = "red"
  errorLname.style.fontFamily = "arial"

 }
 
 if (email.value.trim() == '') {
   errorMail.innerHTML = "Email address required!";
   errorMail.style.fontSize = "13px"
  errorMail.style.fontFamily = "arial"
  errorMail.style.color = "red"
 }
 
 if (password.value.trim() == '') {
   errorPass.innerHTML = "Password required!"
   errorPass.style.fontSize = "13px"
  errorPass.style.color = "red"
   errorPass.style.fontFamily = "arial"
 }
 document.getElementById("signUp").reset()
})




