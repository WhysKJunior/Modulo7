
const readline = require('readline');

const { createProductEntry, listaProduct, updateProduct, deleteProduct, searchProduct } = require('./productManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mainMenu() {
  console.log('Sistema Gerencimanto de Produtos');
  console.log('1. Add Produto');
  console.log('2. Listar Produtos');
  console.log('3. Atualizar Produto');
  console.log('4. Deletar Produto');
  console.log('5. Procurar Produto');
  console.log('6. Exit');

  rl.question('Escolha sua opção: ', escolha => {
    switch (escolha) {
      case '1':
        createProductEntry(rl, mainMenu);
        break;
      case '2':
        listaProduct();
        mainMenu();
        break;
      case '3':
        updateProduct(rl, mainMenu);
        break;
      case '4':
        deleteProduct(rl, mainMenu);
        break;
      case '5':
        searchProduct(rl, mainMenu);
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
