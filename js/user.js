let namevalue = document.querySelector(".namevalue");
let emailvalue = document.querySelector(".emailvalue");
let datevalue = document.querySelector(".datevalue");
let logout = document.querySelector(".logout");

console.log(namevalue);
window.onload = function () {
  let UserData = JSON.parse(localStorage.getItem("useData"));

  namevalue.innerText = UserData.username;
  emailvalue.innerText = UserData.useremail;
};

logout.addEventListener("click", () => {
  event.preventDefault();
  localStorage.setItem("useData", null);
  window.location.replace("/register.html");
});
