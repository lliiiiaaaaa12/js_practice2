"use strict";

// Задание 136. Проверка заполненности накопителя
console.log("Задание 136");

let totalMemory = 64;
let usedMemory = 48;

if (
    !Number.isFinite(totalMemory) ||
    !Number.isFinite(usedMemory) ||
    totalMemory <= 0 ||
    usedMemory < 0 ||
    usedMemory > totalMemory
) {
    console.log("Ошибка данных");
} else {
    let percent = (usedMemory / totalMemory) * 100;
    console.log("Использовано:", percent.toFixed(2) + "%");

    if (percent < 50) {
        console.log("Достаточно места");
    } else if (percent < 90) {
        console.log("Память заполняется");
    } else {
        console.log("Память почти заполнена");
    }
}

// Задание 137. Уровень сложности игры
console.log("Задание 137");

let wins = 18;

if (wins < 0 || !Number.isInteger(wins)) {
    console.log("Некорректное количество побед");
} else if (wins <= 4) {
    console.log("Новичок");
} else if (wins <= 14) {
    console.log("Любитель");
} else if (wins <= 29) {
    console.log("Профессионал");
} else {
    console.log("Мастер");
}

// Проверка граничных значений
[0, 5, 15, 30].forEach(value => {
    let level;

    if (value <= 4) level = "Новичок";
    else if (value <= 14) level = "Любитель";
    else if (value <= 29) level = "Профессионал";
    else level = "Мастер";

    console.log(value, "побед:", level);
});

// Задание 138. Срок действия подписки
console.log("Задание 138");

let daysLeft = 3;

if (!Number.isInteger(daysLeft)) {
    console.log("Ошибка данных");
} else if (daysLeft < 0) {
    console.log("Ошибка данных");
} else if (daysLeft === 0) {
    console.log("Подписка истекла");
} else if (daysLeft <= 7) {
    console.log("Скоро закончится подписка");
} else {
    console.log("Подписка активна");
}

// Задание 139. Тип интернет-заказа
console.log("Задание 139");

let orderAmount = 25000;

if (!Number.isFinite(orderAmount) || orderAmount < 0) {
    console.log("Некорректная сумма");
} else if (orderAmount < 5000) {
    console.log("Малый заказ");
} else if (orderAmount < 20000) {
    console.log("Средний заказ");
} else if (orderAmount < 50000) {
    console.log("Крупный заказ");
} else {
    console.log("VIP-заказ");
}

// Задание 140. Права доступа к файлу
console.log("Задание 140");

let role = "editor";
let isBlocked = false;

function checkAccess(role, isBlocked) {
    if (isBlocked) {
        return "Доступ запрещён: пользователь заблокирован";
    }

    if (role === "admin") {
        return "Можно просматривать, редактировать и управлять файлом";
    } else if (role === "editor") {
        return "Можно просматривать и редактировать файл";
    } else if (role === "viewer") {
        return "Разрешён только просмотр";
    } else {
        return "Неизвестная роль";
    }
}

console.log(checkAccess(role, isBlocked));

["admin", "editor", "viewer", "guest"].forEach(r => {
    console.log(r + ":", checkAccess(r, false));
});

console.log("Заблокированный:", checkAccess("admin", true));