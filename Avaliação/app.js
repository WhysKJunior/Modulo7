const readline = require('readline');
const deckManager = require('./deckManager');
const flashcardManager = require('./flashcardManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMainMenu() {
  console.log(`\nMenu Principal:
1. Gerenciar Baralhos
2. Gerenciar Flashcards
3. Sair`);
  
  rl.question('Escolha uma opção: ', (option) => {
    switch (option) {
      case '1':
        showDeckMenu();
        break;
      case '2':
        showFlashcardMenu();
        break;
      case '3':
        rl.close();
        break;
      default:
        console.log('Opção inválida.');
        showMainMenu();
    }
  });
}

function showDeckMenu() {
  console.log(`\nMenu de Baralhos:
1. Adicionar Baralho
2. Listar Baralhos
3. Atualizar Baralho
4. Remover Baralho
5. Voltar ao Menu Principal`);
  
  rl.question('Escolha uma opção: ', (option) => {
    switch (option) {
      case '1':
        rl.question('Digite o título do baralho: ', (titulo) => {
          deckManager.addDeck(titulo);
          showDeckMenu();
        });
        break;
      case '2':
        deckManager.listDecks();
        showDeckMenu();
        break;
      case '3':
        rl.question('Digite o id do baralho: ', (id) => {
          rl.question('Digite o novo título: ', (titulo) => {
            deckManager.updateDeck(parseInt(id), titulo);
            showDeckMenu();
          });
        });
        break;
      case '4':
        rl.question('Digite o id do baralho: ', (id) => {
          deckManager.deleteDeck(parseInt(id));
          showDeckMenu();
        });
        break;
      case '5':
        showMainMenu();
        break;
      default:
        console.log('Opção inválida.');
        showDeckMenu();
    }
  });
}

function showFlashcardMenu() {
  console.log(`\nMenu de Flashcards:
1. Adicionar Flashcard
2. Listar Flashcards
3. Listar Flashcards por Baralho
4. Atualizar Flashcard
5. Remover Flashcard
6. Buscar Flashcards por Pergunta
7. Voltar ao Menu Principal`);
  
  rl.question('Escolha uma opção: ', (option) => {
    switch (option) {
      case '1':
        rl.question('Digite a pergunta: ', (pergunta) => {
          rl.question('Digite a resposta: ', (resposta) => {
            rl.question('Digite o id do baralho: ', (idBaralho) => {
              flashcardManager.addFlashcard(pergunta, resposta, parseInt(idBaralho));
              showFlashcardMenu();
            });
          });
        });
        break;
      case '2':
        flashcardManager.listFlashcards();
        showFlashcardMenu();
        break;
      case '3':
        rl.question('Digite o id do baralho: ', (idBaralho) => {
          flashcardManager.listFlashcardsByDeck(parseInt(idBaralho));
          showFlashcardMenu();
        });
        break;
      case '4':
        rl.question('Digite o id do flashcard: ', (id) => {
          rl.question('Digite a nova pergunta: ', (pergunta) => {
            rl.question('Digite a nova resposta: ', (resposta) => {
              rl.question('Digite o id do baralho: ', (idBaralho) => {
                flashcardManager.updateFlashcard(parseInt(id), pergunta, resposta, parseInt(idBaralho));
                showFlashcardMenu();
              });
            });
          });
        });
        break;
      case '5':
        rl.question('Digite o id do flashcard: ', (id) => {
          flashcardManager.deleteFlashcard(parseInt(id));
          showFlashcardMenu();
        });
        break;
      case '6':
        rl.question('Digite a pergunta para busca: ', (pergunta) => {
          flashcardManager.searchFlashcardByQuestion(pergunta);
          showFlashcardMenu();
        });
        break;
      case '7':
        showMainMenu();
        break;
      default:
        console.log('Opção inválida.');
        showFlashcardMenu();
    }
  });
}

showMainMenu();
