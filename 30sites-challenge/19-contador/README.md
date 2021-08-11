##### Desafio: desenvolvendo um site por dia por 30 dias

# Site #19 - Contador

## O que aprendi na construção deste site?

O Javascript para fazer este site é tão simples, que eu faço até questão de compartilhar aqui.

```
let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click', function(){
    integer += 1;
    int.innerHTML = integer;
})

remove.addEventListener('click', function(){
    integer -= 1;
    int.innerHTML = integer;
})
```

Uma grande dificuldade deste projeto foi conseguir configurar bem o CSS para os elementos ficarem alinhados da forma que eu desejava.

---

Até a próxima e rumo ao próximo nível! 💜💜💜
