const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.toggle('content');
content.textContent = 'This is the text inside the "div" element created with JS';

const redParagraph = document.createElement('p');
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = 'red';

const headerThree = document.createElement('h3');
headerThree.textContent = "I'm a blue h3!";
headerThree.style['color'] = 'blue';

const newDiv = document.createElement('div');
newDiv.style = 'border: 2px solid black; background-color: pink';

const headerOne = document.createElement('div');
headerOne.textContent = "I'm in a div";

const newDivParagraph = document.createElement('p');
newDivParagraph.textContent = "ME TOO!"

newDiv.appendChild(headerOne);
newDiv.appendChild(newDivParagraph);

container.appendChild(content);
container.appendChild(redParagraph);
container.appendChild(headerThree);
container.appendChild(newDiv);

const button = document.querySelector('#btn');
button.onclick = () => alert('Hello, World!');

const buttonTwo = document.querySelector('#btnTwo');
buttonTwo.addEventListener('click', () => {
    alert("Hello, World!");
});