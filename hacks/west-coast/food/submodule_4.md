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

<style>
.sq-card {border-radius:.6rem;padding:1rem;background:white;box-shadow:0 6px 18px rgba(0,0,0,.06);margin-bottom:1rem;}
.sq-terminal {background:#0a0f1c;color:#d1fae5;padding:.75rem;border-radius:.5rem;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,monospace;font-size:.9rem;white-space:pre-wrap;overflow:auto;}
.sq-btn {background:#0f766e;color:white;border:none;padding:.5rem .75rem;border-radius:.375rem;cursor:pointer;}
.sq-run {background:#14b8a6;}
.progress-tracker {background:rgba(13,148,136,.15);border:2px solid rgba(13,148,136,.3);padding:1rem;border-radius:.75rem;margin:1rem 0;color:#e2e8f0;}
.task-complete {color:#10b981;font-weight:bold;}
</style>

<div class="progress-tracker">
  <h3 style="color:#2dd4bf;">🎯 Seattle Progress Tracker</h3>
  <div id="progress-display">
    <div id="task-archive">🗃️ Task 1: Archive Dish – <span class="status">Incomplete</span></div>
    <div id="task-harddelete">🗑️ Task 2: Hard Delete Cascade – <span class="status">Incomplete</span></div>
    <div id="task-analytics">📊 Task 3: Analytics Dashboard – <span class="status">Incomplete</span></div>
    <div id="task-seed">🌱 Task 4: Seed Seattle Dishes – <span class="status">Incomplete</span></div>
    <div id="task-view">👀 Task 5: View Archived/Active Lists – <span class="status">Incomplete</span></div>
  </div>
</div>

---

## 🧠 Concept Refresher

**Soft Delete (`deleted_at`)**
- Marks a record as archived instead of removing it.  
- Lets you toggle visibility between *active* and *archived* records.

**Hard Delete**
- Permanently removes the record and linked rows (e.g., `dish_ingredients`).

**Analytics (GROUP BY)**
- Aggregates data for insights: top ingredients, average calories by city, dish counts per category.

---

## ⚙️ Mock Backend Extensions
```html
<script>
(function(){
  if(!window.MockAPIInstance) return;
  const api = window.MockAPIInstance;

  api.softDeleteDish = async function(id){
    const dish = this.db.dishes.find(d=>d.id===id);
    if(!dish) return {status:404,body:{error:"Not found"}};
    dish.deleted_at = new Date().toISOString();
    this.db.save();
    return {status:200,body:dish};
  };

  api.hardDeleteDish = async function(id){
    const dish = this.db.dishes.find(d=>d.id===id);
    if(!dish) return {status:404,body:{error:"Not found"}};
    this.db.dishIngredients = this.db.dishIngredients.filter(di=>di.dishId!==id);
    this.db.dishes = this.db.dishes.filter(d=>d.id!==id);
    this.db.save();
    return {status:200,body:{message:"Deleted with cascade"}};
  };

  api.getAnalytics = async function(){
    const active = this.db.dishes.filter(d=>!d.deleted_at);
    const archived = this.db.dishes.filter(d=>d.deleted_at);
    const avgByCity = {};
    active.forEach(d=>{
      if(!avgByCity[d.city]) avgByCity[d.city]={total:0,count:0};
      avgByCity[d.city].total+=d.calories;avgByCity[d.city].count++;
    });
    Object.keys(avgByCity).forEach(c=>{
      avgByCity[c].avg=(avgByCity[c].total/avgByCity[c].count).toFixed(1);
    });
    return {status:200,body:{activeCount:active.length,archivedCount:archived.length,avgByCity}};
  };
})();
</script>

<div class="sq-card">
  <div class="sq-label">Archive a dish by ID → sets <code>deleted_at</code></div>
  <input id="archive-id" class="sq-field" placeholder="enter dish id" />
  <button class="sq-btn sq-run" onclick="runArchive()">Archive Dish</button>
  <pre id="terminal-archive" class="sq-terminal"></pre>
</div>
<script>
async function runArchive(){
  clearTerm('terminal-archive');
  const id=document.getElementById('archive-id').value.trim();
  const res=await MockAPIInstance.softDeleteDish(id);
  if(res.status===200){logTo('terminal-archive','✅ Archived',res.body);completeTask('archive');}
  else logTo('terminal-archive','❌ Error',res.body);
}
</script>

<div class="sq-card">
  <div class="sq-label">Hard delete dish and linked ingredients</div>
  <input id="hard-id" class="sq-field" placeholder="enter dish id" />
  <button class="sq-btn sq-run" onclick="runHard()">Hard Delete</button>
  <pre id="terminal-hard" class="sq-terminal"></pre>
</div>
<script>
async function runHard(){
  clearTerm('terminal-hard');
  const id=document.getElementById('hard-id').value.trim();
  const res=await MockAPIInstance.hardDeleteDish(id);
  if(res.status===200){logTo('terminal-hard','✅ Cascade delete complete',res.body);completeTask('harddelete');}
  else logTo('terminal-hard','❌ Error',res.body);
}
</script>

<div class="sq-card">
  <div class="sq-label">Run aggregated analytics queries (GROUP BY demo)</div>
  <button class="sq-btn sq-run" onclick="runAnalytics()">Run Analytics</button>
  <pre id="terminal-analytics" class="sq-terminal"></pre>
</div>
<script>
async function runAnalytics(){
  clearTerm('terminal-analytics');
  const res=await MockAPIInstance.getAnalytics();
  if(res.status===200){logTo('terminal-analytics','📈 Analytics Results:',res.body);completeTask('analytics');}
  else logTo('terminal-analytics','❌ Error',res.body);
}
</script>

<div class="sq-card">
  <button class="sq-btn sq-run" onclick="seedSeattle()">Seed Seattle Dishes</button>
  <pre id="terminal-seedsea" class="sq-terminal"></pre>
</div>
<script>
async function seedSeattle(){
  clearTerm('terminal-seedsea');
  const seed=[
    {name:"Clam Chowder in Sourdough Bread Bowl",category:"Seafood",calories:650,ingredients:[{name:"clam"},{name:"bread bowl"}],city:"sea"},
    {name:"Salmon Bowl",category:"Healthy",calories:500,ingredients:[{name:"salmon"}],city:"sea"},
    {name:"Oyster Chowder",category:"Soup",calories:540,ingredients:[{name:"oyster"}],city:"sea"}
  ];
  const res=await MockAPIInstance.postBulk(seed);
  if(res.status===201){logTo('terminal-seedsea','✅ Seattle seeded',res.body);completeTask('seed');}
  else logTo('terminal-seedsea','❌ Seed failed',res);
}
</script>

<div class="sq-card">
  <button class="sq-btn sq-run" onclick="viewSeattle()">View Active & Archived</button>
  <pre id="terminal-viewsea" class="sq-terminal"></pre>
</div>
<script>
async function viewSeattle(){
  clearTerm('terminal-viewsea');
  const dishes=await MockAPIInstance.getDishes({city:'sea'});
  if(!dishes.length){logTo('terminal-viewsea','[Server] 200 OK — No Seattle dishes');return;}
  const active=dishes.filter(d=>!d.deleted_at);
  const arch=dishes.filter(d=>d.deleted_at);
  logTo('terminal-viewsea',`Active: ${active.length} | Archived: ${arch.length}`);
  active.forEach(d=>logTo('terminal-viewsea','🟢 '+d.name));
  arch.forEach(d=>logTo('terminal-viewsea','⚪ '+d.name));
  completeTask('view');
}
</script>
