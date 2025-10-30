---
layout: opencs
microblog: True 
title: "Seattle"
description: "City Two of Food - Seattle"
permalink: /west-coast/food/SEA/
parent: "Seattle"
team: "Syntax Terrors"
submodule: 1
categories: [CSP]
tags: [food, seattle]
author: "Syntax Terrors"
date: 2025-10-24
---

# 🌲 Seattle — DELETE & ANALYTICS (CRUD Submodule 4)

**Quest Chapter:** *The Food Route*  
**Focus:** D in CRUD — **DELETE & ANALYZE**  
**Location:** Seattle, WA ☕🐚🌧️  

Final stop! In Seattle, learners archive or delete dishes (like *Clam Chowder in a Sourdough Bread Bowl*) and run analytics to uncover insights about all cities’ menus.

---


Final stop! In Seattle, learners **archive or delete dishes** (like *Clam Chowder in a Sourdough Bread Bowl*) and run **analytics** to uncover menu insights across cities.

---

## 🧭 Lesson Story: “Sustainable Cleanup with Clam Chowder”

Welcome to Seattle! Imagine standing on a misty pier, holding a warm bowl of **clam chowder in sourdough bread**.  
This city’s challenge is about **data cleanup** — learning when to *archive*, *delete*, or *analyze* your data responsibly.

Think of data cleanup like composting and recycling:
- Some data (old menu items) should be **archived** — saved but hidden.
- Some must be **deleted** — safely and permanently.
- And before deleting, you might want to **analyze** — to find trends before it’s gone.

---

## 🧠 Learning Focus

| Concept | Description | Example |
|:--------|:-------------|:--------|
| **Soft Delete** | Hides data by setting `deleted_at` instead of removing it | Archiving clam chowder when the restaurant closes |
| **Hard Delete** | Permanently removes data, including related rows | Removing chowder + bread bowl + clam records |
| **Cascading Delete** | Automatically removes child rows when parent is deleted | Deleting a dish also deletes its ingredients link |
| **Archival Strategy** | Keep inactive data accessible to admins | “Archived list” in admin view |
| **GROUP BY (Analytics)** | Summarize and report data | Average calories by city, top ingredients, dish counts |

---

## 🔍 SQL Reference Snippets

**Soft Delete (Update instead of Delete):**
```sql
UPDATE dishes
SET deleted_at = CURRENT_TIMESTAMP
WHERE id = 1;

<script>
(function(){
  if(!window.MockAPIInstance)return;
  const api=window.MockAPIInstance;

  // --- Soft Delete (Archive) ---
  api.softDeleteDish=async id=>{
    const dish=api.db.dishes.find(d=>d.id===id);
    if(!dish)return{status:404,body:{error:"Not found"}};
    dish.deleted_at=new Date().toISOString();
    api.db.save();
    return{status:200,body:dish};
  };

  // --- Hard Delete (Cascade) ---
  api.hardDeleteDish=async id=>{
    const dish=api.db.dishes.find(d=>d.id===id);
    if(!dish)return{status:404,body:{error:"Not found"}};
    api.db.dishIngredients=api.db.dishIngredients.filter(di=>di.dishId!==id);
    api.db.dishes=api.db.dishes.filter(d=>d.id!==id);
    api.db.save();
    return{status:200,body:{message:"Deleted with cascade"}};
  };

  // --- Analytics (GROUP BY Demo) ---
  api.getAnalytics=async()=>{
    const active=api.db.dishes.filter(d=>!d.deleted_at);
    const archived=api.db.dishes.filter(d=>d.deleted_at);
    const avgByCity={};
    active.forEach(d=>{
      if(!avgByCity[d.city])avgByCity[d.city]={total:0,count:0};
      avgByCity[d.city].total+=d.calories;avgByCity[d.city].count++;
    });
    Object.keys(avgByCity).forEach(c=>avgByCity[c].avg=(avgByCity[c].total/avgByCity[c].count).toFixed(1));
    return{status:200,body:{activeCount:active.length,archivedCount:archived.length,avgByCity}};
  };
})();
</script>

<script>
async function runArchive(){
  clearTerm('terminal-archive');
  const id=document.getElementById('archive-id').value.trim();
  const res=await MockAPIInstance.softDeleteDish(id);
  if(res.status===200){
    logTo('terminal-archive','✅ Archived',res.body);
    showToast('Dish archived — +5 XP');
    completeTask('archive');
  }else logTo('terminal-archive','❌ Error',res.body);
}

async function runHard(){
  clearTerm('terminal-hard');
  const id=document.getElementById('hard-id').value.trim();
  const res=await MockAPIInstance.hardDeleteDish(id);
  if(res.status===200){
    logTo('terminal-hard','✅ Cascade delete complete',res.body);
    showToast('Hard delete done — +5 XP');
    completeTask('harddelete');
  }else logTo('terminal-hard','❌ Error',res.body);
}

async function runAnalytics(){
  clearTerm('terminal-analytics');
  const res=await MockAPIInstance.getAnalytics();
  if(res.status===200){
    logTo('terminal-analytics','📈 Analytics Results:',res.body);
    showToast('Analytics executed — +5 XP');
    completeTask('analytics');
  }else logTo('terminal-analytics','❌ Error',res.body);
}

async function seedSeattle(){
  clearTerm('terminal-seedsea');
  const seed=[
    {name:"Clam Chowder in Sourdough Bread Bowl",category:"Seafood",calories:650,ingredients:[{name:"clam"},{name:"bread bowl"}],city:"sea"},
    {name:"Salmon Bowl",category:"Healthy",calories:500,ingredients:[{name:"salmon"}],city:"sea"},
    {name:"Oyster Chowder",category:"Soup",calories:540,ingredients:[{name:"oyster"}],city:"sea"}
  ];
  const res=await MockAPIInstance.postBulk(seed);
  if(res.status===201){
    logTo('terminal-seedsea','✅ Seattle seeded',res.body);
    showToast('Seed complete — +3 XP');
    completeTask('seed');
  }else logTo('terminal-seedsea','❌ Seed failed',res);
}

async function viewSeattle(){
  clearTerm('terminal-viewsea');
  const dishes=await MockAPIInstance.getDishes({city:'sea'});
  if(!dishes.length){logTo('terminal-viewsea','[Server] 200 OK — No Seattle dishes');return;}
  const active=dishes.filter(d=>!d.deleted_at);
  const arch=dishes.filter(d=>d.deleted_at);
  logTo('terminal-viewsea',`Active: ${active.length} | Archived: ${arch.length}`);
  active.forEach(d=>logTo('terminal-viewsea','🟢 '+d.name));
  arch.forEach(d=>logTo('terminal-viewsea','⚪ '+d.name));
  showToast('View updated');
  completeTask('view');
}
</script>

<script>
(function(){
  window.taskProgress={archive:false,harddelete:false,analytics:false,seed:false,view:false};

  function loadTaskProgress(){
    const saved=localStorage.getItem('sea_task_progress');
    if(saved)try{Object.assign(window.taskProgress,JSON.parse(saved));}catch{}
    updateProgressDisplay();
  }
  function saveTaskProgress(){localStorage.setItem('sea_task_progress',JSON.stringify(window.taskProgress));}
  window.completeTask=function(t){
    if(!window.taskProgress[t]){
      window.taskProgress[t]=true;saveTaskProgress();updateProgressDisplay();checkModuleCompletion();
    }
  };
  function updateProgressDisplay(){
    const tasks=['archive','harddelete','analytics','seed','view'];let done=0;
    tasks.forEach(x=>{
      const el=document.getElementById(`task-${x}`);if(!el)return;
      const s=el.querySelector('.status');
      if(window.taskProgress[x]){s.textContent='Complete ✅';s.className='status task-complete';done++;}
      else{s.textContent='Incomplete';s.className='status';}
    });
    const pct=Math.round((done/tasks.length)*100);
    document.getElementById('completion-percentage').textContent=`${pct}%`;
    document.getElementById('progress-bar').style.width=`${pct}%`;
  }
  function checkModuleCompletion(){
    if(Object.values(window.taskProgress).every(Boolean)){
      document.getElementById('unlockNotification').style.display='block';
      setTimeout(()=>document.getElementById('unlockNotification').style.display='none',4000);
      unlockNextCity();
    }
  }
  function unlockNextCity(){
    try{
      const saved=localStorage.getItem('mchopiee_city_progress');
      let gp={unlockedCities:[0,1,2,3],completedCities:[],totalCitiesCompleted:0};
      if(saved)gp=JSON.parse(saved);
      if(!gp.completedCities.includes(3)){gp.completedCities.push(3);gp.totalCitiesCompleted++;}
      localStorage.setItem('mchopiee_city_progress',JSON.stringify(gp));
    }catch(e){console.error(e);}
  }
  window.showToast=(txt,ms=2000)=>{const b=document.getElementById('sqToast');b.textContent=txt;b.style.display='block';setTimeout(()=>b.style.display='none',ms);};
  window.logTo=(id,...p)=>{const e=document.getElementById(id);if(!e)return;const t=p.map(a=>typeof a==='object'?JSON.stringify(a,null,2):String(a)).join(' ');e.textContent+=(e.textContent?'\n':'')+t;e.scrollTop=e.scrollHeight;};
  window.clearTerm=id=>{const e=document.getElementById(id);if(e)e.textContent='';};
  loadTaskProgress();
})();
</script>
