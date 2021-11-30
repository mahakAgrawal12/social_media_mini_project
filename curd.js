var nameV, emailV, passwordV;

function readFom() {
  nameV = document.getElementById("name").value;
  emailV = document.getElementById("email").value;
  passwordV = document.getElementById("password").value;
  console.log(nameV, emailV, passwordV);
}

document.getElementById("sign up").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("user/" + emailV)
    .set(
      {
      name: nameV,
      email: emailV,
      password: passwordV,
    }
    );
  alert("Account Created");
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
 };