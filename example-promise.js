// function getTempCallback(location,callback){
//   callback(undefined,78);
//   callback('City is not found');
// }
//
// getTempCallback('Alexandria',function(err,temp){
//   if(err){
//     console.log('error',err);
//   }
//   else{
//     console.log('Success',temp);
//   }
// });
//
//
// function getTempPromise(location){
//
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City Not Found');
//     },1000);
//
//   });
// }
//
// getTempPromise('Alexandria').then(function(temp){
//   console.log('Success Promise',temp);
// },function(err){
//   console.log('Error Promise',err);
// })

//Challenge Area
function addPromise(a,b){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      if(typeof a === 'number' && typeof b === 'number')
      {
        resolve(a+b);
      }
      else {
          reject('Can not add');
      }
    },1000);
  });

}

addPromise(2,'x').then(function(res){
  console.log('Success Promise',res);
},function(err){
  console.log('Error Promise',err);
})
