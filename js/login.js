let Email = document.querySelector(".email");
let Password = document.querySelector(".password");
let SubButton = document.querySelector(".subbutton");
let EmailAlert = document.querySelector(".alert.checkEmail");
let PasswordAlert = document.querySelector(".alert.passwordCheck");

SubButton.addEventListener("click", () => {
  event.preventDefault();
  let UserData = JSON.parse(localStorage.getItem("useData"));
  if (Email.value !== UserData.useremail) {
    EmailAlert.classList.add("error");
  } else {
    if (Password.value !== UserData.userpassword) {
      PasswordAlert.classList.add("error");
    } else {
      Email.value = "";
      Password.value = "";
      EmailAlert.classList.remove("error");
      PasswordAlert.classList.remove("error");

      window.location.replace("/user.html");
    }
  }
});
