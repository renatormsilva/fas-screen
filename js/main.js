const inputs = document.querySelectorAll(".input");
const forgotInput = document.getElementById("forgot");
const forgotContent = document.getElementsByClassName("forgot-content")[0];
const loginContent = document.getElementsByClassName("login-content")[0];

forgotInput.onclick = function (e) {
  e.preventDefault();
  forgotContent.style.display = "flex";
  loginContent.style.position = "absolute";
  loginContent.style.display = "none";
};

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});
