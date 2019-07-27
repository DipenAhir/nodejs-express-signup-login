function checkpwd() {
    if (document.querySelector("#signupPassword").value == document.querySelector("#signupConfrimPassword").value) {
        document.querySelector("#successMsg").textContent = "Password match";
        document.querySelector("#errorMsg").textContent = "";
        document.getElementById("signupSubmit").disabled = false;
    } else {
        document.querySelector("#successMsg").textContent = ""
        document.querySelector("#errorMsg").textContent = "Password not match";
        document.getElementById("signupSubmit").disabled = true;
    }
}

function checkpwdUpdate(){
    console.log("qqqqqqqqqqqqqqqqq")
    if (document.querySelector("#updatePassword").value == document.querySelector("#updateConfrimPassword").value) {
        document.querySelector("#updateSuccessMsg").textContent = "Password match";
        document.querySelector("#updateErrorMsg").textContent = "";
        document.getElementById("updatepassword").disabled = false;
    } else {
        document.querySelector("#updateSuccessMsg").textContent = ""
        document.querySelector("#updateErrorMsg").textContent = "Password not match";
        document.getElementById("updatepassword").disabled = true;
    }
}