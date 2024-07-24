        // Referência aos elementos do formulário
        const nomeInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');
        const enviarButton = document.getElementById('enviar');
        const feedback = document.getElementById('feedback');

        // Função para validar o nome
        function validarNome() {
            const nome = nomeInput.value;
            return nome.length >= 3;
        }

        // Função para validar o e-mail
        function validarEmail() {
            const email = emailInput.value;
            return /[@]/.test(email);
        }

        // Função para verificar a validação e atualizar a interface
        function verificarValidacao() {
            const nomeValido = validarNome();
            const emailValido = validarEmail();

            if (nomeValido && emailValido) {
                enviarButton.disabled = false;
                feedback.innerText = 'Formulaário enviado com sucesso';
            } else {
                enviarButton.disabled = true;
                if (!nomeValido) {
                    feedback.innerText = 'O nome deve ter pelo menos 3 letras';
                } else if (!emailValido) {
                    feedback.innerText = 'O e-mail deve conter @';
                }
            }
        }

        // Adiciona event listeners para validar os campos em tempo real
        nomeInput.addEventListener('input', verificarValidacao);
        emailInput.addEventListener('input', verificarValidacao);
