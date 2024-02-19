const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const address = document.getElementById("address");
const signupBtn = document.getElementById("signupBtn");
const result = document.getElementById("result");

signupBtn.addEventListener("click", () => {
  const person = {
    Name: `${fName.value} ${lName.value}`,
    Email: email.value,
    Password: pass.value,
    Address: address.value,
  };

  if (
    fName.value !== "" &&
    lName.value !== "" &&
    email.value !== "" &&
    pass.value !== "" &&
    address.value !== ""
  ) {
    if (pass.value.length >= 6 && email.value.endsWith("@gmail.com")) {
      localStorage.setItem("person", JSON.stringify(person));
      Swal.fire({
        title: "Registration Successful!",
        text: "",
        icon: "success",
      });
      fName.value = "";
      lName.value = "";
      email.value = "";
      pass.value = "";
      address.value = "";
    } else {
      email.value = "";
      email.setAttribute("placeholder", "e.g email@gmail.com");
      pass.value = "";
      pass.setAttribute("placeholder", "Minimum 6 characters needed");
    }
  } else {
    if (fName.value === "") {
      fName.value = "";
      fName.setAttribute("placeholder", "Enter First Name");
    }
    if (lName.value === "") {
      lName.value = "";
      lName.setAttribute("placeholder", "Enter Last Name");
    }
    if (email.value === "") {
      email.value = "";
      email.setAttribute("placeholder", "Please enter your email");
    }
    if (pass.value === "") {
      pass.value = "";
      pass.setAttribute("placeholder", "Please enter password");
    }
    if (address.value === "") {
      address.value = "";
      address.setAttribute("placeholder", "Please enter your address");
    }
  }
});

