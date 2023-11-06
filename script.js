let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector("input");
let h1 = document.querySelector("h1");
let CLR = document.querySelector(".CLR");
let del = document.querySelector(".DEL");
let data = document.querySelector(".fa-sun");
let data2 = document.querySelector(".fa-moon");

Array.from(buttons).forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      h1.textContent = "=" + string;
    } else {
      console.log(e.target);
      string += e.target.innerHTML;
      input.value = string;
    }
  });
  del.onclick = function () {
    let as = string;
    string = as.slice(0, -1);
    console.log(string);
    input.value = string;
  };
});

CLR.onclick = function () {
  string = "";
  input.value = "";
  h1.textContent = "";
};

data2.style.display = "none";
// let start = new Date();
// console.log(start.getHours() + ":" + start.getMinutes());
data.onclick = function () {
  data.style.display = "none";
  data2.style.display = "inline-block";
  document.querySelector(".card").style.background = "#222631";
  input.style.background = "#222631";
  h1.style.color = "#fff";
  for (let i = 0; i < buttons.length; i++) {
    if (i != 0 && i != 4 && i != 8 && i != 12 && i != 15) {
      buttons[i].setAttribute("style", "box-shadow: 0px 0px 0px 7px #373D4D");
      buttons[i].style.color = "#fff";
      buttons[i].style.background = "#323849";
      // buttons[i].style.boxshadow = "0px 0px 0px 7px #373D4D";
    }
  }
};

data2.onclick = function () {
  data2.style.display = "none";
  data.style.display = "inline-block";
  document.querySelector(".card").style.background = "#E8EAF0";
  input.style.background = "#E8EAF0";
  h1.style.color = "#1D2028";
  for (let i = 0; i < buttons.length; i++) {
    if (i != 0 && i != 4 && i != 8 && i != 12 && i != 15) {
      buttons[i].setAttribute("style", "box-shadow: 0px 0px 0px 7px #dbdfeb");
      buttons[i].style.color = "#222630";
      buttons[i].style.background = "#e3e7ee";
      // buttons[i].style.boxshadow = "0px 0px 0px 7px #373D4D";
    }
  }
};
