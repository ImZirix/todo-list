export const utilities = {
    createInput(name ,className = null, type = 'text', placeholder = '',required = false) {
        const input = document.createElement('input');
        input.type = type;

        if (className) {
            input.classList.add(className);
        }

        if (placeholder) {
            input.placeholder = placeholder;
        }

        if (required) {
            input.required = true;
        }
        if (name) {
            input.name = name;
        }

        return input;
    },
    createSelect(options = [], defaultValue = '', name) {
        const select = document.createElement('select');
        select.name = name;

        options.forEach(optionValue => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.textContent = optionValue;
            if(optionValue === defaultValue) {
                option.selected = true;
            }
            select.appendChild(option)
        });
        return select
    },
    createTextArea(name ,rows = '', cols = '', placeholder = '') {
        const textarea = document.createElement('textarea');
        textarea.rows = rows;
        textarea.cols = cols;
        textarea.placeholder = placeholder;
        textarea.name = name

        return textarea;
    },
    createButton(buttonClass = null, buttonName) {
        const formWindow = document.querySelector('.formWindow');

        const button = document.createElement('button');
        button.classList.add(buttonClass);
        button.textContent = buttonName;
        
        return button;
    },
}