const calcularDesconto = (preco, categoria) => {
  const desconto = 0.15;

  return preco * (1 - desconto);
};

module.exports = { calcularDesconto };