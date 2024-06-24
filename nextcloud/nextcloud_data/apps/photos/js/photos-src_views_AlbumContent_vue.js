"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_AlbumContent_vue"],{7886:(t,o,e)=>{e.d(o,{Z:()=>s});var a=e(87537),l=e.n(a),n=e(23645),i=e.n(n)()(l());i.push([t.id,".album__title[data-v-fcad7124]{width:100%}.album__name[data-v-fcad7124]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.album__location[data-v-fcad7124]{margin-left:-4px;display:flex;color:var(--color-text-lighter)}.photos-navigation[data-v-fcad7124]{position:relative}.photos-navigation--uploading[data-v-fcad7124]{margin-bottom:30px}[data-v-fcad7124] .upload-picker .upload-picker__progress{position:absolute;bottom:-30px;left:64px;margin:0}[data-v-fcad7124] .upload-picker .upload-picker__cancel{position:absolute;bottom:-24px;right:50px}","",{version:3,sources:["webpack://./src/views/AlbumContent.vue"],names:[],mappings:"AAGC,+BACC,UAAA,CAGD,8BACC,eAAA,CACA,kBAAA,CACA,sBAAA,CAGD,kCACC,gBAAA,CACA,YAAA,CACA,+BAAA,CAIF,oCACC,iBAAA,CAEA,+CACC,kBAAA,CAKD,0DACC,iBAAA,CACA,YAAA,CACA,SAAA,CACA,QAAA,CAED,wDACC,iBAAA,CACA,YAAA,CACA,UAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.album {\n\t&__title {\n\t\twidth: 100%;\n\t}\n\n\t&__name {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t&__location {\n\t\tmargin-left: -4px;\n\t\tdisplay: flex;\n\t\tcolor: var(--color-text-lighter);\n\t}\n}\n\n.photos-navigation {\n\tposition: relative;\n\t// Add space at the bottom for the progress bar.\n\t&--uploading {\n\t\tmargin-bottom: 30px;\n\t}\n}\n\n:deep(.upload-picker) {\n\t.upload-picker__progress {\n\t\tposition: absolute;\n\t\tbottom: -30px;\n\t\tleft: 64px;\n\t\tmargin: 0;\n\t}\n\t.upload-picker__cancel {\n\t\tposition: absolute;\n\t\tbottom: -24px;\n\t\tright: 50px;\n\t}\n}\n'],sourceRoot:""}]);const s=i},61225:(t,o,e)=>{e.d(o,{Z:()=>s});var a=e(20629),l=e(82400),n=e(15961);const i={name:"ActionFavorite",components:{Star:l.default,NcActionButton:n.Js},props:{selectedFileIds:{type:Array,required:!0}},computed:{...(0,a.Se)(["files"]),shouldFavoriteSelection(){return this.selectedFileIds.some((t=>0===this.files[t].favorite))}},methods:{...(0,a.nv)(["toggleFavoriteForFiles"]),async favoriteSelection(){await this.toggleFavoriteForFiles({fileIds:this.selectedFileIds,favoriteState:1})},async unFavoriteSelection(){await this.toggleFavoriteForFiles({fileIds:this.selectedFileIds,favoriteState:0})}}};const s=(0,e(51900).Z)(i,(function(){var t=this,o=t._self._c;return t.shouldFavoriteSelection?o("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Mark selection as favorite")},on:{click:t.favoriteSelection}},[t._v("\n\t"+t._s(t.t("photos","Add selection to favorites"))+"\n\t"),o("Star",{attrs:{slot:"icon"},slot:"icon"})],1):o("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Remove selection from favorites")},on:{click:t.unFavoriteSelection}},[t._v("\n\t"+t._s(t.t("photos","Remove selection from favorites"))+"\n\t"),o("Star",{attrs:{slot:"icon"},slot:"icon"})],1)}),[],!1,null,null,null).exports},111:(o,e,a)=>{a.r(e),a.d(e,{default:()=>H});var l=a(91627),n=a(45994),i=a(20629),s=a(15961),r=a(52587),c=a(20296),u=a.n(c),m=a(98293),d=a(11341),h=a(12571),b=a(50863),p=a(49976),A=a(69141),v=a(44244),f=a(8356),g=a(69363),C=a(12945),_=a(66951),F=a(81090),w=a(61225),N=a(11762),k=a(83636),y=a(87294),S=a(38734),Z=a(71823),x=a(94236),M=a(3301),E=a(81067),B=a(2161),I=a(59537);const P={name:"AlbumContent",components:{ActionFavorite:w.Z,AlbumForm:N.Z,Close:m.default,CollaboratorsSelectionForm:k.Z,CollectionContent:y.Z,Delete:d.Z,FilesPicker:S.Z,HeaderNavigation:Z.Z,ImagePlus:h.Z,MapMarker:b.Z,NcActionButton:s.Js,NcActions:s.O3,NcActionSeparator:s.rr,NcButton:s.P2,NcEmptyContent:s.SL,NcLoadingIcon:s.lb,NcModal:s.Jc,Pencil:p.default,Plus:A.Z,ShareVariant:f.Z,UploadPicker:r.e},mixins:[g.Z,C.Z,_.Z,s.tq,F.Z],props:{albumName:{type:String,default:"/"}},data(){return{allowedMimes:M.ZP,showAddPhotosModal:!1,showManageCollaboratorView:!1,showEditAlbumForm:!1,loadingAddCollaborators:!1,uploader:(0,r.oM)(),newFileMenuEntry:{id:"album-add",displayName:t("photos","Add photos to this album"),templateName:"",if:t=>t.route===this.$route.name,iconSvgInline:v,handler:()=>{this.showAddPhotosModal=!0}}}},computed:{...(0,i.Se)(["albumsFiles"]),album(){return this.albums[this.albumName]||{}},albumFileIds(){return this.albumsFiles[this.albumName]||[]},sharingEnabled:()=>void 0!==OC.Share,uploadContext(){var t;return{...this.album,route:this.$route.name,root:"dav/photos/".concat(null===(t=(0,n.ts)())||void 0===t?void 0:t.uid,"/albums")}}},watch:{album(t,o){t.filename!==o.filename&&this.fetchAlbumContent()}},mounted(){this.fetchAlbumContent(),(0,l.cd)(this.newFileMenuEntry)},destroyed(){(0,l.oE)(this.newFileMenuEntry)},methods:{...(0,i.nv)(["appendFiles","deleteAlbum","addFilesToAlbum","removeFilesFromAlbum","updateAlbum"]),async fetchAlbumContent(){if(this.loadingFiles||this.showEditAlbumForm)return[];const t=await this.fetchSemaphore.acquire();try{var o;this.errorFetchingFiles=null,this.loadingFiles=!0;const t=(await E.ZP.getDirectoryContents("/photos/".concat(null===(o=(0,n.ts)())||void 0===o?void 0:o.uid,"/albums/").concat(this.albumName),{data:B.Z,details:!0,signal:this.abortController.signal})).data.map((t=>(0,x.AX)(t))).filter((t=>t.fileid)),e=t.map((t=>t.fileid.toString()));this.appendFiles(t),t.length>0&&await this.$store.commit("setAlbumFiles",{albumName:this.albumName,fileIds:e}),I.Z.debug("[AlbumContent] Fetched ".concat(e.length," new files: "),e)}catch(t){var e;if(404===(null===(e=t.response)||void 0===e?void 0:e.status))this.errorFetchingFiles=404;else{if("ERR_CANCELED"===t.code)return;this.errorFetchingFiles=t}I.Z.error("[AlbumContent] Error fetching album files",{error:t})}finally{this.loadingFiles=!1,this.fetchSemaphore.release(t)}return[]},redirectToNewName(t){let{album:o}=t;this.showEditAlbumForm=!1,this.album.basename!==o.basename&&this.$router.push("/albums/".concat(o.basename))},async handleFilesPicked(t){this.showAddPhotosModal=!1,await this.addFilesToAlbum({albumName:this.albumName,fileIdsToAdd:t}),await this.fetchAlbumContent()},async handleRemoveFilesFromAlbum(t){this.$refs.collectionContent.onUncheckFiles(t),await this.removeFilesFromAlbum({albumName:this.albumName,fileIdsToRemove:t})},async handleDeleteAlbum(){await this.deleteAlbum({albumName:this.albumName}),this.$router.push("/albums")},async handleSetCollaborators(t){try{this.loadingAddCollaborators=!0,this.showManageCollaboratorView=!1,await this.updateAlbum({albumName:this.albumName,properties:{collaborators:t}})}catch(t){I.Z.error(t)}finally{this.loadingAddCollaborators=!1}},onUpload:u()((function(){this.fetchAlbumContent()}),500)}};var T=a(93379),D=a.n(T),W=a(7795),R=a.n(W),U=a(90569),V=a.n(U),$=a(3565),L=a.n($),q=a(19216),G=a.n(q),J=a(44589),O=a.n(J),Y=a(7886),z={};z.styleTagTransform=O(),z.setAttributes=L(),z.insert=V().bind(null,"head"),z.domAPI=R(),z.insertStyleElement=G();D()(Y.Z,z);Y.Z&&Y.Z.locals&&Y.Z.locals;const H=(0,a(51900).Z)(P,(function(){var t=this,o=t._self._c;return o("div",[o("CollectionContent",{ref:"collectionContent",attrs:{collection:t.album,"collection-file-ids":t.albumFileIds,loading:t.loadingAlbums||t.loadingFiles,error:t.errorFetchingAlbums||t.errorFetchingFiles},scopedSlots:t._u([{key:"header",fn:function(e){var a;let{selectedFileIds:l,resetSelection:n}=e;return o("HeaderNavigation",{key:"navigation",class:{"photos-navigation--uploading":(null===(a=t.uploader.queue)||void 0===a?void 0:a.length)>0},attrs:{loading:t.loadingFiles,params:{albumName:t.albumName},path:"/"+t.albumName,title:t.albumName},on:{refresh:t.fetchAlbumContent}},[""!==t.album.location?o("div",{staticClass:"album__location",attrs:{slot:"subtitle"},slot:"subtitle"},[o("MapMarker"),t._v(t._s(t.album.location)+"\n\t\t\t")],1):t._e(),t._v(" "),o("template",{slot:"default"},[l.length>0?o("NcButton",{attrs:{"aria-label":t.t("photos","Unselect all")},on:{click:n},scopedSlots:t._u([{key:"icon",fn:function(){return[o("Close")]},proxy:!0}],null,!0)},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Unselect all"))+"\n\t\t\t\t")]):t._e()],1),t._v(" "),void 0!==t.album?o("template",{slot:"right"},[0!==t.album.nbItems?o("UploadPicker",{attrs:{accept:t.allowedMimes,context:t.uploadContext,destination:t.album.basename,root:t.uploadContext.root,multiple:!0},on:{uploaded:t.onUpload}}):t._e(),t._v(" "),t.sharingEnabled?o("NcButton",{attrs:{type:"tertiary","aria-label":t.t("photos","Manage collaborators for this album")},on:{click:function(o){t.showManageCollaboratorView=!0}}},[o("ShareVariant",{attrs:{slot:"icon"},slot:"icon"})],1):t._e(),t._v(" "),o("NcActions",{attrs:{"aria-label":t.t("photos","Open actions menu")}},[o("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Edit album details")},on:{click:function(o){t.showEditAlbumForm=!0}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Edit album details"))+"\n\t\t\t\t\t\t"),o("Pencil",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),o("NcActionButton",{attrs:{"close-after-click":!0},on:{click:t.handleDeleteAlbum}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Delete album"))+"\n\t\t\t\t\t\t"),o("Delete",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),l.length>0?[o("NcActionSeparator"),t._v(" "),o("ActionFavorite",{attrs:{"selected-file-ids":l}}),t._v(" "),o("NcActionButton",{attrs:{"close-after-click":!0},on:{click:function(o){return t.handleRemoveFilesFromAlbum(l)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.t("photos","Remove selection from album"))+"\n\t\t\t\t\t\t\t"),o("Close",{attrs:{slot:"icon"},slot:"icon"})],1)]:t._e()],2)],1):t._e()],2)}}],null,!1,261876044)},[t._v(" "),void 0===t.album||0!==t.album.nbItems||t.loadingFiles||t.loadingAlbums?t._e():o("NcEmptyContent",{staticClass:"album__empty",attrs:{slot:"empty-content",title:t.t("photos","This album does not have any photos or videos yet!")},slot:"empty-content"},[o("ImagePlus",{attrs:{slot:"icon"},slot:"icon"}),t._v(" "),o("NcButton",{staticClass:"album__empty__button",attrs:{slot:"action",type:"primary","aria-label":t.t("photos","Add photos to this album")},on:{click:function(o){t.showAddPhotosModal=!0}},slot:"action"},[o("Plus",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n\t\t\t\t"+t._s(t.t("photos","Add"))+"\n\t\t\t")],1)],1)],1),t._v(" "),t.showAddPhotosModal?o("NcModal",{attrs:{size:"large",title:t.t("photos","Add photos to the album")},on:{close:function(o){t.showAddPhotosModal=!1}}},[o("FilesPicker",{attrs:{destination:t.album.basename,"blacklist-ids":t.albumFileIds},on:{"files-picked":t.handleFilesPicked}})],1):t._e(),t._v(" "),t.showManageCollaboratorView?o("NcModal",{attrs:{title:t.t("photos","Manage collaborators")},on:{close:function(o){t.showManageCollaboratorView=!1}}},[o("CollaboratorsSelectionForm",{attrs:{"album-name":t.album.basename,collaborators:t.album.collaborators,"public-link":t.album.publicLink},scopedSlots:t._u([{key:"default",fn:function(e){let{collaborators:a}=e;return[o("NcButton",{attrs:{"aria-label":t.t("photos","Save collaborators for this album."),type:"primary",disabled:t.loadingAddCollaborators},on:{click:function(o){return t.handleSetCollaborators(a)}},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loadingAddCollaborators?o("NcLoadingIcon"):t._e()]},proxy:!0}],null,!0)},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Save"))+"\n\t\t\t\t")])]}}],null,!1,4058924180)})],1):t._e(),t._v(" "),t.showEditAlbumForm?o("NcModal",{attrs:{title:t.t("photos","Edit album details")},on:{close:function(o){t.showEditAlbumForm=!1}}},[o("AlbumForm",{attrs:{album:t.album},on:{done:t.redirectToNewName}})],1):t._e()],1)}),[],!1,null,"fcad7124",null).exports}}]);
//# sourceMappingURL=photos-src_views_AlbumContent_vue.js.map?v=42e784d5b2ca6b938ea2