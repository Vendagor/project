'use script';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

for (let i = 0; i < 2; i++) {
   const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');
      
if (a != null && b != null && a != '' && b != '' && a.length < 50) {

      personalMovieDB.movies[a] = b;
      console.log('Done');
   } else {
      console.log('error');
      i--;
   }
}

/*let i = 0;

while (i < 2) {
   const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');
         i++;

if (a != null && b != null && a!= '' && b != '' && a.length < 50) {

      personalMovieDB.movies[a] = b;
      console.log('Done');
   } else {
      console.log('error');
      i--;
   }
}*/


if (personalMovieDB.count < 10) {
   console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
   console.log("Вы киноман");
} else {
   console.log("Произошла ошибка");
}


         

console.log(personalMovieDB);

      



   



     /* if (4 == 4) {
         console.log('Ok!');
      } else {
         console.log('Error!');
      }



if (num < 49) {
   console.log('Error!');
} else if (num > 100) {
   console.log('Many');
} else {
   console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error!');*/

//const num = 50;
/* Строгое сравнение*/
/*switch (num) {
   case 49:
      console.log('None');
      break;
   case 100:
      console.log('None');
      break;
   case 51: 
      console.log('Ok');
      break;
   default:
      console.log('Sorry');
}*/

//let num = 50;

//while (num <= 55) {
   //console.log(num);
   //num++;
//}


 //do {
   //console.log(num);
   //num++;
 //}
 //while (num <= 55);

 //for (let i = 1; i < 10; i++) {
    //if (i === 6) {
      // continue;
   // }
   // console.log(i);
 //}

/* Function */

