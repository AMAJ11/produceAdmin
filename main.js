let price = document.querySelector(".price");
let nam = document.querySelector(".name");
let cat = document.querySelector(".cat");
let taxes = document.querySelector(".taxes");
let count = document.querySelector(".count");
let total = document.querySelector(".total");
let create = document.querySelector(".create");
let tbody = document.querySelector(".tb");
let inpsearch = document.querySelector(".inpsearch");
let ref = document.querySelector(".ref");
ref.onclick=function(){if(localStorage.prod != null)
    {
        dataarr = JSON.parse(localStorage.prod)
       }
    else{dataarr=[];}
    
  show()}
price.onkeyup= function()
{ 
    if(price.value !="" && taxes.value !="")
         total.innerHTML =parseInt(price.value)+parseInt(taxes.value);
    else
         total.innerHTML=0;
}
taxes.onkeyup= function()
{
    if(price.value !="" && taxes.value !="")
          total.innerHTML =parseInt(price.value)+parseInt(taxes.value);
        else
          total.innerHTML=0;
}

let dataarr =[];
if(localStorage.prod != null)
{
    dataarr = JSON.parse(localStorage.prod)
   }
else{dataarr=[];}

function show()
{
    tbody.innerHTML=` <tr>
    <th>id</th>
    <th>name</th>
    <th>cat</th>
    <th>price</th>
    <th>count</th>
    <th>update</th>
    <th>deleteAll</th>
    <th>deleteOne</th>
    
</tr>`
for(let i=0 ; i<dataarr.length; i++)
{
    tbody.innerHTML += 
    `
    <tr>
        <td>${i}</td>
        <td>${dataarr[i].name}</td>
        <td>${dataarr[i].cat}</td>
        <td>${dataarr[i].total}</td>
        <td>${dataarr[i].count}</td>
        <td><button onclick='update(${i})' id="upd">update</button></td>
        <td><button  onclick='delet(${i})' id="del">delet</button></td>
        <td><button onclick='deletone(${i})' id="del">delet</button></td>
    </tr>
    `
}





}
create.onclick = function()
{

    if(price.value !="" &&taxes.value !="" &&nam.value !="" &&cat.value !="" &&count.value !=""){
    let data={
                name: nam.value,
                cat:cat.value,
                total:total.innerHTML,
                count:count.value
             };
        dataarr.push(data);
        localStorage.setItem("prod", JSON.stringify(dataarr));
        nam.value="";
        cat.value="";
        price.value="";
        count.value="";
        taxes.value="";
       total.textContent=0;
       show();
}
}
show();
let upd = document.body.tbody.getElementById("upd");
let del = document.getElementById("del");
function delet(i) 
{

    dataarr.splice(i,1)
    localStorage.setItem("prod",JSON.stringify(dataarr))
    show();
}
function deletone(i)
{
    dataarr[i].count -=1;
    localStorage.setItem("prod",JSON.stringify(dataarr))
    show();
}
function update(i)
{
    nam.value = dataarr[i].name;
    cat.value = dataarr[i].cat;
    count.value= dataarr[i].count;
    dataarr.splice(i,1)
    localStorage.setItem("prod",JSON.stringify(dataarr))
    show();
    
}
function shcat()
{
    if(inpsearch.value != null){
  let newdata= dataarr.filter( (ele) => 
   {
      return  ele.cat == inpsearch.value;
       
   })
   dataarr=newdata;
   show();
}}
function shname()
{
    if(inpsearch.value != null){
  let newdata= dataarr.filter( (ele) => 
   {
      return  ele.name == inpsearch.value;
       
   })
   dataarr=newdata;
   show();
}}