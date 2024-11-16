// লুডু খেলায় ১ - ৬ রেনডমলি প্রিন্ট করতে হবে

// function randomNumber(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(randomNumber(1,6));


// শ্রেনি কক্ষে সবার এলফাব্যাটীক্যালি সাজাতে পারি

// const students = ["aa", "cc" ,"ee" ,"ad" ,"da" ,"bn"];
// console.log(students.sort());


// রোল নাম্বার ক্রম অনুযায়ী সাজাতে পারি

// const roll =  [3,5,2,4,1];

// const rollSort = roll.sort(function(a , b){
//     return a - b;
// });

// console.log(rollSort);


// কোন সাল লিপ ইয়ার কিনা ?
// d % 400 == 0 && d % 4 == 0 but d % 100 not equal 0


// function leapYear(year){

//     if( (year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0) ){
//             console.log(`${year}  is leap year`);
//     }

//     else{
//         console.log(${year} is leap year);
//     }

// }
// leapYear(2028)

// কোনো বাক্যে কত গুলা  vowel আছে



// function countVowel(sentence){
//     let count = 0;
//     for(let i = 0; i < sentence.length; i++){
//           if(sentence[i] === 'i' || sentence[i] == 'o' || sentence[i] == 'e' || sentence[i] == 'a' || sentence[i] == 'u' || 
//           sentence[i] === 'A' || sentence[i] == 'E' || sentence[i] == 'I' || sentence[i] == 'O' || sentence[i] == 'U'){
//                  count++;
//           }
//     }

//     console.log(count);
      
// }

// others solution

// countVowel("I love bangla desh");

// const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

// function countVowel2(sentence){
//      let c = 0;
//      const letter = Array.from(sentence);

//      letter.forEach(function(value){
        
//         if(vowels.includes(value)){
//             c++
//         }

//      })

//      console.log(c);

// }
// countVowel2("I Love Bangladesh");

// কোনো Array থেকে Duplicates নাম্বার বের করে আনা

// const numbers = [1,4,5,6,5,7,6,8,9,10,4];

// const duplicates = numbers.filter(function(value, index, array){
    
//     // array filter  প্রত্যেকটা ইলিমেন্টের জন্যে একবার একবার করে কল হবে

//     return  array.indexOf(value) !== index
               
// })

// console.log(duplicates);

// কোনো Array থেকে unique নাম্বার বের করে আনা

// const numbers2 = [1,4,5,6,5,7,6,8,9,10,4];


// const unique = numbers2.filter(function(value, index, array){
    
//     // array filter  প্রত্যেকটা ইলিমেন্টের জন্যে একবার একবার করে কল হবে

//     return  array.indexOf(value) === index
               
// })

// console.log(unique);