var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=e64ab92e7c10b22dbd57ebb6111264e7&units=imperial';

//e64ab92e7c10b22dbd57ebb6111264e7

module.exports ={

   getTemp(location) {

   var encodedLocation =encodeURIComponent(location);
   var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return  axios.get(requestUrl).then(function(res){
     debugger;
     if(res.data.cod && res.data.message){
       throw new Error(res.data.message);
     }
     else {
       return res.data.main.temp;
     }

   },function(res){
     throw new Error(res.data.message);
   });
  }
}
