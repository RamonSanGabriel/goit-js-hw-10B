!function(){var e="https://api.thecatapi.com/v1",n="live_SC8BfHNVyGNYfxzcakCxSqyvCzPlozPMdyDAAbZun9scd7Or7ZXJFd9JXP2T8Gmi";function t(t){return fetch("".concat(e,"/images/search?breed_ids=").concat(t),{headers:{"x-api-key":n}}).then((function(e){if(e.ok)return e.json();throw new Error(e.status)}))}var c=document.querySelector(".breed-select"),a=document.querySelector(".cat-info"),s=document.querySelector(".loader"),i=document.querySelector(".error");function r(){i.classList.remove("is-hidden"),c.classList.add("is-hidden")}i.classList.add("is-hidden"),fetch("".concat(e,"/breeds"),{headers:{"x-api_key":n}}).then((function(e){if(e.ok)return e.json();throw new Error(e.status)})).then((function(e){s.classList.replace("loader","is-hidden");var n=e.map((function(e){var n=e.name,t=e.id;return"<option value=".concat(t,">").concat(n,"</option>")}));c.insertAdjacentHTML("beforeend",n),c.classList.remove("is-hidden")})).catch(r),c.addEventListener("change",(function(e){s.classList.replace("is-hidden","loader"),a.classList.add("is-hidden"),t(e.target.value).then((function(e){var n=e[0],t=n.url,i=n.breeds[0],r=i.name,o=i.description,d=i.temperament;a.innerHTML="\n            <img src='".concat(t,"' alt='{name}'/>\n            <div class='box'>\n                <h2>").concat(r,"</h2>\n                <p>").concat(o,"</p>\n                <p>").concat(d,"</p>\n            </div>\n        "),a.classList.remove("is-hidden"),c.classList.remove("is-hidden"),s.classList.replace("loader","is-hidden")})).catch(r)}))}();
//# sourceMappingURL=index.82a79337.js.map