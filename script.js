html,body{margin:0}
:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
[hidden]{display:none!important}
/* Layout: a single scroll "patra" column on a watercolour wash — envelope → monogram → scratch reveal → blessings → arch-framed ceremonies → farewell with elephant procession. Deliberately single-theme (paper invitation). */
:root{
  color-scheme: light;
  --paper:#f6f4ef;        /* ivory wash */
  --ink:#2c4a4b;          /* deep teal-ink for text */
  --teal:#3f8f91;         /* monogram teal */
  --lotus:#e2668f;        /* lotus pink */
  --lotus-soft:#f6c9d6;
  --marigold:#d9a13b;     /* umbrella gold */
  --saffron:#c8641e;
  --muted:#6f8584;
  --blush:#f2dfdb;        /* envelope paper */
  --f-display:"Marcellus SC","Cormorant SC",Georgia,serif;
  --f-body:"Cormorant Garamond",Garamond,"Times New Roman",serif;
  --f-script:"Pinyon Script","Great Vibes","Apple Chancery",cursive;
  --f-deva:"Tiro Devanagari Hindi","Noto Serif Devanagari","Mangal",serif;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  background:var(--paper) url("assets/wash.jpg") repeat center top / 640px auto;
  color:var(--ink);font-family:var(--f-body);font-size:19px;line-height:1.55;
  -webkit-font-smoothing:antialiased;overflow-x:hidden;
}
body.locked{overflow:hidden;height:100%}
img{max-width:100%;display:block}
a{color:inherit}
:focus-visible{outline:2px solid var(--lotus);outline-offset:3px;border-radius:6px}

/* ---------- column ---------- */
.patra{
  max-width:520px;margin:0 auto;text-align:center;position:relative;
  padding-left:max(16px, env(safe-area-inset-left, 0px));
  padding-right:max(16px, env(safe-area-inset-right, 0px));
  padding-block:0 40px;
}
section{position:relative;padding-block:56px}
.eyebrow{font-family:var(--f-display);letter-spacing:.18em;font-size:.82rem;color:var(--muted);text-transform:uppercase}
h2{font-family:var(--f-display);font-weight:400;font-size:clamp(1.6rem,6vw,2.1rem);letter-spacing:.08em;color:var(--teal);margin:0;text-wrap:balance}
.script{font-family:var(--f-script);font-weight:400;color:var(--ink);line-height:1.05}
p{margin:0}
.toran{width:100%;height:auto;display:block}

/* ---------- hero ---------- */
.hero{padding-top:18px}
.oval{
  position:relative;margin:28px auto 0;width:min(86%,380px);aspect-ratio:3/4;
  border-radius:50%;display:grid;place-items:center;
}
.oval::before,.oval::after{content:"";position:absolute;inset:0;border-radius:50%;border:1.5px solid var(--marigold);opacity:.8}
.oval::after{inset:9px;border:1px solid var(--teal);opacity:.45}
.oval .mono{width:88%;filter:drop-shadow(0 6px 10px rgba(44,74,75,.12))}
.hero .lotus-a{position:absolute;width:34%;left:-4%;bottom:-6%;transform:rotate(-6deg)}
.hero .lotus-b{position:absolute;width:24%;right:0;top:-4%;transform:rotate(14deg)}
.hero .names{font-size:clamp(3rem,13vw,4.3rem);margin-top:26px;color:var(--ink)}
.hero .names .amp{color:var(--lotus);font-size:.8em;padding:0 .12em}
.hero .tag{margin-top:6px}

/* ---------- reveal ---------- */
.reveal .sub{margin-top:8px;font-style:italic;color:var(--muted)}
.heart-wrap{position:relative;width:260px;height:236px;margin:26px auto 0;max-width:100%}
.heart-wrap svg.under{position:absolute;inset:0;width:100%;height:100%}
/* Keep every line of the date safely inside the inner gold heart outline. */
.heart-date{
  position:absolute;top:74px;left:36px;right:36px;bottom:auto;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  padding:0;gap:2px;pointer-events:none;
}
.heart-date .d{
  font-family:var(--f-display);font-size:1.15rem;line-height:1.18;
  color:var(--ink);letter-spacing:0;white-space:nowrap;
}
.heart-date .d sup{font-size:.6em;vertical-align:super}
.heart-date .date-year{
  font-family:var(--f-display);font-size:1.55rem;line-height:1.1;
  color:var(--ink);letter-spacing:.08em;
}
.heart-date .w{
  font-family:var(--f-display);font-size:.68rem;letter-spacing:.16em;
  color:var(--lotus);margin-top:4px;white-space:nowrap;
}
#scratch{position:absolute;inset:0;width:100%;height:100%;touch-action:none;cursor:grab;transition:opacity .9s ease}
#scratch.done{opacity:0;pointer-events:none}
.elephants{position:relative;height:120px;margin-top:-36px;pointer-events:none}
.elephants img{position:absolute;bottom:0;width:96px}
.elephants .el-l{left:0;transform:scaleX(-1)}
.elephants .el-r{right:0}
@media (prefers-reduced-motion:no-preference){
  .elephants .el-l{animation:sway-l 3.6s ease-in-out infinite}
  .elephants .el-r{animation:sway-r 3.6s ease-in-out infinite}
}
@keyframes sway-l{0%,100%{transform:scaleX(-1) translateY(0)}50%{transform:scaleX(-1) translateY(-3px) rotate(-1deg)}}
@keyframes sway-r{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px) rotate(1deg)}}

.countdown{display:flex;justify-content:center;gap:10px;margin-top:22px;flex-wrap:wrap}
.countdown div{min-width:66px;padding:10px 6px 8px;border:1px solid rgba(63,143,145,.35);border-radius:10px;background:rgba(255,255,255,.55)}
.countdown b{display:block;font-family:var(--f-display);font-weight:400;font-size:1.5rem;color:var(--teal);font-variant-numeric:tabular-nums}
.countdown span{font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted)}

/* ---------- blessing ---------- */
.blessing .ganesh{font-family:var(--f-deva);color:var(--saffron);font-size:1.25rem}
.blessing .shloka{font-family:var(--f-deva);font-size:.98rem;color:var(--muted);margin-top:10px;line-height:1.8}
.blessing .lead{margin-top:28px;font-style:italic;color:var(--muted)}
.blessing .parents{font-family:var(--f-display);font-size:1rem;letter-spacing:.08em;margin-top:14px}
.blessing .request{margin-top:6px;font-style:italic}
.blessing .person{font-size:clamp(2.6rem,11vw,3.4rem);margin-top:16px}
.blessing .with{font-family:var(--f-display);letter-spacing:.3em;font-size:.8rem;color:var(--lotus);margin-top:4px}
.blessing .of{font-size:.98rem;color:var(--muted);margin-top:4px}
.lotus-rule{display:flex;align-items:center;justify-content:center;gap:12px;margin:34px auto 0;max-width:320px}
.lotus-rule::before,.lotus-rule::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--marigold),transparent)}
.lotus-rule img{width:38px}

/* ---------- ceremonies ---------- */
.events{display:grid;gap:30px;margin-top:30px}
.arch{
  position:relative;padding:74px 26px 30px;background:rgba(255,255,255,.62);
  border-radius:50% 50% 20px 20px / 130px 130px 20px 20px;
  border:1.5px solid rgba(217,161,59,.75);
  box-shadow:0 14px 34px -22px rgba(44,74,75,.45);
}
.arch::before{content:"";position:absolute;inset:8px;border-radius:inherit;border:1px solid rgba(63,143,145,.35);pointer-events:none}
.arch .crest{position:absolute;top:18px;left:50%;transform:translateX(-50%);width:44px}
.arch h3{font-family:var(--f-display);font-weight:400;font-size:1.55rem;letter-spacing:.07em;color:var(--teal);margin:0;text-wrap:balance}
.arch .when{margin-top:10px;font-size:1.05rem}
.arch .time{font-style:italic;color:var(--muted)}
.arch .dot{width:6px;height:6px;border-radius:50%;background:var(--lotus);margin:14px auto}
.arch .venue{font-family:var(--f-display);letter-spacing:.06em;font-size:1.05rem}
.arch .addr{font-size:.98rem;color:var(--muted)}
.arch .dress{margin-top:12px;font-size:.92rem;color:var(--saffron);font-style:italic}
.actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:18px}
.btn{
  display:inline-flex;align-items:center;gap:7px;padding:9px 16px;border-radius:999px;
  font-family:var(--f-display);font-size:.78rem;letter-spacing:.12em;text-decoration:none;
  color:var(--teal);border:1px solid var(--teal);background:rgba(255,255,255,.7);transition:background .2s,color .2s;
}
.btn:hover{background:var(--teal);color:#fff}
.btn svg{width:14px;height:14px}

/* ---------- farewell ---------- */
.farewell .msg{font-style:italic;font-size:1.15rem;max-width:30ch;margin:18px auto 0;text-wrap:balance}
.farewell .sign{font-size:clamp(2.2rem,9vw,2.8rem);margin-top:16px}
.rsvp{margin-top:30px;display:grid;gap:8px;justify-content:center}
.rsvp .row{display:flex;gap:10px;align-items:baseline;justify-content:center;flex-wrap:wrap}
.rsvp .who{font-family:var(--f-display);letter-spacing:.06em;font-size:.95rem}
.rsvp .num{font-variant-numeric:tabular-nums;color:var(--teal);user-select:all}
.procession{display:flex;justify-content:space-between;align-items:flex-end;margin-top:26px;gap:8px}
.procession img{width:30%}
.procession .lt{transform:scaleX(-1)}
.procession .mid{width:30%;margin-bottom:10px}

/* gentle rise for sections while scrolling (browsers that support it); otherwise static */
@supports (animation-timeline: view()){
  @media (prefers-reduced-motion:no-preference){
    .rise{animation:rise linear both;animation-timeline:view();animation-range:entry 0% entry 45%}
  }
}
@keyframes rise{from{opacity:.25;transform:translateY(26px)}to{opacity:1;transform:none}}

/* ---------- petals ---------- */
#petals{position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:20}

/* ---------- envelope ---------- */
.env{position:fixed;inset:0;z-index:50;perspective:1400px;overflow:hidden}
.env-paper,.flap-front,.pocket{
  background-color:var(--blush);
  background-image:var(--emboss), linear-gradient(160deg,rgba(255,255,255,.45),rgba(226,102,143,.06));
  background-size:96px 108px, 100% 100%;
}
.env-paper{position:absolute;inset:0;transition:transform 1.1s cubic-bezier(.6,0,.3,1) .55s, opacity .8s ease .9s}
.pocket{position:absolute;inset:0;clip-path:polygon(0 38%,50% 72%,100% 38%,100% 100%,0 100%);
  filter:brightness(.985);box-shadow:inset 0 0 0 1px rgba(0,0,0,.02);transition:transform 1.1s cubic-bezier(.6,0,.3,1) .55s, opacity .8s ease .9s}
.pocket::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(150,90,90,.16),transparent 35%)}
.heart-wrap{user-select:none;-webkit-user-select:none}
.flap{position:absolute;left:0;right:0;top:0;height:54%;transform-origin:top center;transform-style:preserve-3d;
  transition:transform .9s cubic-bezier(.5,0,.3,1);filter:drop-shadow(0 6px 8px rgba(120,70,70,.22));z-index:2}
.flap-front,.flap-back{position:absolute;inset:0;clip-path:polygon(0 0,100% 0,50% 100%);backface-visibility:hidden;-webkit-backface-visibility:hidden}
.flap-front{background-image:var(--emboss), linear-gradient(180deg,rgba(255,255,255,.35),rgba(170,95,105,.16));background-size:96px 108px,100% 100%}
.flap-back{transform:rotateX(180deg);background:var(--teal) url("assets/lotus_r.webp") center 30% / 46px auto repeat;
  background-blend-mode:soft-light}
.seal{
  position:absolute;left:50%;top:54%;width:150px;height:150px;transform:translate(-50%,-50%);
  border:0;padding:0;background:none;cursor:pointer;z-index:3;transition:transform .5s ease, opacity .5s ease;
}
.seal svg{position:absolute;inset:0;width:100%;height:100%;filter:drop-shadow(0 8px 10px rgba(110,70,10,.35))}
.seal img{position:absolute;left:50%;top:50%;width:62%;transform:translate(-50%,-52%);mix-blend-mode:multiply;opacity:.92}
.seal::after{content:"";position:absolute;inset:-14px;border-radius:50%;border:1.5px solid rgba(217,161,59,.7)}
@media (prefers-reduced-motion:no-preference){ .seal::after{animation:ping 2.2s ease-out infinite} }
@keyframes ping{0%{transform:scale(.9);opacity:.9}100%{transform:scale(1.35);opacity:0}}
.env-hint{position:absolute;left:0;right:0;top:calc(54% + 104px);z-index:3;text-align:center;transition:opacity .4s}
.env-hint .eyebrow{color:#8a5d63}
.env-hint .script{font-size:2.3rem;color:#8a4a5a;margin-top:4px}
.env.open .flap{transform:rotateX(178deg)}
.env.open .seal{transform:translate(-50%,-50%) scale(.6);opacity:0}
.env.open .env-hint{opacity:0}
.env.open .env-paper,.env.open .pocket{transform:translateY(105%);opacity:0}
.env.gone{display:none}
@media (prefers-reduced-motion:reduce){
  .flap,.env-paper,.pocket{transition-duration:.01s!important;transition-delay:0s!important}
}

/* Place scratch-card section at the top of the viewport after the envelope opens. */
#scratch-reveal{scroll-margin-top:12px}
#scratch-instruction{max-width:30ch;margin-left:auto;margin-right:auto}

/* Small optional audio control; no changes to the invitation artwork. */
.music-toggle{
  position:fixed;right:16px;bottom:calc(20px + env(safe-area-inset-bottom,0px));
  z-index:30;border:1px solid rgba(63,143,145,.45);border-radius:999px;
  padding:9px 13px;background:rgba(255,253,249,.94);color:var(--ink);
  box-shadow:0 4px 15px rgba(44,74,75,.14);font:500 .85rem var(--f-body);
  cursor:pointer;display:flex;gap:7px;align-items:center;
}
.music-toggle[hidden]{display:none!important}
.music-toggle:focus-visible{outline:2px solid var(--lotus)}
