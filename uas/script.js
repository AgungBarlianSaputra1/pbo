class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

const users = [
    new User("admin", "Agung"),
    new User("user", "User")
];

function login() {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    if (!u || !p) {
        alert("Username dan password wajib diisi");
        return;
    }

    const valid = users.find(user => user.username === u && user.password === p);

    if (valid) {
        alert("Login berhasil!");
    } else {
        alert("Login gagal!");
    }
}
