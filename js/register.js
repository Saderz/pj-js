const register = document.querySelector("#register");
register.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const passwordcheck = document.getElementById("confirm-password").value;

    let account = email.value;
    let pw = password.value;

    if (pw !== passwordcheck) {
        alert("Mật khẩu nhập lại không khớp!")
    } else {
        if (localStorage.users) {
            let users = JSON.parse(localStorage.getItem("users"));
            let check = users.map((item) => {
                console.log(item)
                return item.email == account.trim() || item.username == username.trim() || item.email == account.trim() && item.username == username.trim()
            });
            console.log(check)
            for (item = 0; item < check.length; item++) {
                if (check[item] == true) {
                    alert("Email hoặc username đã được dùng!");
                    break
                } else {
                    if(item == check.length - 1){
                        users.push({
                            username: username.trim(),
                            email: account.trim(),
                            pw: pw.trim()
                        });
                        localStorage.setItem("users", JSON.stringify(users));
                        alert("Tạo tài khoản thành công!");
                    }
                }
            }
        } else {
            localStorage.setItem(
                "users",
                JSON.stringify([
                    {
                        username: username.trim(),
                        email: email.value.trim(),
                        pw: password.value.trim()
                    }
                ])
            );
            alert("Tạo tài khoản thành công!");
        }
    }
});