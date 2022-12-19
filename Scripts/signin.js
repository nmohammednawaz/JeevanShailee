let form = document.querySelector("form");
let continueBtn = document.getElementById("continue");
let account_status = document.getElementById("account-status");
let mobile = document.getElementById("mobile");
let password_status = document.getElementById("password-status");
let clear_num = document.getElementById("clear-number");


let user_data = JSON.parse(localStorage.getItem("user_data"));
if(user_data == null){
    user_data = [];
}



let number;
let ls_password;
let user_status = false;
mobile.addEventListener("input", () => {

    clear_num.style.display = "inline";
    clear_num.addEventListener("click", () => {
        form.mobile.value = "";
        form.name.value = "";
        form.password.value = "";
        account_status.innerHTML = "";
        mobile.removeAttribute("disabled", "true");
        form.name.removeAttribute("disabled", "true");
        clear_num.style.display = "none";
    });


    number = mobile.value;
    if(number.length >= 10){
        mobile.setAttribute("disabled", "true")
    }
    if(number.length == 10){
        if(user_data == null){
            account_status.innerHTML = "If you are new user continue....<br>else enter registered number...!";
        }else{
            user_data.forEach(element => {
                if(element.mob_num == mobile.value){
                    mobile.setAttribute("disabled", "true");
                    let n = element.namee;
                    console.log(n);
                    account_status.innerText = "Welcome back...!";
                    form.name.value = n;
                    form.name.setAttribute("disabled", "true");
                    ls_password = element.pass;
                    console.log(ls_password);
                    user_status = true;

                }else{
                    account_status.innerHTML = "If you are new user continue....<br>else enter registered number...!";
                    mobile.removeAttribute("disabled","true");
                    form.name.removeAttribute("disabled", "true");
                    user_status = false;
                }
            });
        }
        
    }
});





continueBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if(form.mobile.value == "" || form.name.value == "" || form.password.value == ""){
        alert("Please Fill all the details");
    }
    else if(form.mobile.value != "" && form.name.value != "" && form.password.value != ""){
        if(user_status == true){
            if(form.password.value == ls_password){
                alert("Sign In Success...!");
                form.name.value = "";
                form.mobile.value = "";
                form.password.value = "";
                account_status.innerHTML = "";
                mobile.removeAttribute("disabled", "true");
                form.name.removeAttribute("disabled", "true");
                clear_num.style.display = "none";
                window.location.href = "./index.html";
            }else{
                alert("Wrong password")
                form.password.focus();
            }
        }else{
            let user_data_obj = {
                namee: form.name.value,
                mob_num: form.mobile.value,
                pass: form.password.value
            }
            user_data.push(user_data_obj);
            localStorage.setItem("user_data", JSON.stringify(user_data));

            form.name.value = "";
            form.mobile.value = "";
            form.password.value = "";
            account_status.innerHTML = "";
            mobile.removeAttribute("disabled", "true");
            form.name.removeAttribute("disabled", "true");
            clear_num.style.display = "none";

            alert("Congratulations your account is created...!");
            window.location.href = "./index.html";
        }
        
    }
})