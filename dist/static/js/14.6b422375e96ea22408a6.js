webpackJsonp([14],{"9s4I":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"ym-notice-bar",data:function(){return{offset:0,currentOffset:0,timeId:null}},props:{wait:{type:Number,default:2e3},frequence:{type:Number,default:40},loop:{type:Boolean,default:!0}},computed:{style:function(){return{left:this.currentOffset+"px"}}},methods:{caclSize:function(){var t=this.$refs.barContent,e=this.$refs.marqueeWrap,i=t.clientWidth,s=e.offsetWidth;this.offset=i-s},play:function(){var t=this;this.currentOffset--,this.currentOffset<this.offset?this.loop&&(this.timeId=setTimeout(function(){t.currentOffset=0,t.play()},this.wait)):this.timeId=setTimeout(function(){t.play()},this.frequence)}},mounted:function(){this.caclSize(),this.play()},beforeDestroy:function(){clearTimeout(this.timeId)}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ym-notice-bar"},[e("div",{staticClass:"ym-notice-bar__left-icon"},[this._t("icon-left",[e("i",{staticClass:"iconfont icon-voice"})])],2),this._v(" "),e("div",{ref:"barContent",staticClass:"ym-notice-bar__content"},[e("div",{ref:"marqueeWrap",staticClass:"ym-notice-bar__marquee-wrap",style:this.style},[this._t("default")],2)]),this._v(" "),e("div",{staticClass:"ym-notice-bar__right-icon"},[this._t("icon-right")],2)])},staticRenderFns:[]};var o=i("C7Lr")(s,a,!1,function(t){i("jOeH")},null,null).exports;o.install=function(t){t.component(o.name,o)};var c={components:{NoticeBar:o}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-notice-bar"},[i("div",{staticClass:"ym-doc-block"},[i("div",{staticClass:"ym-doc-block__title"},[t._v("基础用法")]),t._v(" "),i("div",{staticClass:"ym-doc-block__content"},[i("NoticeBar",[i("p",[t._v("Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day.")])])],1)]),t._v(" "),i("div",{staticClass:"ym-doc-block"},[i("div",{staticClass:"ym-doc-block__title"},[t._v("设置frequency(100)")]),t._v(" "),i("div",{staticClass:"ym-doc-block__content"},[i("NoticeBar",{attrs:{frequence:100}},[i("p",[t._v("Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day.")])])],1)]),t._v(" "),i("div",{staticClass:"ym-doc-block"},[i("div",{staticClass:"ym-doc-block__title"},[t._v("设置loop(false)")]),t._v(" "),i("div",{staticClass:"ym-doc-block__content"},[i("NoticeBar",{attrs:{frequence:100,loop:!1}},[i("p",[t._v("Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day.")])])],1)]),t._v(" "),i("div",{staticClass:"ym-doc-block"},[i("div",{staticClass:"ym-doc-block__title"},[t._v("设置右边icon")]),t._v(" "),i("div",{staticClass:"ym-doc-block__content"},[i("NoticeBar",{attrs:{frequence:100,loop:!1}},[i("span",{attrs:{slot:"icon-right"},slot:"icon-right"},[i("i",{staticClass:"iconfont icon-voice"})]),t._v(" "),i("p",[t._v("Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day.")])])],1)])])},staticRenderFns:[]},l=i("C7Lr")(c,n,!1,null,null,null);e.default=l.exports},jOeH:function(t,e){}});
//# sourceMappingURL=14.6b422375e96ea22408a6.js.map