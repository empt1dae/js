<?php
// Инициализация переменных
$name = '';
$age = '';
$city = '';
$output = '';

// Обработка формы при отправке
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получаем и очищаем данные
    $name = htmlspecialchars($_POST['name'] ?? '');
    $age = intval($_POST['age'] ?? 0);
    $city = htmlspecialchars($_POST['city'] ?? '');
    
    // Формируем результат
    $output = "<div class='result'>
        <h3>Результат:</h3>
        <p>Меня зовут $name</p>
        <p>Мне $age лет</p>
        <p>Я живу в городе $city</p>
    </div>";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Форма ввода</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="form2">
        <form method="POST" class="input-wrapper">
            <h2>Введите ваши данные:</h2>
            
            <label>Имя:</label>
            <input type="text" name="name" required 
                   value="<?= $name ?>">
            
            <label>Возраст:</label>
            <input type="number" name="age" required 
                   value="<?= $age ?>">
            
            <label>Город:</label>
            <input type="text" name="city" required 
                   value="<?= $city ?>">
            
            <button type="submit" >Показать результат</button>
        </form>

        <?php 
        // Выводим результат после формы
        if (!empty($output)) {
            echo $output;
        } 
        ?>
    </div>
</body>
</html>