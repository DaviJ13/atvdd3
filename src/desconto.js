const calcularDesconto = (preco, categoria) => {
  const desconto = 0.19;

  return preco * (1 - desconto);
};

module.exports = { calcularDesconto };