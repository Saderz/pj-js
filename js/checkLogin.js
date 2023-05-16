function checkLoginG() {
    console.log(lgUsername.innerHTML);
    if (lgUsername.innerHTML === 'Sign in') {
        alert("Bạn cần phải đăng nhập để sử dụng tính năng này");
    } else {
        window.location.href = "/html/game.html";
    }
}

function checkLoginD() {
    console.log(lgUsername.innerHTML);
    if (lgUsername.innerHTML === 'Sign in') {
        alert("Bạn cần phải đăng nhập để sử dụng tính năng này");
    } else {
        window.location.href = "/html/donate.html";
    }
}