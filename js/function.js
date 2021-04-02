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

function showFirstMessage(text) {
   console.log(text);
}

showFirstMessage("Hello world");


const str = "test";

console.log(str.toUpperCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

//console.log(logg.slice(6, 11));

//console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5 ));

const num = 12.2;

console.log(Math.round(num));

const test = '12.2px';
//console.log(parseInt(test));
console.log(parseFloat(test));