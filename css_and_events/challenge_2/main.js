console.log('javascript');

document.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    const input = document.getElementById('input');
    const ul = document.querySelector('ul');

    const span = document.createElement('span');
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'X';
    button.class = 'removeButton';

    span.textContent = input.value;
    input.value = '';
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
  }
})

document.addEventListener('click', (e) => {
  if (e.target.class === 'removeButton') {
    e.target.parentElement.remove();
  }
})
