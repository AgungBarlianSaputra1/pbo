class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    checkLogin(inputUser, inputPass) {
        return this.username === inputUser && this.password === inputPass;
    }
}

const users = [
    new User("admin", "Agung"),
    new User("user", "AgungBS")
];

function login() {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    if (!u || !p) {
        alert("Username dan password wajib diisi");
        return;
    }

    const validUser = users.find(user => user.checkLogin(u, p));

    if (validUser) {
        localStorage.setItem("loginUser", JSON.stringify({
            username: validUser.username,
            role: validUser.username === "admin" ? "Administrator" : "User",
            loginTime: new Date().toLocaleString()
        }));

        alert("Login berhasil!");
    } else {
        alert("Login gagal!");
    }
}
