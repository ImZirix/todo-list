// Import global styles
import '../src/style.scss';
// import appllication modules
import { addTaskBtn } from './modules/AddTaskBtn';
import { form } from './modules/formModule'


function init() {
    addTaskBtn.createButton();
    form.displayTasks();
};

init()

