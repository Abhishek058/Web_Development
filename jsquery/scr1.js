// var a = 10;
// console.log(a);

// var str = "ABCDEF";
// console.log(str);

// var b = true;
// console.log(b);

// var c;
// console.log(c);

// var arr = [10, false, 34, "cu", 09, c];
// console.log(arr);

/***********Q-1**********/

//Using third variable temp
// function swap1(a, b){
//     console.log("value of a is : ", a);
//     console.log("value of b is : ", b);
//     var temp = a;
//     a = b;
//     b = temp;

//     console.log("After Swaping")
//     console.log("Now value of a is : ", a);
//     console.log("Now value of b is : ", b);
// }
// swap1(10, 15);

//Without using third variable temp
// function swap2(a, b){
//     console.log("value of a is : ", a);
//     console.log("value of b is : ", b);
//     a = a+b;
//     b = a-b;
//     a = a-b;
//     console.log("After Swaping")
//     console.log("Now value of a is : ", a);
//     console.log("Now value of b is : ", b);
// }
// swap2(10, 15);


/*************Q-2***********/

// function grading(a,b,c){
//     var m = (a+b+c)/3;
//     if(m>=85){
//         console.log("A");
//     }
//     else if(m>=60 && m<85){
//         console.log("B");
//     }
//     else if(m<60){
//         console.log("C");
//     }
// }
// grading(67,81,76);

/************Q-3************/

// function digitSum(d){
//     var sum = 0;
//     while(d != 0){
//         sum = sum+d%10;
//         d = Math.floor(d/10);
//     }
//     console.log(sum);
// }
// digitSum(1234);