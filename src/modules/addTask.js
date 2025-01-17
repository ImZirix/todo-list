export class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    display() {
        return 
        `
        title: ${this.title}
        description: ${this.description}
        dueDate: ${this.dueDate}
        `;
    }
}


