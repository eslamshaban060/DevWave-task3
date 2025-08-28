let thename = document.querySelector(".fullName");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let button = document.querySelector(".registerbutton");
let nameAlert = document.querySelector(".alert.nameAlert");
let emailAlert = document.querySelector(".alert.emailAlert");
let passwordAlert = document.querySelector(".alert.passwordAlert");

button.addEventListener("click", () => {
  event.preventDefault();
  if (thename.value.trim() === "") {
    thename.classList.add("error");
    nameAlert.classList.add("error");
  } else {
    if (email.value === "") {
      email.classList.add("error");
      emailAlert.classList.add("error");
    } else {
      if (email.value.includes("@gmail.com")) {
        if (password.value === "") {
          password.classList.add("error");
          passwordAlert.classList.add("error");
        } else {
          thename.classList.remove("error");
          email.classList.remove("error");
          password.classList.remove("error");
          nameAlert.classList.remove("error");
          emailAlert.classList.remove("error");
          passwordAlert.classList.remove("error");
          let data = {
            username: thename.value,
            useremail: email.value,
            userpassword: password.value,
          };
          localStorage.setItem("useData", JSON.stringify(data));
          thename.value = "";
          email.value = "";
          password.value = "";
          window.location.replace("/index.html");
        }
      } else {
        email.classList.add("error");
      }
    }
  }
});
