function logout() {
    var btnLogout = document.createElement('button');
    btnLogout.setAttribute('class', 'btnLogin-popup');
    document.getElementsByClassName('navigation')[0].appendChild(btnLogout);
    btnLogout.innerHTML = "Log out";
    btnLogout.setAttribute('onclick', 'logoutOnclick()');
}

function logoutOnclick() {
    localStorage.removeItem('userLogin');
    window.location.reload();
}

let login = document.getElementById("login");
let text = btnPopup.innerHTML;
let userSuccess = {};
login.addEventListener("submit", (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.users);

    let email = document.getElementById("email-login");
    let pw = document.getElementById("password-login");
    let check = users.map((item) => item.email == email.value.trim() && item.pw == pw.value.trim());
    let check2 = 0;
    let finalString = check.length;
    check.map((item, index) => {
        if (item == true) {
            check2 = 1;
            for (i = 0; i < users.length; i++) {
                let mailchecker = users[i].email.includes(email.value.trim());
                if (mailchecker === true) {
                    alert("Đăng nhập thành công!");
                    document.querySelector('.btnLogin-popup').disabled = true;
                    lgUsername.innerHTML = users[i].username;
                    
                    localStorage.setItem(
                        "userLogin",
                        JSON.stringify(users[i])
                    );
                    
                    logout();
                }
            }
        } else {
            if (index === finalString - 1) {
                if (check2 === 0)
                alert("Bạn đã nhập sai email hoặc mật khẩu");
            }
        }
    });
});
userSuccess = JSON.parse(localStorage.getItem("userLogin"));
lgUsername.innerHTML = userSuccess.username;

if (lgUsername.innerHTML !== 'Sign in') {
    document.querySelector('.btnLogin-popup').disabled = true;
    logout();
}