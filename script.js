// УРОК 2

let num = 266219;
    num = num.toString().split('').reduce((prod, current) => prod * parseInt(current), 1);
    console.log(num);

let num2 = num**3;  
    console.log(num2);
    console.log( String(num2).substring(0, 2) );


    // УРОК 3

let lang = 'ru';

if (lang === 'ru') console.log( 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье' );
if (lang === 'en') console.log( 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday' );

switch (lang){
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
    }

let arr = [['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
           ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
];

let weekDays = lang === 'ru' ? arr [0] :
               lang === 'en' ? arr [1] :
                '';
console.log(weekDays);


let namePerson = 'Максим';
let result = namePerson === 'Артем' ? 'Директор' :
             namePerson === 'Максим' ? 'Преподаватель' :
             'Студент';
console.log(result);

