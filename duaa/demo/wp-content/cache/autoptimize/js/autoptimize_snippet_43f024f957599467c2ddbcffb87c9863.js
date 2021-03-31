try{var astraGetParents=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;0<=--a&&t.item(a)!==this;);return-1<a});for(var a=[];e&&e!==document;e=e.parentNode)t?e.matches(t)&&a.push(e):a.push(e);return a},getParents=function(e,t){console.warn("getParents() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraGetParents() instead."),astraGetParents(e,t)},astraToggleClass=function(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)},toggleClass=function(e,t){console.warn("toggleClass() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraToggleClass() instead."),astraToggleClass(e,t)};!function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a}e.prototype=window.Event.prototype,window.CustomEvent=e}();var astraTriggerEvent=function(e,t,a){var n=new CustomEvent(t,2<arguments.length&&void 0!==a?a:{});e.dispatchEvent(n)};!function(){var r=document.querySelectorAll("#masthead .main-header-menu-toggle"),i=document.getElementById("masthead"),o={},l="",c=document.body,d="";function e(e){l=e.detail.type;var t=document.querySelectorAll(".menu-toggle");if("dropdown"===l&&(document.getElementById("ast-mobile-popup").classList.remove("active","show"),s("updateHeader")),"off-canvas"===l)for(var a=0;a<t.length;a++)void 0!==t[a]&&t[a].classList.contains("toggled")&&t[a].click();n(l)}function s(e){var t="";if(null==(d=i.querySelector("#ast-mobile-header"))||"dropdown"!==d.dataset.type||"updateHeader"===e){if(void 0!==e&&"updateHeader"!==e)t=e.closest(".ast-mobile-popup-inner").querySelectorAll(".menu-item-has-children");else t=document.querySelector("#ast-mobile-popup").querySelectorAll(".menu-item-has-children");for(var a=0;a<t.length;a++){t[a].classList.remove("ast-submenu-expanded");for(var n=t[a].querySelectorAll(".sub-menu"),s=0;s<n.length;s++)n[s].style.display="none"}var o=document.querySelectorAll(".menu-toggle");document.body.classList.remove("ast-main-header-nav-open","ast-popup-nav-open"),document.documentElement.classList.remove("ast-off-canvas-active");for(var l=0;l<o.length;l++)o[l].classList.remove("toggled"),o[l].style.display="flex"}}function n(e){var t=document.querySelectorAll(".menu-toggle"),a=document.getElementById("menu-toggle-close");document.querySelectorAll("#ast-mobile-popup .ast-menu-toggle");if(void 0===e&&null!==i){if(!(d=i.querySelector("#ast-mobile-header")))return;e=d.dataset.type}if("off-canvas"===e){a=document.getElementById("menu-toggle-close"),document.querySelectorAll("#ast-mobile-popup .ast-menu-toggle");for(var n=0;n<t.length;n++)t[n].removeEventListener("click",astraNavMenuToggle,!1),t[n].addEventListener("click",popupTriggerClick,!1);a.addEventListener("click",function(e){document.getElementById("ast-mobile-popup").classList.remove("active","show"),s(this)}),document.addEventListener("keyup",function(e){27===e.keyCode&&(e.preventDefault(),document.getElementById("ast-mobile-popup").classList.remove("active","show"),s())}),document.addEventListener("click",function(e){e.target===document.querySelector(".ast-mobile-popup-drawer.active .ast-mobile-popup-overlay")&&(document.getElementById("ast-mobile-popup").classList.remove("active","show"),s())}),AstraToggleSetup()}else if("dropdown"===e){for(n=0;n<t.length;n++)t[n].removeEventListener("click",popupTriggerClick,!1),t[n].addEventListener("click",astraNavMenuToggle,!1);AstraToggleSetup()}u()}null!=i&&(d=i.querySelector("#ast-mobile-header")),""!==d&&null!==d&&(l=d.dataset.type),document.addEventListener("astMobileHeaderTypeChange",e,!1),popupTriggerClick=function(e){var t=document.getElementById("ast-mobile-popup");c.classList.contains("ast-popup-nav-open")||c.classList.add("ast-popup-nav-open"),c.classList.contains("ast-main-header-nav-open")||c.classList.add("ast-main-header-nav-open"),document.documentElement.classList.contains("ast-off-canvas-active")||document.documentElement.classList.add("ast-off-canvas-active"),this.style.display="none",t.classList.add("active","show")},window.addEventListener("load",function(){n()}),document.addEventListener("astLayoutWidthChanged",function(){n()}),document.addEventListener("astPartialContentRendered",function(){r=document.querySelectorAll(".main-header-menu-toggle"),c.classList.remove("ast-main-header-nav-open"),document.addEventListener("astMobileHeaderTypeChange",e,!1),n(),u()}),window.addEventListener("resize",function(){var e=document.getElementById("menu-toggle-close");e&&e.click(),"INPUT"!==document.activeElement.tagName&&(t(),"dropdown"===l&&AstraToggleSetup())}),"dropdown"===l&&document.addEventListener("DOMContentLoaded",function(){var e,t;for(AstraToggleSetup(),e=document.querySelectorAll(".navigation-accessibility"),t=0;t<=e.length-1;t++)e[t]&&h(e[t])});var t=function(){var e=c.style.overflow;c.style.overflow="hidden";var t=window.outerWidth;c.style.overflow=e,c.classList.contains("customize-partial-edit-shortcuts-shown")&&(t=window.innerWidth);var a=astra.break_point,n=document.querySelectorAll(".ast-main-header-wrap");if(0<n.length)for(var s=0;s<n.length;s++)"DIV"==n[s].tagName&&n[s].classList.contains("ast-main-header-wrap")&&(a<t?(null!=r[s]&&r[s].classList.remove("toggled"),c.classList.remove("ast-header-break-point"),c.classList.add("ast-desktop"),astraTriggerEvent(c,"astra-header-responsive-enabled")):(c.classList.add("ast-header-break-point"),c.classList.remove("ast-desktop"),astraTriggerEvent(c,"astra-header-responsive-disabled")))},u=function(){var e=document.querySelectorAll(".ast-account-action-login")[0];if(void 0!==e){var t=document.getElementById("ast-hb-login-close"),a=document.getElementById("ast-hb-account-login-wrap");e.onclick=function(e){e.preventDefault(),e.stopPropagation(),a.classList.contains("show")||a.classList.add("show")},t.onclick=function(e){e.preventDefault(),a.classList.remove("show")}}};t(),AstraToggleSubMenu=function(){var e=this.parentNode;if(e.classList.contains("ast-submenu-expanded")&&document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")&&!this.classList.contains("ast-menu-toggle")){var t=e.querySelector("a").getAttribute("href");""===t&&"#"===t||(window.location=t)}for(var a=e.querySelectorAll(".menu-item-has-children"),n=0;n<a.length;n++){a[n].classList.remove("ast-submenu-expanded");var s=a[n].querySelector(".sub-menu, .children");null!==s&&(s.style.display="none")}var o=e.parentNode.querySelectorAll(".menu-item-has-children");for(n=0;n<o.length;n++)if(o[n]!=e){o[n].classList.remove("ast-submenu-expanded");for(var l=o[n].querySelectorAll(".sub-menu"),r=0;r<l.length;r++)l[r].style.display="none"}e.classList.contains("menu-item-has-children")&&(astraToggleClass(e,"ast-submenu-expanded"),e.classList.contains("ast-submenu-expanded")?e.querySelector(".sub-menu").style.display="block":e.querySelector(".sub-menu").style.display="none")},AstraNavigationMenu=function(e){console.warn("AstraNavigationMenu() function has been deprecated since version 1.6.5 or above of Astra Theme and will be removed in the future.")},AstraToggleMenu=function(e){if(console.warn("AstraToggleMenu() function has been deprecated since version 1.6.5 or above of Astra Theme and will be removed in the future. Use AstraToggleSubMenu() instead."),0<e.length)for(var t=0;t<e.length;t++)e[t].addEventListener("click",AstraToggleSubMenu,!1)},AstraToggleSetup=function(){if("off-canvas"===l||"full-width"===l)var e=document.querySelectorAll("#ast-mobile-popup"),t=document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle");else e=document.querySelectorAll("#ast-mobile-header"),t=document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle");if(0<t.length)for(var a=0;a<t.length;a++)if(t[a].setAttribute("data-index",a),o[a]||(o[a]=t[a],t[a].addEventListener("click",astraNavMenuToggle,!1)),void 0!==e[a]){if(document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link"))var n=e[a].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle");else n=e[a].querySelectorAll("ul.main-header-menu .ast-menu-toggle");if(0<n.length)for(var s=0;s<n.length;s++)n[s].addEventListener("click",AstraToggleSubMenu,!1)}},astraNavMenuToggle=function(e){e.preventDefault();var t=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation");r=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle");var a="0";if(null!==this.closest("#ast-fixed-header")&&(t=document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"),r=document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"),a="0"),void 0===t[a])return!1;for(var n=t[a].querySelectorAll(".menu-item-has-children"),s=0;s<n.length;s++){n[s].classList.remove("ast-submenu-expanded");for(var o=n[s].querySelectorAll(".sub-menu"),l=0;l<o.length;l++)o[l].style.display="none"}-1!==(this.getAttribute("class")||"").indexOf("main-header-menu-toggle")&&(astraToggleClass(t[a],"toggle-on"),astraToggleClass(r[a],"toggled"),t[a].classList.contains("toggle-on")?(t[a].style.display="block",c.classList.add("ast-main-header-nav-open")):(t[a].style.display="",c.classList.remove("ast-main-header-nav-open")))},c.addEventListener("astra-header-responsive-enabled",function(){var e=document.querySelectorAll(".main-header-bar-navigation");if(0<e.length)for(var t=0;t<e.length;t++){null!=e[t]&&(e[t].classList.remove("toggle-on"),e[t].style.display="");for(var a=e[t].getElementsByClassName("sub-menu"),n=0;n<a.length;n++)a[n].style.display="";for(var s=e[t].getElementsByClassName("children"),o=0;o<s.length;o++)s[o].style.display="";for(var l=e[t].getElementsByClassName("ast-search-menu-icon"),r=0;r<l.length;r++)l[r].classList.remove("ast-dropdown-active"),l[r].style.display=""}},!1);var a,m,g;m=navigator.userAgent,g=m.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[],/trident/i.test(g[1])?a=/\brv[ :]+(\d+)/g.exec(m)||[]:"Chrome"===g[1]&&null!=(a=m.match(/\bOPR|Edge\/(\d+)/))||(g=g[2]?[g[1],g[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(a=m.match(/version\/(\d+)/i))&&g.splice(1,1,a[1]),"Safari"===g[0]&&g[1]<11&&bodyElement.classList.add("ast-safari-browser-less-than-11"));for(var v=document.getElementsByClassName("astra-search-icon"),p=0;p<v.length;p++)v[p].onclick=function(e){if(this.classList.contains("slide-search")){e.preventDefault();var t=this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon");if(t.classList.contains("ast-dropdown-active"))""!==(t.querySelector(".search-field").value||"")&&t.querySelector(".search-form").submit(),t.classList.remove("ast-dropdown-active");else t.classList.add("ast-dropdown-active"),t.querySelector(".search-field").setAttribute("autocomplete","off"),setTimeout(function(){t.querySelector(".search-field").focus()},200)}};function h(e){if(e&&(button=e.getElementsByTagName("button")[0],"undefined"!=typeof button||(button=e.getElementsByTagName("a")[0],"undefined"!=typeof button)))if(menu=e.getElementsByTagName("ul")[0],"undefined"!=typeof menu){for(menu.setAttribute("aria-expanded","false"),-1===menu.className.indexOf("nav-menu")&&(menu.className+=" nav-menu"),button.onclick=function(){-1!==e.className.indexOf("toggled")?(e.className=e.className.replace(" toggled",""),button.setAttribute("aria-expanded","false"),menu.setAttribute("aria-expanded","false")):(e.className+=" toggled",button.setAttribute("aria-expanded","true"),menu.setAttribute("aria-expanded","true"))},links=menu.getElementsByTagName("a"),subMenus=menu.getElementsByTagName("ul"),p=0,len=subMenus.length;p<len;p++)subMenus[p].parentNode.setAttribute("aria-haspopup","true");for(p=0,len=links.length;p<len;p++)links[p].addEventListener("focus",y,!0),links[p].addEventListener("blur",b,!0),links[p].addEventListener("click",f,!0)}else button.style.display="none"}function f(){var e=this||"";if(e&&!e.classList.contains("astra-search-icon")&&-1!==new String(e).indexOf("#")){var t=e.parentNode;if(c.classList.contains("ast-header-break-point")){if(!document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")||!t.classList.contains("menu-item-has-children")){document.querySelector(".main-header-menu-toggle").classList.remove("toggled");var a=document.querySelector(".main-header-bar-navigation");a.classList.remove("toggle-on"),a.style.display="none",astraTriggerEvent(document.querySelector("body"),"astraMenuHashLinkClicked")}}else for(;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&-1!==e.className.indexOf("focus")&&(e.className=e.className.replace(" focus","")),e=e.parentElement}}function y(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}function b(){var e=this||"";if(link=new String(e),-1===link.indexOf("#")||!c.classList.contains("ast-mouse-clicked"))for(;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}c.onclick=function(e){if(void 0!==e.target.classList&&!e.target.classList.contains("ast-search-menu-icon")&&0===astraGetParents(e.target,".ast-search-menu-icon").length&&0===astraGetParents(e.target,".ast-search-icon").length)for(var t=document.getElementsByClassName("ast-search-menu-icon"),a=0;a<t.length;a++)t[a].classList.remove("ast-dropdown-active")},"querySelector"in document&&"addEventListener"in window&&(c.addEventListener("mousedown",function(){c.classList.add("ast-mouse-clicked")}),c.addEventListener("keydown",function(){c.classList.remove("ast-mouse-clicked")}));var L,E=null,S=null;function w(e){if(null!=(i=document.getElementById("masthead"))){var t=c.clientWidth,a=astra.break_point,n=i.querySelector("#masthead > #ast-desktop-header"),s=i.querySelector("#masthead > #ast-mobile-header");if(t<=a){if("mobile"===S)return;e&&E&&(s&&i.removeChild(s),i.appendChild(E)),e&&n&&(E=n.cloneNode(!0)),S="mobile",n&&i.removeChild(n)}else{if("desktop"===S)return;e&&E&&(n&&i.removeChild(n),i.appendChild(E)),e&&s&&(E=s.cloneNode(!0)),S="desktop",s&&i.removeChild(s)}}}window.addEventListener("load",function(){w(!0)}),document.addEventListener("astPartialContentRendered",function(){w()}),window.addEventListener("resize",function(){clearTimeout(L),L=setTimeout(function(){w(!0),n(),document.dispatchEvent(new CustomEvent("astLayoutWidthChanged",{detail:{response:""}}))},50)})}();}catch(e){}