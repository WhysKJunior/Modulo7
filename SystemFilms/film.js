
function cadastrarFilme (id, titulo, diretor, ano, genero) {
    return {
      id,
      titulo,
      diretor,
      genero,
      ano
    };
  }
  
  module.exports = {
    cadastrarFilme
  };
  