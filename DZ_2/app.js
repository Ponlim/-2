let amount = parseFloat(prompt("Введите сумму в сомах:"));
let fuelTypeNumber = parseInt(prompt("Введите цифру от 1 до 5 для выбора типа топлива (1 - АИ-92, 2 - АИ-95, 3 - АИ-98, 4 - ДТ, 5 - Газ):"));

let price;
let fuelType;

switch (fuelTypeNumber) {
    case 1:
        price = 65;
        fuelType = "АИ-92";
        break;
    case 2:
        price = 72;
        fuelType = "АИ-95";
        break;
    case 3:
        price = 80;
        fuelType = "АИ-98";
        break;
    case 4:
        price = 60;
        fuelType = "ДТ";
        break;
    case 5:
        price = 45;
        fuelType = "Газ";
        break;
    default:
        alert("Неверный номер типа топлива");
        price = 0;
        fuelType = "";
        break;
}

if (price > 0) {
    let liters = amount / price;
    alert(`Вы можете купить ${liters} литров ${fuelType}`);
} else {
    alert("Пожалуйста, выберите правильный номер типа топлива.");
}
































let liters = parseFloat(prompt("Введите количество литров бензина:"));
let cardTypeNumber = parseInt(prompt("Введите цифру от 1 до 3 для выбора типа карты (1 - Серебро, 2 - Золото, 3 - Платина):"));

let bonusRate;
let cardType;

switch (cardTypeNumber) {
    case 1:
        bonusRate = 0.5;
        cardType = "Серебро";
        break;
    case 2:
        bonusRate = 0.75;
        cardType = "Золото";
        break;
    case 3:
        bonusRate = 1;
        cardType = "Платина";
        break;
    default:
        alert("Неверный номер типа карты");
        bonusRate = 0;
        cardType = "";
        break;
}

if (bonusRate > 0) {
    let bonusPoints = liters * bonusRate;
    alert(`За ${liters} литров бензина по карте ${cardType} вы получите ${bonusPoints} бонусных баллов.`);
} else {
    alert("Пожалуйста, выберите правильный номер типа карты.");
}