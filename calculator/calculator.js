document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".btn");

    function displayValue(value) {
        display.textContent += value;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            display.style.color = "white";
            display.style.textAlign = "right";
            if (button.classList.contains("btnc")) {
                display.textContent = "";
            } else if (button.classList.contains("btnd")) {
                display.textContent = display.textContent.slice(0, -1);
            } else if (button.classList.contains("btneq")) {
                let exp = display.textContent;
                let newExp = '';
                let i = 0;
                while (i < exp.length) {
                    let num = '';
                    while (i < exp.length && ((exp[i] >= '0' && exp[i] <= '9') || exp[i] === '.')) {
                        num += exp[i];
                        i++;
                    }
                    if (num && exp[i] === '%' && (i + 1 === exp.length || isNaN(exp[i + 1]) || exp[i + 1] === ' ')) {
                        newExp += '(' + num + '/100)';
                        i++;
                    } else {
                        newExp += num;
                    }
                    if (i < exp.length && (exp[i] === 'x' || exp[i] === '×')) {
                        newExp += '*';
                        i++;
                    }
                    if (i < exp.length && (exp[i] !== '%' && exp[i] !== 'x' && exp[i] !== '×' && (exp[i] < '0' || exp[i] > '9') && exp[i] !== '.')) {
                        newExp += exp[i];
                        i++;
                    }
                    if (i < exp.length && exp[i] === '%' && num && i + 1 < exp.length && (exp[i + 1] >= '0' && exp[i + 1] <= '9')) {
                        newExp += '%';
                        i++;
                    }
                }
                display.textContent = eval(newExp);
            } else {
                displayValue(button.textContent);
            }
        });
    });
});
