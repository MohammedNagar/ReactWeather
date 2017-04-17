var React = require('react');
var {Link, NavLink} =require('react-router-dom');
var Nav = ()=>{
  return(
    <div>
    <h2>Nav component</h2>
    <NavLink activeClassName="active" activeStyle={{fontWeight: 'Bold'}} to="/Weather">Get Weather</NavLink>
    <NavLink activeClassName="active" activeStyle={{fontWeight: 'Bold'}} to="/about">About</NavLink>
    <NavLink activeClassName="active" activeStyle={{fontWeight: 'Bold'}} to="/examples">Examples</NavLink>
    </div>
  );
}

module.exports = Nav;
