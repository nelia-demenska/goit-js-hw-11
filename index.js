import{S as c,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="46142789-99b5e0e53b7f0f17aff330ecb",f="https://pixabay.com/api/";async function u(a,s=1){const r=await fetch(`${f}?key=${d}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=16`);if(!r.ok)throw new Error("Failed to fetch data");return await r.json()}function m(a){const s=document.getElementById("gallery"),r=a.map(o=>`
        <a href="${o.largeImageURL}" class="gallery-item">
        <div class="wrapper">
    <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
    </div>
    <ul class="info">
        <li>Likes: ${o.likes}</li>
        <li>Views: ${o.views}</li>
        <li>Comments: ${o.comments}</li>
        <li>Downloads: ${o.downloads}</li>
    </ul>
    </a>
`).join("");s.innerHTML=r}const y=document.getElementById("search-form"),l=document.getElementById("loader");let g=new c(".gallery-item");y.addEventListener("submit",async a=>{a.preventDefault();const s=a.target.elements.searchQuery.value.trim();if(!s){n.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}try{l.classList.remove("hidden");const r=await u(s);if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(r.hits),g.refresh()}catch(r){n.error({message:r.message})}finally{l.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
