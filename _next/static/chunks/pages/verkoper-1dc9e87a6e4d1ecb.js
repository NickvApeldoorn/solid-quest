(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[500],{45638:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verkoper",function(){return c(38436)}])},88706:function(a,b,c){"use strict";c.d(b,{Z:function(){return y},y:function(){return x}});var d=c(85893),e=c(40478),f=c(9008),g=c.n(f),h=c(41664),i=c.n(h),j=c(41799),k=c(69396),l=c(25675),m=c.n(l),n=function(a){return a.src};function o(a){return(0,d.jsx)(m(),(0,k.Z)((0,j.Z)({},a),{loader:n}))}var p=c(1389),q=c.n(p),r=c(15794),s=c.n(r),t=c(67294);function u(){var a=(0,t.useState)("https://solidcommunity.net"),b=a[0],c=a[1],f=(0,t.useState)("https://localhost:3000"),g=f[0],h=f[1];return(0,t.useEffect)(function(){h(window.location.href)},[h]),(0,d.jsxs)("div",{children:[(0,d.jsx)("input",{id:"idp",placeholder:"Identity Provider",defaultValue:b,onChange:function(a){return c(a.target.value)}}),(0,d.jsx)(e.LoginButton,{authOptions:{clientName:x},oidcIssuer:b,redirectUrl:g,onError:console.error,children:(0,d.jsx)("button",{children:"Log In"})})]})}function v(){var a=(0,e.useSession)(),b=a.session,c=a.sessionRequestInProgress;return(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Connect to Solid POD"}),!c&&b.info.isLoggedIn&&(0,d.jsx)(e.LogoutButton,{onError:console.error,onLogout:function(){return window.location.reload()}}),!c&&!b.info.isLoggedIn&&(0,d.jsx)(u,{})]})}var w="Kadaster",x="Koopovereenkomst Solid App";function y(a){var b=a.children,c=a.home,f=a.role;return(0,d.jsx)("div",{className:[q().container,f].join(" "),children:(0,d.jsxs)(e.SessionProvider,{children:[(0,d.jsxs)(g(),{children:[(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,d.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),(0,d.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(x),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,d.jsx)("meta",{name:"og:title",content:x}),(0,d.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,d.jsxs)("header",{className:q().header,children:[c?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{priority:!0,src:"/solid-quest/images/kadaster.svg",className:s().borderCircle,height:42,width:42,alt:w}),(0,d.jsx)("h1",{className:s().heading2Xl,children:w})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i(),{href:"/",children:(0,d.jsx)("a",{children:(0,d.jsx)(o,{priority:!0,src:"/solid-quest/images/kadaster.svg",className:s().borderCircle,height:42,width:42,alt:w})})}),(0,d.jsx)("h2",{className:s().headingLg,children:(0,d.jsx)(i(),{href:"/",children:(0,d.jsx)("a",{className:s().colorInherit,children:w})})})]}),(0,d.jsx)("div",{className:q().middle}),(0,d.jsx)("div",{className:q().right,children:(0,d.jsx)(v,{})})]}),(0,d.jsx)("main",{children:b}),!c&&(0,d.jsx)("div",{className:q().backToHome,children:(0,d.jsx)(i(),{href:"/",children:(0,d.jsx)("a",{children:"← Main home"})})}),(0,d.jsx)("footer",{className:q().footer,children:(0,d.jsxs)("a",{href:"https://kadaster.nl",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,d.jsx)("span",{className:q().logo,children:(0,d.jsx)(o,{src:"/solid-quest/images/kadaster.svg",alt:"Kadaster Logo",width:72,height:16})})]})})]})})}},38436:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return y}});var d=c(85893),e=c(40478),f=c(9008),g=c.n(f),h=c(47568),i=c(41799),j=c(69396),k=c(34051),l=c.n(k),m=c(15956),n=c(7834),o=c.n(n),p=c(68825),q=c(67294),r={gebouw:"https://data.kkg.kadaster.nl/id/gebouw/",perceel:"https://data.kkg.kadaster.nl/id/perceel/",nen3610:"https://data.kkg.kadaster.nl/nen3610/model/def/",rdfs:"http://www.w3.org/2000/01/rdf-schema#",skos:"http://www.w3.org/2004/02/skos/core#",sor:"https://data.kkg.kadaster.nl/sor/model/def/",xsd:"http://www.w3.org/2001/XMLSchema#"},s={"@context":(0,j.Z)((0,i.Z)({},r),{afkorting:{"@id":"skos:altLabel","@language":"nl"},naam:{"@id":"perceel:naam","@type":"xsd:string"},basisregistratie:{"@id":"rdfs:isDefinedBy","@type":"@id"},beginGeldigheid:{"@id":"nen3610:beginGeldigheid","@type":"xsd:date"},bevatVerblijfsobject:{"@reverse":"sor:maaktDeelUitVan"},domain:{"@id":"rdfs:domain"},geregistreerdMet:{"@id":"sor:geregistreerdMet","@type":"@id"},identificatie:{"@id":"nen3610:identificatie","@type":"xsd:string"},oorspronkelijkBouwjaar:{"@id":"sor:oorspronkelijkBouwjaar","@type":"xsd:gYear"},perceelnummer:{"@id":"sor:perceelnummer","@type":"xsd:integer"},oppervlakte:{"@id":"sor:oppervlakte","@type":"xsd:postiveInteger"},status:{"@id":"sor:status","@type":"@id"}})},t=function(){var a,b=(0,q.useState)("undefined"),c=b[0],e=b[1],f=(0,q.useState)("10020263270000"),g=f[0],i=f[1],j=function(a){i(a.target.value)},k=new(o())("https://api.labs.kadaster.nl/datasets/dst/kkg/services/default/sparql"),n=new m.ZP({context:s,queryEngine:k}),t=n.create({subject:(0,p.namedNode)("".concat(r.perceel).concat(g))}),u=(a=(0,h.Z)(l().mark(function a(){return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("just before calling ..."),a.t0=console,a.t1="perceelnummer: ",a.next=5,t.perceelnummer;case 5:return a.t2=a.sent,a.t3=a.t1.concat.call(a.t1,a.t2),a.t0.log.call(a.t0,a.t3),a.t4=e,a.next=11,t.perceelnummer.value;case 11:a.t5=a.sent,(0,a.t4)(a.t5);case 13:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)});return(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Kadaster Knowledge Graph"}),(0,d.jsx)("input",{type:"text",value:g,onChange:j}),(0,d.jsx)("button",{onClick:u,children:"call KKG"}),(0,d.jsxs)("p",{children:["Perceelnummer: ",c]})]})},u=t,v=c(88706),w=c(38992);function x(){var a=(0,e.useSession)().session.info.webId;return(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Solid POD Profile"}),(0,d.jsx)(e.CombinedDataProvider,{datasetUrl:a,thingUrl:a,children:(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:["name: ",(0,d.jsx)(e.Text,{property:w.xY.name})]}),(0,d.jsxs)("li",{children:["lastname: ",(0,d.jsx)(e.Text,{property:w.xY.lastName})]}),(0,d.jsxs)("li",{children:["firstname: ",(0,d.jsx)(e.Text,{property:w.xY.firstName})]}),(0,d.jsxs)("li",{children:["birthday: ",(0,d.jsx)(e.Text,{property:w.Fv.bday})]})]})})]})}function y(){var a="Verkoper Homepage",b=(0,e.useSession)().session;return(0,d.jsxs)(v.Z,{role:"verkoper",children:[(0,d.jsx)(g(),{children:(0,d.jsx)("title",{children:a})}),(0,d.jsx)("h1",{children:a}),(0,d.jsx)("p",{children:"Content ..."}),!b.info.isLoggedIn&&(0,d.jsx)("p",{children:"NOT logged in"}),b.info.isLoggedIn&&(0,d.jsx)("p",{children:"logged in"}),b.info.isLoggedIn&&(0,d.jsx)(x,{}),b.info.isLoggedIn&&(0,d.jsx)(u,{})]})}},1389:function(a){a.exports={container:"layout_container__5R52X",header:"layout_header__H1FPN",middle:"layout_middle__9dpsE",right:"layout_right__HUtw5",backToHome:"layout_backToHome__tn1X1",footer:"layout_footer__a_vOy"}},15794:function(a){a.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY"}},61139:function(){},34971:function(){},97670:function(){},99283:function(){},43838:function(){},9270:function(){},8080:function(){}},function(a){a.O(0,[771,382,340,872,869,774,888,179],function(){var b;return a(a.s=45638)}),_N_E=a.O()}])