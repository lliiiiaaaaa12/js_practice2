"use strict";

// Задание 149. Среднее время тестирования
console.log("Задание 149");

let testTimes = [12, 15, 10, 18, 14];

function calculateAverageTime(times) {
    if (times.length === 0) return 0;

    let sum = 0;

    for (let time of times) {
        sum += time;
    }

    return sum / times.length;
}

console.log(
    "Среднее время:",
    calculateAverageTime(testTimes).toFixed(2)
);

// Задание 150. Уникальность логина
console.log("Задание 150");

let usernames = ["admin", "student", "teacher", "guest"];
let newUsername = "Student";

function isUsernameAvailable(username) {
    return !usernames.some(
        existing => existing.toLowerCase() === username.trim().toLowerCase()
    );
}

console.log(
    isUsernameAvailable(newUsername)
        ? "Можно зарегистрироваться"
        : "Логин уже занят"
);

// Задание 151. Баллы за задания
console.log("Задание 151");

let tasks = [
    { title: "HTML", points: 10, completed: true },
    { title: "CSS", points: 15, completed: true },
    { title: "JavaScript", points: 20, completed: false },
    { title: "Database", points: 25, completed: true }
];

function calculatePoints(tasks) {
    let total = 0;
    let incomplete = 0;

    for (let task of tasks) {
        if (task.completed) {
            total += task.points;
        } else {
            incomplete++;
        }
    }

    return {
        totalPoints: total,
        incompleteTasks: incomplete
    };
}

console.log(calculatePoints(tasks));

// Задание 152. Анализ заказов
console.log("Задание 152");

let orders = [
    { id: 1, amount: 12000, status: "paid" },
    { id: 2, amount: 8000, status: "pending" },
    { id: 3, amount: 25000, status: "paid" },
    { id: 4, amount: 15000, status: "cancelled" }
];

let paidOrders = orders.filter(order => order.status === "paid");
let pendingOrders = orders.filter(order => order.status === "pending");
let cancelledOrders = orders.filter(order => order.status === "cancelled");

let orderStatistics = {
    paidOrders: paidOrders.length,
    paidAmount: paidOrders.reduce((sum, order) => sum + order.amount, 0),
    pendingOrders: pendingOrders.length,
    cancelledOrders: cancelledOrders.length
};

console.log("Оплаченные заказы:", paidOrders);
console.log("Отменённые заказы:", cancelledOrders);
console.log("Статистика:", orderStatistics);

// Задание 153. Свободное оборудование
console.log("Задание 153");

let devices = [
    { name: "VR Headset", available: true },
    { name: "3D Printer", available: false },
    { name: "Laptop", available: true },
    { name: "Robot Kit", available: true }
];

function getAvailableDevices() {
    return devices.filter(device => device.available);
}

function changeDeviceStatus(name, status) {
    let device = devices.find(item => item.name === name);

    if (!device) return false;

    device.available = status;
    return true;
}

console.log("Доступно:", getAvailableDevices().map(d => d.name));
console.log("Количество:", getAvailableDevices().length);

changeDeviceStatus("3D Printer", true);
console.log("После изменения:", getAvailableDevices().map(d => d.name));

// Задание 154. Электронный чек
console.log("Задание 154");

let cart = [
    { name: "Мышь", price: 5000, quantity: 2 },
    { name: "Клавиатура", price: 12000, quantity: 1 },
    { name: "Наушники", price: 8000, quantity: 1 }
];

function generateReceipt(cart) {
    if (cart.length === 0) {
        console.log("Корзина пуста");
        return { items: [], total: 0 };
    }

    let items = cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        cost: item.price * item.quantity
    }));

    let total = items.reduce((sum, item) => sum + item.cost, 0);

    console.log("ЭЛЕКТРОННЫЙ ЧЕК");

    items.forEach(item => {
        console.log(
            item.name + " × " + item.quantity + " = " + item.cost + " ₸"
        );
    });

    console.log("Итого:", total, "₸");

    return { items, total };
}

generateReceipt(cart);

// Задание 155. Прогресс IT-проектов
console.log("Задание 155");

let projects = [
    { name: "AI Chatbot", progress: 90 },
    { name: "Smart Campus", progress: 45 },
    { name: "Mobile App", progress: 100 },
    { name: "Web Platform", progress: 70 }
];

let completedProjects = projects.filter(p => p.progress === 100);
let lowProgressProjects = projects.filter(p => p.progress < 50);

let averageProgress = projects.reduce(
    (sum, project) => sum + project.progress, 0
) / projects.length;

let leastProgressProject = projects.reduce((min, project) =>
    project.progress < min.progress ? project : min
);

console.log("Все проекты:", projects);
console.log("Завершённые:", completedProjects);
console.log("Прогресс менее 50%:", lowProgressProjects);
console.log("Средний прогресс:", averageProgress.toFixed(2) + "%");
console.log("Минимальный прогресс:", leastProgressProject);