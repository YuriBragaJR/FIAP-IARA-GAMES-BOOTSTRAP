function realizarLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuarioSalvo) {
        alert("Nenhum usuário cadastrado.");
        return false;
    }

    if (email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
        alert(`Login bem-sucedido! Bem-vindo de volta, ${usuarioSalvo.nome}.`);
      window.location.href = "index.html"; // ou manipule o DOM aqui mesmo
    } else {
        alert("Email ou senha incorretos.");
    }

    return false; // impede envio do formulário
}

function logout() {
    localStorage.removeItem("usuarioLogado");
    location.reload(); // Recarrega a página para resetar os menus
}

