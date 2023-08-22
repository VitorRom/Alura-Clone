 document.getElementById("login-form").addEventListener("submit", function(event) {
    // Impedir o comportamento padrão de submit do formulário
    event.preventDefault();

    // Redirecionar o usuário para outra página
    window.location.href = "index.html";
});