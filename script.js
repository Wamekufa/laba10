// 1. Проверка числа (if, else if, else)
document.getElementById('checkNumber').addEventListener('click', function() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('numberResult');
    
    if (isNaN(number)) {
        resultElement.innerHTML = "<p class='error'>Пожалуйста, введите корректное число.</p>";
        return;
    }
    
    let result = "";
    
    // Условные конструкции if-else
    if (number > 0) {
        result += `<p>Число ${number} - положительное.</p>`;
    } else if (number < 0) {
        result += `<p>Число ${number} - отрицательное.</p>`;
    } else {
        result += `<p>Число равно нулю.</p>`;
    }
    
    // Конструкция switch-case
    switch (true) {
        case (number > 100):
            result += `<p>Оно больше 100.</p>`;
            break;
        case (number > 10):
            result += `<p>Оно больше 10, но не больше 100.</p>`;
            break;
        case (number < -100):
            result += `<p>Оно меньше -100.</p>`;
            break;
        case (number < -10):
            result += `<p>Оно меньше -10, но не меньше -100.</p>`;
            break;
        default:
            result += `<p>Оно в диапазоне от -10 до 10.</p>`;
    }
    
    // Цикл for
    if (number > 0) {
        let sequence = "Последовательность: ";
        for (let i = 1; i <= number; i++) {
            sequence += i + " ";
        }
        result += `<p>${sequence}</p>`;
    }
    
    // Цикл while
    if (number > 0) {
        let sum = 0;
        let i = 1;
        while (i <= number) {
            sum += i;
            i++;
        }
        result += `<p>Сумма чисел от 1 до ${number} равна ${sum}.</p>`;
    }
    
    resultElement.innerHTML = result;
});

// 2. Определение дня недели (switch-case)
document.getElementById('checkDay').addEventListener('click', function() {
    const dayNumber = parseInt(document.getElementById('dayInput').value);
    const resultElement = document.getElementById('dayResult');
    
    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
        resultElement.innerHTML = "<p class='error'>Пожалуйста, введите число от 1 до 7.</p>";
        return;
    }
    
    let dayName;
    
    switch (dayNumber) {
        case 1:
            dayName = "Понедельник";
            break;
        case 2:
            dayName = "Вторник";
            break;
        case 3:
            dayName = "Среда";
            break;
        case 4:
            dayName = "Четверг";
            break;
        case 5:
            dayName = "Пятница";
            break;
        case 6:
            dayName = "Суббота";
            break;
        case 7:
            dayName = "Воскресенье";
            break;
    }
    
    resultElement.innerHTML = `<p>День недели под номером ${dayNumber} - это ${dayName}.</p>`;
});

// 3. Генератор последовательностей (цикл for)
document.getElementById('generateSequence').addEventListener('click', function() {
    const n = parseInt(document.getElementById('sequenceInput').value);
    const resultElement = document.getElementById('sequenceResult');
    
    if (isNaN(n) || n <= 0) {
        resultElement.innerHTML = "<p class='error'>Пожалуйста, введите положительное число.</p>";
        return;
    }
    
    let evenNumbers = "Чётные числа: ";
    let oddNumbers = "Нечётные числа: ";
    let squares = "Квадраты чисел: ";
    
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            evenNumbers += i + " ";
        } else {
            oddNumbers += i + " ";
        }
        squares += (i * i) + " ";
    }
    
    resultElement.innerHTML = `
        <p>${evenNumbers}</p>
        <p>${oddNumbers}</p>
        <p>${squares}</p>
    `;
});

// 4. Калькулятор факториала (цикл while, функция)
document.getElementById('calculateFactorial').addEventListener('click', function() {
    const num = parseInt(document.getElementById('factorialInput').value);
    const resultElement = document.getElementById('factorialResult');
    
    if (isNaN(num) || num < 0) {
        resultElement.innerHTML = "<p class='error'>Пожалуйста, введите неотрицательное число.</p>";
        return;
    }
    
    function calculateFactorial(n) {
        if (n === 0 || n === 1) return 1;
        
        let result = 1;
        let i = 2;
        while (i <= n) {
            result *= i;
            i++;
        }
        return result;
    }
    
    const factorial = calculateFactorial(num);
    resultElement.innerHTML = `<p>Факториал числа ${num} равен ${factorial}.</p>`;
});

// 5. Проверка простого числа (функция с возвратом значения)
document.getElementById('checkPrime').addEventListener('click', function() {
    const num = parseInt(document.getElementById('primeInput').value);
    const resultElement = document.getElementById('primeResult');
    
    if (isNaN(num) || num < 2) {
        resultElement.innerHTML = "<p class='error'>Пожалуйста, введите число больше 1.</p>";
        return;
    }
    
    function isPrime(n) {
        if (n <= 1) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    if (isPrime(num)) {
        resultElement.innerHTML = `<p>Число ${num} является простым.</p>`;
    } else {
        resultElement.innerHTML = `<p>Число ${num} не является простым.</p>`;
    }
});