webpackJsonp([8],{"/W4q":function(e,c){},"716R":function(e,c){},qoUc:function(e,c,t){"use strict";var a={name:"ym-checkbox",props:{name:String,disabled:Boolean,title:String,value:Array,"checked-color":{type:String,default:""}},computed:{isChecked:{get:function(){return-1!==this.value.indexOf(this.name)},set:function(e){this.updateParentNodeValue(e)}}},methods:{toggleValue:function(){this.disabled||(this.isChecked=!this.isChecked)},updateParentNodeValue:function(e){var c=this.value.slice();if(e)c.push(this.name);else{var t=c.indexOf(this.name);c.splice(t,1)}this.$emit("input",c)}}},o={render:function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",{staticClass:"ym-checkbox",class:[{"ym-checkbox--checked":e.isChecked,"ym-checkbox--disabled":e.disabled}],on:{click:e.toggleValue}},[t("div",{staticClass:"ym-checkbox__icon"},[e._t("icon",[t("i",{class:[{"iconfont icon-radio_checked":e.isChecked,"ym-icon-checkbox":!e.isChecked}]})])],2),e._v(" "),t("div",{staticClass:"ym-checkbox__label"},[e._t("default",[t("span",{staticClass:"ym-checkbox__text",domProps:{textContent:e._s(e.title)}})])],2)])},staticRenderFns:[]};var l=t("C7Lr")(a,o,!1,function(e){t("/W4q")},null,null).exports;l.install=function(e){e.component(l.name,l)};c.a=l},xYtC:function(e,c,t){"use strict";Object.defineProperty(c,"__esModule",{value:!0});t("IwWi");var a=t("xnKZ"),o=t("jyDz"),l=t("lkey"),s=t("t9vs"),i=t("qoUc"),n={components:{Cell:a.a,Field:s.a,Button:l.a,Checkbox:i.a,CellGroup:o.a},data:function(){return{checkboxGroupValue1:["深圳"],checkboxGroupValue2:["珠海"],checkboxGroupValue3:["深圳"]}},watch:{checkboxGroupValue:function(e){console.log(e)}}},u={render:function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",{staticClass:"page-checkbox"},[t("div",{staticClass:"ym-doc-title"},[e._v("基础用法")]),e._v(" "),t("Checkbox",{staticClass:"item",attrs:{name:"深圳"},model:{value:e.checkboxGroupValue1,callback:function(c){e.checkboxGroupValue1=c},expression:"checkboxGroupValue1"}},[e._v("深圳")]),e._v(" "),t("Checkbox",{staticClass:"item",attrs:{name:"珠海"},model:{value:e.checkboxGroupValue1,callback:function(c){e.checkboxGroupValue1=c},expression:"checkboxGroupValue1"}},[e._v("珠海")]),e._v(" "),t("div",{staticClass:"ym-doc-title"},[e._v("禁用状态")]),e._v(" "),t("Checkbox",{staticClass:"item",attrs:{name:"深圳",disabled:!0},model:{value:e.checkboxGroupValue2,callback:function(c){e.checkboxGroupValue2=c},expression:"checkboxGroupValue2"}},[e._v("深圳")]),e._v(" "),t("Checkbox",{staticClass:"item",attrs:{name:"珠海",disabled:!0},model:{value:e.checkboxGroupValue2,callback:function(c){e.checkboxGroupValue2=c},expression:"checkboxGroupValue2"}},[e._v("珠海")]),e._v(" "),t("CellGroup",{attrs:{title:"Cell搭配使用"}},[t("Cell",{attrs:{title:"深圳"}},[t("Checkbox",{attrs:{slot:"value",name:"深圳",disabled:!1},slot:"value",model:{value:e.checkboxGroupValue3,callback:function(c){e.checkboxGroupValue3=c},expression:"checkboxGroupValue3"}})],1),e._v(" "),t("Cell",{attrs:{title:"珠海"}},[t("Checkbox",{attrs:{slot:"value",name:"珠海",disabled:!1},slot:"value",model:{value:e.checkboxGroupValue3,callback:function(c){e.checkboxGroupValue3=c},expression:"checkboxGroupValue3"}})],1)],1)],1)},staticRenderFns:[]};var r=t("C7Lr")(n,u,!1,function(e){t("716R")},"data-v-65fd60fe",null);c.default=r.exports}});
//# sourceMappingURL=8.c48f327abd8d615e62e9.js.map