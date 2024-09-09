const prompt = require('prompt-sync')();
const menuHandlers = require('./functions.js');

function showMenu() {
    console.log(`
===============================
   Gerenciador de Livros
===============================
1. Adicionar um Novo Livro
2. Listar Todos os Livros
3. Atualizar um Livro Existente
4. Remover um Livro
5. Buscar Livros
6. Sair
===============================
`);
    const choice = prompt('Escolha uma ação (1-6): ');
    escolhaMenu(choice);
}

function escolhaMenu(choice) {
    switch (choice) {
        case '1':
            menuHandlers.addBook(showMenu);
            break;
        case '2':
            menuHandlers.listBooks(showMenu);
            break;
        case '3':
            menuHandlers.updateBook(showMenu);
            break;
        case '4':
            menuHandlers.deleteBook(showMenu);
            break;
        case '5':
            menuHandlers.searchBooks(showMenu);
            break;
        case '6':
            process.exit(0); 
        default:
            console.log('Opção inválida. Por favor, escolha uma ação válida.');
            showMenu();
    }
}

showMenu();
