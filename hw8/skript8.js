/*Задание 1
С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите их в консоль.

Пример сортировки по свойству в массиве объектов вы можете найти в документации: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort.

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];*/

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
//console.log(people.sort(...));
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]
const peopleOne = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 function compareAge(a, b) {
    return a.age - b.age;
}


peopleOne.sort(compareAge);
console.log(peopleOne.sort());










/*Задание 2
Реализуйте функцию 
filter
, которая должна работать аналогично методу массива 
`filter
. За основу возьмите функцию 
map
, которую мы реализовывали на уроке.

Чтобы из функции 
map
 сделать 
filter
, нужно, в зависимости от результата вызова 
ruleFunction
, принимать решение о том, добавлять в результирующий массив очередной элемент или нет.

Возьмите за основу код ниже. Задание считается выполненным, если два 
console.log
 в коде выводят правильное значение:

function isPositive() {
// писать код тут
}
function isMale() {
// писать код тут
}
function filter() {
// писать код тут
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
*/

function isPositive(Number) {
    return Number > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(arr, callback) {
    const filteredArray = [];
    for (const item of arr) {
        if (callback(item)) {
            filteredArray.push(item);
        }
    }
    return filteredArray
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));













/*Задание 3
Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».

 

Пример вызова
// Fri Feb 10 2023 00:02:32 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:35 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:38 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:41 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:44 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:47 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:50 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:53 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:56 GMT+0300 (Москва, стандартное время)
// Fri Feb 10 2023 00:02:59 GMT+0300 (Москва, стандартное время)
// 30 секунд прошло*/

function printCurrentDate() {
	const currentDate = new Date();
	console.log(currentDate);
}

let secondsPassed = 0;
const interval = 3000; // Интервал в миллисекундах (3 секунды)
const totalTime = 30000; // Общее время выполнения в миллисекундах (30 секунд)
const timerId = setInterval(function () {
	printCurrentDate();
	secondsPassed += interval / 1000; // Увеличиваем счетчик секунд
	if (secondsPassed >= totalTime / 1000) {
			clearInterval(timerId); // Останавливаем интервал после 30 секунд
			console.log("30 секунд прошло");
	}
}, interval);












/*Задание 4
Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.

Допишите функцию 
delayForSecond
 так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте 
setTimeout
.

function delayForSecond(callback) {
	 // Код писать можно только внутри этой функции
   callback();
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})
*/
function delayForSecond(callback) {

    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});




/*Задание 5
Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:

Привет, Глеб!
Прошла одна секунда
Правильный порядок:

Прошла одна секунда
Привет, Глеб!
Исправьте код, чтобы он выводил сообщения в правильном порядке:

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(sayHi('Глеб'))*/
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }

    }, 1000)
}


function sayHi(name) {
    console.log(`Привет, ${name}!`);
}


delayForSecond(() => sayHi('Глеб'));