  const taskInput = document.querySelector('input');
  const addButton = document.querySelector('button');
  const taskList = document.querySelector('ul');

addButton.addEventListener('click', function() {
  const task = document.createElement('li');
task.innerText = taskInput.value;
taskList.appendChild(task);
taskInput.value = '';
});