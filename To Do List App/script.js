
const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const totalCounter = document.getElementById('totalCount');
const completedCounter = document.getElementById('completedCount');
const clearAllBtn = document.getElementById('clearAll');

let total = 0;
let completed = 0;

function addTodo() {
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!"); 
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
        <div class="actions">
            <button class="complete-btn">✔</button>
            <button class="delete-btn">✖</button>
        </div>
    `;

    todoList.appendChild(li);
    input.value = ""; 
    updateStats(1, 0);
    li.querySelector('.complete-btn').addEventListener('click', () => toggleComplete(li));
    li.querySelector('.delete-btn').addEventListener('click', () => deleteTodo(li));
}
function toggleComplete(li) {
    li.classList.toggle('completed');
    if (li.classList.contains('completed')) {
        completed++;
    } else {
        completed--;
    }
    updateStats(0, 0);
}

function deleteTodo(li) {
    if (li.classList.contains('completed')) {
        completed--;
    }
    total--;
    li.remove();
    updateStats(0, 0);
}
clearAllBtn.addEventListener('click', () => {
    todoList.innerHTML = "";
    total = 0;
    completed = 0;
    updateStats(0, 0);
});
function updateStats(totalMod, compMod) {
    total += totalMod;
    totalCounter.innerText = total;
    completedCounter.innerText = completed;
}
addBtn.addEventListener('click', addTodo);