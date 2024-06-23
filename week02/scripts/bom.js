const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); 
const li = document.createElement('li');
const delete_button = document.createElement('button')
li.textContent = input.value;
delete_button.textContent = '❌'
li.append(delete_button)
list.append(li)