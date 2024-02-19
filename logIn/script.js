const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const result = document.getElementById("result");

const checkValidity = () => {
  const userEmail = email.value;
  const userPassword = password.value;
  var storedPerson = JSON.parse(localStorage.getItem("person"));
  if (email.value !== "" && password !== "") {
    if (
      storedPerson &&
      storedPerson.Email === userEmail &&
      storedPerson.Password === userPassword
    ) {
      Swal.fire({
        title: "Login Successful!",
        text: "",
        icon: "success",
      });
      setTimeout(() => {
        window.location.href = `/logIn/Person/index.html?name=${encodeURIComponent(
          storedPerson.Name
        )}&email=${encodeURIComponent(
          storedPerson.Email
        )}&address=${encodeURIComponent(storedPerson.Address)}`;
      }, 1000);
    } else {
      email.value = "";
      email.setAttribute("placeholder", "Wrong email");
      password.value = "";
      password.setAttribute("placeholder", "Wrong Password");
    }
  } else {
    email.value = "";
    email.setAttribute("placeholder", "Enter your valid email");
    password.value = "";
    password.setAttribute("placeholder", "Enter your password");
  }
};

loginBtn.addEventListener("click", checkValidity);
