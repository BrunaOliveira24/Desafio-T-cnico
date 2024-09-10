# Relato de Desenvolvimento 👩‍💻

### Descrição 
Este projeto implementa um sistema básico de gerenciamento de usuários com uma interface web. Permitindo visualizar, cadastrar, editar e excluir usuários através de uma interface gráfica simples e intuitiva. 

A aplicação utiliza HTML, CSS e JavaScript, e armazena os dados dos usuários no armazenamento local do navegador.

---
### Funcionalidades 📑

`Visualização de Usuários:` A página inicial apresenta uma tabela com uma lista de usuários, incluindo ID, Nome, E-mail e opções para Editar ou Deletar.

`Cadastro de Usuários:` O formulário de cadastro permite a adicionar novos usuários e editar os dados existentes. O formulário inclui campos para ID, Nome, E-mail, Senha e Status.

`Pesquisa de Usuários:` Um campo de pesquisa foi adicionado como um "Plus", permitindo filtrar a lista de usuários com base no nome ou e-mail.

`Armazenamento Local:` Como não foi utilizado Banco de Dados, os dados dos usuários são armazenados localmente no localStorage, garantindo que as informações persistam entre as sessões.

### Implementações 💻
`HTML:` Estrutura básica da página com dois modos de visualização - uma lista de usuários e um formulário de cadastro.

`CSS:` Personalizando para melhorar a aparência da página, incluindo bordas arredondadas para a tabela e o formulário, sombras e um fundo suave. Centralizei o conteúdo e a transparência dos campos de input para um visual moderno.

`JavaScript:` Implementa a lógica de adição, edição e exclusão de usuários. Também gerencia a pesquisa e o armazenamento dos dados no localStorage.

### Personalizações e Melhorias
`Imagem de Fundo:` Adicionada uma imagem de fundo ao formulário de cadastro para um visual mais atraente.

`Estilos:` Ajustes na cor e no layout dos campos de entrada, botões e tabela para criar uma interface coesa e visualmente agradável.

`Favicon:` Foi adicionado para melhorar a identidade visual do site na barra de navegação do navegador.

---
# Dificuldades e Melhorias 

### Oportunidade de Melhorias 🔝
O projeto poderia sofrer as seguintes melhorias:
- Um único arquivo para cada Page
- Implementar um Banco de Dados
- Utilizar um framework moderno

### Dificuldades 😵
Como não utilizei componentes prontos, enfretei dificuldades em personalizar cada item criado.

Foi pensado em criar um design do zero, pois em alguns momentos no mundo real, o componente que atenda a necessidade do cliente pode nao existir, com essa dificuldade posso melhorar minha capacidade criativa.

No JavaScript, lidar com os dados e as validações foi desafiador, sendo necessário diversas pesquisas para seguir o objetivo.

### Pontos de Atenção 🙊

O Campo ***Status*** solicitado no desafio na tela de cadastro, não tem necessidade visível no sistema, pois não faz sentido criar um usuário como "Excluído".