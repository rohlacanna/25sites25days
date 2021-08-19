##### Desafio: desenvolvendo um site por dia por 25 dias

# Site #09 - Tela de Login

## O que aprendi na construção deste site?

Aprendi que [`@media`](https://developer.mozilla.org/pt-BR/docs/Web/CSS/@media) pode ser usada para aplicar estilos com base no resultado de uma ou mais consultas de mídia, que testam o tipo, as características específicas e o ambiente de um dispositivo.

### Eu (acho) que estou começando a entender a responsividade

Estava querendo muito aprender sobre responsividade e foi baseado nisso que decidi buscar mais a fundo como fazer isso acontecer para este site #09. Para deixar responsivo a minha tela de login, utilizei o seguinte código no CSS:

```css
@media screen and (max-width: 1050px) {
  .container {
    grid-gap: 5rem;
  }
}

@media screen and (max-width: 1000px) {
  form {
    width: 290px;
  }

  form h2 {
    font-size: 2.4rem;
    margin: 8px 0;
  }

  .img img {
    width: 400px;
  }
}

@media screen and (max-width: 900px) {
  .img {
    display: none;
  }

  .container {
    grid-template-columns: 1fr;
  }

  .wave {
    display: none;
  }

  .login-container {
    justify-content: center;
  }
}
```

Funcionou 100%! Ainda não sei se é a melhor forma de fazer isso, então fiquem à vontade para fazer uma PR nesse projeto, melhorando meu código.

---

Até o próximo site e rumo ao próximo nível! 💜💜💜
