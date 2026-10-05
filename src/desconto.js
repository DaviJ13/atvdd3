const calcularDesconto = (preco, categoria) => {
  const desconto = 0.35;

  return preco * (1 - desconto);
};

module.exports = { calcularDesconto };