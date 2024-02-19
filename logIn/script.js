const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const checkValidity = () => {
  const userEmail = email.value.trim();
  const userPassword = password.value.trim();
  const storedPersons = JSON.parse(localStorage.getItem("persons")) || [];

  if (userEmail !== "" && userPassword !== "") {
    const storedPerson = storedPersons.find(
      person => person.Email === userEmail && person.Password === userPassword
    );

    if (storedPerson) {
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
      password.value = "";
      email.setAttribute("placeholder", "Wrong email");
      password.setAttribute("placeholder", "Wrong Password");
    }
  } else {
    email.value = "";
    password.value = "";
    email.setAttribute("placeholder", "Enter your valid email");
    password.setAttribute("placeholder", "Enter your password");
  }
};

loginBtn.addEventListener("click", checkValidity);
