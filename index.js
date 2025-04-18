import{a as f,S as m,i as n}from"./assets/vendor-BAI5roma.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p="49754140-bd1dd51ce5d5c06d761f1a420";function y(a){return f.get("https://pixabay.com/api/",{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");function g(a){c.innerHTML=a.map(({webformatURL:t,largeImageURL:i,tags:o,likes:e,views:r,comments:s,downloads:d})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${i}">
            <img
                class="gallery-image"
                src="${t}"
                alt="${o}"
            />
            <div class="captions">
            <p>Likes: ${e}; </p>
            <p>Views: ${r}; </p>
            <p>Comments: ${s}; </p>
            <p>Downloads: ${d}; </p>
            </div>
        </a>
    </li>
    `).join("")}const h=new m(".gallery a",{captionsData:"alt",captionDelay:250});h.refresh();function L(){c.innerHTML=""}function b(){u.classList.add("loader")}function v(){u.classList.remove("loader")}const l=document.querySelector(".form");l.addEventListener("submit",a=>{a.preventDefault();const t=l.elements["search-text"].value;if(L(),t===""){n.error({title:"Error",message:"Please enter search parameters!"});return}b(),y(t).then(o=>{if(o.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(o.hits)}).catch(()=>{n.error()}).finally(()=>{v()}),l.reset()});
//# sourceMappingURL=index.js.map
