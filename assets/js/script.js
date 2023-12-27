function passwordValidate() {
  var passwordNode = document.querySelector("#password");
  var confirmPasswordNode = document.querySelector("#password_confirm");
  var password = passwordNode.value;
  var confirmPassword = confirmPasswordNode.value;

  if (confirmPassword == password) {
    confirmPasswordNode.style.border = "1px solid green";
  } else {
    confirmPasswordNode.style.border = "1px solid red";
  }
}
