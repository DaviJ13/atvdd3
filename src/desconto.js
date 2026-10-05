const calcularDesconto = (preco, categoria) => {
  const desconto = 0.40;

  return preco * (1 - desconto);
};

module.exports = { calcularDesconto };