function calculateArea() {

    var length = parseFloat(document.getElementById('dlina').value);
    var width = parseFloat(document.getElementById('shirina').value);

    var area = length * width;

    var per = 2 * (length + width);

    document.getElementById('area').value = area;

    document.getElementById('per').value = per;
}


function validateForm() {
    var login = document.getElementById('login').value.trim();
    var password = document.getElementById('password').value.trim();
    var errorMessage = document.getElementById('errorMessage');

    if (login === "" || password === "") {
        errorMessage.style.display = 'block';
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 3000); // Скрытие сообщения через 3 секунды
    } else {
        errorMessage.style.display = 'none';
        window.open('https://html5book.ru/html5-forms/#form', '_blank');
    }
}


let textInput = document.getElementById("textInput");
document.getElementById("lockButton").addEventListener("click", function () {
    textInput.disabled = true;
});

document.getElementById("unlockButton").addEventListener("click", function () {
    textInput.disabled = false;
});


document.getElementById("checkButton").addEventListener("click", function (event) {
    event.preventDefault(); 
    let checkBox = document.getElementById("checkBox");
    let output = document.getElementById("outputText");

    output.textContent = checkBox.checked ? "Привет" : "Пока";
});