import { form } from "./formModule";
export const addTaskBtn = {
    buttonClass: 'newTaskBtn',
    formWindowClass: 'formWidow',
    formWindow: null,
    createButton() {
        const newTaskBtn = document.createElement('button');
        newTaskBtn.classList.add(`${this.buttonClass}`);
        newTaskBtn.textContent = 'Click To Add Task';
        document.body.appendChild(newTaskBtn);
        newTaskBtn.addEventListener('click', this.handleClick);
    },
    handleClick() {
        if (this.formWindow) {
            this.formWindow.remove();
            this.formWindow = null;
        } else {
            this.formWindow = document.createElement('form');
            this.formWindow.classList.add('formWindow');
            document.body.appendChild(this.formWindow);
        }
        form.createForm()
    }
}
