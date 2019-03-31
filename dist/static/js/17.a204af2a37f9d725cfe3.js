webpackJsonp([17],{ZfoJ:function(v,_,t){"use strict";Object.defineProperty(_,"__esModule",{value:!0});var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("section",[t("h1",[v._v("RegionSlider 双向滑块")]),v._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[v._v("import")]),v._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[v._v("from")]),v._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[v._v("'vue'")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[v._v("import")]),v._v(" { RegionSlider } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[v._v("from")]),v._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[v._v("'ymu'")]),v._v("\n\nVue.use(RegionSlider)\n")])]),v._v(" "),t("h2",[v._v("Props")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("属性")]),v._v(" "),t("th",[v._v("描述")]),v._v(" "),t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("可选值")]),v._v(" "),t("th",[v._v("默认值")]),v._v(" "),t("th",[v._v("版本说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("v-model")]),v._v(" "),t("td",[v._v("当前数值(数组)，第一项为左值，第二项为右值")]),v._v(" "),t("td",[v._v("Array")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")])]),v._v(" "),t("tr",[t("td",[v._v("min")]),v._v(" "),t("td",[v._v("最小可选")]),v._v(" "),t("td",[v._v("Number")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("0")])]),v._v(" "),t("tr",[t("td",[v._v("max")]),v._v(" "),t("td",[v._v("最大可选")]),v._v(" "),t("td",[v._v("Number")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("100")]),v._v(" "),t("td",[v._v("-")])]),v._v(" "),t("tr",[t("td",[v._v("runwayHeight")]),v._v(" "),t("td",[v._v("轨道高度")]),v._v(" "),t("td",[v._v("Number")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("2")]),v._v(" "),t("td",[v._v("-")])]),v._v(" "),t("tr",[t("td",[v._v("runwayColor")]),v._v(" "),t("td",[v._v("轨道默认背景颜色")]),v._v(" "),t("td",[v._v("String")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")])]),v._v(" "),t("tr",[t("td",[v._v("trackColor")]),v._v(" "),t("td",[v._v("轨道高亮背景颜色")]),v._v(" "),t("td",[v._v("Number")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")])]),v._v(" "),t("tr",[t("td",[v._v("thumbColor")]),v._v(" "),t("td",[v._v("手柄背景颜色")]),v._v(" "),t("td",[v._v("String")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")])]),v._v(" "),t("tr",[t("td",[v._v("step")]),v._v(" "),t("td",[v._v("滑动倍数")]),v._v(" "),t("td",[v._v("Number")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("1")]),v._v(" "),t("td",[v._v("-")])]),v._v(" "),t("tr",[t("td",[v._v("disabled")]),v._v(" "),t("td",[v._v("禁用状态")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")])])])]),v._v(" "),t("h2",[v._v("Slots")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名字")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("start")]),v._v(" "),t("td",[v._v("start 插槽")])]),v._v(" "),t("tr",[t("td",[v._v("end")]),v._v(" "),t("td",[v._v("end 插槽")])])])]),v._v(" "),t("h2",[v._v("Events")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("名字")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("input")]),v._v(" "),t("td",[v._v("-")])])])]),v._v(" "),t("h2",[v._v("Sass vars")]),v._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-sass"}},[v._v("$slider-height: 24px;\n$slider-runway-height: 2px;\n$slider-runway-bg-color: #EBEBEB;\n$slider-track-bg-color: $color-primary;\n$slider-thumb-width: 24px;\n$slider-thumb-height: 24px;\n$slider-thumb-bg-color: #fff;\n$slider-disabled-opacity: .6;\n")])])])}]},d=t("VU/8")(null,r,!1,null,null,null);_.default=d.exports},cydt:function(v,_,t){v.exports=t("ZfoJ")}});
//# sourceMappingURL=17.a204af2a37f9d725cfe3.js.map