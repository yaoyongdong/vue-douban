webpackJsonp([2],{29:function(t,e,s){var a=s(0)(s(32),s(35),null,null,null);a.options.__file="C:\\Users\\Administrator\\Desktop\\moviecat\\app\\detail\\detail.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},32:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{data:"",iscreated:!1}},created:function(){this.render()},methods:{render:function(){var t=this;t.$store.commit("markOff");var e="https://api.douban.com/v2/movie/subject/"+t.$route.params.id;t.jsonp(e,{},function(e){t.iscreated=!0,t.data=e,t.$store.commit("markOn"),console.log(t.data)})}}}},35:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.iscreated?s("div",{staticClass:"detail"},[s("h1",[t._v(t._s(t.data.title))]),t._v(" "),s("div",{staticClass:"dt-info"},[s("div",{staticClass:"dti-i"},[s("img",{attrs:{src:t.data.images.large,alt:""}})]),t._v(" "),s("div",{staticClass:"dti-w"},[s("p",[s("strong",[t._v("导演：")]),t._v(" "),t._l(t.data.directors,function(e,a){return s("span",{key:e.id},[t._v(t._s(e.name)+t._s(t.data.directors.length==a+1?"":"、"))])})],2),t._v(" "),s("p",[s("strong",[t._v("主演：")]),t._v(" "),t._l(t.data.casts,function(e,a){return s("span",{key:e.id},[t._v(t._s(e.name)+t._s(t.data.casts.length==a+1?"":"、"))])})],2),t._v(" "),s("p",[s("strong",[t._v("类型：")]),t._v(t._s(t.data.genres.join("、")))]),t._v(" "),s("p",[s("strong",[t._v("国家：")]),t._v(t._s(t.data.countries.join("、")))]),t._v(" "),s("p",[s("strong",[t._v("评分：")]),t._v(t._s(t.data.rating.average))]),t._v(" "),s("p",[s("strong",[t._v("时间：")]),t._v(t._s(t.data.year))]),t._v(" "),s("p",[s("strong",[t._v("又名：")]),t._v(t._s(t.data.aka.join("、")))])])]),t._v(" "),s("h3",[t._v("剧情简介:")]),t._v(" "),s("p",{staticStyle:{color:"#676767"}},[t._v(t._s(t.data.summary))])]):s("div")},staticRenderFns:[]},t.exports.render._withStripped=!0}});