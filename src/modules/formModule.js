import { utilities } from './utilities'

export const form = {
    storedTasks: JSON.parse(localStorage.getItem('tasks')) || [],
    saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.storedTasks));
        console.log(localStorage)
    },
    getInputValues(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
    
        const data = Object.fromEntries(formData.entries());
        data.completed = false;
        
        if (!Array.isArray(this.storedTasks)) {
            this.storedTasks = [];
        }
        
        this.storedTasks.push(data);
        this.saveTasksToLocalStorage();
        this.displayTasks()
        this.removeForm()
    },
    createForm() {
        const formWindow = document.querySelector('.formWindow');
        if (!formWindow) return;

        formWindow.append(
            utilities.createInput('title' ,'title', 'text', 'Enter The Title', true),
            utilities.createTextArea('description','4', '50', 'Enter The Description'),
            utilities.createInput('dueDate' ,'dueDate', 'date', undefined, true),
            utilities.createSelect(['Low', 'Medium', 'High'], 'Low', 'priority'),
            utilities.createButton('submitBtn', 'Add Task'), 
            utilities.createButton('cancelBtn', 'Cancel')
        );
        const cancelBtn = document.querySelector('.cancelBtn');
        cancelBtn.type = 'button';
        cancelBtn.addEventListener('click', () => this.removeContainer('.formWindow'))
        formWindow.addEventListener('submit', this.getInputValues.bind(this));

    },
    removeForm() {
        let formWindow = document.querySelector('.formWindow');
        if (formWindow) {
            formWindow.remove()
            this.formWindow = null;
        } else {
            return console.log('not found')
        }
    },
    removeContainer(container) {
        let selectedContainer = document.querySelector(container);
        selectedContainer ? selectedContainer.remove() : null;
    },
    displayTasks() {
        let taskContainer = document.querySelector('.taskContainer');

        if (!taskContainer) {
        taskContainer = document.createElement('div');
        taskContainer.classList.add('taskContainer');
        document.body.appendChild(taskContainer);
        }
        taskContainer.innerHTML = '';
        
        this.storedTasks.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.classList.add(`taskElement${index}`);
            taskElement.classList.add('taskElement')

            const titleElement = document.createElement('h3');
            titleElement.textContent = `Title: ${task.title}`

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = `Description: ${task.description}`;

            const dueDateElement = document.createElement('p');
            dueDateElement.textContent = `Due Date: ${task.dueDate}`;

            const priorityElement = document.createElement('p');
            priorityElement.textContent = `Priority: ${task.priority}`;

            taskElement.append(titleElement, descriptionElement, dueDateElement, priorityElement);
            taskContainer.appendChild(taskElement)

            const removeTask = utilities.createButton('removeTask');
            const tik = utilities.createInput(undefined, 'tik','checkbox' ,undefined, false, )
            tik.checked = task.completed;
            taskElement.append(removeTask, tik)

            tik.addEventListener('change', () => {
                this.storedTasks[index].completed = tik.checked;
                this.saveTasksToLocalStorage();
            });

            removeTask.addEventListener('click', () => {
                this.storedTasks.splice(index, 1);
                this.saveTasksToLocalStorage();
                this.displayTasks();
            });

        });
        
    },
}
