function startSurprise() {
    // Первый отсчет (с использованием for)
    function firstCountdown() {
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                alert(i); // Показываем текущий счет
                if (i === 5) {
                    // Сначала меняем цвет фона
                    document.body.style.backgroundColor = 'yellow';
                    // Затем выводим сообщение через небольшую паузу (50 мс, чтобы гарантировать, что фон уже изменился)
                    setTimeout(() => {
                        alert('Скоро будет еще один цветной сюрприз…');
                        // И запускаем второй отсчет
                        setTimeout(secondCountdown, 1000);
                    }, 50);
                }
            }, i * 1000); // Задержка между шагами
        }
    }

    // Второй отсчет (с использованием while)
    function secondCountdown() {
        let i = 1;
        function whileStep() {
            if (i <= 5) {
                alert(i); // Показываем текущий счет
                i++;
                setTimeout(whileStep, 1000); // Ждем 1 секунду и продолжаем
            } else {
                // Меняем фон после завершения второго отсчета
                document.body.style.backgroundColor = 'lightblue';
                alert('Вот и еще один сюрприз!');
            }
        }
        whileStep(); // Запускаем первый шаг while
    }

    // Запуск первого отсчета
    firstCountdown();
}




function wishGoodDay() {
    let times = prompt("Сколько раз пожелать вам доброго дня?");
    times = parseInt(times); // Преобразуем введенное значение в число

    // Проверяем, если число больше 25
    if (isNaN(times) || times < 1 || times > 25) {
        alert("Ошибка: Введите число от 1 до 25.");
    } else {
        // Пожелаем доброго дня нужное количество раз
        for (let i = 0; i < times; i++) {
            alert("Доброго дня!");
        }
    }
}


function drawTriangle() {
    let result = ''; // Здесь будем хранить итоговую строку с треугольником

    // Внешний цикл для строк
    for (let i = 1; i <= 5; i++) {
        // Внутренний цикл для вывода символов в строке
        for (let j = 1; j <= i; j++) {
            result += '# '; // Добавляем символ # и пробел
        }
        result += '\n'; // Переход на новую строку после каждой строки треугольника
    }

    // Выводим результат через alert
    alert(result);
}