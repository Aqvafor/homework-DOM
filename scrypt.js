//  Задание 1
let container = document.querySelector(".container");

for (let i = 0; i < 100; i++) {
  let number = Math.floor(Math.random() * 100) + 1;
  let div = document.createElement("div");
  div.textContent = number;

  //    Добавил желтый цвет
  if (number < 31) {
    div.style.backgroundColor = "green";
  } else if (number >= 31 && number <= 70) {
    div.style.backgroundColor = "yellow";
  } else if (number > 70) {
    div.style.backgroundColor = "red";
  }

  container.appendChild(div);
}


// Задание 2
let div = document.getElementById("color_div");

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let rgb = `rgb(${r},${g},${b})`;

function rgb_to_hex(r, g, b) {
  return (
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  );
}

let hex = rgb_to_hex(r, g, b);

function classify_color(r, g, b) {
  if (
    Math.abs(r - g) <= 15 &&
    Math.abs(g - b) <= 15 &&
    Math.abs(b - r) <= 15
  ) {
    let black_or_white = (r + g + b) / 3;
    if (black_or_white < 50) return "черный";
    if (black_or_white > 205) return "белый";
    return "серый";
  }

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  if (max === r && g >= b) return "красный";
  if (max === r && g < b) return "розовый";
  if (max === g) return "зеленый";
  if (max === b && g < b) return "синий";
  if (max === b && g >= b) return "голубой";
  if (r > 200 && g > 200 && b < 50) return "желтый";
}

let sum = r + g + b;
let text_color = sum > 382.5 && sum < 765 ? "black" : "white";

div.style.backgroundColor = rgb;
div.style.color = text_color;
div.innerHTML = `RGB: ${rgb}<br>HEX: ${hex}<br>Цвет: ${classify_color(
  r,
  g,
  b
)}`;