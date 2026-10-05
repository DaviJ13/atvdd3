const calcularDesconto = (preco, categoria) => {
  const desconto = 0.30;

  return preco * (1 - desconto);
};

module.exports = { calcularDesconto };