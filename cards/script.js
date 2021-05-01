function show(){
    let d=`<div class="row">`;
    d+=`<div class="column">
    <div class="card">
      <h3>MOBILE</h3>
      <p>20/40</p>
    </div>
  </div><div class="column">
    <div class="card">
      <h3>Laptop</h3>
      <p>20/40</p>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <h3>Ipad</h3>
      <p>20/40</p>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <h3>Watch</h3>
      <p>20/40</p>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <h3>Add</h3>
      <p>-----</p>
    </div>
  </div></div>`;
  document.getElementById('r').innerHTML=d;
}