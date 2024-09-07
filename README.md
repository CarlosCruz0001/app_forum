# Meu App React Native

Este é um aplicativo desenvolvido com React Native e Expo. O aplicativo inclui funcionalidades como login, gerenciamento de perfil e configurações.

## Funcionalidades

- **Login**: Autenticação de usuários com e-mail e senha.
- **Perfil**: Exibição e edição do perfil do usuário, incluindo letra de perfil e biografia.
- **Configurações**: Alteração de informações do perfil e configuração do aplicativo.
- **Navegação**: Navegação entre as páginas usando o `react-navigation` com um `BottomTabNavigator`.

## Estrutura do Projeto

O projeto é estruturado da seguinte maneira:

- **`App.js`**: Componente principal que configura a navegação do aplicativo usando `createBottomTabNavigator`.
- **`LoginPage.js`**: Tela de login onde os usuários podem autenticar-se.
- **`SettingsPage.js`**: Tela de configurações onde os usuários podem atualizar informações do perfil.
- **`ProfilePage.js`**: Tela de perfil onde as informações do perfil do usuário são exibidas.
- **`ProfileWrapper.js`**: Wrapper para o `ProfilePage` que recebe props do componente `App`.
- **`components/`**: Contém componentes reutilizáveis como `ProfileLetter`.
- **`styles/`**: Contém arquivos de estilo para os componentes.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seuusuario/seurepositorio.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd seurepositorio
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie o projeto:

    ```bash
    npm start
    ```

   Isso abrirá o Expo Dev Tools no seu navegador. Você pode usar o Expo Go app para escanear o QR code e visualizar o aplicativo no seu dispositivo.

## Uso

1. **Login**: Na tela de login, insira seu e-mail e senha e clique em "Entrar". Se o login for bem-sucedido, você será redirecionado para a tela inicial.
2. **Perfil**: Na tela de perfil, você pode visualizar a letra do perfil e a biografia. Essas informações são passadas do componente `App` para `ProfilePage` via props.
3. **Configurações**: Na tela de configurações, você pode atualizar a letra do perfil e a biografia. Essas alterações são refletidas na tela de perfil.

## Estrutura de Dados

- **`letterPerfil`**: Objeto que contém a letra do perfil (`profile`) e a biografia (`text`).

## Dependências

- `react-native`
- `expo`
- `react-navigation`
- `expo-sqlite`

## Contribuição

Sinta-se à vontade para contribuir com o projeto. Para fazer isso:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b minha-branch`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório (`git push origin minha-branch`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
