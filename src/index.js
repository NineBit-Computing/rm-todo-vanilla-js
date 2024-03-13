let todos = [];

// eslint-disable-next-line no-unused-vars
function addTodo(){
	var input = document.getElementById('todoInput');
	var inputValue = input.value;

	if(inputValue.trim()===''){
		alert('Cannot add an empty todo.');
		return;
	}

	todos.push(inputValue);
	var todoList = document.getElementById('todoItems');
	var item = document.createElement('li');
	item.innerText = inputValue;
	todoList.appendChild(item);
}