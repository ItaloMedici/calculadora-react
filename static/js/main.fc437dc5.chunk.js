(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){},19:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var i=a(1),c=a(6),l=a.n(c),s=(a(15),a(4)),n=a(5),r=a(7),b=a(8),o=a(2),j=a(10),d=a(9),u=(a(16),a(17),a(0)),h=function(t){var e="button ";return e+=t.operation?"operation ":"",e+=t.double?"double ":"",e+=t.triple?"triple ":"",Object(u.jsx)("button",{className:e,onClick:function(e){return t.click&&t.click(t.label)},children:t.label})},p=(a(19),function(t){return Object(u.jsx)("div",{className:"display",children:t.value})}),O={displayValue:"0",clearDisplay:!1,operation:null,values:[0,0],current:0},k=function(t){Object(j.a)(a,t);var e=Object(d.a)(a);function a(t){var i;return Object(r.a)(this,a),(i=e.call(this,t)).state=Object(n.a)({},O),i.setOperation=i.setOperation.bind(Object(o.a)(i)),i.addDigit=i.addDigit.bind(Object(o.a)(i)),i.clearDisplay=i.clearDisplay.bind(Object(o.a)(i)),i}return Object(b.a)(a,[{key:"clearDisplay",value:function(){this.setState(Object(n.a)({},O))}},{key:"setOperation",value:function(t){if(0===this.state.current)this.setState({operation:t,current:1,clearDisplay:!0});else{var e="="===t,a=this.state.operation,i=Object(s.a)(this.state.values);try{switch(a){case"+":i[0]+=i[1];break;case"-":i[0]-=i[1];break;case"\xf7":i[0]/=i[1];break;case"x":i[0]*=i[1]}}catch(c){i[0]=this.state.values[0]}i[1]=0,this.setState({displayValue:i[0],clearDisplay:!e,operation:e?null:t,values:i,current:e?"0":"1"})}}},{key:"addDigit",value:function(t){if("."!==t||!this.state.displayValue.includes(".")){var e=("0"===this.state.displayValue||this.state.clearDisplay?"":this.state.displayValue)+t;if(this.setState({displayValue:e,clearDisplay:!1}),"."!==t){var a=this.state.current,i=parseFloat(e),c=Object(s.a)(this.state.values);c[a]=i,this.setState({values:c})}}}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"calculadora",children:[Object(u.jsx)(p,{value:this.state.displayValue}),Object(u.jsx)(h,{label:"AC",click:this.clearDisplay,triple:!0}),Object(u.jsx)(h,{label:"\xf7",click:this.setOperation,operation:!0}),Object(u.jsx)(h,{label:"7",click:this.addDigit}),Object(u.jsx)(h,{label:"8",click:this.addDigit}),Object(u.jsx)(h,{label:"9",click:this.addDigit}),Object(u.jsx)(h,{label:"x",click:this.setOperation,operation:!0}),Object(u.jsx)(h,{label:"4",click:this.addDigit}),Object(u.jsx)(h,{label:"5",click:this.addDigit}),Object(u.jsx)(h,{label:"6",click:this.addDigit}),Object(u.jsx)(h,{label:"-",click:this.setOperation,operation:!0}),Object(u.jsx)(h,{label:"1",click:this.addDigit}),Object(u.jsx)(h,{label:"2",click:this.addDigit}),Object(u.jsx)(h,{label:"3",click:this.addDigit}),Object(u.jsx)(h,{label:"+",click:this.setOperation,operation:!0}),Object(u.jsx)(h,{label:"0",click:this.addDigit,double:!0}),Object(u.jsx)(h,{label:".",click:this.addDigit}),Object(u.jsx)(h,{label:"=",click:this.setOperation,operation:!0})]})}}]),a}(i.Component),x=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(e){var a=e.getCLS,i=e.getFID,c=e.getFCP,l=e.getLCP,s=e.getTTFB;a(t),i(t),c(t),l(t),s(t)}))};l.a.render(Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Calculadora"}),Object(u.jsx)(k,{}),Object(u.jsxs)("span",{children:["By",Object(u.jsx)("br",{}),Object(u.jsx)("strong",{children:"M\xe9dici"})]})]}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.fc437dc5.chunk.js.map