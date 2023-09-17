const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the text inside the "div" element created with JS';

container.appendChild(content);
