(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,a,t){e.exports=t.p+"static/media/image2.b104db04.jpg"},55:function(e,a,t){e.exports=t(76)},60:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(7),r=t.n(c),l=(t(60),t(33)),d=t(18),i=t(41),u=t(34),s=t(40),m=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"d-flex justify-content-center navbar"},o.a.createElement("div",{className:"logo"},"INTEREST CALCULATOR"))}}]),a}(n.Component),h=t(51),f=t(105),p=t(4),b=t(108),v=t(107),x=t(20),g=Object(f.a)({root:{width:230,padding:24}}),E=Object(p.a)({thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid #de235b","&$focused, &:hover":{boxShadow:"0px 0px 0px ".concat(8,"px ",Object(x.fade)("#de235b",.16))},"&$activated":{boxShadow:"0px 0px 0px ".concat(12,"px ").concat(Object(x.fade)("#de235b",.16))},"&$jumped":{boxShadow:"0px 0px 0px ".concat(12,"px ").concat(Object(x.fade)("#de235b",.16))}},track:{backgroundColor:"#de235b",height:8},trackAfter:{backgroundColor:"#d0d7dc"},focused:{},activated:{},jumped:{}})(v.a);function w(e){var a=e.amount,t=e.handleUpdates,n=(e.disabled,g());return o.a.createElement("div",null,o.a.createElement(b.a,{className:n.root},o.a.createElement(E,{min:500,max:5e3,valueReducer:function(e){return Math.round(e)},name:"amount",value:a,"aria-labelledby":"label",onChange:function(e,a){console.log(e,a),t(a)}})))}var O=Object(f.a)({root:{width:230,padding:24}}),j=Object(p.a)({thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid #de235b","&$focused, &:hover":{boxShadow:"0px 0px 0px ".concat(8,"px ",Object(x.fade)("#de235b",.16))},"&$activated":{boxShadow:"0px 0px 0px ".concat(12,"px ").concat(Object(x.fade)("#de235b",.16))},"&$jumped":{boxShadow:"0px 0px 0px ".concat(12,"px ").concat(Object(x.fade)("#de235b",.16))}},track:{backgroundColor:"#de235b",height:8},trackAfter:{backgroundColor:"#d0d7dc"},focused:{},activated:{},jumped:{}})(v.a);function y(e){var a=e.amount,t=e.handleUpdates,n=(e.disabled,O());return o.a.createElement("div",null,o.a.createElement(b.a,{className:n.root},o.a.createElement(j,{min:6,max:24,valueReducer:function(e){return Math.round(e)},name:"month",value:a,"aria-labelledby":"label",onChange:function(e,a){t(a)}})))}var N=t(109),k=Object(f.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},dense:{marginTop:e.spacing(2)},menu:{width:200}}});function C(e){var a=e.amount,t=(e.handleUpdates,k());return o.a.createElement("form",{className:t.container,noValidate:!0,autoComplete:"off"},o.a.createElement(N.a,{name:"amount",id:"outlined-number",label:"Amount",value:a,readOnly:!0,className:t.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}))}var M=Object(f.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},dense:{marginTop:e.spacing(2)},menu:{width:200}}});function U(e){var a=e.amount,t=(e.handleUpdates,M());return o.a.createElement("form",{className:t.container,noValidate:!0,autoComplete:"off"},o.a.createElement(N.a,{name:"month",id:"outlined-number",label:"Month",readOnly:!0,value:a,className:t.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}))}var S=t(52),R=t.n(S),$=function(){return o.a.createElement("div",null,o.a.createElement("img",{src:R.a,alt:"Image",className:"Image_styling"}))},_=function(e,a){return fetch("https://ftl-frontend-test.herokuapp.com/interest?amount=".concat(a,"&numMonths=").concat(e)).then(function(e){return e.json()})},A={noOfMonths:{min:6,max:24},amount:{min:500,max:5e3}},I=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).handleUpdates=function(e,a){A[a];t.setState(Object(h.a)({},a,e),function(){return t.handleFetch()})},t.handleFetch=function(){var e=t.state,a=e.amount,n=e.noOfMonths;console.log("Hewwww"),t.setState({loading:!0,data:{}},function(){_(n,a).then(function(e){t.setState({loading:!1,data:e})})})},t.state={noOfMonths:12,amount:2e3,loading:!1,loaded:!1,data:{}},t}return Object(s.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.handleFetch()}},{key:"render",value:function(){var e=this,a=this.state,t=a.amount,n=a.noOfMonths,c=a.data;a.loading;return console.log("amount",t),console.log("intere"),console.log(c),o.a.createElement("div",{className:"d-flex"},o.a.createElement("div",{className:"d-flex flex-column"},o.a.createElement("div",{className:"d-flex"},o.a.createElement("div",{className:"Body_contents"},o.a.createElement("div",{className:"d-flex header_style details_header"},"Amount Slider"),o.a.createElement(w,{amount:t,handleUpdates:function(a){return e.handleUpdates(a,"amount")}}),o.a.createElement(C,{amount:t,handleUpdates:function(a){return e.handleUpdates(a,"amount")}})),o.a.createElement("div",{className:"Body_contents"},o.a.createElement("div",{className:"d-flex header_style details_header"},"Month Slider"),o.a.createElement(y,{amount:n,handleUpdates:function(a){return e.handleUpdates(a,"noOfMonths")}}),o.a.createElement(U,{amount:n,handleUpdates:function(a){return e.handleUpdates(a,"noOfMonths")}}))),o.a.createElement("div",{className:"d-flex justify-content-center rendered_data"},c.interestRate&&o.a.createElement("div",null,o.a.createElement("div",{className:"details_header"},"DETAILS"),o.a.createElement("div",{className:"info"},"Your Interest Rate of $",t," for ",n," Months will be"," ",c.interestRate,"%."),o.a.createElement("div",{className:"info"},"Your Monthly Payment will be $",c.monthlyPayment.amount,".")))),o.a.createElement("div",null,o.a.createElement($,null)))}}]),a}(n.Component);t(74),t(75);var F=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null),o.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[55,1,2]]]);
//# sourceMappingURL=main.23763b00.chunk.js.map