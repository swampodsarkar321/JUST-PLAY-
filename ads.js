/* ADS.js — paste your network codes here. Currently demo mode (no real ads). */
const ADS = {
  enabled: false, // true koren real code bosanor por
  banner: '',     // Adsterra/Monetag banner <script> ba ad unit id
  rewarded: '',   // rewarded video unit id
  interstitialEvery: 4, // proti N game-open e interstitial
};
let _opens = +(sessionStorage.getItem('vo_opens')||0);
function adBanner(el){ if(!ADS.enabled||!ADS.banner)return false; el.innerHTML=ADS.banner; return true; }
function adInterstitial(cb){
  _opens++; sessionStorage.setItem('vo_opens',_opens);
  if(!ADS.enabled || _opens%ADS.interstitialEvery!==0){cb();return;}
  showAdModal('Advertisement',()=>cb());
}
function adRewarded(cb){
  if(!ADS.enabled){ // demo: 5s timer
    showAdModal('Demo ad — paste network code in ADS.js',()=>cb(),5);return;
  }
  // real: call network show() here, onReward -> cb()
  showAdModal('Advertisement',()=>cb(),null);
}
function showAdModal(text,done,secs){
  let o=document.getElementById('admodal');
  if(!o){o=document.createElement('div');o.id='admodal';o.className='fixed inset-0 z-[90] grid place-items-center bg-black/80 p-4';document.body.appendChild(o);}
  o.style.display='grid';
  o.innerHTML=`<div class="bg-[#141b30] border border-white/10 rounded-2xl p-6 w-[380px] max-w-[92vw] text-center text-white"><div class="text-[11px] tracking-widest opacity-50 mb-2">ADVERTISEMENT</div><div class="py-8 text-sm opacity-70">${text}</div><div id="adct" class="text-xs opacity-60"></div><button id="adgo" class="mt-3 bg-emerald-400 text-slate-950 font-bold px-6 py-2 rounded-xl text-sm" disabled>Continue</button></div>`;
  const go=document.getElementById('adgo'),ct=document.getElementById('adct');
  let s=secs||5;ct.innerText=`Reward in ${s}s…`;
  const iv=setInterval(()=>{s--;if(s<=0){clearInterval(iv);ct.innerText='Done!';go.disabled=false;}else ct.innerText=`Reward in ${s}s…`;},1000);
  go.onclick=()=>{o.style.display='none';done();};
}
