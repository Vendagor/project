'use script';


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

//function showFirstMessage(text) {
//   console.log(text);
//}

//showFirstMessage("Hello world");


//const str = "test";

//console.log(str.toUpperCase());
//console.log(str);

//const fruit = "Some fruit";

//console.log(fruit.indexOf("fruit"));

//const logg = "Hello world";

//console.log(logg.slice(6, 11));

//console.log(logg.substring(6, 11));

//console.log(logg.substr(6, 5 ));

//const num = 12.2;

//console.log(Math.round(num));

//const test = '12.2px';
//console.log(parseInt(test));
//console.log(parseFloat(test));


/*function first() {
   // Do something
   setTimeout(function() {
      console.log(1);

   }, 2000);
}

function second() {
   console.log(2);
}

first();
second();

function learnJS(lang, callback) {
   console.log(`Я учу: ${lang}`);
   callback();
}

function done() {
   console.log('Я прошел этот урок!')
}

learnJS('JavaScript', done);*/


const options = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg: 'red'
   },
   makeTest: function() {
      console.log("Test");
   }
};

const {border, bg} = options.colors;
console.log(border);

//console.log(Object.keys(options).length);

//console.log(options.name);

//delete options.name;

//console.log(options);

//let counter = 0;
//for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//      for (let i in options[key]) {
//         console.log(`'Свойство ${i} имеет значение ${options[key][i]}`);
//         couner++;
//     }
//   } else {
//         console.log(`'Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//   }
//}
//console.log(counter);



//let user = {
//   firstName: 'Alex',
//   lastName: 'Nikulin',
//   age: 26,
//   height: 1.75,
//   looks: {
//      eyes: 'blue',
//      hairColor: 'brown'
//   }
//};
//console.log(Object.keys(user).length);