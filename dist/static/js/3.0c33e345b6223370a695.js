webpackJsonp([3],{"60z6":function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var r=t("gGbG"),a={components:{Cell:r.f,Field:r.m,Button:r.e,CellGroup:r.g},data:function(){return{demo1:{v1:"测试小雄",v2:"111"},demo2:{v1:"",v2:"",v3:""},rule:[{rule:/\^1[0-9]{10}/,error:"手机号码不正确"}]}},methods:{show:function(){Toast({message:"请勿重复提交订单"})}}},o={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"page-field"},[t("CellGroup",{attrs:{title:"基础用法"}},[t("Field",{attrs:{label:"账户",placeholder:"请输入账户"},model:{value:e.demo1.v1,callback:function(l){e.$set(e.demo1,"v1",l)},expression:"demo1.v1"}})],1),e._v(" "),t("CellGroup",{attrs:{title:"自定义类型"}},[t("Field",{attrs:{label:"number",placeholder:"请输入账户",type:"number"},model:{value:e.demo2.v2,callback:function(l){e.$set(e.demo2,"v2",l)},expression:"demo2.v2"}}),e._v(" "),t("Field",{attrs:{label:"password",placeholder:"请输入密码",type:"password"},model:{value:e.demo2.v3,callback:function(l){e.$set(e.demo2,"v3",l)},expression:"demo2.v3"}})],1),e._v(" "),t("CellGroup",{attrs:{title:"显示清除按钮"}},[t("Field",{attrs:{label:"true",placeholder:"请输入账户",type:"number",clearable:""},model:{value:e.demo2.v2,callback:function(l){e.$set(e.demo2,"v2",l)},expression:"demo2.v2"}})],1),e._v(" "),t("CellGroup",{attrs:{title:"禁用输入框"}},[t("Field",{attrs:{label:"true",placeholder:"请输入账户",type:"text",disabled:""}})],1),e._v(" "),t("CellGroup",{attrs:{title:"长度限制"}},[t("Field",{attrs:{label:"手机号码",placeholder:"请输入手机号码",min:5,max:10,type:"number"},model:{value:e.demo2.v3,callback:function(l){e.$set(e.demo2,"v3",l)},expression:"demo2.v3"}})],1),e._v(" "),t("CellGroup",{attrs:{title:"设置错误提示"}},[t("Field",{attrs:{label:"手机号码",errorMessage:"手机号码格式不正确",placeholder:"请输入手机号码",rule:e.rule,type:"number"}})],1)],1)},staticRenderFns:[]};var s=t("C7Lr")(a,o,!1,function(e){t("BqAi")},"data-v-e1c3d95e",null);l.default=s.exports},BqAi:function(e,l){}});
//# sourceMappingURL=3.0c33e345b6223370a695.js.map