!function($){$(function(){function e(){t($(".cd-headline.letters").find("b")),n($(".cd-headline"))}function t(e){e.each(function(){var e=$(this),t=e.text().split(""),n=e.hasClass("is-visible");for(i in t)e.parents(".rotate-2").length>0&&(t[i]="<em>"+t[i]+"</em>"),t[i]=n?'<i class="in">'+t[i]+"</i>":"<i>"+t[i]+"</i>";var s=t.join("");e.html(s).css("opacity",1)})}function n(e){var i=x;e.each(function(){var e=$(this);if(e.hasClass("loading-bar"))i=T,setTimeout(function(){e.find(".cd-words-wrapper").addClass("is-loading")},z);else if(e.hasClass("clip")){var t=e.find(".cd-words-wrapper"),n=t.width()+10;t.css("width",n)}else if(!e.hasClass("type")){var a=e.find(".cd-words-wrapper b"),r=0;a.each(function(){var e=$(this).width();e>r&&(r=e)}),e.find(".cd-words-wrapper").css("width",r)}setTimeout(function(){s(e.find(".is-visible").eq(0))},i)})}function s(e){var i=o(e);if(e.parents(".cd-headline").hasClass("type")){var t=e.parent(".cd-words-wrapper");t.addClass("selected").removeClass("waiting"),setTimeout(function(){t.removeClass("selected"),e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},M),setTimeout(function(){a(i,q)},N)}else if(e.parents(".cd-headline").hasClass("letters")){var n=e.children("i").length>=i.children("i").length?!0:!1;r(e.find("i").eq(0),e,n,k),d(i.find("i").eq(0),i,n,k)}else e.parents(".cd-headline").hasClass("clip")?e.parents(".cd-words-wrapper").animate({width:"2px"},E,function(){c(e,i),a(i)}):e.parents(".cd-headline").hasClass("loading-bar")?(e.parents(".cd-words-wrapper").removeClass("is-loading"),c(e,i),setTimeout(function(){s(i)},T),setTimeout(function(){e.parents(".cd-words-wrapper").addClass("is-loading")},z)):(c(e,i),setTimeout(function(){s(i)},x))}function a(e,i){e.parents(".cd-headline").hasClass("type")?(d(e.find("i").eq(0),e,!1,i),e.addClass("is-visible").removeClass("is-hidden")):e.parents(".cd-headline").hasClass("clip")&&e.parents(".cd-words-wrapper").animate({width:e.width()+10},E,function(){setTimeout(function(){s(e)},L)})}function r(e,i,t,n){if(e.removeClass("in").addClass("out"),e.is(":last-child")?t&&setTimeout(function(){s(o(i))},x):setTimeout(function(){r(e.next(),i,t,n)},n),e.is(":last-child")&&$("html").hasClass("no-csstransitions")){var a=o(i);c(i,a)}}function d(e,i,t,n){e.addClass("in").removeClass("out"),e.is(":last-child")?(i.parents(".cd-headline").hasClass("type")&&setTimeout(function(){i.parents(".cd-words-wrapper").addClass("waiting")},200),t||setTimeout(function(){s(i)},x)):setTimeout(function(){d(e.next(),i,t,n)},n)}function o(e){return e.is(":last-child")?e.parent().children().eq(0):e.next()}function l(e){return e.is(":first-child")?e.parent().children().last():e.prev()}function c(e,i){e.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")}function u(e){return e.replace(/([A-Z])/g,function(e,i){return"-"+i.toLowerCase()})}function p(e){return document.querySelector('.popup[data-popup="'+e+'"]')}function f(e){return e.getBoundingClientRect()}function h(e,i){var t=f(e),n=f(i);return{height:n.height/t.height,width:n.width/t.width,left:n.left-t.left,top:n.top-t.top}}function v(e,i){return e.style[Modernizr.prefixed("transform")]="translate("+i.left+"px,"+i.top+"px) scale("+i.width+","+i.height+")"}function m(e,i){var t=" "+e.className+" ",n=" "+i+" ";return-1!=t.indexOf(n)}function w(e){var i=e.target||e.srcElement;if(i=i.parentNode)do{var t=i.className;if(t&&(t=t.split(" "),-1!==t.indexOf("card-work"))){return i;break}}while(i=i.parentNode)}function C(e){var i=w(e),t=i,n=t.getAttribute("data-popup-id"),s=p(n),a=h(t,s);t.style[Modernizr.prefixed("transitionDuration")]="0.5s",t.style[Modernizr.prefixed("transitionTimingFunction")]="cubic-bezier(0.4, 0, 0.2, 1)",t.style[Modernizr.prefixed("transitionProperty")]=u(Modernizr.prefixed("transform")),t.style.borderRadius=0,v(t,a),y(t,s),b(t,s)}function y(e,i){e.addEventListener(R,function t(){e.style.opacity=0,i.style.visibility="visible",i.style.zIndex=9999,e.removeEventListener(R,t)})}function b(e,i){i.addEventListener("click",function t(n){var s=h(i,e);e.style.opacity=1,e.style.borderRadius="6px",g(n),v(e,s)},!1)}function g(e){e.target.style.visibility="hidden",e.target.style.zIndex=2}$(".button-collapse").sideNav(),$(".scrollspy").scrollSpy();var x=2500,T=3800,z=T-3e3,k=50,q=150,M=500,N=M+800,E=600,L=1500;e(),$(".button-collapse").sideNav({menuWidth:240,closeOnClick:!0}),$(".parallax").parallax();var A=document.querySelectorAll(".card-work"),O={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",transition:"transitionend"},R=O[Modernizr.prefixed("transition")]})}(jQuery);