// Função de Validação de Senha
function validarSenha() {
    let senha = document.getElementById("senha").value;
    let confirmaSenha = document.getElementById("confirmaSenha").value;

    const regex = /^(?=.*[A-Z])(?=.*[\W]).{8,}$/;

    if (!regex.test(senha)) {
        alert("A senha deve conter pelo menos uma letra maiúscula, um caractere especial e ter no mínimo 8 caracteres.");
        return false;
    }

    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem!");
        return false;
    }

    alert("Cadastro realizado com sucesso!");
    return true;
}


// Desconto de jogo aplica automaticamente mudando os valores no codigo HTML
    const cards = document.querySelectorAll(".cartao");

    cards.forEach(card => {
    const preco = parseFloat(card.dataset.preco);
    const desconto = parseFloat(card.dataset.desconto);
    const valorDesconto = preco * desconto / 100;
    const precoFinal = preco - valorDesconto;

    card.querySelector(".original").textContent = preco.toFixed(2);
    card.querySelector(".final").textContent = precoFinal.toFixed(2);
    });