<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fname = trim($_POST['fname'] ?? '');
    $lname = trim($_POST['lname'] ?? '');
    
    if (empty($fname) || empty($lname)) {
        $message = "Вы не ввели значение в одно из полей! Не зачёт!";
        $color = "red";
    } else {
        $message = "Поздравляю Вас, $fname $lname! Вы получаете зачёт!!!";
        $color = "green";
    }
}
?>

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
<body>
    <div class="form2">
        <?php if (isset($message)): ?>
            <div style="color: <?= $color ?>"><?= $message ?></div>
        <?php endif; ?>
        
        <form method="POST" action="" class="input-wrapper">
            Имя: <input type="text" name="fname"><br>
            Фамилия: <input type="text" name="lname"><br>
            <button type="submit"> Отправить</button>
               
    
        </form> 
    </div>
</body>
</html>