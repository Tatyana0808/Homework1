//Задание 1

function min(a, b) {
    if (a <= b) {
      return a;
    } else {
      return b;
    }
   
}

 console.log(min(4, 8));
  console.log(min(6, 6));

  //Задание 2
  function even_or_odd(n) {
    if(n % 2 === 0) {
      return 'Число четное';
    } else {
      return 'Число нечетное';
    }
};

console.log(even_or_odd(4));
console.log(even_or_odd(5));

//Задание 3

//3.2
function func(num) {
	return num ** 2;
}
let res = func(3)
console.log(res);

//3.1

const logToConsole = (a) => {
	console.log(a * a);
}

logToConsole(4);


//Задание 4


function Userage(question){
  let age = prompt(question);


  if (age > 0 && age <= 12) {
    console.log('Привет друг');
  } 
  else if (age < 0) { 
    console.log('Вы ввели неправильное значение');
  }
  else {
    (age >= 13);
  console.log('Добро пожаловать');
  }
   
  
}



Userage('Сколько вам лет?');



//Задание №5

const checkNumber = (a,b) => {
	if (isNaN(a) || isNaN(b)) {
		return 'Одно или оба значения не являются числом';
	} else {
		return a * b;
	}
}

checkNumber(4,4);

//Задание №6
const exponentiation = (a) => {
	if (isNaN(a)) {
		alert('Переданный параметр не является числом');
	} else {
		alert(`${a} в кубе равняется ${a ** 3}`);
	}
}

exponentiation(prompt('Введите число'));






//Задание 7
function getRectangleArea() {
  return this.radius ** 2 * 3.14;
}
function getRectanglePerimiter() {
 return this.radius * 2 * 3.14; 
}
const circle1 = { 
  radius:5,

  getArea: getRectangleArea,
  getPerimiter: getRectanglePerimiter,
}

const circle2 = { 
  radius:7,

  getArea: getRectangleArea,
  getPerimiter: getRectanglePerimiter,
}
 console.log(`Площадь круга 1 равна ${circle1.getArea()}`);
 console.log(`Периметр круга 1 равен ${circle1.getPerimiter()}`);
 console.log(`Площадь круга 2 равна ${circle2.getArea()}`);
 console.log(`Периметр круга 2 равен ${circle2.getPerimiter()}`);

  

  // Задание 8

  const showSeason = () => {
    let a = Number(prompt('Введите значение от 1 до 12'));
    if (a === 1 || a === 2 || a === 12) {
      alert ('Зима');
  
    } else if (a === 3 || a === 4 || a === 5) {
      alert ('Весна');
    }
  
    else if (a === 6 || a === 7 || a === 8) {
      alert ('Лето');
    }
  
    else if (a === 9 || a === 10 || a === 11) {
      alert ('Осень');
  
    } else {
      alert ('Вы ввели что-то не то');
    }
  }
  
   

