//Задание 1
let i = 0;
while( i < 2 ) {
 console.log ("Привет");
 i++;
}

//Задание 2
let c = 1;
do {
   console.log (c);
    c++;
} while (c<6);

//Задание 3
let b = 7;
do {
    console.log (b);
   b++;
} while (b<23);

//Задание 4 

const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,

};
for (key in obj) {
 if (obj[key]){
   console.log(`${key} -зарплата${obj[key]} долларов`);

  }
}

//Задание 5
n = 1000;
num = 0;
while (n>=50)
{
n=n/2;
num++;
}
console.log(num);

//Задание 6
let friday = 1;
do{
   console.log(`Сегодня пятница, ${friday} число.Необходимо подготовить отчет`);
   friday +=7;


}while (friday <= 31);
