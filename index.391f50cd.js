function e(e){r.classList.remove("block"),s.classList.add("none"),n.classList.add("block");return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}&api_key=live_OIJcAlfhioE2okkhdvZI0NBmnhOc4DuCU1xTCsqGhvs88ckKiLfq8DAgXSmrAfOG`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const t=document.querySelector(".cat-info"),s=document.querySelector(".breed-select"),n=document.querySelector(".loader"),r=document.querySelector(".error");function c(){return n.classList.remove("block"),r.classList.add("block")}(s.classList.add("none"),n.classList.add("block"),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_OIJcAlfhioE2okkhdvZI0NBmnhOc4DuCU1xTCsqGhvs88ckKiLfq8DAgXSmrAfOG").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>function(e){const t=e.map((({id:e,name:t})=>` <option value="${e}">${t}</option> `));return s.innerHTML=t,s.classList.remove("none"),n.classList.remove("block")}(e))).catch((e=>c())),s.addEventListener("change",(o=>{e(o.currentTarget.value).then((e=>function(e){let c,o,a,i;if(!e.length>0)return s.classList.remove("none"),n.classList.remove("block"),r.classList.add("block"),t.innerHTML="";e.forEach((e=>{o=e.breeds[0].description,c=e.url,a=e.breeds[0].temperament,i=e.breeds[0].name}));return t.innerHTML=` <img src="${c}" alt="Cat" width="460"  />\n        <div class ="box">\n        <h1>${i}</h1>\n        <p>${o}</p>\n        <p><b>Temperament:</b>${a}</p></div>`,s.classList.remove("none"),n.classList.remove("block")}(e))).catch((e=>c()))}));
//# sourceMappingURL=index.391f50cd.js.map
