const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {

    if( window.innerWidth < 450){
        window.scrollTo({top:0, behavior: 'smooth'})
    }

    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        
        personagem.classList.add('selecionado');

        const imagemPersonagem =  document.querySelector('.personagem-grande');
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagem.src = `./src/imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})