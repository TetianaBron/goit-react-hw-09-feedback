(this["webpackJsonpgoit-react-hw-09-feedback"]=this["webpackJsonpgoit-react-hw-09-feedback"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c(4),s=c.n(a),i=(c(10),c(2)),o=(c(11),function(e){var t=e.children;return Object(n.jsx)("div",{className:"Layout",children:t})}),l=function(e){var t=e.title,c=e.children;return Object(n.jsxs)("div",{className:"Section",children:[Object(n.jsx)("h2",{children:t}),c]})};c(12);var j=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(n.jsx)("ul",{children:t.map((function(e){return Object(n.jsx)("li",{className:"buttonList",children:Object(n.jsx)("button",{type:"button",onClick:function(){return c(e)},children:e.slice(0,1).toLocaleUpperCase()+e.slice(1)})},e)}))})},u=function(e){var t=e.good,c=e.neutral,r=e.bad,a=e.total,s=e.positivePercentage;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["Good: ",Object(n.jsx)("span",{children:t})]}),Object(n.jsxs)("li",{children:["Neutral: ",Object(n.jsx)("span",{children:c})]}),Object(n.jsxs)("li",{children:["Bad: ",Object(n.jsx)("span",{children:r})]})]}),Object(n.jsxs)("p",{className:"total",children:["Total: ",a]}),Object(n.jsxs)("p",{className:"total",children:["Positive feedback: ",s,"%"]})]})},b=function(e){var t=e.message;return Object(n.jsx)("div",{children:t})};function d(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(0),d=Object(i.a)(s,2),h=d[0],O=d[1],f=Object(r.useState)(0),x=Object(i.a)(f,2),v=x[0],p=x[1],k=function(){return c+h+v},g=k(),m=function(){var e=Math.round(100*c/k());return e>0?e:0}();return Object(n.jsxs)(o,{children:[Object(n.jsx)(l,{title:"Please leave feedback",children:Object(n.jsx)(j,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":O((function(e){return e+1}));break;case"bad":p((function(e){return e+1}));break;default:console.warn("\u0422\u0438\u043f \u043f\u043e\u043b\u044f - ".concat(e," \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f."))}}})}),Object(n.jsx)(l,{title:"Statistics",children:g>0?Object(n.jsx)(u,{good:c,neutral:h,bad:v,total:g,positivePercentage:m}):Object(n.jsx)(b,{message:"No feedback given"})})]})}s.a.render(Object(n.jsx)(d,{}),document.querySelector("#root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.89aed527.chunk.js.map