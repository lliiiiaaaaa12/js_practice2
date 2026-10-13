"use strict";

// Задание 141. Успешные и неуспешные попытки
console.log("Задание 141");

let attempts = [true, false, true, true, false, true, false];
let successful = 0;
let unsuccessful = 0;

for (let i = 0; i < attempts.length; i++) {
    if (attempts[i] === true) successful++;
    else unsuccessful++;
}

let successPercent = attempts.length
    ? successful / attempts.length * 100
    : 0;

console.log("Успешных:", successful);
console.log("Неуспешных:", unsuccessful);
console.log("Успешность:", successPercent.toFixed(2) + "%");

// Задание 142. Время работы компьютеров
console.log("Задание 142");

let hours = [5, 8, 3, 12, 7, 10, 4];
let totalHours = 0;
let maxHours = hours[0];
let overEight = 0;

for (let i = 0; i < hours.length; i++) {
    totalHours += hours[i];

    if (hours[i] > maxHours) maxHours = hours[i];
    if (hours[i] > 8) overEight++;
}

let averageHours = hours.length
    ? totalHours / hours.length
    : 0;

console.log("Общее время:", totalHours);
console.log("Среднее время:", averageHours.toFixed(2));
console.log("Максимум:", maxHours);
console.log("Работали более 8 часов:", overEight);

// Задание 143. Замена запрещённых слов
console.log("Задание 143");

let message = "This is a bad example. BAD words are not allowed.";
let cleanMessage = message.replaceAll(/bad/gi, "***");

console.log("Исходное:", message);
console.log("Изменённое:", cleanMessage);

let anotherMessage = "Everything is fine.";
console.log(anotherMessage.replaceAll(/bad/gi, "***"));

// Задание 144. Результаты соревнований
console.log("Задание 144");

let results = [78, 96, 85, 92, 67, 88, 99, 74];
let sortedResults = [...results].sort((a, b) => b - a);
let maxScore = Math.max(...results);
let topThree = sortedResults.slice(0, 3);
let averageScore = results.reduce((sum, score) => sum + score, 0)
    / results.length;
let score90 = results.filter(score => score >= 90).length;

console.log("Максимальный балл:", maxScore);
console.log("По убыванию:", sortedResults);
console.log("Три лучших результата:", topThree);
console.log("Средний балл:", averageScore.toFixed(2));
console.log("Баллов не менее 90:", score90);

// Задание 145. Случайные числа
console.log("Задание 145");

let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 50) + 1);
}

console.log("Массив:", numbers);
console.log("Минимум:", Math.min(...numbers));
console.log("Максимум:", Math.max(...numbers));

// Задание 146. Сравнение списков студентов
console.log("Задание 146");

let groupA = ["Алия", "Арман", "Руслан", "Мадина"];
let groupB = ["Руслан", "Данияр", "Алия", "Тимур"];

let commonStudents = groupA.filter(name => groupB.includes(name));
let onlyGroupA = groupA.filter(name => !groupB.includes(name));

console.log("В обеих группах:", commonStudents);
console.log("Только в группе A:", onlyGroupA);

// Задание 147. Частота чисел
console.log("Задание 147");

let repeatedNumbers = [2, 4, 2, 5, 4, 2, 7, 5, 4];
let frequency = {};

for (let number of repeatedNumbers) {
    if (frequency[number] === undefined) {
        frequency[number] = 1;
    } else {
        frequency[number]++;
    }
}

let mostFrequentNumber = null;
let highestFrequency = 0;

for (let number in frequency) {
    if (frequency[number] > highestFrequency) {
        highestFrequency = frequency[number];
        mostFrequentNumber = Number(number);
    }
}

console.log("Частота:", frequency);
console.log("Самое частое число:", mostFrequentNumber);
console.log("Количество повторений:", highestFrequency);

// Задание 148. Фильтрация сообщений
console.log("Задание 148");

let messages = [
    "Привет",
    "Изучаем программирование",
    "JavaScript",
    "Практическая работа",
    "Код"
];

let longMessages = messages.filter(text => text.length > 10);

console.log("Длинные сообщения:", longMessages);
console.log("Количество:", longMessages.length);