console.log("Con!");

function onSubmit(e) {
    e.preventDefault();
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var gmail = email.value.indexOf("@");
    var cut = email.value.slice(0, gmail);
    console.log("CUTED", cut);


    var check = email.value.indexOf("@gmail.com");
    if (check === -1) {
        alert("Give a correct Gmail!");
        email.style.border = "2px solid red";
        return;
    }
    
    if (!email.value || !password.value) {
        if (!email.value) {
            email.style.border = "2px solid red";
        }
        if (!password.value) {
            password.style.border = "2px solid red";
        }
        if (password.value) {
            password.style.border = "none";
        }
        if (email.value) {
            email.style.border = "none";
        }
        return;
    }



    sessionStorage.setItem("username", cut);
    alert("Best!");
    window.location.href = "./Home.html";
    resetfoom();
}

function resetfoom() {
    var form = document.getElementById("fooom");
    if (form) {
        form.reset(); // Reset the form inputs
        clearSessionData()
        //     // document.getElementById("email").value = '';
        //     // document.getElementById('password').value = '';
        // email.value = "";
        // password.value = "";
    } else {
        console.error("Ohmpo..");
    }
}
function clearSessionData() {
    sessionStorage.removeItem("username");
    sessionStorage.clear();
}