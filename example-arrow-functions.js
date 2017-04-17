// var names = ['Mohammed','Ali','Ahmed'];
//
// // names.forEach(function(name){
// //   console.log('FOREACH',name);
// // });
// //
// //
// // names.forEach((name)=>{
// //   console.log('ARROW',name);
// // });
// //
// // names.forEach((name)=>console.log('ARROW-abrev',name));
// //
// //
// // var returnMe=(name)=>name+'!!';
// //
// // console.log(returnMe('MOH'));
//
// var person = {
//   name:'Mohammed',
//   greet: function(){
//     names.forEach((name)=>{
//       console.log(this.name+' Says Hi to '+ name);
//     });
//   }
// }
//
// person.greet();

//Challenge Area

function add(a,b){
  return a+b;
}

console.log(add(1,3));
console.log(add(0,9));


var addStatement = (a,b)=>{
  return a+b;
}

console.log(addStatement(1,3));
console.log(addStatement(0,9));

var addExpreesion = (a,b)=> a+b;
console.log(addExpreesion(1,3));
console.log(addExpreesion(0,9));
