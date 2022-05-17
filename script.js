const elementos = [
  {tag: 'p', texto: 'Frease 1.'},
  {tag: 'div', texto: 'Frease 2.'},
  {tag: 'section', texto: 'Frease 3.'},
  {tag: 'footer', texto: 'Frease 4.'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let {tag, texto} = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);
  
  /* tagCriada.innerText = texto; */
  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);

}

container.appendChild(div);