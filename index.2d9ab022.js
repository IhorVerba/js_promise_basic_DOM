new Promise(function(e,t){document.querySelector(".logo").addEventListener("click",function(){e()})}).then(function(){var e=document.createElement("div");e.className="message",e.textContent="Promise was resolved",document.body.appendChild(e)}),new Promise(function(e,t){setTimeout(function(){t(Error("Promise was rejected!"))},3e3)}).catch(function(){var e=document.createElement("div");e.className="message error-message",e.textContent="Promise was rejected",document.body.appendChild(e)});//# sourceMappingURL=index.2d9ab022.js.map

//# sourceMappingURL=index.2d9ab022.js.map
