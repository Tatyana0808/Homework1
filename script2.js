//Задание №1

let password  = '1243';
let enterPassword = prompt('Введите пароль');
if (enterPassword === password) {
	alert('пароль введен верно');
} else {
	alert('пароль введен НЕ верно');
}

//Задание №2

let c = Number(prompt('Введите число больше 0 и меньше 10'));
if (c > 0 && c < 10 ) {
	alert('Верно');
} else {
	alert('Неверно. Вы ввели число не в том диапазоне');
}

//Задание №3

let d = Number(prompt('Введите число больше 100'));
let e = Number(prompt('Введите любое число'));
if (d > 100 || e > 100) {
	alert('Верно');
} else {
	alert('Неверно');
}

//Задание №4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));

//Задание №5

let varMonth = Number(prompt("Введите номер месяца от 1 до 12"));
switch (varMonth) {
  case '1':
    alert( 'Зима' );
    break;

  case '2':
    alert( 'Зима' );
    break;

  case 3:
    alert( 'весна' );
    break;

  case 4:
    alert( 'весна' );
    break;

  case 5:
    alert( 'весна' );
    break;

  case 6:
    alert( 'лето' );
    break;

  case 7:
    alert( 'лето' );
    break;

  case 8:
    alert( 'лето' );
    break;

  case 9:
    alert( 'осень' );
    break;

  case 10:
    alert( 'осень' );
    break;

  case 11:
    alert( 'осень' );
    break;

  case 12:
    alert( 'Зима' );
    break;

  default:
    alert( 'Неизвестное значение' );
}