const input = document.getElementById('calcInput');

const appendValue = (value) => {
    input.value += value;
};

const clearInput = () => {
    input.value = '';
};

const backspace = () => {
    input.value = input.value.slice(0, -1);
};

const calculate = () => {
    try {
        // Using a safer method for evaluating expressions
        input.value = Function('"use strict";return (' + input.value + ')')();
    } catch (error) {
        input.value = 'Error';
    }
};
