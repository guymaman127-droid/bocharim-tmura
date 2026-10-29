/* סרגל נגישות עצמאי – שומר העדפות ב-localStorage במכשיר בלבד */
(function(){
var root=document.documentElement,K='mh-a11y',s={};
try{s=JSON.parse(localStorage.getItem(K))||{};}catch(e){}
function save(){try{localStorage.setItem(K,JSON.stringify(s));}catch(e){}}
function apply(){document.body.style.zoom=s.f&&s.f!==100?String(s.f/100):'';
root.classList.toggle('a11y-contrast',!!s.c);root.classList.toggle('a11y-links',!!s.l);
var b=document.getElementById('a11y-c');if(b){b.setAttribute('aria-pressed',!!s.c);document.getElementById('a11y-l').setAttribute('aria-pressed',!!s.l);}}
var t=document.createElement('button');t.className='a11y-toggle';t.type='button';t.setAttribute('aria-label','תפריט נגישות');t.setAttribute('aria-expanded','false');t.setAttribute('aria-controls','a11y-panel');t.innerHTML='<span aria-hidden="true">♿</span>';
var p=document.createElement('div');p.className='a11y-panel';p.id='a11y-panel';p.hidden=true;p.setAttribute('role','region');p.setAttribute('aria-label','אפשרויות נגישות');
p.innerHTML='<h2>נגישות</h2><button type="button" id="a11y-inc">הגדלת טקסט</button><button type="button" id="a11y-dec">הקטנת טקסט</button><button type="button" id="a11y-c" aria-pressed="false">ניגודיות גבוהה</button><button type="button" id="a11y-l" aria-pressed="false">הדגשת קישורים</button><button type="button" id="a11y-r">איפוס</button><a href="accessibility.html">הצהרת נגישות</a>';
document.body.appendChild(t);document.body.appendChild(p);
function close(){p.hidden=true;t.setAttribute('aria-expanded','false');}
t.onclick=function(){p.hidden=!p.hidden;t.setAttribute('aria-expanded',String(!p.hidden));if(!p.hidden)p.querySelector('button').focus();};
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!p.hidden){close();t.focus();}});
p.addEventListener('click',function(e){var id=e.target.id;
if(id==='a11y-inc')s.f=Math.min((s.f||100)+10,150);else if(id==='a11y-dec')s.f=Math.max((s.f||100)-10,90);
else if(id==='a11y-c')s.c=!s.c;else if(id==='a11y-l')s.l=!s.l;else if(id==='a11y-r')s={};else return;save();apply();});
apply();
})();
