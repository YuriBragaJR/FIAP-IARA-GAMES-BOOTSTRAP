function testarCadastro() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirma = document.getElementById("confirmaSenha").value;

    const regex = /^(?=.*[A-Z])(?=.*[\W]).{8,}$/;

    if (!regex.test(senha)) {
        alert("A senha deve conter pelo menos uma letra maiúscula, um caractere especial e ter no mínimo 8 caracteres.");
        return false;
    }

    if (senha !== confirma) {
        alert("As senhas não coincidem!");
        return false;
    }


    // Simula salvar dados no localStorage
    const usuario = {
    nome,
    email,
    senha
    };

    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    alert(`Cadastro e login bem-sucedido! Bem-vindo, ${nome}!`);

    // Redireciona ou mostra a área de usuário
    window.location.href = "index.html"; // ou manipule o DOM para exibir a seção

    return false; // impede envio real
}

function logout() {
    localStorage.removeItem("usuarioLogado");
  window.location.reload(); // ou redireciona para página inicial
}



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

const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

if (usuario) {
    document.getElementById("menuVisitante").style.display = "none";
    document.getElementById("menuUsuario").style.display = "block";
    document.getElementById("nomeUsuario").innerText = usuario.nome;
}