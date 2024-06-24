/*! For license information please see files-reference-files.js.LICENSE.txt */
(()=>{"use strict";var e,i,n,r={49678:(e,i,n)=>{var r=n(20144),a=n(77958),l=n(31352),o=n(86680),s=n(79753),d=n(62520),c=n.n(d),A=n(25108);const p={name:"ReferenceFileWidget",props:{richObject:{type:Object,required:!0},accessible:{type:Boolean,default:!0}},data(){return{previewUrl:window.OC.MimeType.getIconUrl(this.richObject.mimetype)}},computed:{fileSize(){return window.OC.Util.humanFileSize(this.richObject.size)},fileMtime(){return window.OC.Util.relativeModifiedDate(1e3*this.richObject.mtime)},filePath(){return c().dirname(this.richObject.path)},filePreview(){return this.previewUrl?{backgroundImage:"url("+this.previewUrl+")"}:{backgroundImage:"url("+window.OC.MimeType.getIconUrl(this.richObject.mimetype)+")"}},filePreviewClass(){return this.previewUrl?"widget-file--image--preview":"widget-file--image--icon"}},mounted(){if(this.richObject["preview-available"]){const e=(0,s.generateUrl)("/core/preview?fileId={fileId}&x=250&y=250",{fileId:this.richObject.id}),t=new Image;t.onload=()=>{this.previewUrl=e},t.onerror=e=>{A.error("could not load recommendation preview",e)},t.src=e}},methods:{navigate(){OCA.Viewer&&-1!==OCA.Viewer.mimetypes.indexOf(this.richObject.mimetype)?OCA.Viewer.open({path:this.richObject.path}):window.location=this.richObject.link}}};var f=n(93379),u=n.n(f),g=n(7795),m=n.n(g),v=n(90569),w=n.n(v),C=n(3565),h=n.n(C),b=n(19216),x=n.n(b),y=n(44589),k=n.n(y),O=n(7574),j={};j.styleTagTransform=k(),j.setAttributes=h(),j.insert=w().bind(null,"head"),j.domAPI=m(),j.insertStyleElement=x(),u()(O.Z,j),O.Z&&O.Z.locals&&O.Z.locals;var _=n(51900);const I=(0,_.Z)(p,(function(){var e=this,t=e._self._c;return e.accessible?t("a",{staticClass:"widget-file",attrs:{href:e.richObject.link},on:{click:function(t){return t.preventDefault(),e.navigate.apply(null,arguments)}}},[t("div",{staticClass:"widget-file--image",class:e.filePreviewClass,style:e.filePreview}),e._v(" "),t("div",{staticClass:"widget-file--details"},[t("p",{staticClass:"widget-file--title"},[e._v(e._s(e.richObject.name))]),e._v(" "),t("p",{staticClass:"widget-file--description"},[e._v(e._s(e.fileSize)),t("br"),e._v(e._s(e.fileMtime))]),e._v(" "),t("p",{staticClass:"widget-file--link"},[e._v(e._s(e.filePath))])])]):t("div",{staticClass:"widget-file widget-file--no-access"},[t("div",{staticClass:"widget-file--image widget-file--image--icon icon-folder"}),e._v(" "),t("div",{staticClass:"widget-file--details"},[t("p",{staticClass:"widget-file--title"},[e._v("\n\t\t\t"+e._s(e.t("files","File cannot be accessed"))+"\n\t\t")]),e._v(" "),t("p",{staticClass:"widget-file--description"},[e._v("\n\t\t\t"+e._s(e.t("files","You might not have have permissions to view it, ask the sender to share it"))+"\n\t\t")])])])}),[],!1,null,"3f729da0",null).exports,P={name:"FileReferencePickerElement",components:{FilePicker:n(64024).JQ},props:{providerId:{type:String,required:!0},accessible:{type:Boolean,default:!1}},data(){return{buttons:[{label:t("files","Choose"),type:"primary",callback:e=>this.submit(e.fileid)}]}},methods:{submit(e){const t=window.location.protocol+"//"+window.location.host+(0,s.generateUrl)("/f/{fileId}",{fileId:e});this.$emit("submit",t)}}},B=(0,_.Z)(P,(function(){var e=this;return(0,e._self._c)("FilePicker",{attrs:{buttons:e.buttons,container:null,name:e.t("files","Select file or folder to link to"),multiselect:!1},on:{close:function(t){return e.$emit("cancel")}}})}),[],!1,null,null,null).exports;n.nc=btoa((0,a.IH)()),r.default.mixin({methods:{t:l.Iu}}),(0,o.registerWidget)("file",((e,t)=>{let{richObjectType:i,richObject:n,accessible:a}=t;new(r.default.extend(I))({propsData:{richObjectType:i,richObject:n,accessible:a}}).$mount(e)})),(0,o.registerCustomPickerElement)("files",((e,t)=>{let{providerId:i,accessible:n}=t;const a=new(r.default.extend(B))({propsData:{providerId:i,accessible:n}}).$mount(e);return new o.NcCustomPickerRenderResult(a.$el,a)}),((e,t)=>{t.object.$destroy()}))},7574:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(87537),r=i.n(n),a=i(23645),l=i.n(a)()(r());l.push([e.id,".widget-file[data-v-3f729da0]{display:flex;flex-grow:1;color:var(--color-main-text) !important;text-decoration:none !important}.widget-file--image[data-v-3f729da0]{min-width:40%;background-position:center;background-size:cover;background-repeat:no-repeat}.widget-file--image.widget-file--image--icon[data-v-3f729da0]{min-width:88px;background-size:44px}.widget-file--title[data-v-3f729da0]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:bold}.widget-file--details[data-v-3f729da0]{padding:12px;flex-grow:1;display:flex;flex-direction:column}.widget-file--details p[data-v-3f729da0]{margin:0;padding:0}.widget-file--description[data-v-3f729da0]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.widget-file--link[data-v-3f729da0]{color:var(--color-text-maxcontrast)}.widget-file.widget-file--no-access[data-v-3f729da0]{padding:12px}.widget-file.widget-file--no-access .widget-file--details[data-v-3f729da0]{padding:0}","",{version:3,sources:["webpack://./apps/files/src/views/ReferenceFileWidget.vue"],names:[],mappings:"AACA,8BACC,YAAA,CACA,WAAA,CACA,uCAAA,CACA,+BAAA,CAEA,qCACC,aAAA,CACA,0BAAA,CACA,qBAAA,CACA,2BAAA,CAEA,8DACC,cAAA,CACA,oBAAA,CAIF,qCACC,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,gBAAA,CAGD,uCACC,YAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CAEA,yCACC,QAAA,CACA,SAAA,CAIF,2CACC,eAAA,CACA,sBAAA,CACA,mBAAA,CACA,oBAAA,CACA,YAAA,CACA,2BAAA,CAGD,oCACC,mCAAA,CAGD,qDACC,YAAA,CAEA,2EACC,SAAA",sourcesContent:["\n.widget-file {\n\tdisplay: flex;\n\tflex-grow: 1;\n\tcolor: var(--color-main-text) !important;\n\ttext-decoration: none !important;\n\n\t&--image {\n\t\tmin-width: 40%;\n\t\tbackground-position: center;\n\t\tbackground-size: cover;\n\t\tbackground-repeat: no-repeat;\n\n\t\t&.widget-file--image--icon {\n\t\t\tmin-width: 88px;\n\t\t\tbackground-size: 44px;\n\t\t}\n\t}\n\n\t&--title {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t\tfont-weight: bold;\n\t}\n\n\t&--details {\n\t\tpadding: 12px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\tp {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n\n\t&--description {\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-line-clamp: 3;\n\t\tline-clamp: 3;\n\t\t-webkit-box-orient: vertical;\n\t}\n\n\t&--link {\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&.widget-file--no-access {\n\t\tpadding: 12px;\n\n\t\t.widget-file--details {\n\t\t\tpadding: 0;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const o=l}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={id:e,loaded:!1,exports:{}};return r[e].call(i.exports,i,i.exports,l),i.loaded=!0,i.exports}l.m=r,e=[],l.O=(t,i,n,r)=>{if(!i){var a=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],r=e[c][2];for(var o=!0,s=0;s<i.length;s++)(!1&r||a>=r)&&Object.keys(l.O).every((e=>l.O[e](i[s])))?i.splice(s--,1):(o=!1,r<a&&(a=r));if(o){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,n,r]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,i)=>(l.f[i](e,t),t)),[])),l.u=e=>e+"-"+e+".js?v=00434e4baa0d8e7b79f1",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},n="nextcloud:",l.l=(e,t,r,a)=>{if(i[e])i[e].push(t);else{var o,s;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var A=d[c];if(A.getAttribute("src")==e||A.getAttribute("data-webpack")==n+r){o=A;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.setAttribute("data-webpack",n+r),o.src=e),i[e]=[t];var p=(t,n)=>{o.onerror=o.onload=null,clearTimeout(f);var r=i[e];if(delete i[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),s&&document.head.appendChild(o)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),l.j=9098,(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{l.b=document.baseURI||self.location.href;var e={9098:0};l.f.j=(t,i)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise(((i,r)=>n=e[t]=[i,r]));i.push(n[2]=r);var a=l.p+l.u(t),o=new Error;l.l(a,(i=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,n[1](o)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,a=i[0],o=i[1],s=i[2],d=0;if(a.some((t=>0!==e[t]))){for(n in o)l.o(o,n)&&(l.m[n]=o[n]);if(s)var c=s(l)}for(t&&t(i);d<a.length;d++)r=a[d],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(c)},i=self.webpackChunknextcloud=self.webpackChunknextcloud||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),l.nc=void 0;var o=l.O(void 0,[7874],(()=>l(49678)));o=l.O(o)})();
//# sourceMappingURL=files-reference-files.js.map?v=9bfb10fbdd9479a8597c