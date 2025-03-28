<?php
$area = $perimeter = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $length = $_POST['length'] ?? 0;
    $width = $_POST['width'] ?? 0;

    if ($length > 0 && $width > 0) {
        $area = $length * $width;
        $perimeter = 2 * ($length + $width);
    } else {
        $error = "Введите корректные значения!";
    }
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Вычисление площади и периметра</title>
</head>
<body>
    <div class="form2">
        <h2>Калькулятор прямоугольника</h2>
        <form method="post" class="input-wrapper">
            <label>Длина: <input type="number" name="length" step="0.01" required></label><br>
            <label>Ширина: <input type="number" name="width" step="0.01" required></label><br>
            <button type="submit">Вычислить</button>
        </form>

        <?php if (!empty($area) && !empty($perimeter)): ?>
            <h3>Результаты:</h3>
            <p>Площадь: <?= $area ?></p>
            <p>Периметр: <?= $perimeter ?></p>
        <?php elseif (!empty($error)): ?>
            <p style="color: red;"><?= $error ?></p>
        <?php endif; ?>
    </div>
</body>
</html>
