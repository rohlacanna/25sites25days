##### Desafio: desenvolvendo um site por dia por 30 dias

# Site #03 - Carrossel de poemas

## Por que decidi criar um carrosel?

Alguns amigos próximos sabem que eu adoro tirar fotos de paisagens. Em algum momento eu iria tentar desenvolver alguma coisa que envolvesse uma galeria de fotos.

Foi dessa forma que decidi criar um site contendo um carrosel de imagens do lugar que eu pretendo morar futuramente.

## Quais tecnologias este site possui?

Neste desafio, tentei buscar algo que não usasse tanto Javascript (apesar de eu ter escrito uma linha de comando), o objetivo maior era focar em CSS. Utilizei HTML, CSS e um pouco de Javascript.

Para a criação deste site utilizei como referência este [vídeo](https://www.youtube.com/watch?v=SGwHpzgqzgk). Aprendi muitas coisas novas. Descrevo abaixo o que mais me encantou ao estudar este código:

## O que aprendi?

### [`Scroll-snap`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) é sensacional!

Existe um conjunto de propriedades chamadas **CSS Scroll Snap**, que já é até bem antigo, mas vem ganhando compatibilidade com os browsers aos poucos. E algumas dessas propriedades, que é o caso do `scroll-snap-type` já é bastante compatível e já faz o efeito que precisamos.

Antes de fazer o scroll funcionar, precisei criar os estilos para as seções ficarem fullscreen. Para ocupar a tela inteira utilizei as propriedades `<vw>` e `<vh>`, que são unidades de viewport.

Após isso, tive que dizer ao `#items` que ele vai ter esse controle de scroll, utilizando a propriedade `scroll-snap-type`. Ela recebe 2 parâmetros que podem ser `scroll-snap-type: x|y|both mandatory|proximity`.

O primeiro parâmetro indica para onde será o scroll, `x` para o scroll horizontal, `y` para scroll vertical e `both` se for para os dois eixos. Já o segundo parâmetro indica como funcionará o scroll.

O `mandatory` diz que pelo simples fato de você mover um pouco o scroll, ele já irá para o próximo "slide", já o `proximity`, ele vai calcular qual está mais próximo, se você mover só um pouco ele vai voltar a centralizar o slide atual.

Passando a propriedade `scroll-snap-align` em `.item`, eu estou dizendo em qual parte do slider eu quero que o scroll pare e alinhe, como é uma página inteira, faz mais sentido ser no `start`, mas existem também as opções de `end` e `center`.

E pronto! Já está funcionando! Sim, só isso, não precisa de mais nadinha!

---

Sigo bastante motivado com este desafio. Como estou no começo da jornada, uso códigos prontos como base (devidamente referenciados, sempre) e crio modificações a partir deles. Inclusive, essa é uma ótima forma de aprender qualquer coisa.

Quer aprender a programar? Comece buscando tutoriais que te ensinem a construir alguma coisa. No YouTube tem vários. Um deles eu acabei de citar acima. Comece por ele, é um ótimo começo.

Até o próximo site! 💜
