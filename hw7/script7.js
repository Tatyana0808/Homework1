/*Задание 1
Преобразуйте строку js в верхний регистр JS.*/

let str = 'js';
console.log(str.toUpperCase());


/*Задание 2
Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять.

Пример вызова:
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []*/

function searchStart(arr, string){
let newArray = [];

arr.forEach(element => {
    if (element.toLowerCase().startsWith(string.toLowerCase())) {
		newArray.push(element);
	}
});
 return newArray;
}


console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []*/



/*Задание 3
Округлите число 32.58884:

До меньшего целого
До большего целого
До ближайшего целого*/

console.log(Math.floor(32.58884)); 
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));  





/*Задание 4
Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.*/

console.log(Math.min(52, 53, 49, 77, 21, 32)); 
console.log(Math.max(52, 53, 49, 77, 21, 32));



/*Задание 5
Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.*/

function randomNumbers(max){
 
	return Math.floor(Math.random() * max);
}

let array = [];
let sum = 0;
for (let i = 0; i < 10; i++) {
	array.push(randomNumbers(10));
}
console.log(array);




/*  Задание 6
Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.

Пример вызова функции
getRandomArrNumbers(7); // [6, 2, 7] - массив заполнен случайными числами
// от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего
// числа, получаем 3
getRandomArrNumbers(12); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// от 0 до 12, длина массива 12 / 2 = 6
*/






/*Задание 7
Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.
*/





/*Задание 8
Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.
*/

let currentDate = new Date();
console.log(currentDate);



/*Задание 9
Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.


Подсказка
Решить эту задачу вам помогут 2 метода даты: 
getDate()
 и 
setDate()
, один из методов должен быть передан в качестве параметра второму.*/

let currentDateNew = new Date();
console.log(`Текущая дата ${currentDateNew}`);
currentDateNew.setDate(currentDateNew.getDate() + 73);
console.log(`Новая дата спустя 73 дня: ${currentDateNew}`);






/*Задание 10
Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:

Дата: <число> <месяц на русском> <год> - это <день недели на русском>.

Время: <часы>:<минуты>:<секунды>

Время, которое будет выведено, также хранится в объекте Date.*/









/*Задание 11 _ Работа с макетом
Вам необходимо создать еще один блок макета «Запомни слова» (Игра 2) и сделать адаптив.
Мобильная версия сайта должна отображаться при разрешении 375px - 767px.

Ссылка на макет.

При клике на кнопку «Играть» запустить программу с функционалом, описанным ниже.
Дан массив слов: 
['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
.

Необходимо перемешать элементы массива и вывести на экран пользователю с использованием 
alert();

Спросить у пользователя:
Чему равнялся первый элемент массива?
Чему равнялся последний элемент массива?
Поздравить пользователя, если он угадал оба элемента.
Если пользователь угадал только одно слово, сообщить: «Вы были близки к победе!»
Если не угадал ни одного элемента, сообщить, что пользователь ответил неверно.
 

📌 Подсказка

Для того чтобы перемешать элементы массива, можно использовать подход:

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
list = list.sort(() => Math.random() - 0.5);
 */