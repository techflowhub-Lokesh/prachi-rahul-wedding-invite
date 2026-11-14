/* ======== EDIT YOUR CEREMONIES HERE ======== */
const EVENTS = [
  { name:"Shubh Vivah", day:"Wednesday, 2nd December 2026", time:"",
    venue:"Sri Marwari Thakur Bari", addr:"Jorhat, Assam", dress:"",
    maps:"https://maps.app.goo.gl/ZiZ1n3FspknENPvj7",
    start:"20261202", end:"20261203" }
];
const WEDDING_AT = new Date("2026-12-02T00:00:00+05:30");
const COUPLE = "Prachi & Rahul";
/* =========================================== */

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* embossed lotus pattern for the envelope paper */
(function(){
  const m = (x,y,s)=>`<g transform="translate(${x} ${y}) scale(${s})">
    <path d="M0-30C10-15 10 2 0 15C-10 2-10-15 0-30Z"/>
    <path d="M0 15C-14 10-24-2-26-16C-14-12-4-2 0 15Z"/><path d="M0 15C14 10 24-2 26-16C14-12 4-2 0 15Z"/>
    <path d="M0 15C-16 18-30 12-38 2C-24 0-10 4 0 15Z"/><path d="M0 15C16 18 30 12 38 2C24 0 10 4 0 15Z"/>
    <path d="M-30 24Q0 32 30 24"/></g>`;
  const motif = m(48,40,.62)+m(0,94,.62)+m(96,94,.62);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="108" fill="none" stroke-linecap="round">
    <g stroke="rgba(255,255,255,.95)" stroke-width="1.6" transform="translate(-.7 -.7)">${motif}</g>
    <g stroke="rgba(150,85,90,.20)" stroke-width="1.6" transform="translate(.8 .8)">${motif}</g></svg>`;
  document.documentElement.style.setProperty("--emboss", `url("data:image/svg+xml,${encodeURIComponent(svg)}")`);
})();

/* wax blob edge */
(function(){
  let d=""; const N=28;
  for(let i=0;i<=N;i++){
    const a=i/N*Math.PI*2, r=66+Math.sin(i*2.7)*3.2+Math.cos(i*5.1)*2.4;
    d+=(i?"L":"M")+(75+Math.cos(a)*r).toFixed(1)+" "+(75+Math.sin(a)*r).toFixed(1);
  }
  document.getElementById("sealBlob").setAttribute("d",d+"Z");
})();

/* toran: rope of marigolds and mango leaves */
document.querySelectorAll("[data-toran]").forEach(svg=>{
  const NS="http://www.w3.org/2000/svg", W=400; let h="";
  const y=x=>8+Math.sin(x/W*Math.PI)*10;
  h+=`<path d="M0 8 Q200 28 400 8" stroke="#b9852e" stroke-width="1.6" fill="none"/>`;
  for(let i=0;i<=20;i++){
    const x=10+i*19, top=y(x);
    if(i%2===0){
      const len = 14 + (i%4===0?14:4);
      h+=`<line x1="${x}" y1="${top}" x2="${x}" y2="${top+len}" stroke="#b9852e" stroke-width=".8"/>`;
      const cols=["#e08a1e","#f2b42f","#e08a1e"];
      for(let k=0;k<(i%4===0?3:2);k++){
        const cy=top+8+k*9;
        h+=`<circle cx="${x}" cy="${cy}" r="4.6" fill="${cols[k%3]}"/><circle cx="${x}" cy="${cy}" r="1.6" fill="#a84e12" opacity=".7"/>`;
      }
    } else {
      h+=`<path d="M${x} ${top} C${x-6} ${top+8} ${x-4} ${top+18} ${x} ${top+24} C${x+4} ${top+18} ${x+6} ${top+8} ${x} ${top}Z" fill="#4f8a3c"/>`;
      h+=`<path d="M${x} ${top+2} L${x} ${top+22}" stroke="#2f6128" stroke-width=".6"/>`;
    }
  }
  svg.innerHTML=h;
});

/* ceremonies */
(function(){
  const pin='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>';
  const cal='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>';
  const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  document.getElementById("events").innerHTML = EVENTS.map(e=>{
    const where = e.addr ? `${e.venue}, ${e.addr}` : "";
    const maps = e.maps || "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(where);
    const gcal = "https://calendar.google.com/calendar/render?action=TEMPLATE"
      +"&text="+encodeURIComponent(`${e.name} · ${COUPLE}`)
      +"&dates="+e.start+"/"+e.end
      +"&location="+encodeURIComponent(where)
      +"&details="+encodeURIComponent(`${e.time}\n${e.dress||""}`);
    return `<article class="arch rise">
      <img class="crest" src="assets/lotus_r.webp" alt="">
      <h3>${esc(e.name)}</h3>
      <p class="when">${esc(e.day)}</p>
      ${e.time?`<p class="time">${esc(e.time)}</p>`:""}
      <div class="dot"></div>
      <p class="venue">${esc(e.venue)}</p>
      ${e.addr?`<p class="addr">${esc(e.addr)}</p>`:""}
      ${e.dress?`<p class="dress">${esc(e.dress)}</p>`:""}
      <div class="actions">
        ${where?`<a class="btn" href="${maps}" target="_blank" rel="noopener">${pin}Open in Maps</a>`:""}
        <a class="btn" href="${gcal}" target="_blank" rel="noopener">${cal}Add to Calendar</a>
      </div>
    </article>`;
  }).join("");
})();

/* countdown */
(function(){
  const els={}; document.querySelectorAll("#countdown b").forEach(b=>els[b.dataset.k]=b);
  const tick=()=>{
    let t=Math.max(0,WEDDING_AT-Date.now())/1000;
    const d=Math.floor(t/86400); t-=d*86400; const h=Math.floor(t/3600); t-=h*3600;
    const m=Math.floor(t/60), s=Math.floor(t-m*60);
    els.d.textContent=d; els.h.textContent=String(h).padStart(2,"0");
    els.m.textContent=String(m).padStart(2,"0"); els.s.textContent=String(s).padStart(2,"0");
  };
  tick(); setInterval(tick,1000);
})();

/* falling petals */
const Petals=(function(){
  const c=document.getElementById("petals"), x=c.getContext("2d");
  let W,H,dpr, list=[], running=false;
  const size=()=>{dpr=Math.min(2,devicePixelRatio||1);W=innerWidth;H=innerHeight;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0)};
  size(); addEventListener("resize",size);
  const cols=[["#f7c4d3","#e2668f"],["#fbd8e2","#ec8aa9"],["#f9e0a8","#d9a13b"]];
  const make=(burst,ox,oy)=>{
    const col=cols[Math.random()<.78?(Math.random()<.5?0:1):2];
    return {x:burst?ox:Math.random()*W, y:burst?oy:-20-Math.random()*H*.5,
      vx:burst?(Math.random()-.5)*6:0, vy:burst?-(2+Math.random()*4):.5+Math.random()*.7,
      r:5+Math.random()*6, a:Math.random()*6.28, va:(Math.random()-.5)*.05,
      sway:Math.random()*6.28, col, burst};
  };
  function frame(){
    x.clearRect(0,0,W,H);
    for(const p of list){
      if(p.burst){p.vy+=.08;p.vx*=.985;if(p.vy>1.2){p.burst=false}}
      p.sway+=.02; p.x+=p.vx+Math.sin(p.sway)*.5; p.y+=p.vy; p.a+=p.va;
      x.save(); x.translate(p.x,p.y); x.rotate(p.a);
      const g=x.createLinearGradient(0,-p.r,0,p.r); g.addColorStop(0,p.col[0]); g.addColorStop(1,p.col[1]);
      x.fillStyle=g; x.globalAlpha=.85;
      x.beginPath(); x.moveTo(0,-p.r); x.quadraticCurveTo(p.r*.75,0,0,p.r); x.quadraticCurveTo(-p.r*.75,0,0,-p.r); x.fill();
      x.restore();
      if(p.y>H+20 && !p.keep){p.dead=true}
    }
    list=list.filter(p=>!p.dead);
    while(list.length<16) list.push(make(false));
    requestAnimationFrame(frame);
  }
  return {
    start(){ if(reduce||running) return; running=true; for(let i=0;i<10;i++) list.push(make(false)); frame(); },
    burst(el){ if(reduce) return; const r=el.getBoundingClientRect();
      for(let i=0;i<70;i++) list.push(make(true,r.left+r.width/2+(Math.random()-.5)*r.width*.6,r.top+r.height/2)); }
  };
})();

/* envelope: open -> finish animation -> automatically show scratch reveal */
(function(){
  const env=document.getElementById("env");
  const reveal=document.getElementById("scratch-reveal");
  const seal=document.getElementById("seal");
  document.body.classList.add("locked");
  let opened=false;
  const open=()=>{
    if(opened) return;
    opened=true;
    seal.disabled=true; // prevent double triggers during animation
    env.classList.add("open");
    window.scrollTo(0,0);

    // Unlock once the envelope has started opening, and keep the artwork's
    // original animation intact. Remove the overlay before navigating.
    setTimeout(()=>{
      document.body.classList.remove("locked");
      Petals.start();
    },reduce?0:900);
    setTimeout(()=>{
      env.classList.add("gone");
      // Skip directly to the scratch/date section, rather than making the
      // visitor manually scroll past the opening hero artwork.
      if(reveal){
        reveal.scrollIntoView({behavior:reduce?"instant":"smooth",block:"start"});
      }
    },reduce?50:2000);
  };
  seal.addEventListener("click",open);
  env.addEventListener("click",e=>{
    if(e.target===env||e.target.closest(".env-hint")) open();
  });
})();

/* scratch heart */
(function(){
  const cv=document.getElementById("scratch"), x=cv.getContext("2d");
  const W=260,H=236, dpr=Math.min(2,devicePixelRatio||1);
  cv.width=W*dpr; cv.height=H*dpr; x.scale(dpr,dpr);
  const heart=new Path2D("M130 226 C 60 176, 10 132, 10 76 C 10 38, 40 12, 76 12 C 100 12, 120 26, 130 46 C 140 26, 160 12, 184 12 C 220 12, 250 38, 250 76 C 250 132, 200 176, 130 226 Z");
  const paint=()=>{
    const g=x.createLinearGradient(0,0,0,H); g.addColorStop(0,"#f6a9c0"); g.addColorStop(.55,"#e2668f"); g.addColorStop(1,"#cf4f7b");
    x.fillStyle=g; x.fill(heart);
    x.save(); x.clip(heart);
    // sheen + shimmer dots
    const s=x.createLinearGradient(0,0,W,H); s.addColorStop(0,"rgba(255,255,255,.35)"); s.addColorStop(.4,"rgba(255,255,255,0)");
    x.fillStyle=s; x.fillRect(0,0,W,H);
    for(let i=0;i<70;i++){x.fillStyle=`rgba(255,236,170,${Math.random()*.6})`;x.beginPath();x.arc(Math.random()*W,Math.random()*H,Math.random()*1.3,0,7);x.fill()}
    x.restore();
    x.strokeStyle="#f3cf74"; x.lineWidth=3; x.stroke(heart);
    x.fillStyle="#fff2c6"; x.font='italic 500 30px "Cormorant Garamond", Georgia, serif'; x.textAlign="center";
    x.shadowColor="rgba(120,30,60,.35)"; x.shadowBlur=4; x.fillText("Scratch here",130,104); x.shadowBlur=0;
    x.font='13px "Marcellus SC", Georgia, serif'; x.fillStyle="rgba(255,242,198,.85)"; x.fillText("✦  our big day  ✦",130,128);
  };
  (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(paint);
  let down=false, last=null, done=false, moves=0;
  const pos=e=>{const r=cv.getBoundingClientRect();return {x:(e.clientX-r.left)*W/r.width,y:(e.clientY-r.top)*H/r.height}};
  const scratch=p=>{
    x.globalCompositeOperation="destination-out"; x.lineCap="round"; x.lineJoin="round"; x.lineWidth=38;
    x.beginPath(); x.moveTo(last?last.x:p.x,last?last.y:p.y); x.lineTo(p.x,p.y); x.stroke();
    x.beginPath(); x.arc(p.x,p.y,19,0,7); x.fill();
    x.globalCompositeOperation="source-over"; last=p;
    if(++moves%8===0) check();
  };
  const check=()=>{
    const d=x.getImageData(0,0,cv.width,cv.height).data; let clear=0,tot=0;
    for(let i=3;i<d.length;i+=4*24){tot++; if(d[i]<40) clear++;}
    // heart covers ~62% of the box; reveal at ~70% of the heart cleared
    if(clear/tot>0.80) finish();
  };
  const finish=()=>{ if(done) return; done=true; cv.classList.add("done"); Petals.burst(cv); };
  cv.addEventListener("pointerdown",e=>{down=true;last=null;cv.setPointerCapture(e.pointerId);scratch(pos(e))});
  cv.addEventListener("pointermove",e=>{if(down) scratch(pos(e))});
  const up=()=>{down=false;last=null;if(!done) check()};
  cv.addEventListener("pointerup",up); cv.addEventListener("pointercancel",up);
  cv.tabIndex=0;
  cv.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();finish()}});
})();
