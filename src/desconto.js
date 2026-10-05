const calcularDesconto = (preco, categoria) => {
  const desconto = 0.17;

  return preco * (1 - desconto);
};

module.exports = { calcularDesconto };