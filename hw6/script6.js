/*Задание 1
Дан массив: 
[1, 5, 4, 10, 0, 3]
.

Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.

После вывода значения 10 в консоль цикл должен прекратить свою работу.*/

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 0) break;
    console.log(numbers[i]);
}

/*Задание 2
Дан массив: 
[1, 5, 4, 10, 0, 3]
.

Найдите позицию (индекс) числа 4 в этом массиве.

Подсказка: Задачу можно решить методом перебора элементов или используя метод массива indexOf.*/


const numberse = [1, 5, 4, 10, 0, 3];
console.log(numberse.indexOf(4));


/*Задание 3
Дан массив чисел: 
[1, 3, 5, 10, 20]
.

С помощью метода 
join
 выведите элементы массива через пробел (пустую строку ' ').*/


 let numbs = [1, 3, 5, 10, 20];
 numbs = numbs.join(' ');
 console.log(numbs);


/*Задание 4
С помощью вложенных циклов создайте многомерный массив вида: 
[[1, 1, 1], [1, 1, 1], [1, 1, 1]]
.*/
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = []; //создали подмассив
  for (let j = 0; j < 3; j++) {
    arr[i].push(1);// заполняем подмассив числами
  }
}
console.log(arr);






/*Задание 5
Дан массив: 
[1, 1, 1]
.

Добавьте в конец массива значения 2, 2, 2.*/


let num = [1, 1, 1];
num.push(2, 2, 2);
console.log(num);


/*Задание 6
Дан массив: 
[9, 8, 7, 'a', 6, 5]
.

С помощью метода 
sort
 отсортируйте массив и удалите букву 'a' из данного массива. В результате работы программы вывести массив, состоящий из цифр.
*/

let numb = [9, 8, 7, 'a', 6, 5];
numb = numb.sort();
console.log(numb);
console.log(numb.pop());
console.log(numb);


/*Задание 7
Дан массив: 
[9, 8, 7, 6, 5]
.

Попросить пользователя угадать число (использовать prompt). Если значение, которое ввёл пользователь, есть в массиве, вывести в alert «Угадал», в противном случае вывести «Не угадал».
*/
//let = [9, 8, 7, 6, 5];
//let 

let guessNumber = [9, 8, 7, 6, 5];
let result = 0;
let enterNumber = Number(prompt('Введите число любое'));
for (let i = 0; i < guessNumber.length; i++) {
	if (enterNumber === guessNumber[i]) {
		console.log('угадал');
		break
	} else {
		console.log('НЕ угадал');
	}
}



/*Задание 8
Дана строка: 
'abcdef'
.

Необходимо, чтобы программа вывела в консоль 
'fedcba'
.*/

let wordse = 'abcdef';
let word = wordse.split('');
console.log(word);
console.log(word.reverse());
console.log(word.join(''));





/*Задание 9
Дан массив: 
[[1, 2, 3,],[4, 5, 6]]
.

Выведите в консоль массив вида: 
[1, 2, 3, 4, 5, 6]
.
*/

let sortArr = [
	[1, 2, 3],
	[4, 5, 6]
];
console.log(sortArr.flat());






/*Задание 10
Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла 
for
 и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива.

Следующий элемент массива можно получить с помощью индекса: 
i + 1
. Обратите внимание, что у последнего элемента нет следующего.
*/









/*Задание 11
Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

Подсказка*/







/*Задание 12
Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.

Пример вызова:

getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']); // [5, 0, 4, 19, 5]
*/









/*Задание 13
Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив содержащий только отрицательные значения.

function filterPositive(array) {
  // Допишите код функции
}

filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]*/