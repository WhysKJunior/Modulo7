const { 
    decks, 
    flashcards 
} = require('./database');

function addDeck(titulo) {
  const id = decks.length + 1;
  const newDeck = { id, titulo };
  decks.push(newDeck);
  console.log('Baralho adicionado:', newDeck);
}

function listDecks() {
  if (decks.length === 0) {
    console.log('Nenhum baralho cadastrado.');
  } else {
    decks.forEach(deck => console.log(deck));
  }
}

function updateDeck(id, titulo) {
  const deck = decks.find(d => d.id === id);
  if (deck) {
    deck.titulo = titulo;
    console.log('Baralho atualizado:', deck);
  } else {
    console.log('Baralho não encontrado.');
  }
}

function deleteDeck(id) {
  const deckIndex = decks.findIndex(d => d.id === id);
  if (deckIndex !== -1) {
    decks.splice(deckIndex, 1);
    flashcards = flashcards.filter(f => f.idBaralho !== id);
    console.log('Baralho e seus flashcards removidos.');
  } else {
    console.log('Baralho não encontrado.');
  }
}

module.exports = {
  addDeck,
  listDecks,
  updateDeck,
  deleteDeck
};
