const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Очистка холста
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Рисуем решетку
function drawGrid() {
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    for (let i = 0; i <= canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    for (let j = 0; j <= canvas.height; j += 50) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.width, j);
        ctx.stroke();
    }
}

// Рисуем елку
function drawTree() {
    ctx.fillStyle = '#228B22';
    ctx.beginPath();
    ctx.moveTo(300, 100);
    ctx.lineTo(250, 200);
    ctx.lineTo(350, 200);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(300, 150);
    ctx.lineTo(225, 275);
    ctx.lineTo(375, 275);
    ctx.closePath();
    ctx.fill();
    
    // Добавляем ствол
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(285, 275, 30, 50);
}

// Рисуем домик
function drawHouse() {
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(100, 200, 100, 100);

    ctx.fillStyle = '#A52A2A';
    ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.lineTo(150, 150);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(130, 230, 40, 40);
    ctx.strokeStyle = '#000';
    ctx.strokeRect(130, 230, 40, 40);
}

// Рисуем смайл
function drawSmile() {
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(450, 150, 50, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(430, 140, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(470, 140, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(450, 160, 30, 0, Math.PI);
    ctx.stroke();
}

// 5.2 - Гистограмма с градиентом
window.onload = function () {
    const canvas = document.getElementById('salesChart');
    const ctx = canvas.getContext('2d');
    
    const data = [30, 25, 45];
    const labels = ['Баскетболы', 'Бейсболы', 'Футболы'];
    const colors = [
        { start: 'lightblue', end: 'blue' },
        { start: 'pink', end: 'red' },
        { start: 'lightgreen', end: 'green' }
    ];
    
    const barWidth = 80;
    const spacing = 70;
    const startX = 100;
    const startY = 500;
    const maxHeight = 300;
    const maxData = Math.max(...data);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Оси
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(80, 50);
    ctx.lineTo(80, 500);
    ctx.lineTo(550, 500);
    ctx.stroke();
    
    // Подписи осей
    ctx.fillStyle = 'black';
    ctx.font = '18px Arial';
    ctx.fillText('Продукты', 300, 580);
    ctx.save();
    ctx.translate(20, 300);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Продано (в сотнях)', 0, 0);
    ctx.restore();
    
    for (let i = 0; i < data.length; i++) {
        let barHeight = (data[i] / maxData) * maxHeight;
        let gradient = ctx.createLinearGradient(0, startY - barHeight, 0, startY);
        gradient.addColorStop(0, colors[i].start);
        gradient.addColorStop(1, colors[i].end);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(startX + i * (barWidth + spacing), startY - barHeight, barWidth, barHeight);
        
        ctx.fillStyle = 'black';
        ctx.font = '16px Arial';
        ctx.fillText(labels[i], startX + i * (barWidth + spacing) + 10, startY + 30);
        ctx.fillText(data[i], startX + i * (barWidth + spacing) + 30, startY - barHeight - 10);
    }
};



const spriteCanvas = document.getElementById("spriteCanvas");
const spriteCtx = spriteCanvas.getContext("2d");

const sprite = new Image();
sprite.src = "sprite2.png";  

let frame = 0;  
const totalFrames = 6;  
const framesPerRow = 3;  
const frameWidth =985;  
const frameHeight = 1000; 
function animate() {
    spriteCtx.clearRect(0, 0, spriteCanvas.width, spriteCanvas.height);

    let col = frame % framesPerRow; 
    let row = Math.floor(frame / framesPerRow); 
    
    spriteCtx.drawImage(sprite, col * frameWidth, row * frameHeight, frameWidth, frameHeight, 0, 0, spriteCanvas.width, spriteCanvas.height);

    frame = (frame + 1) % totalFrames; 
}

setInterval(animate, 100);  // Меняем кадр каждые 100 мс



        const paintCanvas = document.getElementById("paintCanvas");
        const paintCtx = paintCanvas.getContext("2d");

        paintCtx.lineCap = "round";
        paintCtx.lineWidth = 5;
        
        paintCanvas.onmousemove = function(e) {
            if (e.buttons > 0) {
                paintCtx.beginPath();
                paintCtx.moveTo(e.offsetX, e.offsetY);
                paintCtx.lineTo(e.offsetX - e.movementX, e.offsetY - e.movementY);
                paintCtx.stroke();
                paintCtx.closePath();
            }
        };
        
        document.getElementById("clear").onclick = function() {
            paintCtx.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
        };
        
        document.getElementById("save").onclick = function() {
            const link = document.createElement("a");
            link.href = paintCanvas.toDataURL();
            link.download = "drawing.png";
            link.click();
        };
        
        function generatePalette(palette) {
            const colors = [
                "black", "gray", "blue", "cyan", "green", "yellow", "orange", "red", "pink", "purple",
                "#2C3E50", "#8E44AD", "#2980B9", "#27AE60", "#F39C12", "#D35400", "#C0392B", "#ECF0F1"
            ];
            colors.forEach(color => {
                let paletteBlock = document.createElement('div');
                paletteBlock.className = 'button';
                paletteBlock.style.backgroundColor = color;
                paletteBlock.addEventListener('click', function() {
                    paintCtx.strokeStyle = color;
                });
                palette.appendChild(paletteBlock);
            });
        }
        generatePalette(document.getElementById("palette"));