(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{2801:function(t,e,r){"use strict";r.r(e);var o=r(0),n=(r(10),r(2)),c=r(48);var d={name:"IconsSearchPage",layout:"app",scrollToTop:!0,asyncData:function(t){t.app,t.params,t.store,t.redirect,t.res;return{icons:[],error:void 0}},data:function(){return{term:void 0,icons:[],isLoading:!1,page:1,allIconsLoaded:!1,activeGrid:void 0,fetchComplete:!1,parsedParams:void 0,popularPlatforms:{ios7:!0,ios11:!0,androidL:!0,color:!0,win10:!0,Dusk_Wired:!0,p1em:!0}}},computed:Object(o.a)({},Object(n.e)({seo:function(t){return t.seo.data},platforms:function(t){return t.appInfo.platforms},lang:function(t){return t.i18n.locale},iconsGridStyle:function(t){return t.ui.iconsGridStyle},extendedIconsGridStyle:function(t){return t.ui.extendedIconsGridStyle}}),{title:function(){var t=this.$utils.uppercaseFirstLetter(this.$utils.prettifyValue(this.term));return this.$t("WEB_APP.SEO.SEARCH.TITLE",{term:t},"".concat(t," Icon"))},extendedGrid:function(){return"all"===this.$route.params.platform},isScrollDisabled:function(){return this.isLoading||this.allIconsLoaded},gridStyle:function(){return this.extendedGrid?this.extendedIconsGridStyle:this.iconsGridStyle},formatName:function(){if(!this.parsedParams)return null;this.parsedParams.format;return"png"===this.parsedParams.format?" / PNG":"vector"===this.parsedParams.format?" / "+this.$t("ICON.ICONS.FORMAT_VECTOR"):null}}),mounted:function(){this.icons.length||(this.fetchComplete&&this.$analytics.track({event:"Nothing found",category:this.$route.params.platform}),this.fetchData(this.$route.params)),this.$route.params.term!==this.term&&(this.term=this.$route.params.term,this.icons=[],this.fetchData(this.$route.params)),this.parsedParams=Object(c.a)("format",this.$route.params.term)},methods:{fetchData:function(t){var e=this;return new Promise(function(r){e.isLoading=!0,function(t){var e=t.app,r=t.params,n=t.store,d=t.res;return new Promise(function(t){var l=e.$utils.normalizeValue(r.term),f=Object(c.a)("format",l),h=e.$utils.uppercaseFirstLetter(e.$utils.prettifyValue(f.$rootPath));n.dispatch("search",{term:f.$rootPath,platform:"all",amount:150}).then(function(r){!d||r.icons&&r.icons.length||(d.statusCode=404),n.dispatch("updateSEO",{title:e.$t("WEB_APP.SEO.SEARCH.TITLE_ALL",{term:h}),description:e.$t("WEB_APP.SEO.SEARCH.DESCRIPTION",{term:h})}),t(Object(o.a)({term:l},r,{fetchComplete:!0,parsedParams:f}))}).catch(function(e){console.error("page error",e&&e.message?e.message:e),t({term:l,error:{message:e.message}})})})}({app:e,store:e.$store,params:t}).then(function(t){e.isLoading=!1,e.icons=t.icons,e.fetchComplete=t.fetchComplete,r()}).catch(function(t){e.isLoading=!1,console.error("error",t),e.checkError(t),r()})})},checkError:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.error)&&(console.log("this.error",this.error),this.error=void 0)},videoPopup:function(){this.$modal.show("video-popup"+this._uid)},fetchNext:function(){var t=this;if(!this.isLoading&&!this.allIconsLoaded){this.isLoading=!0;var e=this.$route.params.term;this.$store.dispatch("search",{term:e,platform:"all",amount:150,page:this.page+1}).then(function(e){t.page++,e.icons.length?e.icons.forEach(function(e){t.icons.push(e)}):t.allIconsLoaded=!0,t.isLoading=!1}).catch(function(e){t.isLoading=!1,t.fetchErrorsCount++,3===t.fetchErrorsCount&&(t.allIconsLoaded=!0),console.error("page error",e&&e.message?e.message:e)})}}}},l=(r(644),r(1)),component=Object(l.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"icons-search-page"},[r("div",{staticClass:"app-page-section custom-padding"},[r("grid-selector-wrap",{attrs:{extended:t.extendedGrid}}),r("h1",{staticClass:"app-title no-wrap",domProps:{innerHTML:t._s(t.title)}}),r("div",{staticClass:"breadcrumbs"},[r("nuxt-link",{staticClass:"item",attrs:{to:"/icons"}},[t._v(t._s(t.$t("ICON.ICONS.ICONS_LABEL")))]),t.formatName?r("span",{staticClass:"item",domProps:{innerHTML:t._s(t.formatName)}}):t._e(),r("span",{staticClass:"item"},[t._v(" /")])],1)],1),r("div",{staticClass:"app-page-section custom-padding"},[r("app-native-ads"),r("app-ads")],1),t.fetchComplete&&!t.icons.length?r("div",{staticClass:"app-page-section custom-padding"},[r("nothing-found")],1):t._e(),r("div",{staticClass:"app-page-section custom-padding"},[r("page-scroll",{attrs:{"is-disabled":t.isScrollDisabled,"is-loading":t.isLoading},on:{fetch:t.fetchNext}},[r("icon-grid",{attrs:{icons:t.icons,"grid-style":t.gridStyle,action:"select"}})],1)],1)])},[],!1,null,"f03fcbee",null);e.default=component.exports},596:function(t,e,r){var content=r(645);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("0e96e63d",content,!0,{sourceMap:!1})},644:function(t,e,r){"use strict";var o=r(596);r.n(o).a},645:function(t,e,r){(t.exports=r(7)(!1)).push([t.i,".icons-search-page .app-page-section.is-video-preview[data-v-f03fcbee]{min-height:208px}.icons-search-page .video-preview[data-v-f03fcbee]{float:left;width:312px;height:160px;padding-top:32px;margin:24px 32px 24px 0;border-radius:6px;background:#fbefd9;text-align:center;cursor:pointer}@media (max-width:600px){.icons-search-page .video-preview[data-v-f03fcbee]{float:none}}.icons-search-page .play[data-v-f03fcbee]{display:inline-block;width:62px;height:62px}.icons-search-page .video-title[data-v-f03fcbee]{font-size:14px;font-weight:600;color:#4c4c4c}.icons-search-page .video-duration[data-v-f03fcbee]{font-size:14px;color:#999}.icons-search-page .platforms[data-v-f03fcbee]{display:flex;flex-flow:row wrap;justify-content:flex-start;margin:0 -16px}.icons-search-page .platform[data-v-f03fcbee]{background:#f2f2f2;width:312px;padding:16px;margin:16px;border-radius:6px;display:flex;flex-flow:column;justify-content:space-between}.icons-search-page .platform-title[data-v-f03fcbee]{font-size:16px;line-height:16px;margin:8px 12px;font-weight:600;color:#4c4c4c}.icons-search-page .icons[data-v-f03fcbee]{display:flex;flex-flow:row wrap;justify-content:flex-start}.icons-search-page .icon[data-v-f03fcbee]{display:flex;width:50px;height:50px;margin:4px 10px}",""])}}]);