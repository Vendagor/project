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




/* Callback */

/*function first() {
   // Do something
   setTimeout(function() {
      console.log(1);

   }, 2000);
}

function second() {
   console.log(2);
}


/*first();
second();

function learnJS(lang, callback) {
   console.log(`Я учу: ${lang}`);
   callback();
}

function done() {
   console.log('Я прошел этот урок!')
}

learnJS('JavaScript', done);*/




/* Методы объектов =================*/


//const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//      border: 'black',
//      bg: 'red'
//   },
//   makeTest: function() {
//      console.log("Test");
//   }
//};

//const {border, bg} = options.colors;
//console.log(border);

//console.log(Object.keys(options).length);

//console.log(options.name);

//delete options.name;

//console.log(options);

//let counter = 0;
//for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//      for (let i in options[key]) {
//         console.log(`'Свойство ${i} имеет значение ${options[key][i]}`);
//         counter++;
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

//const arr = [1, 12, 23, 16 ,48, 10];
//arr.sort(compareNum);
//console.log(arr);

//function compareNum(a, b) {
//   return a - b;
//}

//arr.pop();
//arr.push(10);
//console.log(arr);

//arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
//});

//for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//}

//for (let value of arr) {
//   console.log(value);
//}


//const str = prompt("", "");
//const products = str.split(", ");
//products.sort();
//console.log(products.join('; '));

//let a = 5;
//    b = a;

//b = b + 5;

//console.log(b);
//console.log(a);


//const obj = {
//   a: 5,
//   b: 1
//};

/*const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);*/

/*function copy (mainObj) {
   let objCopy = {};

   let key;
   for(key in mainObj) {
      objCopy[key] = mainObj[key];
   }

   return objCopy;
}

const numbers = {
   a: 2,
   b: 5,
   c: {
      x: 7,
      y:4
   }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

//console.log(newNumbers);
//console.log(numbers);

const add = {
   d: 17,
   e: 20
};

//console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);

clone.d = 20;

//console.log(add);
//console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'xxxx';

//console.log(newArray);
//console.log(oldArray);

const video = ['youtube', 'vimeo', 'retube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);

function log(a,b,c) {
   console.log(a);
   console.log(b);
   console.log(c);
      }

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

const q = {
   one: 1,
   two: 2
};

const newObj = {...q};*/
