// Data user awal
if (!localStorage.getItem("users")) {
    const users = [
        { username: "admin", password: "12345" },
        { username: "user", password: "user123" }
    ];
    localStorage.setItem("users", JSON.stringify(users));
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const users = JSON.parse(localStorage.getItem("users"));

    const foundUser = users.find(
        u => u.username === username && u.password === password
    );

    if (foundUser) {
        message.style.color = "green";
        message.innerText = "Login berhasil!";
        alert("Selamat datang, " + foundUser.username);
    } else {
        message.style.color = "red";
        message.innerText = "Username atau password salah!";
    }
}

function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("message").innerText = "";
}
