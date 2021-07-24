##### Desafio: desenvolvendo um site por dia por 90 dias

# Site #09 - Tela de Login

## Eu (acho) que estou começando a entender a responsividade

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

---

Até o próximo site e rumo ao próximo nível! 💜💜💜
