const btnCopy = document.querySelector(".btn-copy");
const txtCopy = document.querySelector(".box p");

btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(txtCopy.innerText);
  let txt = navigator.clipboard.readText();
  console.log(txt);
});

var checked = false;
const chekItem = document.querySelector("#check");
chekItem.addEventListener("click", () => {
    if (!checked) {
        alert("assassin de la police ouh ouh !");
        checked = true;
    } else {
        alert("reverse");
        checked = false;
    }
});