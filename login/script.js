"use strict";

function checkPass() {
    const password = adminPassword.value;
    const correctHash = "a93a47dbede547cc349f3b282114ac3b844abefc692c5c40b28d6da7f89e6d48"; // --> codingIsFunny
    if (!(password === "") && sha256(password) === correctHash) {
        document.getElementById("login").classList.add("green");
    } else {
        document.getElementById("login").classList.add("red");
    }
    adminPassword.value = "";
    setTimeout(() => {
        document.getElementById("login").classList.remove("red");
        document.getElementById("login").classList.remove("green");
    }, 1000)
}

btnConnect.addEventListener("click", checkPass);
adminPassword.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkPass();
    }
});