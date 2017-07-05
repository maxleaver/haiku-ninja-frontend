webpackJsonp([1],Array(23).concat([function(e,t,n){var r=n(0)(n(89),n(170),null,null,null);r.options.__file="/Users/maxleaver/Documents/Repositories/haiku-ninja-frontend/src/App.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},,function(e,t,n){"use strict";t.a={title:"Haiku Ninja",tagline:"Finding Zen in YouTube Comments",inputLabel:"Search YouTube or Enter a YouTube URL",inputPlaceholder:"Search",submitButton:"Find inner peace",loadingHeader:"Finding Zen",stopSearchButton:"Stop Searching",resetButton:"Start Over",pickAnotherButton:"Pick another video",retrySearchButton:"Try a different search",previousButton:"Previous",nextButton:"Next",foundHaiku:"Found {found} Haiku in {searched} comments",errors:{generic:"An unknown error occured while trying to get comments.",badRequest:"There was an error trying to send your request",forbidden:"Your video is private, so we can't get any comments.",notFound:"Your video couldn't be found. It may be private. Check the URL and try again.",commentsDisabled:"Sorry, comments are disabled on that video.",quotaExceeded:"A lot of people are finding Zen and we've exceeded our request quota with YouTube. Try again tomorrow.",noInput:"You cannot find what you do not seek. Enter a URL or search term into the field below."}}},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"l",function(){return r}),n.d(t,"m",function(){return o}),n.d(t,"n",function(){return s}),n.d(t,"f",function(){return i}),n.d(t,"i",function(){return a}),n.d(t,"k",function(){return u}),n.d(t,"o",function(){return c}),n.d(t,"j",function(){return l}),n.d(t,"e",function(){return d}),n.d(t,"b",function(){return p}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return h}),n.d(t,"h",function(){return v}),n.d(t,"d",function(){return m}),n.d(t,"g",function(){return _});var r="VIDEO_REQUEST",o="VIDEO_SUCCESS",s="VIDEO_FAILURE",i="VIDEO_SHOW",a="HAIKU_REQUEST",u="HAIKU_SUCCESS",c="HAIKU_FAILURE",l="HAIKU_SHOW",d="HAIKU_CLEAR",p="INCREMENT_HAIKU",f="DECREMENT_HAIKU",h="UPDATE_FORM",v="CLEAR_RESULTS",m="RESET_APP",_="SHOW_ERROR"},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(37),o=n.n(r),s=n(61),i=n(181),a=(n.n(i),n(180)),u=n.n(a),c=n(88),l=n(85),d=n(86),p=n(25);o.a.use(s.a);var f=new s.a.Store({state:c.a,mutations:c.b,actions:l,getters:d,strict:!1,plugins:[]});o.a.use(u.a.plugin,f),o.a.i18n.add("en",p.a),o.a.i18n.set("en"),t.a=f},function(e,t){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(37),o=n.n(r),s=n(23),i=n.n(s),a=n(62);o.a.component("app",n(23)),n(63),new o.a({el:"#app",store:a.a,template:"<App/>",components:{App:i.a}})},function(e,t,n){"use strict";var r=n(103),o=n.n(r),s=n(106),i=n.n(s),a=n(107),u=n.n(a),c=n(64),l=n.n(c),d=function(){function e(){i()(this,e),this.CancelToken=l.a.CancelToken,this.source=this.CancelToken.source()}return u()(e,[{key:"cancelRequest",value:function(){this.source.cancel("Operation cancelled by user"),this.source=this.CancelToken.source()}},{key:"get",value:function(e,t){return this.callApi("get",e,t)}},{key:"callApi",value:function(e,t,n){var r=this;return new o.a(function(o,s){l()({method:e,url:"https://api.haikuninja.com"+t,params:n,cancelToken:r.source.token}).then(function(e){o(e.data)}).catch(function(e){l.a.isCancel(e)&&o(),s(e)})})}}]),e}();t.a=d},function(e,t,n){"use strict";var r=n(110),o=n.n(r),s=n(25);t.a=function(e){function t(e){var t={400:s.a.errors.badRequest,401:s.a.errors.forbidden,403:s.a.errors.forbidden,404:s.a.errors.notFound,422:s.a.errors.badRequest};return e in t?t[e]:s.a.errors.generic}function n(e){var t={operationNotSupported:"",processingFailure:"",incompatibleParameters:"",invalidFilters:"",invalidPageToken:"",missingRequiredParameter:"",unexpectedParameter:"",unexpectedPart:"",unknownPart:"",commentsDisabled:s.a.errors.commentsDisabled,forbidden:s.a.errors.forbidden,quotaExceeded:s.a.errors.quotaExceeded,videoNotFound:s.a.errors.notFound};if(e in t)return t[e]}function r(e,t){for(var n=t.split("."),r=0,s=n.length;r<s;r++){var i=n[r];if(!(null!==e&&"object"===(void 0===e?"undefined":o()(e))&&i in e))return!1;e=e[i]}return!0}this.reason=function(){var o,i=r(e,"response"),a=r(e,"response.status"),u=r(e,"response.data.error.errors");return i&&u&&(o=n(e.response.data.error.errors[0].reason))?o:i&&a&&(o=t(e.response.status))?o:s.a.errors.generic}}},function(e,t,n){"use strict";function r(e){var t=[];return e.hasOwnProperty("haiku")&&e.haiku&&(t=e.haiku),t}function o(e){var t=0;return e.hasOwnProperty("commentsSearched")&&e.commentsSearched&&(t=e.commentsSearched),t}function s(e){return new c.a(e).reason()}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"decrementHaiku",function(){return f}),n.d(t,"incrementHaiku",function(){return h}),n.d(t,"updateForm",function(){return v}),n.d(t,"resetApp",function(){return m}),n.d(t,"showVideoResults",function(){return _}),n.d(t,"submitForm",function(){return k}),n.d(t,"fetchHaiku",function(){return g}),n.d(t,"fetchVideos",function(){return x}),n.d(t,"cancel",function(){return b});var i=n(83),a=n(149),u=n.n(a),c=n(84),l=n(43),d=n(25),p=new i.a,f=function(e){(0,e.commit)(l.a)},h=function(e){(0,e.commit)(l.b)},v=function(e,t){(0,e.commit)(l.c,t.target.value)},m=function(e){(0,e.commit)(l.d)},_=function(e){var t=e.commit;t(l.e),t(l.f)},k=function(e){var t=e.commit,n=e.dispatch,r=e.state;if(!r.formInput)return void t(l.g,d.a.errors.noInput);t(l.h);var o=u()(r.formInput,{fuzzy:!1});if(o)return void g({commit:t,dispatch:n},{id:o,nextPageToken:null});x({commit:t,dispatch:n},{q:r.formInput,nextPageToken:null})},g=function e(t,n){var i=t.commit,a=t.dispatch,u=n.hasOwnProperty("nextPageToken")?n.nextPageToken:null;if(!n.hasOwnProperty("id")||!n.id)return void i(l.g,d.a.errors.badRequest);i(l.i),p.get("/comments",{id:n.id,nextPageToken:u,type:"youtube"}).then(function(t){return void 0!==t&&t?(i(l.k,{haiku:r(t),searched:o(t)}),t.hasOwnProperty("nextPageToken")&&t.nextPageToken?void e({commit:i,dispatch:a},{id:n.id,nextPageToken:t.nextPageToken}):void i(l.j)):void i(l.j)}).catch(function(e){i(l.g,s(e))})},x=function(e,t){var n=e.commit,r=(e.dispatch,t.hasOwnProperty("nextPageToken")?t.nextPageToken:null);if(!t.hasOwnProperty("q")||!t.q)return void n(l.g,d.a.errors.badRequest);n(l.l),p.get("/videos",{q:t.q,nextPageToken:r}).then(function(e){var t=null,r=[];e.hasOwnProperty("nextPageToken")&&e.nextPageToken&&(t=e.nextPageToken),e.hasOwnProperty("items")&&e.items&&(r=e.items),n(l.m,{videos:r,nextPageToken:t})}).catch(function(e){n(l.g,s(e))})},b=function(e){var t=e.commit;p.cancelRequest("Operation cancelled by user"),t(l.j)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"foundHaiku",function(){return r}),n.d(t,"canDecrement",function(){return o}),n.d(t,"canIncrement",function(){return s});var r=function(e){return e.haiku.length},o=function(e){return e.activeHaiku>0},s=function(e){return e.activeHaiku<e.haiku.length-1}},function(e,t,n){"use strict";function r(){return{abortSearch:!1,activeHaiku:0,haiku:[],errorMessage:"",formInput:"",hasError:!1,isFetchingHaiku:!1,isFetchingVideos:!1,nextPageToken:"",recordsSearched:0,showForm:!0,showHaiku:!1,showVideos:!1,videos:[],year:(new Date).getFullYear()}}t.a=r},function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return d});var r,o=n(108),s=n.n(o),i=n(44),a=n.n(i),u=n(87),c=n(43),l=n.i(u.a)(),d=(r={},s()(r,c.l,function(e){e.abortSearch=!1,e.isFetchingVideos=!0,e.showForm=!1}),s()(r,c.m,function(e,t){e.isFetchingVideos=!1,e.nextPageToken=t.nextPageToken,e.showVideos=!0,e.videos=e.videos.concat(t.videos)}),s()(r,c.n,function(e,t){e.errorMessage=t,e.hasError=!0,e.isFetchingVideos=!1,e.showForm=!0}),s()(r,c.f,function(e){e.isFetchingVideos=!1,e.showVideos=!0,e.showHaiku=!1}),s()(r,c.i,function(e){e.abortSearch=!1,e.isFetchingHaiku=!0,e.showForm=!1}),s()(r,c.k,function(e,t){e.haiku=e.haiku.concat(t.haiku),e.recordsSearched=e.recordsSearched+t.searched}),s()(r,c.o,function(e,t){e.errorMessage=t,e.hasError=!0,e.isFetchingHaiku=!1,e.showForm=!0}),s()(r,c.j,function(e){e.abortSearch=!1,e.activeHaiku=0,e.isFetchingHaiku=!1,e.showForm=!1,e.showHaiku=!0}),s()(r,c.e,function(e){e.activeHaiku=0,e.haiku=[],e.recordsSearched=0}),s()(r,c.g,function(e,t){e.abortSearch=!1,e.activeHaiku=0,e.haiku=[],e.errorMessage=t,e.hasError=!0,e.isFetchingVideos=!1,e.isFetchingHaiku=!1,e.recordsSearched=0,e.showForm=!0,e.showHaiku=!1}),s()(r,c.h,function(e){e.activeHaiku=0,e.haiku=[],e.errorMessage="",e.hasError=!1,e.videos=[]}),s()(r,c.c,function(e,t){e.formInput=t.trim()}),s()(r,c.d,function(e){e=a()(e,n.i(u.a)())}),s()(r,c.b,function(e){e.activeHaiku+1<e.haiku.length&&(e.activeHaiku=e.activeHaiku+1)}),s()(r,c.a,function(e){e.activeHaiku>0&&(e.activeHaiku=e.activeHaiku-1)}),r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(109),o=n.n(r),s=n(161),i=n.n(s),a=n(162),u=n.n(a),c=n(157),l=n.n(c),d=n(155),p=n.n(d),f=n(163),h=n.n(f),v=n(160),m=n.n(v),_=n(61);t.default={name:"app",components:{PageHeader:i.a,SearchForm:u.a,LoadingSpinner:l.a,HaikuList:p.a,VideoList:h.a,PageFooter:m.a},computed:o()({},n.i(_.b)(["activeHaiku","haiku","errorMessage","formInput","hasError","isFetchingHaiku","isFetchingVideos","nextPageToken","recordsSearched","showForm","showHaiku","showVideos","videos","year"]),n.i(_.c)(["canDecrement","canIncrement","foundHaiku"])),methods:o()({},n.i(_.d)(["cancel","decrementHaiku","fetchHaiku","incrementHaiku","resetApp","showVideoResults","submitForm","updateForm"]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"alert",props:{message:String}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"haiku",props:{author:String,first:String,second:String,third:String}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"haiku-control",props:{clickAction:Function,direction:String}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(156),o=n.n(r),s=n(153),i=n.n(s),a=n(154),u=n.n(a),c=n(158),l=n.n(c),d=n(159),p=n.n(d);t.default={name:"haiku-list",components:{HaikuListHeader:o.a,Haiku:i.a,HaikuControl:u.a,MobileHaikuControls:l.a,NoHaiku:p.a},props:{active:Number,canDecrement:Boolean,canIncrement:Boolean,haiku:Array,decrement:Function,found:Number,increment:Function,reset:Function,showVideos:Function,videos:Array},created:function(){var e=this;window.addEventListener("keyup",function(t){37===t.keyCode&&e.$emit("left-pressed"),39===t.keyCode&&e.$emit("right-pressed")}),e.$on("left-pressed",function(){e.decrement()}),e.$on("right-pressed",function(){e.increment()})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"haiku-list-header",props:{found:Number}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"loading-spinner",props:{isFetchingHaiku:Boolean,cancel:Function,found:Number,searched:Number},data:function(){return{foundInterval:!1,foundTicker:0,searchedInterval:!1,searchedTicker:0}},created:function(){this.foundTicker=this.found?this.found:0,this.searchedTicker=this.searched?this.searched:0},watch:{searched:function(e,t){this.startNumberTicker("searchedInterval","searched","searchedTicker")},found:function(){this.startNumberTicker("foundInterval","found","foundTicker")}},methods:{startNumberTicker:function(e,t,n){clearInterval(this[e]),this[t]!==this[n]&&(this[e]=window.setInterval(function(){if(this[n]!==this[t]){var e=(this[t]-this[n])/10;e=e>=0?Math.ceil(e):Math.floor(e),this[n]=this[n]+e}}.bind(this),25))}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"mobile-haiku-controls",props:{canDecrement:Boolean,canIncrement:Boolean,decrement:Function,increment:Function}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"no-haiku"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"page-footer",props:{year:Number}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"page-header"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(152),o=n.n(r);t.default={name:"search-form",components:{Alert:o.a},props:{errorMessage:String,hasError:Boolean,submit:Function,update:Function,formInput:String}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(164),o=n.n(r);t.default={name:"video-list",components:{VideoResult:o.a},props:{fetchHaiku:Function,reset:Function,searchTerm:String,videos:Array}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"video-result",props:{clickAction:Function,description:String,id:String,thumbnailUrl:String,title:String}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var r=n(0)(n(90),n(171),null,null,null);r.options.__file="/Users/maxleaver/Documents/Repositories/haiku-ninja-frontend/src/components/Alert.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] Alert.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(0)(n(91),n(178),null,null,null);r.options.__file="/Users/maxleaver/Documents/Repositories/haiku-ninja-frontend/src/components/Haiku.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] Haiku.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(0)(n(92),n(174),null,null,null);r.options.__file="/Users/maxleaver/Documents/Repositories/haiku-ninja-frontend/src/components/HaikuControl.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] HaikuControl.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(0)(n(93),n(173),null,null,null);r.options.__file="/Users/maxleaver/Documents/Repositories/haiku-ninja-frontend/src/components/HaikuList.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] HaikuList.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(0)(n(94),n(177),null,null,null);r.options.__file="/Users/maxleaver/Documents/Repositories/haiku-ninja-frontend/src/components/HaikuListHeader.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] HaikuListHeader.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(0)(n(95),n(169),null,null,null);r.options.__file="/Users/maxleaver/Documents/Repositories/haiku-ninja-frontend/src/components/LoadingSpinner.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] LoadingSpinner.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(0)(n(96),n(172),null,null,null);r.options.__file="/Users/maxleaver/Documents/Repositories/haiku-ninja-frontend/src/components/MobileHaikuControls.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] MobileHaikuControls.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(0)(n(97),n(176),null,null,null);r.options.__file="/Users/maxleaver/Documents/Repositories/haiku-ninja-frontend/src/components/NoHaiku.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] NoHaiku.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(0)(n(98),n(167),null,null,null);r.options.__file="/Users/maxleaver/Documents/Repositories/haiku-ninja-frontend/src/components/PageFooter.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] PageFooter.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(0)(n(99),n(168),null,null,null);r.options.__file="/Users/maxleaver/Documents/Repositories/haiku-ninja-frontend/src/components/PageHeader.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] PageHeader.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(0)(n(100),n(175),null,null,null);r.options.__file="/Users/maxleaver/Documents/Repositories/haiku-ninja-frontend/src/components/SearchForm.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] SearchForm.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(0)(n(101),n(165),null,null,null);r.options.__file="/Users/maxleaver/Documents/Repositories/haiku-ninja-frontend/src/components/VideoList.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] VideoList.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(0)(n(102),n(166),null,null,null);r.options.__file="/Users/maxleaver/Documents/Repositories/haiku-ninja-frontend/src/components/VideoResult.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] VideoResult.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[e.videos.length>0?n("div",{staticClass:"col-xs-10 col-xs-offset-1"},[n("div",{staticClass:"text-center text-muted"},[n("h3",{staticClass:"list-header"},[e._v("\n        Here are a bunch of videos for "),n("strong",{staticClass:"text-danger"},[e._v('"'+e._s(e.searchTerm)+'"')])]),e._v(" "),e._m(0)]),e._v(" "),n("hr"),e._v(" "),e._l(e.videos,function(t){return n("div",{key:t.id,attrs:{id:"video-results"}},[n("video-result",{attrs:{clickAction:e.fetchHaiku,id:t.id,title:t.title,description:t.description,thumbnailUrl:t.thumbnails.medium.url}})],1)}),e._v(" "),n("hr")],2):n("div",{staticClass:"col-xs-10 col-xs-offset-1"},[e._v("\n    Sorry, no videos match "),n("strong",{staticClass:"text-danger"},[e._v('"'+e._s(e.searchTerm)+'"')])]),e._v(" "),n("div",{staticClass:"col-xs-12 text-center"},[n("button",{staticClass:"btn btn-lg btn-default",attrs:{id:"resetButton"},on:{click:e.reset}},[n("span",{staticClass:"glyphicon glyphicon-repeat"}),e._v(" "),n("span",{attrs:{id:"resetText"}},[e._v(e._s(e.$t("retrySearchButton")))])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"lead"},[e._v("\n        Pick a video"),n("br"),e._v("\n        from the list below to find"),n("br"),e._v("\n        sweet comment haiku\n      ")])}]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row clickable video",attrs:{id:"videoResult"},on:{click:function(t){e.clickAction({id:e.id})}}},[n("div",{staticClass:"col-xs-4"},[n("img",{staticClass:"img-thumbnail",attrs:{src:e.thumbnailUrl,alt:e.title}})]),e._v(" "),n("div",{staticClass:"col-xs-8"},[n("h4",{staticClass:"text-primary"},[n("strong",[e._v(e._s(e.title))])]),e._v(" "),n("p",{staticClass:"text-muted"},[e._v(e._s(e.description))])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"row app-footer"},[n("div",{staticClass:"col-xs-12 text-center"},[e._v("\n    © "),n("span",[e._v(e._s(e.year))]),e._v(", Max Leaver\n  ")])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"text-center"},[n("div",{staticClass:"header-container"},[n("div",{staticClass:"header-row"},[n("div",{staticClass:"logo"}),e._v(" "),n("div",[n("h1",[e._v(e._s(e.$t("title")))]),e._v(" "),n("p",[e._v(e._s(e.$t("tagline")))])])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("h1",[e._v(e._s(e.$t("loadingHeader")))]),e._v(" "),e._m(0),e._v(" "),e.isFetchingHaiku?n("p",{staticClass:"lead",attrs:{id:"resultCounter"}},[e._v("\n    "+e._s(e.$tlang("en","foundHaiku",{found:e.foundTicker,searched:e.searchedTicker}))+"\n  ")]):e._e(),e._v(" "),n("button",{staticClass:"btn btn-lg btn-danger",on:{click:e.cancel}},[n("span",{staticClass:"glyphicon glyphicon-stop"}),e._v(" "),n("span",{attrs:{id:"buttonText"}},[e._v(e._s(e.$t("stopSearchButton")))])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"glyphicon glyphicon-refresh spin glyphicon-xl text-muted"})])}]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("page-header"),e._v(" "),n("article",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[e.showForm?n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("search-form",{attrs:{errorMessage:e.errorMessage,hasError:e.hasError,submit:e.submitForm,update:e.updateForm,formInput:e.formInput}})],1):e._e(),e._v(" "),e.isFetchingHaiku||e.isFetchingVideos?n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("loading-spinner",{attrs:{isFetchingHaiku:e.isFetchingHaiku,cancel:e.cancel,found:e.foundHaiku,searched:e.recordsSearched}})],1):e.showHaiku?n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("haiku-list",{attrs:{active:e.activeHaiku,canDecrement:e.canDecrement,canIncrement:e.canIncrement,decrement:e.decrementHaiku,found:e.foundHaiku,haiku:e.haiku,increment:e.incrementHaiku,reset:e.resetApp,showVideos:e.showVideoResults,videos:e.videos}})],1):e.showVideos?n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("video-list",{attrs:{fetchHaiku:e.fetchHaiku,reset:e.resetApp,"search-term":e.formInput,videos:e.videos}})],1):e._e()],1)]),e._v(" "),n("page-footer",{attrs:{year:e.year}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"alert alert-danger text-center"},[n("span",{staticClass:"glyphicon glyphicon-exclamation-sign"}),e._v(" "),n("span",{attrs:{id:"errorMessage"}},[e._v(e._s(e.message))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"visible-xs panel panel-default"},[n("div",{staticClass:"panel-body"},[n("div",{staticClass:"pull-left",class:e.canDecrement?"clickable":"disabled",attrs:{id:"leftControl"},on:{click:e.decrement}},[n("span",{staticClass:"glyphicon glyphicon-chevron-left"}),e._v(" "+e._s(e.$t("previousButton"))+"\n    ")]),e._v(" "),n("div",{staticClass:"pull-right",class:e.canIncrement?"clickable":"disabled",attrs:{id:"rightControl"},on:{click:e.increment}},[e._v("\n      "+e._s(e.$t("nextButton"))+" "),n("span",{staticClass:"glyphicon glyphicon-chevron-right"})])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[e.found>0?n("div",[n("haiku-list-header",{attrs:{found:e.found}}),e._v(" "),n("div",{staticClass:"row flex-row"},[n("div",{staticClass:"col-xs-2 hidden-xs text-left"},[e.canDecrement?n("haiku-control",{attrs:{direction:"left",clickAction:e.decrement}}):e._e()],1),e._v(" "),n("div",{staticClass:"col-xs-12 col-sm-8"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("haiku",{key:e.active,attrs:{first:e.haiku[e.active].first,second:e.haiku[e.active].second,third:e.haiku[e.active].third,author:e.haiku[e.active].author}})],1)],1),e._v(" "),n("div",{staticClass:"col-xs-2 hidden-xs text-right"},[e.canIncrement?n("haiku-control",{attrs:{direction:"right",clickAction:e.increment}}):e._e()],1)]),e._v(" "),n("mobile-haiku-controls",{attrs:{canDecrement:e.canDecrement,canIncrement:e.canIncrement,decrement:e.decrement,increment:e.increment}})],1):n("no-haiku"),e._v(" "),n("div",{staticClass:"row hidden-xs"},[n("div",{staticClass:"col-xs-12"},[e.videos.length>0?n("span",[n("button",{staticClass:"btn btn-lg btn-primary",attrs:{id:"videoButton"},on:{click:e.showVideos}},[n("span",{staticClass:"glyphicon glyphicon-apple"}),e._v(" "),n("span",{attrs:{id:"selectText"}},[e._v(e._s(e.$t("pickAnotherButton")))])]),e._v(" "),n("span",{staticClass:"separatorText text-center"},[e._v("or")])]):e._e(),e._v(" "),n("button",{staticClass:"btn btn-lg btn-danger",attrs:{id:"resetButton"},on:{click:e.reset}},[n("span",{staticClass:"glyphicon glyphicon-repeat"}),e._v(" "),n("span",{attrs:{id:"resetText"}},[e._v(e._s(e.$t("resetButton")))])])])]),e._v(" "),n("div",{staticClass:"row visible-xs"},[e.videos.length>0?n("div",{staticClass:"col-xs-12"},[n("button",{staticClass:"btn btn-lg btn-primary",attrs:{id:"videoButton"},on:{click:e.showVideos}},[n("span",{staticClass:"glyphicon glyphicon-apple"}),e._v(" "),n("span",{attrs:{id:"selectText"}},[e._v(e._s(e.$t("pickAnotherButton")))])])]):e._e(),e._v(" "),e.videos.length>0?n("div",{staticClass:"col-xs-12",staticStyle:{margin:"5px 0"}},[n("span",{staticClass:"separatorText text-center"},[e._v("— or —")])]):e._e(),e._v(" "),n("div",{staticClass:"col-xs-12"},[n("button",{staticClass:"btn btn-lg btn-danger",attrs:{id:"resetButton"},on:{click:e.reset}},[n("span",{staticClass:"glyphicon glyphicon-repeat"}),e._v(" "),n("span",{attrs:{id:"resetText"}},[e._v(e._s(e.$t("resetButton")))])])])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clickable controlButton",on:{click:e.clickAction}},[n("span",{class:"glyphicon glyphicon-circle-arrow-"+e.direction})])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("div",{staticClass:"form-inline"},[n("div",{staticClass:"form-group"},[e.hasError?n("alert",{attrs:{message:e.errorMessage}}):e._e(),e._v(" "),n("label",{attrs:{for:"search"}},[e._v(e._s(e.$t("inputLabel")))]),e._v(" "),n("input",{staticClass:"form-control input-lg",attrs:{id:"search",type:"text",placeholder:e.$t("inputPlaceholder")},on:{input:e.update,keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submit(t)}}}),e._v(" "),n("button",{staticClass:"btn btn-lg btn-success",attrs:{id:"search-submit"},on:{click:e.submit}},[n("span",{staticClass:"glyphicon glyphicon-leaf"}),e._v(" "+e._s(e.$t("submitButton"))+"\n      ")])],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"lead text-center"},[e._v("\n    Search YouTube comments"),n("br"),e._v("\n    for hidden moments of Zen"),n("br"),e._v("\n    in cat videos.\n  ")])}]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"lead"},[e._v("\n    Sorry, there were no"),n("br"),e._v("\n    haiku in your video."),n("br"),e._v("\n    Please try again.\n  ")])])}]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[n("h3",[e._v("\n      Enjoy "),n("strong",{staticClass:"text-danger"},[e._v(e._s(e.found)+" moments")]),e._v(" of Zen\n    ")])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-xs-12 col-xs-8"},[n("blockquote",[n("p",[n("span",{attrs:{id:"firstLine"}},[e._v(e._s(e.first))]),n("br"),e._v(" "),n("span",{attrs:{id:"secondLine"}},[e._v(e._s(e.second))]),n("br"),e._v(" "),n("span",{attrs:{id:"thirdLine"}},[e._v(e._s(e.third))])]),e._v(" "),n("footer",{attrs:{id:"author"}},[e._v(e._s(e.author))])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}]),[82]);