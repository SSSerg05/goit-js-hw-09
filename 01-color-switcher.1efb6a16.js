function t(t){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}!function(){const a=document.body;a.addEventListener("click",(e=>{let n;e.preventDefault(),"start"===e.target.dataset.action?n=setInterval(t,1e3,a):"stop"===e.target.dataset.action&&(n=clearInterval())}))}();
//# sourceMappingURL=01-color-switcher.1efb6a16.js.map
