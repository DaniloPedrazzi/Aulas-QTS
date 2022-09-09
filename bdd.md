# Funcionalidade: Login
>Como um usuário do sistema
>
>Fulano quer completar o Login
>
>Para que ele tenha acesso as funcionalidades de um usuário logado
>
## Contexto:
>**Dado** que “Fulano” possui uma conta no sistema
### Cenário: Login válido
>**E** ele acessa a página de Login
>
>**E** preenche suas credenciais válidas
>
>**Quando** ele aciona o botão “logar”
>
>**Então** ele deve ser redirecionado para a página do usuário
>
### Cenário: Login com email ou senha incorretos
>**E** ele acessa a página de Login
>
>**E** preenche suas credenciais com o email ou a senha incorreta
>
>**Quando** ele aciona o botão “logar”
>
>**Então** uma mensagem “Email ou senha incorretos” deve ser exibida


# Funcionalidade: Cadastro
>Como um usuário do sistema 
>
>Fulano quer completar o Cadastro
>
>Para que ele tenha acesso as funcionalidades de um usuário cadastrado
>
## Contexto:
>**Dado** que “Fulano” deseja possuir uma conta no sistema
### Cenário: Cadastro válido
>**E** ele acessa a página de cadastro
>
>**E** preenche suas credenciais válidas
>
>**Quando** ele aciona o botão “cadastrar”
>
>**Então** ele deve ser redirecionado para a página do usuário
>
### Cenário: Cadastro com email incorreto
>**E** ele acessa a página de Cadastro
>
>**E** preenche suas credenciais com o email incorreto
>
>**Quando** ele aciona o botão “cadastrar”
>
>**Então** uma mensagem “Email incorreto” deve ser exibida
>
### Cenário: Cadastro com senha “fraca” ou “média”
>**E** ele acessa a página de Cadastro
>
>**E** preenche suas credenciais com a senha “fraca” ou “média”
>
>**Quando** ele aciona o botão “cadastrar”
>
>**Então** uma mensagem “A senha não é forte” deve ser exibida
>
### Cenário: Cadastro com tamanho de telefone incorreto 
>**E** ele acessa a página de Cadastro
>
>**E** preenche suas credenciais com o tamanho de telefone incorreto
>
>**Quando** ele aciona o botão “cadastrar”
>
>**Então** uma mensagem “Tamanho de telefone incorreto” deve ser exibida
>
### Cenário: Cadastro com confirmação de senha incorreta 
>**E** ele acessa a página de Cadastro
>
>**E** preenche suas credenciais com a confirmação de senha incorreta
>
>**Quando** ele aciona o botão “cadastrar”
>
>**Então** uma mensagem “Confirmação de senha incorreta” deve ser exibida
>
