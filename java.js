// // var person={
// //     name:"milon",
// //     age:"21",
// //     city:"Dinajpur",
// //     height:"6"
// // }
// // for(var item in person){
// //     // document.write(city[item],"<br>")
// //     console.log(person[item])
// // }

// // var num="mahi";
// // var num1="nur";
// // var result=num.concat(num1);
// // console.log(result)

// // var num=[11,22,33,44,555,66,77,88,999];
// // var result=num.filter(function(item){
// //     return item>60;
// // })
// // console.log(result)

// // var number=[1,22,33,44,55,66,77,88,99];
// // var result=number.find(function(value){
// //     return value>40;
// // })
// // console.log(result)

// var number=[11,22,33,44,55,66];

// number.splice(0,2,555,6666)
// console.log(number)
// // var result=number.includes(330);
// // console.log(result)

// var country="Bangladesh";
// var result=country.substr(6,9);
// var result=country.substring(0,6)
// console.log(result)

var num=[11,22,333,444,5555,10000,200,20,23];
var result=num.sort(function(a,b){
    return a-b;
})
console.log(result)