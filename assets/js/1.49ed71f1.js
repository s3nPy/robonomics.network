(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"9qaU":function(t,e,i){"use strict";i.r(e);var a={props:{pageTitle:{type:String,default:""},pageDescription:{type:String,default:""},pageImage:{type:String,default:""},pageImageWidth:{type:String,default:"1280"},pageImageHeight:{type:String,default:"765"}},mounted:function(){this.url=window.location.href},computed:{image:function(){return""!=this.pageImage?this.$static.metadata.siteUrl+this.pageImage:this.$static.metadata.siteUrl+"/website_cover.png"},title:function(){return this.pageTitle+" / "+this.$static.metadata.siteName}},metaInfo:function(){return{title:this.title,meta:[{key:"description",name:"description",content:this.pageDescription},{property:"og:type",content:"website"},{property:"og:site_name",content:this.$static.metadata.siteName},{property:"og:title",content:this.title},{property:"og:description",content:this.pageDescription},{property:"og:image",content:this.image},{property:"og:image:width",content:this.pageImageWidth},{property:"og:image:height",content:this.pageImageHeight},{property:"og:url",content:this.$static.metadata.siteUrl},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:this.title},{name:"twitter:image:src",content:this.image},{name:"twitter:description",content:this.pageDescription},{name:"twitter:site",content:"@AIRA_Robonomics"},{name:"twitter:creator",content:"@AIRA_Robonomics"}]}}},n=i("KHd+"),o=i("Kw5r"),r=o.a.config.optionMergeStrategies.computed,s={metadata:{siteName:"Robonomics Network",siteUrl:"https://robonomics.network"}},c=function(t){var e=t.options;e.__staticData?e.__staticData.data=s:(e.__staticData=o.a.observable({data:s}),e.computed=r({$static:function(){return e.__staticData.data}},e.computed))},p=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);"function"==typeof c&&c(p);e.default=p.exports}}]);