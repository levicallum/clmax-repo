const e=document.querySelector(".mobile-nav-toggle"),t=document.querySelector(".mobile-nav-links");e.addEventListener("click",()=>{t.classList.toggle("mobile-nav-open"),e.classList.toggle("mobile-nav-open")}),t.addEventListener("click",()=>{t.classList.toggle("mobile-nav-open"),e.classList.toggle("mobile-nav-open")});const s=document.getElementById("splash");document.addEventListener("DOMContentLoaded",e=>{setTimeout(()=>{s.classList.add("fade-out")},5e3),setTimeout(()=>{s.classList.add("display-none")},1e4)});const c={rootMargin:"0px 0px 0px 0px",threshold:.5},o=document.querySelector(".nav-about"),n=document.querySelector("#about-page"),a=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting?o.classList.add("active"):o.classList.remove("active")})}),c);a.observe(n);const i=document.querySelector(".nav-service"),l=document.querySelector("#service-page"),d=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting?i.classList.add("active"):i.classList.remove("active")})}),c);d.observe(l);const r=document.querySelector(".nav-clients"),m=document.querySelector("#clients-page"),u=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting?r.classList.add("active"):r.classList.remove("active")})}),c);u.observe(m);const v=document.querySelector(".nav-contact"),g=document.querySelector("#contact-page"),L=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting?v.classList.add("active"):v.classList.remove("active")})}),c);L.observe(g);let p=new Date;p.setFullYear(p.getFullYear()+1);const I={getItem:e=>document.cookie.split(";").map(e=>e.split("=")).reduce((e,[t,s])=>({...e,[t.trim()]:s}),{})[e],setItem:(e,t)=>{document.cookie=`${e}=${t}`,document.cookie="expires="+p.toUTCString()+";"}},b=I,h=()=>!b.getItem("clmax_consent"),y=()=>b.setItem("clmax_consent",!0),x=()=>!b.getItem("clmax_splash"),f=()=>b.setItem("clmax_splash",!0);window.onload=()=>{setTimeout(()=>{b.setItem("clmax_splash",!0),s.classList.add("hidden")},7e3),b.getItem("clmax_splash")?s.classList.add("hidden"):s.classList.remove("hidden");const e=document.getElementById("cookie-container");document.getElementById("cookie-accept").addEventListener("click",t=>{b.setItem("clmax_consent",!0),e.classList.add("fade"),setTimeout(()=>{e.classList.add("hidden")},1e3)}),b.getItem("clmax_consent")||(e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("fade")},2e3))};