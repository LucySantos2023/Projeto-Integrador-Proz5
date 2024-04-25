document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("formContato");
    var botaoEnviar = document.getElementById("botao-enviar");
    var imagemEnvio = document.getElementById("imagem-envio");
    var imagemAviso = document.getElementById("imagem-aviso");
    var mensagemAviso = document.getElementById("mensagem-aviso");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Verifica se todos os campos do formulário estão preenchidos
        var camposPreenchidos = verificarCamposPreenchidos();

        if (camposPreenchidos) {
            // Exibe a imagem de confirmação
            imagemEnvio.style.display = "block";
            imagemAviso.style.display = "none";
            mensagemAviso.style.display = "none";

            // Simula o envio do formulário após um breve atraso (por exemplo, 3 segundos)
            setTimeout(function() {
                // Aqui você pode enviar os dados do formulário para o servidor
                // Após o envio bem-sucedido, exiba a mensagem de confirmação e oculte a imagem de envio
                document.getElementById("mensagem-confirmacao").style.display = "block";
                imagemEnvio.style.display = "none";
            }, 3000); // 3 segundos de atraso, ajuste conforme necessário
        } else {
            // Caso algum campo não esteja preenchido, exiba a imagem de aviso e a mensagem de aviso
            imagemEnvio.style.display = "none";
            imagemAviso.style.display = "block";
            mensagemAviso.style.display = "block";
        }
    });

    // Função para verificar se todos os campos do formulário estão preenchidos
    function verificarCamposPreenchidos() {
        var campos = formulario.querySelectorAll("input[type='text'], select, textarea");
        for (var i = 0; i < campos.length; i++) {
            if (!campos[i].value) {
                return false; // Retorna falso se algum campo não estiver preenchido
            }
        }
        return true; // Retorna verdadeiro se todos os campos estiverem preenchidos
    }
});