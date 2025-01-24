function myFunc() {
    let str1 = prompt("Введите 'aaa@bbb@ccc': ");
    str1 = str1.replace(/@/g, "!");
    alert(str1); // aaa!bbb!ccc
}

function myFunc2() {
    let str2 = prompt("Введите 'Я изучаю JavaScript!': ");
    alert("Upper case: " + str2.toUpperCase());
    alert("Lower case: " + str2.toLowerCase());
    alert("Length: " + str2.length);
}

function myFunc3() {
    let str2 = prompt("Введите 'Я изучаю JavaScript!': ");
    let word1 = str2.substr(2, 7);
    let word2 = str2.substring(2, 9);
    let word3 = str2.slice(2, 9);
    alert("substr: " + word1);
    alert("substring: " + word2);
    alert("slice: " + word3);
}

function myFunc4() {
    let str4 = "Карл у Клары украл кораллы";
    alert(str4);
    let countCaseSensitive = (str4.match(/к/g) || []).length;
    let countCaseInsensitive = (str4.match(/к/gi) || []).length;
    alert("With case sensitivity: " + countCaseSensitive);
    alert("Without case sensitivity: " + countCaseInsensitive);
}

function myFunc5() {
    let charCodes = [1052, 1086, 1089, 1082, 1074, 1072];
    alert("Код: " + charCodes);
    let decodedString = String.fromCharCode(...charCodes);
    alert(" Decoded: " + decodedString);
}



function myFunc6() {
    let charCodes = [1052, 1086, 1089, 1082, 1074, 1072];
    alert("Код: " + charCodes);
    let decodedString = String.fromCharCode(...charCodes);
    alert(" Decoded: " + decodedString);

    let encodedString = decodedString
        .split("")
        .map(char => char.charCodeAt(0));
    alert("Encoded: " + encodedString.join(", "));
    let samaraEncoded = "САМАРА".split("").map(char => char.charCodeAt(0));
    alert("Encoded САМАРА: " + samaraEncoded.join(", "));
}


function myFunc7() {
    let num = Math.pow(2, 10);
    alert("2^10 = " + num);
}


function myFunc8() {
    let sqrtNum = Math.sqrt(245).toFixed(2);
    alert("Квадрат 245: " + sqrtNum);
}



function myFunc9() {
    let numbers = [4, -5, 2, 18, -125, 0, 3];
    let maxNum = Math.max(...numbers);
    let minNum = Math.min(...numbers);
    alert("Max: " + maxNum); 
    alert("Min: " + minNum);
}



function myFunc10() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    alert("Random: " + randomNum);
}