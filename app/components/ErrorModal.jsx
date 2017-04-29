var React = require('react');
var propTypes = require('prop-types');

var ErrorModal = React.createClass({
getDefaultProps: function(){
  return{
    title:'Error'
  };
},
componentDidMount: function(){
  var modal = new Foundation.Reveal($('#error-modal'));
  modal.open();
} ,

render: function(){
  var {title, message} = this.props;
  return(
    <div id="error-modal" className="reveal tiny text-center" data-reveal="">
     <h4>{title}</h4>
     <p>{message}</p>
     <p>
     <button className="button hollow" data-close="">
       Okay
     </button>
     </p>
    </div>
  );
}
});

ErrorModal.propTypes={
  title: propTypes.string,
  message: propTypes.string.isRequired
};

module.exports = ErrorModal;
