///// <reference path="./typings/tsd.d.ts" />
////////////////////////////////
//  var SlideTitle = React.createClass({
//  getInitialState: function() {
//      return {
//        value: '',
//        placeholder: 'Click to add title'
//      };
//    },
//    handleChange: function(el) {
//      this.setState({value: el.target.value});
//    },
//    handleClick: function(el) {
//    if(!el.target.value)  this.setState({value: ""});
//    },
//    render: function() {
//      var value = this.state.value;
//      var placeholder = this.state.placeholder;
//      return  <input type="text" placeholder={placeholder} value={value} onClick={this.handleClick} onChange={this.handleChange}  />
//    }
//  });
//  var SlideText = React.createClass({
//  getInitialState: function() {
//      return {
//        value:'',
//        placeholder:'Click to add text'
//      };
//    },
//    handleChange: function(el) {
//      this.setState({value: el.target.value});
//    },
//    handleClick: function() {
//      this.setState({value: ""});
//    },
//    render: function() {
//      var value = this.state.value;
//      var placeholder = this.state.placeholder;
//      return  <input type="text" placeholder={placeholder} value={value} onClick={this.handleClick} onChange={this.handleChange} />
//    }
//  });
//  var SlideImg = React.createClass({
//  getInitialState: function() {
//      return {
//        value:'',
//        placeholder:'Click to add image'
//      };
//    },
//    handleChange: function(el) {
//      this.setState({value: el.target.value});
//    },
//    handleClick: function() {
//      this.setState({value: ""});
//    },
//    render: function() {
//      var value = this.state.value;
//      var placeholder = this.state.placeholder;
//      return  <input type="text" placeholder={placeholder} value={value} onClick={this.handleClick} onChange={this.handleChange}  />
//    }
//  });
//  var SlideCenterTitle = React.createClass({
//  getInitialState: function() {
//      return {
//        value:'',
//        placeholder:'Click to add center title'
//      };
//    },
//    handleChange: function(el) {
//      this.setState({value: el.target.value});
//    },
//    handleClick: function() {
//      this.setState({value: ""});
//    },
//    render: function() {
//      var value = this.state.value;
//      var placeholder = this.state.placeholder;
//      return  <input type="text" placeholder={placeholder} value={value} onClick={this.handleClick} onChange={this.handleChange} />
//    }
//  });
//  var TitleText = React.createClass({
//    getInitialState: function(){
//        return {
//            visible:false
//        }
//    },
//    handleButtonClick :function(){
//        this.setState( { visible : !this.state.visible } );
//    },
//    render: function() {
//      return  (
//        <div className={this.state.visible ? "show" :""}>
//        <SlideTitle />
//        <SlideText />
//        <button onClick={this.handleButtonClick}>Add Title/Text Slide</button>
//        </div>
//      )
//    }
//  });
//  var TitleImg = React.createClass({
//    render: function() {
//      return  (
//        <div className="title_img">
//        <SlideTitle />
//        <SlideImg />
//        </div>
//      )
//    }
//  });
//  var CenterTitle = React.createClass({
//    render: function() {
//      return  (
//        <div className="title_center">
//        <SlideCenterTitle />
//        </div>
//      )
//    }
//  });
//  ReactDOM.render(<TitleText/>,
//  document.getElementById('app1'));
//  ReactDOM.render(<TitleImg/>,
//  document.getElementById('app2'));
//  ReactDOM.render(<CenterTitle/>,
//  document.getElementById('app3'));
//# sourceMappingURL=PP.js.map