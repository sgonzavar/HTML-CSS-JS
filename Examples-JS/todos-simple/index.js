const todos = JSON.parse(localStorage.getItem('todos')) || [];


const render = () => {
    const todoList = document.getElementById('todo-list')
    const todoTemplate = todos.map(t => '<li>' + t + '</li>')
    todoList.innerHTML = todoTemplate.join('')
    const elements = document.querySelectorAll('#todo-list li')
    elements.forEach((element, index) => {
        element.onclick = () => {
            element.parentNode.removeChild(element)
            todos.splice(index, 1)
            updateTodos(todos)
            render()
        }
    })
}

const updateTodos = (todos) => {
    const todoString = JSON.stringify(todos)
    localStorage.setItem('todos', todoString)
}

window.onload = () => {
    render()
    const form = document.getElementById('todo-form')
    form.onsubmit = (e) => {
        e.preventDefault()
        const todo = document.getElementById('todo')
        const todoValue = todo.value
        todo.value = ''
        todos.push(todoValue)
        updateTodos(todos)
        render()
    }
}
