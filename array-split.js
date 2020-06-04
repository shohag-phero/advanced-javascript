
// slice      // splice     // join


const num = [10, 13, 14, 15, 18, 20, 22, 23];
const part = num.slice(2, 5);
console.log(part);
//slice = suppose আমি ২ থেকে ৫ slice করতে দিয়েছি এর মানে array এর ২ number position যেই
//        number আছে  আর ৫ number position এর আগ পর্যন্ত ওই number গুলোই দিবে ।
//                      [note: আমরা জানি array এর first number ar position value 0 . so 0123 এই ভাবে গুন্তে হবে]


const roll = [10, 13, 14, 15, 18, 20, 22, 23];
const removed = roll.splice(2, 5);
//onsole.log(removed);
//splice ও slice er মতই just  এটা যত থেকে যত position দিব ওই number গুল বাদ হিসেবে দেখাবে 

const together = roll.join("/")
console.log(together);