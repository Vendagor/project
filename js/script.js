'use script';


const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
    start: function()  {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }
    },
    remeberMyFilms: function() {
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
    }
};



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

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
   } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
   } else {
      console.log("Произошла ошибка");
   }
}
   
detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);;
   }
}

writeYourGenres();


