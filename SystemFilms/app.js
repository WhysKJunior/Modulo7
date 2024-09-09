
const readline = require('readline');

const { cadastroFilmEntry, listafilms, updatefilm, deletefilm, searchfilm } = require('./filmManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mainMenu() {
  console.log('Sistema Gerencimanto de Filmes');
  console.log('1. Add Filme');
  console.log('2. Listar Filmes');
  console.log('3. Atualizar Filme');
  console.log('4. Deletar Filme');
  console.log('5. Procurar Filme');
  console.log('6. Exit');

  rl.question('Enter your choice: ', choice => {
    switch (choice) {
      case '1':
        cadastroFilmEntry(rl, mainMenu);
        break;
      case '2':
        listafilms();
        mainMenu();
        break;
      case '3':
        updatefilm(rl, mainMenu);
        break;
      case '4':
        deletefilm(rl, mainMenu);
        break;
      case '5':
        searchfilm(rl, mainMenu);
        break;
      case '6':
        console.log('Exiting...');
        rl.close();
        break;
      default:
        console.log('Escolha invalida. tente novamente! ');
        mainMenu();
    }
  });
}

mainMenu();
