const itens = document.querySelectorAll('.item');

itens.forEach(item => {
  const topo = item.querySelector('.topo');

  topo.addEventListener('click', () => {
    item.classList.toggle('ativo');
  });
});
