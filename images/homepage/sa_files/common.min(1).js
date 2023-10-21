/*! This file is auto-generated */
!function(W,$){var Q=W(document),H=W($),V=W(document.body),q=wp.i18n.__,i=wp.i18n.sprintf;function r(e,t,n){n=void 0!==n?i(q("%1$s is deprecated since version %2$s! Use %3$s instead."),e,t,n):i(q("%1$s is deprecated since version %2$s with no alternative available."),e,t);$.console.warn(n)}function e(i,o,s){var a={};return Object.keys(o).forEach(function(e){var t=o[e],n=i+"."+e;"object"==typeof t?Object.defineProperty(a,e,{get:function(){return r(n,s,t.alternative),t.func()}}):Object.defineProperty(a,e,{get:function(){return r(n,s,"wp.i18n"),t}})}),a}$.wp.deprecateL10nObject=e,$.commonL10n=$.commonL10n||{warnDelete:"",dismiss:"",collapseMenu:"",expandMenu:""},$.commonL10n=e("commonL10n",$.commonL10n,"5.5.0"),$.wpPointerL10n=$.wpPointerL10n||{dismiss:""},$.wpPointerL10n=e("wpPointerL10n",$.wpPointerL10n,"5.5.0"),$.userProfileL10n=$.userProfileL10n||{warn:"",warnWeak:"",show:"",hide:"",cancel:"",ariaShow:"",ariaHide:""},$.userProfileL10n=e("userProfileL10n",$.userProfileL10n,"5.5.0"),$.privacyToolsL10n=$.privacyToolsL10n||{noDataFound:"",foundAndRemoved:"",noneRemoved:"",someNotRemoved:"",removalError:"",emailSent:"",noExportFile:"",exportError:""},$.privacyToolsL10n=e("privacyToolsL10n",$.privacyToolsL10n,"5.5.0"),$.authcheckL10n={beforeunload:""},$.authcheckL10n=$.authcheckL10n||e("authcheckL10n",$.authcheckL10n,"5.5.0"),$.tagsl10n={noPerm:"",broken:""},$.tagsl10n=$.tagsl10n||e("tagsl10n",$.tagsl10n,"5.5.0"),$.adminCommentsL10n=$.adminCommentsL10n||{hotkeys_highlight_first:{alternative:"window.adminCommentsSettings.hotkeys_highlight_first",func:function(){return $.adminCommentsSettings.hotkeys_highlight_first}},hotkeys_highlight_last:{alternative:"window.adminCommentsSettings.hotkeys_highlight_last",func:function(){return $.adminCommentsSettings.hotkeys_highlight_last}},replyApprove:"",reply:"",warnQuickEdit:"",warnCommentChanges:"",docTitleComments:"",docTitleCommentsCount:""},$.adminCommentsL10n=e("adminCommentsL10n",$.adminCommentsL10n,"5.5.0"),$.tagsSuggestL10n=$.tagsSuggestL10n||{tagDelimiter:"",removeTerm:"",termSelected:"",termAdded:"",termRemoved:""},$.tagsSuggestL10n=e("tagsSuggestL10n",$.tagsSuggestL10n,"5.5.0"),$.wpColorPickerL10n=$.wpColorPickerL10n||{clear:"",clearAriaLabel:"",defaultString:"",defaultAriaLabel:"",pick:"",defaultLabel:""},$.wpColorPickerL10n=e("wpColorPickerL10n",$.wpColorPickerL10n,"5.5.0"),$.attachMediaBoxL10n=$.attachMediaBoxL10n||{error:""},$.attachMediaBoxL10n=e("attachMediaBoxL10n",$.attachMediaBoxL10n,"5.5.0"),$.postL10n=$.postL10n||{ok:"",cancel:"",publishOn:"",publishOnFuture:"",publishOnPast:"",dateFormat:"",showcomm:"",endcomm:"",publish:"",schedule:"",update:"",savePending:"",saveDraft:"",private:"",public:"",publicSticky:"",password:"",privatelyPublished:"",published:"",saveAlert:"",savingText:"",permalinkSaved:""},$.postL10n=e("postL10n",$.postL10n,"5.5.0"),$.inlineEditL10n=$.inlineEditL10n||{error:"",ntdeltitle:"",notitle:"",comma:"",saved:""},$.inlineEditL10n=e("inlineEditL10n",$.inlineEditL10n,"5.5.0"),$.plugininstallL10n=$.plugininstallL10n||{plugin_information:"",plugin_modal_label:"",ays:""},$.plugininstallL10n=e("plugininstallL10n",$.plugininstallL10n,"5.5.0"),$.navMenuL10n=$.navMenuL10n||{noResultsFound:"",warnDeleteMenu:"",saveAlert:"",untitled:""},$.navMenuL10n=e("navMenuL10n",$.navMenuL10n,"5.5.0"),$.commentL10n=$.commentL10n||{submittedOn:"",dateFormat:""},$.commentL10n=e("commentL10n",$.commentL10n,"5.5.0"),$.setPostThumbnailL10n=$.setPostThumbnailL10n||{setThumbnail:"",saving:"",error:"",done:""},$.setPostThumbnailL10n=e("setPostThumbnailL10n",$.setPostThumbnailL10n,"5.5.0"),$.adminMenu={init:function(){},fold:function(){},restoreMenuState:function(){},toggle:function(){},favorites:function(){}},$.columns={init:function(){var n=this;W(".hide-column-tog","#adv-settings").on("click",function(){var e=W(this),t=e.val();e.prop("checked")?n.checked(t):n.unchecked(t),columns.saveManageColumnsState()})},saveManageColumnsState:function(){var e=this.hidden();W.post(ajaxurl,{action:"hidden-columns",hidden:e,screenoptionnonce:W("#screenoptionnonce").val(),page:pagenow})},checked:function(e){W(".column-"+e).removeClass("hidden"),this.colSpanChange(1)},unchecked:function(e){W(".column-"+e).addClass("hidden"),this.colSpanChange(-1)},hidden:function(){return W(".manage-column[id]").filter(".hidden").map(function(){return this.id}).get().join(",")},useCheckboxesForHidden:function(){this.hidden=function(){return W(".hide-column-tog").not(":checked").map(function(){var e=this.id;return e.substring(e,e.length-5)}).get().join(",")}},colSpanChange:function(e){var t=W("table").find(".colspanchange");t.length&&(e=parseInt(t.attr("colspan"),10)+e,t.attr("colspan",e.toString()))}},W(function(){columns.init()}),$.validateForm=function(e){return!W(e).find(".form-required").filter(function(){return""===W(":input:visible",this).val()}).addClass("form-invalid").find(":input:visible").on("change",function(){W(this).closest(".form-invalid").removeClass("form-invalid")}).length},$.showNotice={warn:function(){return!!confirm(q("You are about to permanently delete these items from your site.\nThis action cannot be undone.\n'Cancel' to stop, 'OK' to delete."))},note:function(e){alert(e)}},$.screenMeta={element:null,toggles:null,page:null,init:function(){this.element=W("#screen-meta"),this.toggles=W("#screen-meta-links").find(".show-settings"),this.page=W("#wpcontent"),this.toggles.on("click",this.toggleEvent)},toggleEvent:function(){var e=W("#"+W(this).attr("aria-controls"));e.length&&(e.is(":visible")?screenMeta.close(e,W(this)):screenMeta.open(e,W(this)))},open:function(e,t){W("#screen-meta-links").find(".screen-meta-toggle").not(t.parent()).css("visibility","hidden"),e.parent().show(),e.slideDown("fast",function(){e.removeClass("hidden").trigger("focus"),t.addClass("screen-meta-active").attr("aria-expanded",!0)}),Q.trigger("screen:options:open")},close:function(e,t){e.slideUp("fast",function(){t.removeClass("screen-meta-active").attr("aria-expanded",!1),W(".screen-meta-toggle").css("visibility",""),e.parent().hide(),e.addClass("hidden")}),Q.trigger("screen:options:close")}},W(".contextual-help-tabs").on("click","a",function(e){var t=W(this);if(e.preventDefault(),t.is(".active a"))return!1;W(".contextual-help-tabs .active").removeClass("active"),t.parent("li").addClass("active"),e=W(t.attr("href")),W(".help-tab-content").not(e).removeClass("active").hide(),e.addClass("active").show()});var t,s=!1,a=W("#permalink_structure"),n=W(".permalink-structure input:radio"),l=W("#custom_selection"),o=W(".form-table.permalink-structure .available-structure-tags button");function c(e){-1!==a.val().indexOf(e.text().trim())?(e.attr("data-label",e.attr("aria-label")),e.attr("aria-label",e.attr("data-used")),e.attr("aria-pressed",!0),e.addClass("active")):e.attr("data-label")&&(e.attr("aria-label",e.attr("data-label")),e.attr("aria-pressed",!1),e.removeClass("active"))}function d(){Q.trigger("wp-window-resized")}n.on("change",function(){"custom"!==this.value&&(a.val(this.value),o.each(function(){c(W(this))}))}),a.on("click input",function(){l.prop("checked",!0)}),a.on("focus",function(e){s=!0,W(this).off(e)}),o.each(function(){c(W(this))}),a.on("change",function(){o.each(function(){c(W(this))})}),o.on("click",function(){var e=a.val(),t=a[0].selectionStart,n=a[0].selectionEnd,i=W(this).text().trim(),o=W(this).hasClass("active")?W(this).attr("data-removed"):W(this).attr("data-added");-1!==e.indexOf(i)?(e=e.replace(i+"/",""),a.val("/"===e?"":e),W("#custom_selection_updated").text(o),c(W(this))):(s||0!==t||0!==n||(t=n=e.length),l.prop("checked",!0),"/"!==e.substr(0,t).substr(-1)&&(i="/"+i),"/"!==e.substr(n,1)&&(i+="/"),a.val(e.substr(0,t)+i+e.substr(n)),W("#custom_selection_updated").text(o),c(W(this)),s&&a[0].setSelectionRange&&(n=(e.substr(0,t)+i).length,a[0].setSelectionRange(n,n),a.trigger("focus")))}),W(function(){var n,i,o,s,e,t,a,r,l,c,d=!1,u=W("input.current-page"),R=u.val(),p=/iPhone|iPad|iPod/.test(navigator.userAgent),F=-1!==navigator.userAgent.indexOf("Android"),m=W("#adminmenuwrap"),h=W("#wpwrap"),f=W("#adminmenu"),v=W("#wp-responsive-overlay"),g=W("#wp-toolbar"),b=g.find('a[aria-haspopup="true"]'),w=W(".meta-box-sortables"),k=!1,C=W("#wpadminbar"),L=0,y=!1,x=!1,S=0,P=!1,T={window:H.height(),wpwrap:h.height(),adminbar:C.height(),menu:m.height()},_=W(".wp-header-end");function M(){var e=W("a.wp-has-current-submenu");"folded"===a?e.attr("aria-haspopup","true"):e.attr("aria-haspopup","false")}function D(e){var t=e.find(".wp-submenu"),e=e.offset().top,n=H.scrollTop(),i=e-n-30,e=e+t.height()+1,o=60+e-h.height(),n=H.height()+n-50;1<(o=i<(o=n<e-o?e-n:o)?i:o)&&W("#wp-admin-bar-menu-toggle").is(":hidden")?t.css("margin-top","-"+o+"px"):t.css("margin-top","")}function E(){W(".notice.is-dismissible").each(function(){var t=W(this),e=W('<button type="button" class="notice-dismiss"><span class="screen-reader-text"></span></button>');t.find(".notice-dismiss").length||(e.find(".screen-reader-text").text(q("Dismiss this notice.")),e.on("click.wp-dismiss-notice",function(e){e.preventDefault(),t.fadeTo(100,0,function(){t.slideUp(100,function(){t.remove()})})}),t.append(e))})}function A(e,t,n,i){n.on("change",function(){e.val(W(this).val())}),e.on("change",function(){n.val(W(this).val())}),i.on("click",function(e){e.preventDefault(),e.stopPropagation(),t.trigger("click")})}function U(){r.prop("disabled",""===l.map(function(){return W(this).val()}).get().join(""))}function K(e){var t=H.scrollTop(),e=!e||"scroll"!==e.type;if(!p&&!f.data("wp-responsive"))if(T.menu+T.adminbar<T.window||T.menu+T.adminbar+20>T.wpwrap)O();else{if(P=!0,T.menu+T.adminbar>T.window){if(t<0)return void(y||(x=!(y=!0),m.css({position:"fixed",top:"",bottom:""})));if(t+T.window>Q.height()-1)return void(x||(y=!(x=!0),m.css({position:"fixed",top:"",bottom:0})));L<t?y?(y=!1,(S=m.offset().top-T.adminbar-(t-L))+T.menu+T.adminbar<t+T.window&&(S=t+T.window-T.menu-T.adminbar),m.css({position:"absolute",top:S,bottom:""})):!x&&m.offset().top+T.menu<t+T.window&&(x=!0,m.css({position:"fixed",top:"",bottom:0})):t<L?x?(x=!1,(S=m.offset().top-T.adminbar+(L-t))+T.menu>t+T.window&&(S=t),m.css({position:"absolute",top:S,bottom:""})):!y&&m.offset().top>=t+T.adminbar&&(y=!0,m.css({position:"fixed",top:"",bottom:""})):e&&(y=x=!1,0<(S=t+T.window-T.menu-T.adminbar-1)?m.css({position:"absolute",top:S,bottom:""}):O())}L=t}}function N(){T={window:H.height(),wpwrap:h.height(),adminbar:C.height(),menu:m.height()}}function O(){!p&&P&&(y=x=P=!1,m.css({position:"",top:"",bottom:""}))}function j(){N(),f.data("wp-responsive")?(V.removeClass("sticky-menu"),O()):T.menu+T.adminbar>T.window?(K(),V.removeClass("sticky-menu")):(V.addClass("sticky-menu"),O())}function z(){W(".aria-button-if-js").attr("role","button")}function I(){var e=!1;return e=$.innerWidth?Math.max($.innerWidth,document.documentElement.clientWidth):e}function B(){var e=I()||961;a=e<=782?"responsive":V.hasClass("folded")||V.hasClass("auto-fold")&&e<=960&&782<e?"folded":"open",Q.trigger("wp-menu-state-set",{state:a})}f.on("click.wp-submenu-head",".wp-submenu-head",function(e){W(e.target).parent().siblings("a").get(0).click()}),W("#collapse-button").on("click.collapse-menu",function(){var e=I()||961;W("#adminmenu div.wp-submenu").css("margin-top",""),a=e<=960?V.hasClass("auto-fold")?(V.removeClass("auto-fold").removeClass("folded"),setUserSetting("unfold",1),setUserSetting("mfold","o"),"open"):(V.addClass("auto-fold"),setUserSetting("unfold",0),"folded"):V.hasClass("folded")?(V.removeClass("folded"),setUserSetting("mfold","o"),"open"):(V.addClass("folded"),setUserSetting("mfold","f"),"folded"),Q.trigger("wp-collapse-menu",{state:a})}),Q.on("wp-menu-state-set wp-collapse-menu wp-responsive-activate wp-responsive-deactivate",M),("ontouchstart"in $||/IEMobile\/[1-9]/.test(navigator.userAgent))&&(V.on((c=p?"touchstart":"click")+".wp-mobile-hover",function(e){f.data("wp-responsive")||W(e.target).closest("#adminmenu").length||f.find("li.opensub").removeClass("opensub")}),f.find("a.wp-has-submenu").on(c+".wp-mobile-hover",function(e){var t=W(this).parent();f.data("wp-responsive")||t.hasClass("opensub")||t.hasClass("wp-menu-open")&&!(t.width()<40)||(e.preventDefault(),D(t),f.find("li.opensub").removeClass("opensub"),t.addClass("opensub"))})),p||F||(f.find("li.wp-has-submenu").hoverIntent({over:function(){var e=W(this),t=e.find(".wp-submenu"),t=parseInt(t.css("top"),10);isNaN(t)||-5<t||f.data("wp-responsive")||(D(e),f.find("li.opensub").removeClass("opensub"),e.addClass("opensub"))},out:function(){f.data("wp-responsive")||W(this).removeClass("opensub").find(".wp-submenu").css("margin-top","")},timeout:200,sensitivity:7,interval:90}),f.on("focus.adminmenu",".wp-submenu a",function(e){f.data("wp-responsive")||W(e.target).closest("li.menu-top").addClass("opensub")}).on("blur.adminmenu",".wp-submenu a",function(e){f.data("wp-responsive")||W(e.target).closest("li.menu-top").removeClass("opensub")}).find("li.wp-has-submenu.wp-not-current-submenu").on("focusin.adminmenu",function(){D(W(this))})),_.length||(_=W(".wrap h1, .wrap h2").first()),W("div.updated, div.error, div.notice").not(".inline, .below-h2").insertAfter(_),Q.on("wp-updates-notice-added wp-plugin-install-error wp-plugin-update-error wp-plugin-delete-error wp-theme-install-error wp-theme-delete-error",E),screenMeta.init(),V.on("click","tbody > tr > .check-column :checkbox",function(e){if("undefined"!=e.shiftKey){if(e.shiftKey){if(!d)return!0;n=W(d).closest("form").find(":checkbox").filter(":visible:enabled"),i=n.index(d),o=n.index(this),s=W(this).prop("checked"),0<i&&0<o&&i!=o&&(i<o?n.slice(i,o):n.slice(o,i)).prop("checked",function(){return!!W(this).closest("tr").is(":visible")&&s})}var t=W(d=this).closest("tbody").find(":checkbox").filter(":visible:enabled").not(":checked");W(this).closest("table").children("thead, tfoot").find(":checkbox").prop("checked",function(){return 0===t.length})}return!0}),V.on("click.wp-toggle-checkboxes","thead .check-column :checkbox, tfoot .check-column :checkbox",function(e){var t=W(this),n=t.closest("table"),i=t.prop("checked"),o=e.shiftKey||t.data("wp-toggle");n.children("tbody").filter(":visible").children().children(".check-column").find(":checkbox").prop("checked",function(){return!W(this).is(":hidden,:disabled")&&(o?!W(this).prop("checked"):!!i)}),n.children("thead,  tfoot").filter(":visible").children().children(".check-column").find(":checkbox").prop("checked",function(){return!o&&!!i})}),A(W("#bulk-action-selector-top"),W("#doaction"),W("#bulk-action-selector-bottom"),W("#doaction2")),A(W("#new_role"),W("#changeit"),W("#new_role2"),W("#changeit2")),W("#wpbody-content").on({focusin:function(){clearTimeout(e),t=W(this).find(".row-actions"),W(".row-actions").not(this).removeClass("visible"),t.addClass("visible")},focusout:function(){e=setTimeout(function(){t.removeClass("visible")},30)}},".table-view-list .has-row-actions"),W("tbody").on("click",".toggle-row",function(){W(this).closest("tr").toggleClass("is-expanded")}),W("#default-password-nag-no").on("click",function(){return setUserSetting("default_password_nag","hide"),W("div.default-password-nag").hide(),!1}),W("#newcontent").on("keydown.wpevent_InsertTab",function(e){var t,n,i,o,s=e.target;27==e.keyCode?(e.preventDefault(),W(s).data("tab-out",!0)):9!=e.keyCode||e.ctrlKey||e.altKey||e.shiftKey||(W(s).data("tab-out")?W(s).data("tab-out",!1):(t=s.selectionStart,n=s.selectionEnd,i=s.value,document.selection?(s.focus(),document.selection.createRange().text="\t"):0<=t&&(o=this.scrollTop,s.value=i.substring(0,t).concat("\t",i.substring(n)),s.selectionStart=s.selectionEnd=t+1,this.scrollTop=o),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()))}),u.length&&u.closest("form").on("submit",function(){-1==W('select[name="action"]').val()&&u.val()==R&&u.val("1")}),W('.search-box input[type="search"], .search-box input[type="submit"]').on("mousedown",function(){W('select[name^="action"]').val("-1")}),W("#contextual-help-link, #show-settings-link").on("focus.scroll-into-view",function(e){e.target.scrollIntoViewIfNeeded&&e.target.scrollIntoViewIfNeeded(!1)}),(c=W("form.wp-upload-form")).length&&(r=c.find('input[type="submit"]'),l=c.find('input[type="file"]'),U(),l.on("change",U)),p||(H.on("scroll.pin-menu",K),Q.on("tinymce-editor-init.pin-menu",function(e,t){t.on("wp-autoresize",N)})),$.wpResponsive={init:function(){var e=this;this.maybeDisableSortables=this.maybeDisableSortables.bind(this),Q.on("wp-responsive-activate.wp-responsive",function(){e.activate()}).on("wp-responsive-deactivate.wp-responsive",function(){e.deactivate()}),W("#wp-admin-bar-menu-toggle a").attr("aria-expanded","false"),W("#wp-admin-bar-menu-toggle").on("click.wp-responsive",function(e){e.preventDefault(),C.find(".hover").removeClass("hover"),h.toggleClass("wp-responsive-open"),h.hasClass("wp-responsive-open")?(W(this).find("a").attr("aria-expanded","true"),W("#adminmenu a:first").trigger("focus")):W(this).find("a").attr("aria-expanded","false")}),W("#wp-admin-bar-menu-toggle, #adminmenumain").on("focusout",function(){var e,t;h.hasClass("wp-responsive-open")&&document.hasFocus()&&setTimeout(function(){e=W.contains(W("#wp-admin-bar-menu-toggle")[0],W(":focus")[0]),t=W.contains(W("#adminmenumain")[0],W(":focus")[0]),e||t||W("#wp-admin-bar-menu-toggle").trigger("click.wp-responsive")},10)}),f.on("click.wp-responsive","li.wp-has-submenu > a",function(e){f.data("wp-responsive")&&(W(this).parent("li").toggleClass("selected"),W(this).trigger("focus"),e.preventDefault())}),e.trigger(),Q.on("wp-window-resized.wp-responsive",this.trigger.bind(this)),H.on("load.wp-responsive",this.maybeDisableSortables),Q.on("postbox-toggled",this.maybeDisableSortables),W("#screen-options-wrap input").on("click",this.maybeDisableSortables)},maybeDisableSortables:function(){(-1<navigator.userAgent.indexOf("AppleWebKit/")?H.width():$.innerWidth)<=782||w.find(".ui-sortable-handle:visible").length<=1&&jQuery(".columns-prefs-1 input").prop("checked")?this.disableSortables():this.enableSortables()},activate:function(){j(),V.hasClass("auto-fold")||V.addClass("auto-fold"),f.data("wp-responsive",1),this.disableSortables()},deactivate:function(){j(),f.removeData("wp-responsive"),this.maybeDisableSortables()},trigger:function(){var e=I();e&&(e<=782?k||(Q.trigger("wp-responsive-activate"),k=!0):k&&(Q.trigger("wp-responsive-deactivate"),k=!1),e<=480?this.enableOverlay():this.disableOverlay(),this.maybeDisableSortables())},enableOverlay:function(){0===v.length&&(v=W('<div id="wp-responsive-overlay"></div>').insertAfter("#wpcontent").hide().on("click.wp-responsive",function(){g.find(".menupop.hover").removeClass("hover"),W(this).hide()})),b.on("click.wp-responsive",function(){v.show()})},disableOverlay:function(){b.off("click.wp-responsive"),v.hide()},disableSortables:function(){if(w.length)try{w.sortable("disable"),w.find(".ui-sortable-handle").addClass("is-non-sortable")}catch(e){}},enableSortables:function(){if(w.length)try{w.sortable("enable"),w.find(".ui-sortable-handle").removeClass("is-non-sortable")}catch(e){}}},W(document).on("ajaxComplete",function(){z()}),Q.on("wp-window-resized.set-menu-state",B),Q.on("wp-menu-state-set wp-collapse-menu",function(e,t){var n,i=W("#collapse-button"),t="folded"===t.state?(n="false",q("Expand Main menu")):(n="true",q("Collapse Main menu"));i.attr({"aria-expanded":n,"aria-label":t})}),$.wpResponsive.init(),j(),B(),M(),E(),z(),Q.on("wp-pin-menu wp-window-resized.pin-menu postboxes-columnchange.pin-menu postbox-toggled.pin-menu wp-collapse-menu.pin-menu wp-scroll-start.pin-menu",j),W(".wp-initial-focus").trigger("focus"),V.on("click",".js-update-details-toggle",function(){var e=W(this).closest(".js-update-details"),t=W("#"+e.data("update-details"));t.hasClass("update-details-moved")||t.insertAfter(e).addClass("update-details-moved"),t.toggle(),W(this).attr("aria-expanded",t.is(":visible"))})}),W(function(e){var t,n;V.hasClass("update-php")&&(t=e("a.update-from-upload-overwrite"),n=e(".update-from-upload-expired"),t.length)&&n.length&&$.setTimeout(function(){t.hide(),n.removeClass("hidden"),$.wp&&$.wp.a11y&&$.wp.a11y.speak(n.text())},714e4)}),H.on("resize.wp-fire-once",function(){$.clearTimeout(t),t=$.setTimeout(d,200)}),"-ms-user-select"in document.documentElement.style&&navigator.userAgent.match(/IEMobile\/10\.0/)&&((n=document.createElement("style")).appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.getElementsByTagName("head")[0].appendChild(n))}(jQuery,window);