import{j as t,a as e,S as h,P as p,A as g,b as x,r as m,R as u,B as f}from"./vendor.e8d70881.js";const y=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}};y();var v="/assets/hero.a707d92d.png";const b=()=>t("section",{id:"home",className:"min-h-screen flex py-10 md:flex-row flex-col items-center",children:[e("div",{className:"flex-1 flex items-center justify-center h-full",children:e("img",{src:v,alt:"",className:"md:w-11/12 h-full object-cover"})}),e("div",{className:"flex-1",children:t("div",{className:"md:text-left text-center",children:[t("h1",{className:"md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold",children:[t("span",{className:"text-cyan-600 md:text-6xl text-5xl",children:["Hello!",e("br",{})]}),"My Name is ",e("span",{children:"Raj Ghodasara"})]}),e("h4",{className:"md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600",children:"MERN Stack Developer"}),e("button",{className:"btn-primary mt-8",children:e("a",{href:"#contact",children:"Contact Me"})}),t("div",{className:"mt-8 text-3xl flex items-center md:justify-start justify-center gap-5 ",children:[e("div",{className:"text-gray-600 hover:text-white cursor-pointer hover:scale-125 transition-all",children:e("a",{href:"https://www.linkedin.com/in/raj-ghodasara-610704209/",target:"_blank",children:e("ion-icon",{name:"logo-linkedin"})})}),e("div",{className:"text-gray-600 hover:text-white cursor-pointer hover:scale-125 transition-all",children:e("a",{href:"https://github.com/rajp04",target:"_blank",children:e("ion-icon",{name:"logo-github"})})}),e("div",{className:"text-gray-600 hover:text-white cursor-pointer hover:scale-125 transition-all",children:e("a",{href:"https://www.instagram.com/raj_patel_04/",target:"_blank",children:e("ion-icon",{name:"logo-instagram"})})})]})]})})]}),N=()=>e("section",{id:"about",className:"py-10 text-white",children:t("div",{className:"text-center mt-8",children:[t("h3",{className:"text-4xl font-semibold",children:["About ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 my-3 text-lg",children:"My introduction"}),e("div",{className:"flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto",children:t("div",{className:"p-2",children:[t("div",{className:"text-gray-300 my-3",children:[e("p",{className:"text-center leading-7 w-11/12 mx-auto",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos, quam vel quisquam, explicabo sit labore dignissimos optio ratione quibusdam doloribus pariatur consequuntur sint. Reprehenderit cupiditate possimus facere quasi voluptatem?"}),t("div",{className:"flex flex-col mt-10 items-center gap-7",children:[e("h3",{className:"md:text-4xl text-2xl font-semibold text-white",children:e("span",{className:"text-cyan-600",children:"10+"})}),e("span",{className:"md:text-lg text-lg pb-3",children:"Completed Project"})]})]}),e("a",{href:"./src/assets/Raj Ghodasara.pdf",download:!0,children:e("div",{className:"mx-auto w-fit",children:e("button",{className:"btn-primary",children:"Download CV"})})})]})})]})}),w=()=>{const i=[{logo:"logo-html5",level:"Intermediate",count:80},{logo:"logo-css3",level:"Intermediate",count:80},{logo:"logo-javascript",level:"Beginner",count:65},{logo:"logo-react",level:"Beginner",count:50},{logo:"logo-nodejs",level:"Beginner",count:50}];return e("section",{id:"skills",className:"py-10 bg-gray-800 relative",children:t("div",{className:"mt-8 text-gray-100 text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Skills"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My knowledge"}),e("div",{className:"flex items-center justify-center mt-12 gap-10 flex-wrap",children:i==null?void 0:i.map((r,n)=>t("div",{className:"border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl ",children:[e("div",{style:{background:`conic-gradient(rgb(8,145,170) ${r.count}%,#ddd ${r.count}%)`},className:"w-32 h-32 flex items-center justify-center rounded-full hover:scale-105 transition-all",children:e("div",{className:"text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600 hover:scale-90 transition-all cursor-pointer",children:e("ion-icon",{name:r.logo})})}),e("p",{className:"text-xl mt-3",children:r.level})]},n))})]})})};var j="/assets/project-1.8f3963ea.png",k="/assets/project-2.6a32d774.jpg",S="/assets/project-3.cd7db3ec.jpg",C="/assets/project-4.b976e709.jpg",_="/assets/project-5.808bc575.png",M="/assets/project-6.ffefe64b.png";const A=()=>t("section",{id:"projects",className:"py-10 text-white",children:[t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Projects"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My awesome works"})]}),e("br",{}),e("div",{className:"flex max-w-fit px-3 mx-auto items-center justify-center",children:e("div",{className:"lg:w-5/6 w-full py-5",children:e(h,{slidesPerview:1.2,spaceBetween:30,breakpoints:{768:{slidesPerView:3}},loop:!0,autoplay:{delay:3e3},pagination:{clickable:!0},modules:[p,g],children:[{img:j,name:"Movie App",github_link:"https://github.com/Sridhar-C-25",live_link:"https://myreactflix.netlify.app"},{img:k,name:"Job search App",github_link:"https://github.com/Sridhar-C-25/jobsearchapp",live_link:"https://myjobsearch.netlify.app"},{img:S,name:"Highking",github_link:"https://github.com/Sridhar-C-25/highking",live_link:"https://highking01.netlify.app"},{img:C,name:"React Nav",github_link:"https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",live_link:"https://reacttailwindnavbar.netlify.app"},{img:_,name:"Vue Country",github_link:"https://github.com/Sridhar-C-25",live_link:"https://vuecountry05.netlify.app"},{img:M,name:"Vue Country",github_link:"https://github.com/rajp04/Gym-The-Fit-Club",live_link:"https://fitclub-1my.pages.dev/"}].map((r,n)=>e(x,{children:t("div",{className:"h-fit w-full p-4 bg-slate-700 rounded-xl py-5",children:[e("img",{src:r.img,alt:"",className:"rounded-lg"}),e("h3",{className:"text-xl my-4",children:r.name}),t("div",{className:"flex gap-3",children:[e("a",{href:r.github_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Github"}),e("a",{href:r.live_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Live Demo"})]})]})},n))})})})]}),O=()=>{const[i,r]=m.exports.useState(""),[n,c]=m.exports.useState(""),[l,a]=m.exports.useState("");return e("section",{id:"contact",className:"py-10 px-3 text-white",children:t("div",{className:"text-center mt-8",children:[t("h3",{className:"text-4xl font-semibold",children:["Contact ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Get in touch"}),t("div",{className:"mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto",children:[t("form",{method:"post",className:"flex flex-col flex-1 gap-5",children:[e("input",{type:"text",name:"name",placeholder:"Your Name",value:i,onChange:o=>r(o.target.value)}),e("input",{type:"email",name:"email",placeholder:"Your Email Address",value:n,onChange:o=>c(o.target.value),autoComplete:"off"}),e("textarea",{placeholder:"Your Message",name:"message",rows:10,value:l,onChange:o=>a(o.target.value),required:!0}),e("button",{className:"btn-primary w-fit",onClick:async o=>{o.preventDefault(),await fetch("https://portfoilobackend.onrender.com/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i,email:n,message:l})}).then(d=>d.json()).then(d=>{d.alertMessage&&alert(d.alertMessage)}).catch(d=>{console.error("Error:",d)})},children:"Send Message"})]}),t("div",{className:"flex flex-col gap-7 ",children:[t("div",{className:"flex items-center",children:[e("div",{className:"min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full pt-2",children:e("span",{children:e("ion-icon",{name:"mail"})})}),e("div",{className:"pl-3",children:"rajpatelrajpatel0410@gmail.com"})]}),t("div",{className:"flex items-center",children:[e("div",{className:"min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full pt-2",children:e("span",{children:e("ion-icon",{name:"location"})})}),e("div",{className:"pl-3",children:"Ahmedabad, India"})]})]})]})]})})},P=()=>{const i=new Date().getFullYear();return t("div",{className:"bg-gray-800 text-lg p-4 text-center text-white",children:["Copyright \xA9 ",i," Raj Portfolio | All Rights reserved."]})},R=()=>{const[i,r]=m.exports.useState(!1),[n,c]=m.exports.useState(!1),l=[{name:"HOME",link:"#home"},{name:"ABOUT",link:"#about"},{name:"SKILLS",link:"#skills"},{name:"PROJECTS",link:"#projects"},{name:"CONTACT",link:"#contact"}];return m.exports.useEffect(()=>{window.addEventListener("scroll",()=>{document.querySelector("nav"),window.scrollY>0?r(!0):r(!1)})},[]),e("nav",{className:`fixed w-full left-0 top-0 z-[999] ${i?"bg-white/60  text-gray-900":"text-white"}`,children:t("div",{className:"flex items-center justify-between",children:[e("div",{className:"mx-7",children:t("h4",{className:"text-4xl uppercase font-bold",children:["R",e("span",{className:"text-cyan-600",children:"a"}),"j"]})}),e("div",{className:` ${i?"md:bg-white/0 bg-white":"bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`,children:e("ul",{className:"flex items-center gap-1 py-2 text-lg",children:l==null?void 0:l.map((a,s)=>e("li",{className:"px-6 hover:text-cyan-600",children:e("a",{href:a==null?void 0:a.link,children:a==null?void 0:a.name})},s))})}),e("div",{onClick:()=>c(!n),className:`z-[999]  ${n?"text-gray-900":"text-gray-100"} text-3xl md:hidden m-5`,children:e("ion-icon",{name:"menu"})}),e("div",{className:`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${n?"right-0":"right-[-100%]"}`,children:e("ul",{className:"flex flex-col justify-center h-full gap-10 py-2 text-lg",children:l==null?void 0:l.map((a,s)=>e("li",{onClick:()=>c(!1),className:"px-6 hover:text-cyan-600",children:e("a",{href:a==null?void 0:a.link,children:a==null?void 0:a.name})},s))})})]})})},E=()=>t("div",{children:[e(R,{}),e(b,{}),e(N,{}),e(w,{}),e(A,{}),e(O,{}),e(P,{})]});u.render(e(f,{children:e(E,{})}),document.getElementById("root"));