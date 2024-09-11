const { flashcards } = require('./database');

function addFlashcard(pergunta, resposta, idBaralho) {
  const id = flashcards.length + 1;
  const newFlashcard = { id, pergunta, resposta, idBaralho };
  flashcards.push(newFlashcard);
  console.log('Flashcard adicionado:', newFlashcard);
}

function listFlashcards() {
  if (flashcards.length === 0) {
    console.log('Nenhum flashcard cadastrado.');
  } else {
    flashcards.forEach(card => console.log(card));
  }
}

function listFlashcardsByDeck(idBaralho) {
  const cards = flashcards.filter(f => f.idBaralho === idBaralho);
  if (cards.length > 0) {
    cards.forEach(card => console.log(card));
  } else {
    console.log('Nenhum flashcard encontrado para este baralho.');
  }
}

function updateFlashcard(id, pergunta, resposta, idBaralho) {
  const flashcard = flashcards.find(f => f.id === id);
  if (flashcard) {
    flashcard.pergunta = pergunta;
    flashcard.resposta = resposta;
    flashcard.idBaralho = idBaralho;
    console.log('Flashcard atualizado:', flashcard);
  } else {
    console.log('Flashcard não encontrado.');
  }
}

function deleteFlashcard(id) {
  const flashcardIndex = flashcards.findIndex(f => f.id === id);
  if (flashcardIndex !== -1) {
    flashcards.splice(flashcardIndex, 1);
    console.log('Flashcard removido.');
  } else {
    console.log('Flashcard não encontrado.');
  }
}

function searchFlashcardByQuestion(pergunta) {
  const cards = flashcards.filter(f => f.pergunta.includes(pergunta));
  if (cards.length > 0) {
    cards.forEach(card => console.log(card));
  } else {
    console.log('Nenhum flashcard encontrado.');
  }
}

module.exports = {
  addFlashcard,
  listFlashcards,
  listFlashcardsByDeck,
  updateFlashcard,
  deleteFlashcard,
  searchFlashcardByQuestion
};
