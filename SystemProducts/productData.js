
function createProduct (id, name, categoria, preco, estoque) {
  return {
    id,
    name,
    categoria,
    preco,
    estoque
  };
}

module.exports = {
  createProduct
};
