(this["webpackJsonpemmet-game"]=this["webpackJsonpemmet-game"]||[]).push([[0],{22:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(12),i=t.n(o),c=(t(22),t(1)),l=t(2),u="black",m="184, 190, 178",d="109, 104, 130",s="152, 236, 255",b="255, 255, 255",g="255, 255, 255",p="0, 0, 0",f="58, 32, 10",x="rgba(58, 32, 10, 0.2)",h="27, 24, 87",v="rgb(147, 186, 163)",y="rgb(205, 151, 151)",E="147, 186, 163",w="205, 151, 151",j=t(4),O=t(3);function k(){var e=Object(c.a)(["\n    padding: 2px;\n"]);return k=function(){return e},e}function S(){var e=Object(c.a)(["\n    grid-area: life;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    min-width: 4em;\n    height: 30px;\n"]);return S=function(){return e},e}function D(){var e=Object(c.a)(["\n    grid-area: middle;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.1em;\n    font-weight: bold;\n    letter-spacing: 1px;\n    color: ",";\n    min-width: 4em;\n    height: 30px;\n"]);return D=function(){return e},e}function _(){var e=Object(c.a)(["\n    grid-area: score;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.1em;\n    font-weight: bold;\n    letter-spacing: 1px;\n    color: ",";\n    min-width: 3em;\n    height: 30px;\n"]);return _=function(){return e},e}function L(){var e=Object(c.a)(["\n    cursor: pointer;\n    color: rgba(",", 0.7);\n    font-size: 0.6em;\n    font-weight: bold;\n    letter-spacing: 2px;\n    width: 20%;\n    height: 100%;\n    background-color: rgb(",");\n    border: none;\n    border-radius: 20px 0 0 20px;\n    box-shadow: 2px 2px 5px 6px ",";\n    &:hover {\n        background-color: rgb(",");\n    }\n    &:active {\n        color: #f2fcfd;\n        background: linear-gradient(\n            45deg,\n            rgb(75, 192, 215) 100%,\n            rgb(220, 236, 255) 10%\n        );\n        box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);\n    }\n"]);return L=function(){return e},e}function z(){var e=Object(c.a)(["\n    color: rgb(",");\n    font-size: 80%;\n    margin: 0;\n    padding: 0;\n"]);return z=function(){return e},e}function T(){var e=Object(c.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 75%;\n    height: 100%;\n    background-color: rgb(",");\n    border-radius: 0 20px 20px 0;\n    box-shadow: 2px 2px 5px 6px ",";\n"]);return T=function(){return e},e}var C="https://img.icons8.com/material/20/000000/hearts--v1.png";function N(e){var n=e.hint,t=e.scoreState,o=e.life,i=Object(r.useState)(!1),c=Object(O.a)(i,2),l=c[0],u=c[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(B,null,a.a.createElement("p",null,t)),a.a.createElement(A,null,a.a.createElement(I,{title:"L\xf6sung ein-/ausblenden",onClick:function(){return u(!l)}},"HINT"),a.a.createElement(F,null,l&&a.a.createElement(H,null,n))),a.a.createElement(M,null,function(e){for(var n=[],t=0;t<e;t++)n.push(a.a.createElement($,{alt:"",src:C,key:t}));return a.a.createElement(a.a.Fragment,null,n)}(o)))}var F=l.a.div(T(),m,x),H=l.a.p(z(),b),I=l.a.button(L(),b,d,x,E),B=l.a.div(_(),u),A=l.a.div(D(),b),M=l.a.div(S()),$=l.a.img(k()),W=t(5);function V(){var e=Object(c.a)(["\n    cursor: pointer;\n    color: rgb(",");\n    font-weight: bold;\n    letter-spacing: 1px;\n    background-color: rgba(",", 0.5);\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 2px 3px 3px rgba(58, 32, 10, 0.2);\n    min-width: 60px;\n    margin: 20px 20px 0;\n    padding: 10px;\n    &:hover {\n        background-color: rgb(",");\n    }\n"]);return V=function(){return e},e}function q(){var e=Object(c.a)(["\n    contenteditable: true;\n    overflow-wrap: break-word;\n    color: white;\n    font-weight: bold;\n    box-shadow: inset 2px 2px 3px 2px rgba(",", 0.2);\n    background-color: #393c8060;\n    padding: 10px;\n    margin-top: 8px;\n"]);return q=function(){return e},e}function G(){var e=Object(c.a)(["\n        color: rgb(",");\n        font-size: 0.8em;\n        font-weight: bold;\n        background-color: rgba(",", 0.2);\n        width: 50%;\n        border-radius: 20px;\n        margin: 20px;\n    "]);return G=function(){return e},e}function J(){var e=Object(c.a)(["\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 30px;\n        margin-bottom: 5px;\n    "]);return J=function(){return e},e}function Z(e){var n=e.amountOfQuestions,t=e.hint,r=e.inputText,o=e.setInputText,i=e.setScoreState,c=e.scoreState,l=e.setFeedback,u=e.life,m=e.setLife,d=e.setVisible,s=e.orderNum,b=e.setOrderNum,g=e.setWinnerDialog;return a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null,r),a.a.createElement(Q,{title:"Eingabe l\xf6schen",onClick:function(){o("Deine neue Eingabe ...")}},"X"),a.a.createElement(Q,{title:"Eingabe best\xe4tigen",onClick:function(){r===t?(i(c+10),l("Richtig :-D"),o("Welcher Emmet-Befehl passt?"),s<n-1?b(s+1):(l("Super, alle Fragen richtig gel\xf6st!"),g(!0))):(l("Falsch :-("),m(u-1),o("Welcher Emmet-Befehl passt?"),u<=1&&(l("Game Over"),d(!0)))}},"OK"))}var K=l.a.div(q(),f),Q=l.a.button(V(),g,h,E);function R(){var e=Object(c.a)(["\n    position: absolute;\n    opacity: 1;\n    background-color: rgb(",");\n    border-width: 2px;\n    border-style: solid;\n    border-image: linear-gradient(\n            to bottom,\n            rgba(",", 0) 1%,\n            rgba(",", 0.8) 10%,\n            rgba(",", 0) 100%\n        )\n        1 100%;\n    box-shadow: 2px 2px 5px 3px ",";\n    width: 70vw;\n    height: 47vh;\n    margin-top: 10vh;\n"]);return R=function(){return e},e}function X(){var e=Object(c.a)(["\n    position: absolute;\n    height: 100%;\n    box-shadow: inset 1px 1px 2px 0px rgba(",", 0.8);\n"]);return X=function(){return e},e}function P(){var e=Object(c.a)(["\n    opacity: 1;\n    height: 80px;\n    padding: 2px;\n"]);return P=function(){return e},e}function U(){var e=Object(c.a)(["\n    margin-top: 30px;\n"]);return U=function(){return e},e}function Y(){var e=Object(c.a)(["\n    width: 70vw;\n"]);return Y=function(){return e},e}function ee(){var e=Object(c.a)(["\n    background-color: rgba(",", 0.5);\n    color: rgb(",");\n    font-weight: bold;\n    letter-spacing: 1px;\n    cursor: pointer;\n    min-width: 60px;\n    border: none;\n    border-radius: 20px;\n    box-shadow: 1px 2px 3px 3px rgba(58, 32, 10, 0.2);\n    margin: 20px 20px 0;\n    padding: 10px;\n    &:hover {\n        background-color: rgb(",");\n    }\n"]);return ee=function(){return e},e}function ne(){var e=Object(c.a)(["\n    font-size: 0.8em;\n"]);return ne=function(){return e},e}function te(){var e=Object(c.a)(["\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-bottom: 10px;\n"]);return te=function(){return e},e}function re(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return re=function(){return e},e}function ae(e){var n,t=e.visible,r=e.setVisible,o=e.setLife,i=e.setScoreState,c=e.setFeedback,l=e.setOrderNum,u=a.a.createElement(ue,null,a.a.createElement(me,null,a.a.createElement(de,{alt:"sad cloud",src:"https://img.icons8.com/dotty/80/000000/sad-cloud.png"})),a.a.createElement(ie,null,"Ohje, leider verloren :-("),a.a.createElement(ce,null,"Spiel beenden oder nochmal spielen?"),a.a.createElement(oe,null,a.a.createElement(j.a,{to:"/"},a.a.createElement(le,{title:"Zur\xfcck zum Startbereich"},"Beenden")),a.a.createElement(j.a,{to:"/gamearea"},a.a.createElement(le,{title:"Startet neues Spiel",onClick:function(){r(!1),o(3),i(0),c(""),l(0)}},"Nochmal"))));return n=t?a.a.createElement(be,null,a.a.createElement(se,null,u)):a.a.createElement(be,{hidden:!0},a.a.createElement(se,null,u)),a.a.createElement(a.a.Fragment,null,n)}var oe=l.a.div(re()),ie=l.a.div(te()),ce=l.a.div(ne()),le=l.a.button(ee(),h,g,E),ue=l.a.div(Y()),me=l.a.header(U()),de=l.a.img(P()),se=l.a.div(X(),b),be=l.a.div(R(),m,b,b,b,x);function ge(){var e=Object(c.a)(["\n    position: absolute;\n    opacity: 1;\n    border-style: solid;\n    border-width: 2px;\n    border-image: linear-gradient(\n            to bottom,\n            rgba(",", 0) 1%,\n            rgba(",", 0.8) 10%,\n            rgba(",", 0) 100%\n        )\n        1 100%;\n    box-shadow: 2px 2px 5px 3px ",";\n    width: 70vw;\n    height: 47vh;\n    background-color: rgb(",");\n    margin-top: 10vh;\n"]);return ge=function(){return e},e}function pe(){var e=Object(c.a)(["\n    position: absolute;\n    box-shadow: inset 1px 1px 2px 0px rgba(",", 0.8);\n    height: 100%;\n"]);return pe=function(){return e},e}function fe(){var e=Object(c.a)(["\n    opacity: 1;\n    height: 80px;\n    padding: 2px;\n"]);return fe=function(){return e},e}function xe(){var e=Object(c.a)(["\n    margin-top: 30px;\n"]);return xe=function(){return e},e}function he(){var e=Object(c.a)(["\n    width: 70vw;\n"]);return he=function(){return e},e}function ve(){var e=Object(c.a)(["\n    cursor: pointer;\n    color: rgb(",");\n    font-weight: bold;\n    letter-spacing: 1px;\n    background-color: rgba(",", 0.5);\n    box-shadow: 1px 2px 3px 3px rgba(58, 32, 10, 0.2);\n    min-width: 60px;\n    border: none;\n    border-radius: 20px;\n    margin: 20px 20px 0;\n    padding: 10px;\n    &:hover {\n        background-color: rgb(",");\n    }\n"]);return ve=function(){return e},e}function ye(){var e=Object(c.a)(["\n    font-size: 0.8em;\n"]);return ye=function(){return e},e}function Ee(){var e=Object(c.a)(["\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-bottom: 10px;\n"]);return Ee=function(){return e},e}function we(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return we=function(){return e},e}function je(e){var n,t=e.winnerDialog,r=e.setWinnerDialog,o=e.setLife,i=e.setScoreState,c=e.setFeedback,l=e.setOrderNum,u=a.a.createElement(_e,null,a.a.createElement(Le,null,a.a.createElement(ze,{alt:"trophy",src:"https://img.icons8.com/dotty/80/000000/trophy.png"})),a.a.createElement(ke,null,"Wow, geiler Typ!"),a.a.createElement(Se,null,"Du hast ALLE Fragen richtig beantwortet!"),a.a.createElement(Se,null,"Spiel beenden oder nochmal spielen?"),a.a.createElement(Oe,null,a.a.createElement(j.a,{to:"/"},a.a.createElement(De,{title:"Zur\xfcck zum Startbereich"},"Beenden")),a.a.createElement(j.a,{to:"/gamearea"},a.a.createElement(De,{title:"Startet neues Spiel",onClick:function(){console.log("NO geklickt"),r(!1),o(3),i(0),c(""),l(0)}},"Nochmal"))));return n=t?a.a.createElement(Ce,null,a.a.createElement(Te,null,u)):a.a.createElement(Ce,{hidden:!0},a.a.createElement(Te,null,u)),a.a.createElement(a.a.Fragment,null,n)}var Oe=l.a.div(we()),ke=l.a.div(Ee()),Se=l.a.div(ye()),De=l.a.button(ve(),g,h,E),_e=l.a.div(he()),Le=l.a.header(xe()),ze=l.a.img(fe()),Te=l.a.div(pe(),b),Ce=l.a.div(ge(),b,b,b,x,m);t(31);var Ne=t(9);function Fe(){var e=Object(c.a)(["\n    height: 25%;\n    &:hover {\n        background-color: rgb(",");\n    }\n    &:active {\n        color: #f2fcfd;\n        background: linear-gradient(\n            45deg,\n            rgb(75, 192, 215) 100%,\n            rgb(220, 236, 255) 10%\n        );\n        box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);\n    }\n"]);return Fe=function(){return e},e}function He(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    overflow: scroll;\n    overscroll-behavior: none;\n    scrollbar-width: thin;\n    scrollbar-color: rgba(",", 0.2)\n        rgba(",", 0);\n    width: 33%;\n    height: 35vh;\n"]);return He=function(){return e},e}function Ie(){var e=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    width: 30%;\n    height: 25%;\n    &:hover {\n        background-color: rgb(",");\n    }\n    &:active {\n        color: ",";\n        background: linear-gradient(\n            45deg,\n            rgb(75, 192, 215) 100%,\n            rgb(220, 236, 255) 10%\n        );\n        box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);\n    }\n"]);return Ie=function(){return e},e}function Be(){var e=Object(c.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    font-weight: bold;\n    font-size: 1.5em;\n    text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5);\n    width: 35vw;\n    height: 35vh;\n"]);return Be=function(){return e},e}function Ae(e){var n=e.inputText,t=e.setInputText,r=e.order,o=e.orderNum;var i=W.a[4].btntext;console.log("btnTextArray"+i);var c=function(e){"Welcher Emmet-Befehl passt?"===n||"Deine neue Eingabe ..."===n?(t(" "),t(e)):t(n+e),console.log("clicked")};return a.a.createElement(a.a.Fragment,null,a.a.createElement(Me,null,Ne.a.slice(0,12).map((function(e){return a.a.createElement($e,{onClick:function(){return c(e.symbol)},key:e.symbol},e.symbol)}))),a.a.createElement(We,null,function(){console.log("exercises: "+W.a[4].btntext);var e=W.a[r[o]].btntext;return console.log("middleSide: "+e),e.map((function(e){return a.a.createElement(Ve,{onClick:function(){return c(e)},key:e},e)}))}()),a.a.createElement(Me,null,Ne.a.slice(12,24).map((function(e){return a.a.createElement($e,{onClick:function(){return c(e.symbol)},key:e.symbol},e.symbol)}))))}var Me=l.a.div(Be()),$e=l.a.button(Ie(),h,g),We=l.a.div(He(),p,E),Ve=l.a.button(Fe(),h);function qe(){var e=Object(c.a)(["\n    grid-area: keyboard;\n    display: flex;\n    user-select: none;\n    font-size: calc(10px + 2vmin);\n    width: 100vw;\n    margin-top: -1vh;\n    /* offset-x | offset-y | blur-radius | spread-radius | color */\n    box-shadow: 2px 2px 5px 6px ",";\n\n    & button {\n        color: ",";\n        text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5);\n        font-weight: bold;\n        font-size: 1.3em;\n        border: none;\n        margin: 1px;\n        background: linear-gradient(\n            135deg,\n            rgba(",", 0.5) 1%,\n            rgba(",", 0.4) 35%,\n            rgb(",", 1) 100%\n        );\n    }\n"]);return qe=function(){return e},e}function Ge(){var e=Object(c.a)(["\n    display: grid;\n    grid-template-areas:\n        'score middle life'\n        'keyboard keyboard keyboard';\n    grid-template-rows: 1fr 5fr;\n    grid-template-columns: 1fr 6fr 1fr;\n    position: fixed;\n    bottom: 0px;\n    width: 100vw;\n"]);return Ge=function(){return e},e}function Je(){var e=Object(c.a)(["\n    color: rgb(",");\n    scrollbar-width: thin;\n    scrollbar-color: rgba(",", 0.3) rgba(",", 0);\n    background-color: rgba(",", 0.7);\n    padding: 10px 3px;\n    height: 20vh;\n    overflow: scroll;\n    overscroll-behavior: none;\n"]);return Je=function(){return e},e}function Ze(){var e=Object(c.a)(["\n    box-shadow: inset 1px 1px 2px 0px rgba(",", 0.8);\n"]);return Ze=function(){return e},e}function Ke(){var e=Object(c.a)(["\n    background-color: rgba(",", 0.2);\n    padding: 10px;\n    border-style: solid;\n    border-width: 2px;\n    border-image: linear-gradient(\n            to bottom,\n            rgba(",", 0) 1%,\n            rgba(",", 0.8) 10%,\n            rgba(",", 0) 100%\n        )\n        1 100%;\n    width: 80vw;\n    height: auto;\n    box-shadow: 1px 1px 8px 3px ",";\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(c.a)(["\n    display: flex;\n    justify-content: flex-end;\n    & p {\n        color: rgb(",");\n        font-size: 0.5em;\n    }\n    margin-top: -4vh;\n"]);return Qe=function(){return e},e}function Re(){var e=Object(c.a)(["\n    width: auto;\n    height: auto;\n    margin-top: 10vh;\n"]);return Re=function(){return e},e}function Xe(){var e=Object(c.a)(["\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    height: 90vh;\n    margin-top: -40px;\n"]);return Xe=function(){return e},e}function Pe(){var e=Object(c.a)(["\n    height: 30px;\n    opacity: 1;\n    padding: 2px;\n"]);return Pe=function(){return e},e}function Ue(){var e=Object(c.a)(["\n    display: flex;\n    justify-content: center;\n    position: fixed;\n"]);return Ue=function(){return e},e}function Ye(){var e=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],n=Object(r.useState)("Welcher Emmet-Befehl passt?"),t=Object(O.a)(n,2),o=t[0],i=t[1],c=Object(r.useState)(0),u=Object(O.a)(c,2),m=u[0],d=u[1],s=Object(r.useState)(" "),g=Object(O.a)(s,2),p=g[0],f=g[1],x=Object(r.useState)(3),h=Object(O.a)(x,2),v=h[0],y=h[1],E=Object(r.useState)(!1),w=Object(O.a)(E,2),j=w[0],k=w[1],S=Object(r.useState)(!1),D=Object(O.a)(S,2),_=D[0],L=D[1],z=Object(r.useState)(0),T=Object(O.a)(z,2),C=T[0],F=T[1],H=W.a[e[C]].emmet,I=W.a[e[C]].result.split("\n").map((function(e,n){return a.a.createElement("span",{key:n},e,a.a.createElement("br",null))}));return a.a.createElement(tn,null,a.a.createElement(en,null,a.a.createElement(nn,{alt:"logo",src:"../img/EmmetGame_Headlogo_Schatten.png"})),a.a.createElement(je,{winnerDialog:_,setWinnerDialog:L,setLife:y,setScoreState:d,setFeedback:f,setOrderNum:F}),a.a.createElement(ae,{visible:j,setVisible:k,setLife:y,setScoreState:d,setFeedback:f,setOrderNum:F}),a.a.createElement(rn,null,a.a.createElement("div",null,function(e){var n=l.a.div(J()),t=l.a.div(G(),b,b);return a.a.createElement(n,null,a.a.createElement(t,null,e))}(p)),a.a.createElement(an,null,a.a.createElement("p",null,C+1," / ",W.a.length)),a.a.createElement(cn,null,a.a.createElement(on,null,a.a.createElement(ln,null,a.a.createElement("code",null,I)),a.a.createElement(Z,{amountOfQuestions:W.a.length,hint:H,inputText:o,setInputText:i,scoreState:m,setScoreState:d,setFeedback:f,setLife:y,life:v,setVisible:k,orderNum:C,setOrderNum:F,setWinnerDialog:L})))),a.a.createElement(un,null,a.a.createElement(N,{hint:H,scoreState:m,life:v}),a.a.createElement(mn,null,a.a.createElement(Ae,{inputText:o,setInputText:i,order:e,orderNum:C}))))}var en=l.a.header(Ue()),nn=l.a.img(Pe()),tn=l.a.section(Xe()),rn=l.a.div(Re()),an=l.a.div(Qe(),b),on=l.a.div(Ke(),b,b,b,b,x),cn=l.a.div(Ze(),b),ln=l.a.div(Je(),s,p,p,h),un=l.a.div(Ge()),mn=l.a.section(qe(),x,u,w,b,E);function dn(){var e=Object(c.a)(["\n    font-size: 1em;\n    margin-bottom: 10em;\n"]);return dn=function(){return e},e}function sn(){var e=Object(c.a)(["\n    background-color: rgb(",");\n    color: rgb(",");\n    text-decoration: none;\n    letter-spacing: 1px;\n    box-shadow: 1px 2px 3px 3px rgba(58, 32, 10, 0.2);\n    padding: 10px;\n    &:hover {\n        background-color: rgb(",");\n    }\n"]);return sn=function(){return e},e}function bn(){var e=Object(c.a)(["\n    text-align: center;\n    width: 50vw;\n    max-width: 300px;\n    margin: 10vh 0 0 0;\n"]);return bn=function(){return e},e}function gn(){var e=Object(c.a)(["\n    text-align: center;\n"]);return gn=function(){return e},e}function pn(){return a.a.createElement(fn,null,a.a.createElement(xn,{alt:"logo",src:"../img/EmmetGame_Frontlogo_Schatten.png"}),a.a.createElement(vn,null,"Erlerne Emmet-Befehle spielerisch! ",a.a.createElement("br",null),"Dr\xfccke oben rechts den Start-Button.",a.a.createElement("br",null),"Viel Spa\xdf! :-D"),a.a.createElement(hn,{title:"Externer Link zur offiziellen Auflistung der Emmet-Befehle",href:"https://docs.emmet.io/cheat-sheet/",target:"_blank",rel:"noopener noreferrer"},"Emmet-Befehle"),a.a.createElement(vn,null,a.a.createElement("small",null,"(Zum offiziellen Cheat-Sheet der Emmet-Befehle)")))}var fn=l.a.section(gn()),xn=l.a.img(bn()),hn=l.a.a(sn(),p,g,d),vn=l.a.p(dn());function yn(){var e=Object(c.a)(["\n    background-color: rgba(",", 1);\n    height: 3em;\n    border: none;\n    border-radius: 0 0 100px 100px;\n    box-shadow: 2px 2px 5px 3px ",";\n    cursor: pointer;\n    margin: 0 10px;\n    &:hover {\n      background-color: rgb(",");\n  }\n"]);return yn=function(){return e},e}function En(){var e=Object(c.a)(["\n    display: flex;\n"]);return En=function(){return e},e}function wn(){var e=Object(c.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return wn=function(){return e},e}function jn(){var e=Object(c.a)(["\n    background: linear-gradient(\n        0deg,\n        "," 9%,\n        "," 100%\n    );\n    height: 100vh;\n    font-size: calc(10px + 2vmin);\n    color: #555;\n    overflow: hidden;\n"]);return jn=function(){return e},e}function On(){return a.a.createElement(kn,null,a.a.createElement(Sn,null,a.a.createElement(Dn,{to:"/"},a.a.createElement(_n,{title:"Zur\xfcck zum Startbereich"},a.a.createElement("img",{alt:"",src:"https://img.icons8.com/material-rounded/24/ffffff/home.png"}))),a.a.createElement(Dn,{to:"/gamearea"},a.a.createElement(_n,{title:"Spiel starten"},a.a.createElement("img",{alt:"",src:"https://img.icons8.com/ios-filled/24/ffffff/circled-play.png"})))),a.a.createElement(j.b,null,a.a.createElement(pn,{path:"/"}),a.a.createElement(Ye,{path:"/gamearea/"})))}var kn=l.a.main(jn(),v,y),Sn=l.a.header(wn()),Dn=Object(l.a)(j.a)(En()),_n=l.a.button(yn(),p,x,E);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(On,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e){e.exports=JSON.parse('{"a":[{"id":1,"category":"Syntax","name":"Child: >","nameDe":"Kinder: >","emmet":"nav>ul>li","result":"<nav>\\n<ul>\\n<li></li>\\n</ul>\\n</nav>","btntext":["nav","ul","li"]},{"id":2,"category":"Syntax","name":"Sibling: +","nameDe":"Geschwister: +","emmet":"div+p+bq","result":"<div></div>\\n<p></p>\\n<blockquote></blockquote>","btntext":["div","p","bq"]},{"id":20,"category":"Syntax","name":"Text: {} (1)","nameDe":"Text: {} (1)","emmet":"a{Click me}","result":"<a href=\\"\\">Click me</a>","btntext":["a","Click me"]},{"id":11,"category":"Syntax","name":"Item numbering: $ (4)","nameDe":"Nummerierung von Elementen: $ (4)","emmet":"ul>li.item$@-*5","result":"<ul>\\n<li class=\\"item5\\"></li>\\n<li class=\\"item4\\"></li>\\n<li class=\\"item3\\"></li>\\n<li class=\\"item2\\"></li>\\n<li class=\\"item1\\"></li>\\n</ul> ","btntext":["ul","li","item","$","@","5"]},{"id":15,"category":"Syntax","name":"ID and CLASS attributes (3)","nameDe":"ID- und CLASS-Attribute (3)","emmet":"form#search.wide","result":"<form id=\\"search\\" class=\\"wide\\"></form> ","btntext":["form","#","search","wide"]},{"id":10,"category":"Syntax","name":"Item numbering: $ (3)","nameDe":"Nummerierung von Elementen: $ (3)","emmet":"ul>li.item$$$*5","result":"<ul>\\n<li class=\\"item001\\"></li>\\n<li class=\\"item002\\"></li>\\n<li class=\\"item003\\"></li>\\n<li class=\\"item004\\"></li>\\n<li class=\\"item005\\"></li>\\n</ul> ","btntext":["ul","li","item","$","5"]},{"id":14,"category":"Syntax","name":"ID and CLASS attributes (2)","nameDe":"ID- und CLASS-Attribute (2)","emmet":".title","result":"<div class=\\"title\\"></div> ","btntext":["title"]},{"id":13,"category":"Syntax","name":"ID and CLASS attributes (1)","nameDe":"ID- und CLASS-Attribute (1)","emmet":"#header","result":"<div id=\\"header\\"></div>","btntext":["#","header"]},{"id":59,"category":"HTML","name":"","nameDe":"","emmet":"img:sizes","emmet2":"img:z","result":"<img sizes=\\"\\" srcset=\\"\\" src=\\"\\" alt=\\"\\" />","btntext":["img","sizes"]},{"id":60,"category":"HTML","name":"","nameDe":"","emmet":"picture","result":"<picture></picture>","btntext":["picture"]},{"id":61,"category":"HTML","name":"","nameDe":"","emmet":"source","emmet2":"src","result":"<source />","btntext":["source"]},{"id":70,"category":"HTML","name":"","nameDe":"","emmet":"iframe","result":"<iframe src=\\"\\" frameborder=\\"0\\"></iframe>","btntext":["iframe"]},{"id":71,"category":"HTML","name":"","nameDe":"","emmet":"embed","result":"<embed src=\\"\\" type=\\"\\" />","btntext":["embed"]},{"id":72,"category":"HTML","name":"","nameDe":"","emmet":"object","result":"<object data=\\"\\" type=\\"\\"></object>","btntext":["object"]},{"id":73,"category":"HTML","name":"","nameDe":"","emmet":"param","result":"<param name=\\"\\" value=\\"\\" />","btntext":["param"]},{"id":74,"category":"HTML","name":"","nameDe":"","emmet":"map","result":" <map name=\\"\\"></map>","btntext":["map"]},{"id":80,"category":"HTML","name":"","nameDe":"","emmet":"form","result":"<form action=\\"\\"></form>","btntext":["form"]},{"id":83,"category":"HTML","name":"","nameDe":"","emmet":"label","result":"<label for=\\"\\"></label>","btntext":["label"]},{"id":84,"category":"HTML","name":"","nameDe":"","emmet":"input","result":"<input type=\\"text\\" />","btntext":["input"]},{"id":86,"category":"HTML","name":"","nameDe":"","emmet":"input:hidden","emmet2":"input:h","alias":"input[type=hidden name]","result":"<input type=\\"hidden\\" name=\\"\\" />","btntext":["input","hidden"]}]}')},9:function(e){e.exports=JSON.parse('{"a":[{"symbol":"+","numeric_code":"&#43;"},{"symbol":"*","numeric_code":"&#42;"},{"symbol":"(","numeric_code":"&#40;"},{"symbol":"\\"","numeric_code":"&#34;"},{"symbol":":","numeric_code":"&#58;"},{"symbol":"<","numeric_code":"&#60;"},{"symbol":"&","numeric_code":"&#38;"},{"symbol":".","numeric_code":"&#46;"},{"symbol":"{","numeric_code":"&#123;"},{"symbol":"!","numeric_code":"&#33;"},{"symbol":"%","numeric_code":"&#37;"},{"symbol":"[","numeric_code":"&#91;"},{"symbol":")","numeric_code":"&#41;"},{"symbol":"/","numeric_code":"&#8725;"},{"symbol":"-","numeric_code":"&#8208;"},{"symbol":">","numeric_code":"&#62;"},{"symbol":";","numeric_code":"&#59;"},{"symbol":"\'","numeric_code":"&#39;"},{"symbol":"}","numeric_code":"&#125;"},{"symbol":",","numeric_code":"&#44;"},{"symbol":"|","numeric_code":"&#124;"},{"symbol":"]","numeric_code":"&#93;"},{"symbol":"=","numeric_code":"&#61;"},{"symbol":"?","numeric_code":"&#63;"},{"symbol":"#","numeric_code":"&#35;"},{"symbol":"$","numeric_code":"&#36;"},{"symbol":"_","numeric_code":"&#95;"},{"symbol":"\\\\","numeric_code":"&#8726;"}]}')}},[[32,1,2]]]);
//# sourceMappingURL=main.65f28296.chunk.js.map