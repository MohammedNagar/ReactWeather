var React= require('react');
var ReactDOM = require('react-dom');
//var {Router, ReactRouter, Route, IndexRoute, browserHistory}=require('react-router');
var { BrowserRouter, Route } =require('react-router-dom');
var Main  = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
  <BrowserRouter>
   <div>
       <Route path='/' component={Main} />
       <Route path='/Weather' component={Weather}/>
       <Route path='/about' component={About}/>
       <Route path='/examples' component={Examples}/>
   </div>
  </BrowserRouter>,
  document.getElementById('app')
);
