function iniciarCarrossel() {
    const imagens = document.querySelectorAll('.foto img');
    let indice = 0;

    setInterval(() => {
        imagens[indice].classList.remove('ativo');
        indice = (indice + 1) % imagens.length;
        imagens[indice].classList.add('ativo');

    }, 5000);
}

window.onload = iniciarCarrossel;