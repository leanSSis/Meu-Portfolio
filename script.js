// FORMULÁRIO DE CONTATO

const formContato = document.getElementById("formContato");

if (formContato) {
  formContato.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verificar se todos os campos estão preenchidos
    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("E-mail inválido!");
      return;
    }

    // Simulação de envio
    alert("Mensagem enviada com sucesso!");
    formContato.reset(); // Limpar campos
  });
}

//BOTÃO DE TEMA (CLARO/ESCURO)
//fiz apenas a adição de um botão no canto direito da tela, que ira mudar o tema do site(claro/escuro)

const botaoTema = document.getElementById("btn-tema");
const iconeTema = document.getElementById("icone-tema");

// Verifica se o usuário já tinha um tema salvo
if (localStorage.getItem("tema") === "escuro") {
  document.body.classList.add("dark-theme");
  if (iconeTema) iconeTema.textContent = "☀️";
}

//Ativa a troca de tema ao clicar
if (botaoTema) {
  botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    //Mudar ícone
    const temaAtivo = document.body.classList.contains("dark-theme");
    if (iconeTema) iconeTema.textContent = temaAtivo ? "☀️" : "🌙";

    // Salvar preferência no navegador
    localStorage.setItem("tema", temaAtivo ? "escuro" : "claro");
  });
}
