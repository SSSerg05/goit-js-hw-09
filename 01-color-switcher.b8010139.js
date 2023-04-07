function t(t){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}!function(){const a=document.body;let n=null;a.addEventListener("click",(e=>{"start"in e.target.dataset?n||(n=setInterval(t,1e3,a)):"stop"in e.target.dataset&&n&&(clearInterval(n),n=null)}))}();
//# sourceMappingURL=01-color-switcher.b8010139.js.map
