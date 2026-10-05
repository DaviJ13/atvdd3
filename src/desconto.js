const calcularDesconto = (preco, categoria) => {
  const desconto = 0.25;

  return preco * (1 - desconto);
};

module.exports = { calcularDesconto };