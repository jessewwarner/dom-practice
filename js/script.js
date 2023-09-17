const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the text inside the "div" element created with JS';

const contentDiv = document.querySelector('.content');
const moreContent = document.createElement('p');
moreContent.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quae a maxime magnam sit eaque sunt cupiditate quis eum. Pariatur nihil distinctio necessitatibus dolor nobis provident natus nesciunt repellat magni.'

container.appendChild(content);
container.appendChild(moreContent);