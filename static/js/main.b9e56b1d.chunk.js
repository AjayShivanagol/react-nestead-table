(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{21:function(e,t,s){},23:function(e,t,s){},40:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),r=s(10),o=s.n(r),l=(s(21),s(22),s(23),s(12)),a=s.n(l),d=s(13),c=s.n(d),h=(s(35),s(0));class g extends n.Component{constructor(){super(...arguments),this.onTerminateClick=()=>{console.log("onTerminateClick")},this.onRestartClick=()=>{console.log("onRestartClick")}}render(){const{onCancelClick:e,selectedItems:t}=this.props;return console.log("selectedItems----------------",t),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{type:"submit",className:"btn-default",onClick:this.onTerminateClick,children:Object(h.jsx)("h6",{children:"Restart"})})," ",Object(h.jsx)("button",{type:"submit",className:"btn-default",onClick:this.onRestartClick,children:Object(h.jsx)("h6",{children:"Terminate"})})," ",Object(h.jsx)("button",{type:"submit",className:"btn-default",onClick:e,children:Object(h.jsx)("h6",{children:"Cancel"})})]})}}var p=g,u=s(44),x=s(45),m=s(46),C=s(14),D=s.n(C),R=s(5),f=s.n(R);let I=[],j=[];function L(e){return Array.isArray(e)}function O(e){return e&&"object"===typeof e&&e.constructor===Object}function b(e){return"string"===typeof e&&e.split(".").pop().includes("htm")}function k(e){return e?parseFloat(e.toString().split(".")[0]):""}class y extends n.Component{constructor(e){super(e),this.state={masterChecked:!1,allData:this.props.data,expanded:{},excludeColoumns:["isMaster"],isItemsSelected:!1,selectedItems:[]},this.onCancelClick=this.onCancelClick.bind(this)}componentDidMount(){sessionStorage.setItem("selectedItemsListID",JSON.stringify([]))}onMasterCheckedHandle(e){return e.every((e=>!0===e._original.isMaster))}onCancelClick(){let e=this.state.allData;e=e.map((e=>{if(e.selected=!1,O(e)){function t(e){Object.keys(e).forEach((s=>{e.selected=!1,e.isMaster=!1,O(e[s])&&t(e[s]),L(e[s])&&e[s].map((e=>{O(e)&&t(e)}))}))}t(e)}return e})),this.setState({selectedItems:[],allData:e,masterChecked:!1})}onMasterCheck(e,t){let s=[];s=JSON.parse(sessionStorage.getItem("selectedItemsListID"));let n=this.state.selectedItems;console.log("ddddsssssssssddd------",e,this.state.allData.length,s);let i=this.state.allData;this.state.allData.length===t.length?i=i.map((t=>{if(t.selected=e,e){console.log("tempSelectListId---------------",s.length);let e=s.some((e=>e===t.ID));console.log("isExisitisExisitisExisitisExisit",e),e||(s.push(t.ID),j=[])}else{var i;s=null===(i=s)||void 0===i?void 0:i.filter((e=>e!=t.ID)),j.push(t.ID)}if(O(t)){function n(t){Object.keys(t).forEach((i=>{if(t.selected=e,t.isMaster=e,e){s.some((e=>e===t.ID))||s.push(t.ID)}else{var r;s=null===(r=s)||void 0===r?void 0:r.filter((e=>e!=t.ID))}O(t[i])&&n(t[i]),L(t[i])&&t[i].map((e=>{O(e)&&n(e)}))}))}n(t)}if(e){s.some((e=>e===t.ID))||n.push(t)}else n=[];return t})):t.forEach((t=>{if(console.log("onMasterCheck------",t._original),t._original.selected=e,t._original.isMaster=e,e){let e=s.some((e=>e===t._original.ID));var r;if(console.log("xxxxxxxxxxxxxxxxxxxxxx",e),!e)s.push(t._original.ID),j=null===(r=j)||void 0===r?void 0:r.filter((e=>e!=t._original.ID))}else{var o;s=null===(o=s)||void 0===o?void 0:o.filter((e=>e!=t._original.ID)),j.push(t._original.ID)}!function t(n){if(n.selected=e,n.isMaster=e,e){let e=s.some((e=>e===n.ID));var i;if(console.log("xxxxxxxxxxxxxxxxxxxxxx11111",e),!e)s.push(n.ID),j=null===(i=j)||void 0===i?void 0:i.filter((e=>e!=n.ID))}else{var r;s=null===(r=s)||void 0===r?void 0:r.filter((e=>e!=n.ID)),j.push(n.ID)}Object.keys(n).forEach((e=>{O(n[e])&&t(n[e]),L(n[e])&&n[e].map((e=>{O(e)&&t(e)}))}))}(t._original);const l=k(t._original.ID);if(e){const e=i.filter((e=>e.ID===l));n.some((e=>e.ID===l))||n.push(...e)}else{var a;n=null===(a=n)||void 0===a?void 0:a.filter((e=>e.ID!=l))}})),sessionStorage.setItem("selectedItemsListID",JSON.stringify(s)),console.log("tempSelectedItem----------------------",n),console.log("tempSelectListIdtempSelectListId----------------------",s),console.log("unSelectedItemsListIDunSelectedItemsListIDrrrrrrrrr----------------------",j),this.state.selectedItems=n,this.state.allData=i,this.jequeryCheckbox()}onItemCheck(e,t){let s=JSON.parse(sessionStorage.getItem("selectedItemsListID"))||[],n=this.state.selectedItems,i=this.state.allData;i=i.map((i=>{if(i.ID===t.ID){function r(i){Object.keys(i).forEach((o=>{if(i.selected=e,i.isMaster=e,e){var l;if(!s.some((e=>e===i.ID)))s.push(i.ID),j=null===(l=j)||void 0===l?void 0:l.filter((e=>e!=i.ID))}else{var a;s=null===(a=s)||void 0===a?void 0:a.filter((e=>e!=i.ID)),j.push(i.ID)}if(e){let e=function(e,t){return e.some((e=>e.ID===t.ID))||n.push(t),e};e(n,t)}else{var d;n=null===(d=n)||void 0===d?void 0:d.filter((e=>e.ID!=t.ID))}O(i[o])&&r(i[o]),L(i[o])&&i[o].map((e=>{O(e)&&r(e)}))}))}return r(i),{...i,selected:e}}if(i.ID===k(t.ID)){function o(n){Object.keys(n).forEach((i=>{if(n.ID===t.ID)if(n.selected=e,e){var r;if(!s.some((e=>e===n.ID)))s.push(n.ID),j=null===(r=j)||void 0===r?void 0:r.filter((e=>e!=n.ID))}else{var l;s=null===(l=s)||void 0===l?void 0:l.filter((e=>e!=n.ID)),j.push(n.ID)}O(n[i])&&o(n[i]),L(n[i])&&n[i].map((e=>{O(e)&&o(e)}))}))}if(o(i),e){let e=function(e,t){return e.some((e=>e.ID===t.ID))||n.push(t),e};e(n,t)}else{var r;n=null===(r=n)||void 0===r?void 0:r.filter((e=>e.ID!=t.ID))}}return i})),sessionStorage.setItem("selectedItemsListID",JSON.stringify(s)),console.log("tempSelectListId================-ssss---------------------",s),console.log("selectedItemsListID-ssss---------------------",I),console.log("wwwwwwwwwwwwwwww",n),this.state.selectedItems=n,this.state.allData=i,console.log("this.state.allDatafffffffff---------------------",this.state.allData),this.jequeryCheckbox()}jequeryCheckbox(){const e=JSON.parse(sessionStorage.getItem("selectedItemsListID"))||[];console.log("tempSelectListId2222222222222------",e),console.log("unSelectedItemsListID2222222222222------",j),f()(document).ready((function(){e.length>0?e.map((e=>f()('input[type=checkbox][ID="'+String(e)+'"]').prop("checked",!0))):f()("input[type=checkbox]").prop("checked",!1),j.length>0&&j.map((e=>f()('input[type=checkbox][ID="'+String(e)+'"]').prop("checked",!1)))}))}dataToColumns(e,t,s,n){if(e&&e.length){const i=e[0];return Object.keys(i).map((e=>{const r=i[e],o={Header:t[e]||e,accessor:e,style:{whiteSpace:"unset"},Cell:t=>{let{...s}=t;return Object(h.jsx)("div",{children:Object(h.jsx)(D.a,{lines:1,more:"more",less:"less",widh:"150px",children:s.original[e]})})}};if(this.state.excludeColoumns.includes(e))return{show:!1};if(function(e,t){return"boolean"===typeof e&&"selected"===t}(r,e))return{sortable:!1,Header:e=>Object(h.jsx)("input",{type:"checkbox",ID:e.data.ID,onChange:t=>this.onMasterCheck(t.target.checked,e.data)}),width:65,ID:e,Cell:e=>{let{...t}=e;return Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"checkbox",ID:t.original.ID,onChange:e=>this.onItemCheck(e.target.checked,t.original)})})},style:{cursor:"pointer",textAlign:"center"}};if(O(r)||L(r)||b(r))return{expander:!0,Header:()=>Object(h.jsx)("strong",{children:t[e]||e}),width:65,ID:e,Expander:t=>{let{isExpanded:s,...i}=t;return Object(h.jsx)("div",{children:s&&n[i.index]===e?Object(h.jsx)("span",{children:"\u2299"}):Object(h.jsx)("span",{children:"\u2295"})})},style:{cursor:"pointer",fontSize:25,padding:"0",textAlign:"center",userSelect:"none"}};if(s){const t=s(e,r);if(t)return Object.assign({},o,t)}return function(e){if("string"!==typeof e)return!1;const t=e.split(".").pop();return["jpg","jpeg","png","gif","bmp","tiff"].indexOf(t)>-1}(r)?Object.assign({},o,{Cell:t=>Object(h.jsx)(c.a,{image:{src:t.original[e],alt:e,className:"image"}})}):o}))}return[{Header:"ID",accessor:"ID"}]}renderByData(e,t,s){if(!e)return null;if(b(e))return Object(h.jsx)("iframe",{src:e,style:{height:"50vh",width:"100%"}});if(O(e)&&(e=[e]),L(e)){const n=e[0];let i={};if(!O(n)&&!L(n))return Object(h.jsx)("ul",{children:e.map(((e,t)=>Object(h.jsx)("li",{children:e},"nested_table_".concat(t))))});const r=this.dataToColumns(e,t,s,i);return Object(h.jsx)(a.a,{data:e,columns:r,className:"-striped -highlight",minRows:0,defaultPageSize:5,showPagination:!!(e&&e.length>5),SubComponent:e=>{const n=i[e.index];return console.log("currentExpandedKey------------------",n,this.state.expanded),console.log("coloumnData------------------",[]),this.jequeryCheckbox(),Object(h.jsxs)("div",{className:"react-nested-table-inner",children:[Object(h.jsx)("h4",{className:"title",children:t[n]||n}),this.renderByData(e.original[n],t,s)]})},getTdProps:(e,t,s,n)=>({onClick:(e,n)=>{s.expander&&(i[t.index]=s.ID),console.log("currentExpandedKeys------",i),n&&n()}})})}}render(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("br",{}),Object(h.jsx)(u.a,{children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)(m.a,{xs:{order:"first"}}),Object(h.jsx)(m.a,{xs:!0,children:Object(h.jsx)(p,{selectedItems:this.state.selectedItems,selectedItems:this.state.selectedItems,selectedItems:this.state.selectedItems,selectedItems:this.state.selectedItems,selectedItems:this.state.selectedItems,onCancelClick:this.onCancelClick})}),Object(h.jsx)(m.a,{xs:{order:"last"}})]})}),Object(h.jsx)("br",{}),this.renderByData(this.state.allData,this.props.headersMap,this.props.onCellDisplay)]})}}y.defaultProps={data:[],headersMap:{}};var T=y,v=(s(40),s(15)),A=s.n(v);class F extends i.a.Component{constructor(e){super(e),this.state={objectType:window.objectType,businessProfilesOption:[{name:"Business Profile Approved",type:"bp"},{name:"Business Profile In Progress - Op Risk",type:"bp"},{name:"Business Profile Instances",type:"bp"},{name:"BU/SU Profile",type:"bp"}],risksOption:[{name:"Effective",type:"risk"},{name:"Not determined",type:"risk"},{name:"Low",type:"risk"},{name:"Medium",type:"risk"},{name:"Impact",type:"risk"},{name:"very High",type:"risk"},{name:"Paratially Effective",type:"risk"},{name:"Ineffective",type:"risk"}],controlsOptions:[{name:"Active",type:"control"},{name:"Draft",type:"control"}]}}componentDidMount(){}renderCheckbox(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"checkbox",id:"scales",name:"scales"}),Object(h.jsx)("label",{for:"scales",children:"Residual Risk Rating"})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"checkbox",id:"horns",name:"horns"}),Object(h.jsx)("label",{for:"horns",children:"CAP Test Scope"})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"checkbox",id:"horns",name:"horns"}),Object(h.jsx)("label",{for:"horns",children:"Taxonomy"})]}),Object(h.jsx)("br",{})]})}renderMultiselect(){const{businessProfilesOption:e,risksOption:t,controlsOptions:s}=this.state,n=[e,t,s,s];return["Business Profiles","Risks","Controls"].map(((e,t)=>Object(h.jsxs)(h.Fragment,{children:[" ",Object(h.jsx)(A.a,{options:n[t],onSelect:this.props.onselect,onRemove:this.props.onremove,displayValue:"name",showCheckbox:!0,placeholder:e,closeOnSelect:!1,showArrow:"true",avoidHighlightFirstOption:"false",style:{multiselectContainer:{width:"100%"}}},t),Object(h.jsx)("br",{})]})))}render(){return Object(h.jsxs)("div",{className:"sidebar",id:"sidebar",children:[Object(h.jsxs)("h6",{children:[" ",Object(h.jsx)("span",{className:"text",children:"Custom Filters"}),Object(h.jsx)("br",{})]}),Object(h.jsx)("div",{className:"hrline",children:Object(h.jsx)("hr",{})}),Object(h.jsx)("div",{className:"textaction",children:Object(h.jsxs)("ul",{className:"actionitems",children:[this.renderMultiselect(),this.renderCheckbox(),Object(h.jsx)("button",{type:"submit",size:"lg",className:"btn-default",children:"Apply"})," ",Object(h.jsx)("button",{type:"submit",size:"lg",className:"btn-default",children:"Cancel"})]})})]})}}var S=F;const w={name:"Full Name",companyName:"Company Name"},E=()=>!0;class N extends n.Component{render(){return Object(h.jsxs)("div",{class:"maincontainer1",children:[Object(h.jsx)("div",{class:"leftcolumn",children:Object(h.jsx)(S,{})}),Object(h.jsx)("div",{class:"contentwrapper",children:Object(h.jsx)(T,{data:P,headersMap:w,onCellDisplay:E})})]})}}var M=N;const P=[{isMaster:!1,selected:!1,ID:0,Name:"0940375C025200FAA38ED98A F9DE03D61ADAB727BA8C26D4 04D95D3","Business Profile Owner":"Gary Dingley",Folder:"out-of-the-box strategize methodologies","Profile Type":"Greenholt, Smith and Brekke",Risk:[{isMaster:!1,selected:!1,ID:.1,Name:"0940375C025200FAA38ED98A F9DE03D61ADAB727BA8C26D4 66666","Risk Owner":"Gary Dingley","Risk Taxonomy":"Lindgren","Inherent Risk Rating":"Lindgren","Overall Control Effectiveness Rating and Residual Risk Rating":"Lindgren","Residual L2 Approval Status":"Lindgren","Residual L2 Date":"Residual L2 Date","Risk Treatment":"Lindgren",Folder:"CBA / TRQ / FOLDER",Control:[{isMaster:!1,selected:!1,ID:.2,"Control Owner":"333333","Control Taxonomy Hierarchy":"North Laurineshire","Control Type 3":"Jerde Spring","Control Classification":"Control Classification","CAP Testing Scope":"CAP Testing Scope",Folder:"Folder / Folder /Folder"},{isMaster:!1,selected:!1,ID:.21,"Control Owner":"333333","Control Taxonomy Hierarchy":"North Laurineshire","Control Type 3":"Jerde Spring","Control Classification":"Control Classification","CAP Testing Scope":"CAP Testing Scope",Folder:"Folder / Folder /Folder"}]},{isMaster:!1,selected:!1,ID:.11,Name:"Tiaxxxxxnna","Risk Owner":"Susheel Mulgund","Risk Taxonomy":"Lindgren","Inherent Risk Rating":"Lindgren","Overall Control Effectiveness Rating and Residual Risk Rating":"Lindgren","Residual L2 Approval Status":"Lindgren","Residual L2 Date":"Residual L2 Date","Risk Treatment":"Lindgren",Folder:"CBA / TRQ / FOLDER"}]},{isMaster:!1,selected:!1,ID:1,Name:"0940375C025200FAA38ED98A F9DE03D61ADAB727BA8C26D4 ABCD","Business Profile Owner":"owner ",Folder:"out-of-the-box strategize methodologies","Profile Type":"Greenholt, Smith and Brekke",Risk:[{isMaster:!1,selected:!1,ID:1.1,Name:"Tiaxxxxxnna","Risk Owner":"Lindgren","Risk Taxonomy":"Lindgren","Inherent Risk Rating":"Lindgren","Overall Control Effectiveness Rating and Residual Risk Rating":"Lindgren","Residual L2 Approval Status":"Lindgren","Residual L2 Date":"Residual L2 Date","Risk Treatment":"Lindgren",Folder:"CBA / TRQ / FOLDER",Control:[{isMaster:!1,selected:!1,ID:1.2,"Control Owner":"333333","Control Taxonomy Hierarchy":"North Laurineshire","Control Type 3":"Jerde Spring","Control Classification":"Control Classification","CAP Testing Scope":"CAP Testing Scope",Folder:"Folder / Folder /Folder"},{isMaster:!1,selected:!1,ID:1.21,"Control Owner":"333333","Control Taxonomy Hierarchy":"North Laurineshire","Control Type 3":"Jerde Spring","Control Classification":"Control Classification","CAP Testing Scope":"CAP Testing Scope",Folder:"Folder / Folder /Folder"}]},{isMaster:!1,selected:!1,ID:1.11,Name:"Tiaxxxxxnna","Risk Owner":"Lindgren","Risk Taxonomy":"Lindgren","Inherent Risk Rating":"Lindgren","Overall Control Effectiveness Rating and Residual Risk Rating":"Lindgren","Residual L2 Approval Status":"Lindgren","Residual L2 Date":"Residual L2 Date","Risk Treatment":"Lindgren",Folder:"CBA / TRQ / FOLDER"}]},{isMaster:!1,selected:!1,ID:2,Name:"0940375C025200FAA38ED98A F9DE03D61ADAB727BA8C26D4","Business Profile Owner":"Susheel",Folder:"out-of-the-box strategize methodologies","Profile Type":"Greenholt, Smith and Brekke",Risk:[{isMaster:!1,selected:!1,ID:2.1,Name:"Tiaxxxxxnna","Risk Owner":"Lindgren","Risk Taxonomy":"Lindgren","Inherent Risk Rating":"Lindgren","Overall Control Effectiveness Rating and Residual Risk Rating":"Lindgren","Residual L2 Approval Status":"Lindgren","Residual L2 Date":"Residual L2 Date","Risk Treatment":"Lindgren",Folder:"CBA / TRQ / FOLDER",Control:[{isMaster:!1,selected:!1,ID:2.2,"Control Owner":"333333","Control Taxonomy Hierarchy":"North Laurineshire","Control Type 3":"Jerde Spring","Control Classification":"Control Classification","CAP Testing Scope":"CAP Testing Scope",Folder:"Folder / Folder /Folder"},{isMaster:!1,selected:!1,ID:2.21,"Control Owner":"333333","Control Taxonomy Hierarchy":"North Laurineshire","Control Type 3":"Jerde Spring","Control Classification":"Control Classification","CAP Testing Scope":"CAP Testing Scope",Folder:"Folder / Folder /Folder"}]},{isMaster:!1,selected:!1,ID:2.11,Name:"Tiaxxxxxnna","Risk Owner":"Lindgren","Risk Taxonomy":"Lindgren","Inherent Risk Rating":"Lindgren","Overall Control Effectiveness Rating and Residual Risk Rating":"Lindgren","Residual L2 Approval Status":"Lindgren","Residual L2 Date":"Residual L2 Date","Risk Treatment":"Lindgren",Folder:"CBA / TRQ / FOLDER"}]},{isMaster:!1,selected:!1,ID:3,Name:"F9DE03D61ADAB727BA8C26D4 04D95D3 0940375C025200FAA38ED98A","Business Profile Owner":"Shivanagol",Folder:"out-of-the-box strategize methodologies","Profile Type":"Greenholt, Smith and Brekke",Risk:[{isMaster:!1,selected:!1,ID:3.1,Name:"Tiaxxxxxnna","Risk Owner":"Lindgren","Risk Taxonomy":"Lindgren","Inherent Risk Rating":"Lindgren","Overall Control Effectiveness Rating and Residual Risk Rating":"Lindgren","Residual L2 Approval Status":"Lindgren","Residual L2 Date":"Residual L2 Date","Risk Treatment":"Lindgren",Folder:"CBA / TRQ / FOLDER",Control:[{isMaster:!1,selected:!1,ID:3.2,"Control Owner":"333333","Control Taxonomy Hierarchy":"North Laurineshire","Control Type 3":"Jerde Spring","Control Classification":"Control Classification","CAP Testing Scope":"CAP Testing Scope",Folder:"Folder / Folder /Folder"},{isMaster:!1,selected:!1,ID:3.21,"Control Owner":"333333","Control Taxonomy Hierarchy":"North Laurineshire","Control Type 3":"Jerde Spring","Control Classification":"Control Classification","CAP Testing Scope":"CAP Testing Scope",Folder:"Folder / Folder /Folder"}]},{isMaster:!1,selected:!1,ID:3.11,Name:"Tiaxxxxxnna","Risk Owner":"Lindgren","Risk Taxonomy":"Lindgren","Inherent Risk Rating":"Lindgren","Overall Control Effectiveness Rating and Residual Risk Rating":"Lindgren","Residual L2 Approval Status":"Lindgren","Residual L2 Date":"Residual L2 Date","Risk Treatment":"Lindgren",Folder:"CBA / TRQ / FOLDER"}]},{isMaster:!1,selected:!1,ID:4,Name:"ADCCF9DE03D61ADAB727BA8C26D4 04D95D3 0940375C025200FAA38ED98A","Business Profile Owner":"Considine",Folder:"out-of-the-box strategize methodologies","Profile Type":"Greenholt, Smith and Brekke",Risk:[{isMaster:!1,selected:!1,ID:4.1,Name:"Tiaxxxxxnna","Risk Owner":"Lindgren","Risk Taxonomy":"Lindgren","Inherent Risk Rating":"Lindgren","Overall Control Effectiveness Rating and Residual Risk Rating":"Lindgren","Residual L2 Approval Status":"Lindgren","Residual L2 Date":"Residual L2 Date","Risk Treatment":"Lindgren",Folder:"CBA / TRQ / FOLDER",Control:[{isMaster:!1,selected:!1,ID:4.2,"Control Owner":"333333","Control Taxonomy Hierarchy":"North Laurineshire","Control Type 3":"Jerde Spring","Control Classification":"Control Classification","CAP Testing Scope":"CAP Testing Scope",Folder:"Folder / Folder /Folder"},{isMaster:!1,selected:!1,ID:4.21,"Control Owner":"333333","Control Taxonomy Hierarchy":"North Laurineshire","Control Type 3":"Jerde Spring","Control Classification":"Control Classification","CAP Testing Scope":"CAP Testing Scope",Folder:"Folder / Folder /Folder"}]},{isMaster:!1,selected:!1,ID:4.11,Name:"Tiaxxxxxnna","Risk Owner":"Lindgren","Risk Taxonomy":"Lindgren","Inherent Risk Rating":"Lindgren","Overall Control Effectiveness Rating and Residual Risk Rating":"Lindgren","Residual L2 Approval Status":"Lindgren","Residual L2 Date":"Residual L2 Date","Risk Treatment":"Lindgren",Folder:"CBA / TRQ / FOLDER"}]},{isMaster:!1,selected:!1,ID:5,Name:"F9DE03D61ADAB727BA8C26D4 0940375C025200FAA38ED98A","Business Profile Owner":"Abhilash",Folder:"out-of-the-box strategize methodologies","Profile Type":"Greenholt, Smith and Brekke",Risk:[{isMaster:!1,selected:!1,ID:5.1,Name:"Tiaxxxxxnna","Risk Owner":"Lindgren","Risk Taxonomy":"Lindgren","Inherent Risk Rating":"Lindgren","Overall Control Effectiveness Rating and Residual Risk Rating":"Lindgren","Residual L2 Approval Status":"Lindgren","Residual L2 Date":"Residual L2 Date","Risk Treatment":"Lindgren",Folder:"CBA / TRQ / FOLDER",Control:[{isMaster:!1,selected:!1,ID:5.2,"Control Owner":"333333","Control Taxonomy Hierarchy":"North Laurineshire","Control Type 3":"Jerde Spring","Control Classification":"Control Classification","CAP Testing Scope":"CAP Testing Scope",Folder:"Folder / Folder /Folder"},{isMaster:!1,selected:!1,ID:5.21,"Control Owner":"333333","Control Taxonomy Hierarchy":"North Laurineshire","Control Type 3":"Jerde Spring","Control Classification":"Control Classification","CAP Testing Scope":"CAP Testing Scope",Folder:"Folder / Folder /Folder"}]},{isMaster:!1,selected:!1,ID:5.11,Name:"Tiaxxxxxnna","Risk Owner":"Lindgren","Risk Taxonomy":"Lindgren","Inherent Risk Rating":"Lindgren","Overall Control Effectiveness Rating and Residual Risk Rating":"Lindgren","Residual L2 Approval Status":"Lindgren","Residual L2 Date":"Residual L2 Date","Risk Treatment":"Lindgren",Folder:"CBA / TRQ / FOLDER"}]}];class B extends n.Component{render(){return Object(h.jsx)("div",{children:Object(h.jsx)(M,{})})}}var J=B;o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b9e56b1d.chunk.js.map