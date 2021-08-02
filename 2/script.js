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
