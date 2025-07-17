var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/смилян.jpg") {
    myImage.setAttribute("src", "images/tesla.jpg");
  } else {
    myImage.setAttribute("src", "images/смилян.jpg");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
var myName = prompt("Введите сюда своё имя");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Никола Тесла великий человек, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Никола Тесла великий человек, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
