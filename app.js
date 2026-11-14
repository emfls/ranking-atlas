(function(){'use strict';
const clean=s=>s.toLowerCase().replace(/\s/g,'');
function filter(items,q,cat){const term=clean(q);return items.filter(x=>(!cat||x.category===cat)&&clean([x.title,x.category,x.owner,x.target,x.method,x.id==='fifa'?'축구':''].join(' ')).includes(term));}
if(typeof module!=='undefined')module.exports={filter};
if(typeof document==='undefined')return;
const q=document.querySelector('#q'),cat=document.querySelector('#cat'),cards=document.querySelector('#cards'),count=document.querySelector('#count');
function draw(){const selected=filter(window.RANKINGS,q.value,cat.value);cards.replaceChildren();count.textContent=`${selected.length}개 안내 / 전체 ${window.RANKINGS.length}개`;
 for(const x of selected){const a=document.createElement('article');const tag=document.createElement('p');tag.className='tag';tag.textContent=x.category+' · '+x.owner;const title=document.createElement('h2');const link=document.createElement('a');link.href='rankings/'+x.id+'.html';link.textContent=x.title;title.append(link);const text=document.createElement('p');text.textContent=x.method;const small=document.createElement('p');small.className='count';small.textContent='대상: '+x.target+' · 2026-11-14 확인';a.append(tag,title,text,small);cards.append(a);}
 if(!selected.length){const empty=document.createElement('p');empty.textContent='일치하는 안내가 없습니다. 검색어 또는 분야를 바꿔 보세요.';cards.append(empty);}}
q.addEventListener('input',draw);cat.addEventListener('change',draw);document.querySelector('#reset').addEventListener('click',()=>{q.value='';cat.value='';draw();q.focus();});draw();})();
