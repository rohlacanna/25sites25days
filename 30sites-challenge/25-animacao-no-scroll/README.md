##### Desafio: desenvolvendo um site por dia por 30 dias

# Site #25 - Animação no Scroll

## O que aprendi na construção deste site?

O Javascript para fazer este site é tão simples, que eu faço até questão de compartilhar aqui.

```
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.25 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
});
```

Uma grande dificuldade deste projeto foi conseguir configurar bem o CSS para os elementos ficarem alinhados da forma que eu desejava.

---

Até a próxima e rumo ao próximo nível! 💜💜💜
