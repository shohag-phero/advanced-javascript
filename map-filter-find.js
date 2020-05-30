
const numbers = [1, 4, 9, 16];

// pass a function to map
const double = numbers.map(x => x * 2);

console.log(double);
// expected output: Array [2, 8, 18, 32]


//what is map ?

// map হচ্ছে arry নিয়ে কাজ করে যা for loop এর কাজ কে easy করে দিয়েছে। যেমন আমরা একটা array
// নিলে এর সব কয়টা element ধরতে হলে একটা loop declare করি for(let i = 0; i<numbers.length; i++)
// তারপরে element গুল নিয়ে যা করি। 

// এত কিছু না করে array নাম দিয়ে .map  দিয়ে যা চাই array er number নিয়ে টা করতে পারব
//map automatic array নিয়ে লুপ চালিয়ে আর একটা result array দিয়ে দিবে।


//তবে চাইলে আমরা আরও অনেক ভাবে করা যায় 
// arrow function diye 
// loop kore
// তবে map হচ্ছে advanced way 


const lower = numbers.filter(x => x < 18);

console.log(lower);

// filter হচ্ছে  কোন condition দিলে টা ওঃই array এর মধ্যে যাচাই করে fulfil করবে।