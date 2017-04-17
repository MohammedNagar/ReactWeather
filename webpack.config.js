module.exports= {
  entry:[ 'babel-polyfill','./app/app.jsx'],
  output: {
    path: __dirname,
    filename:'./public/bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias:{
      Main:'app/components/Main.jsx',
      Nav:'app/components/Nav.jsx',
      Weather:'app/components/Weather.jsx',
      About:'app/components/About.jsx',
      Examples:'app/components/Examples.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage:'app/components/WeatherMessage.jsx',
      openWeatherMap:'app/api/openWeatherMap.jsx'
    },
    extensions: ['*','.js','.jsx']
  },
  module :{
    rules:[{
      loader :'babel-loader',
      query :{
        presets:['react','es2015','es2017','stage-0'],
        plugins: ['transform-runtime']
      },
      test:/\.jsx?$/,
      exclude:/(node_modules|bower_components)/
    }]
  },
  devtool: 'cheap-module-eval-source-map'
};
