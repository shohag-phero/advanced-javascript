const first = 2;
const second = "2";
if (first == second) {
   console.log("condition is true");     
}
else{
    console.log("condition is false");
}

// if i could use triple === instead of == then it will say condition if false

// about double ==  (double equal is not so strick for example on top that condition both is 2
//                       but first is only 2 and second is also 2 but it is in a string.
//                          ok now the result will show both are same. so double equal it don't take 
//                             seriously what type it is actually   )


// about triple === (if i use triple the result will come false because it check every condition
//                    more specifically . so firs can be 2 but second is in a string.
//                    so we understand triple=== will check both condition are same even both are 
//                      same type as well . it is more strict then double equal. )