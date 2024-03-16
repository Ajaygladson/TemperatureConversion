//let val=document.getElementById("input").value;//global
let val1=document.getElementById("box1");
let val2=document.getElementById("box2");
let res=document.getElementById("result");
let result;

document.getElementById("btn").onclick=function()
{
  let val=document.getElementById("input").value;//global
  val=Number(val);

  if(val1.checked)
  {
  fahToCel(val);
  }

  if(val2.checked)
  {
  celToFah(val);  
  }
}

function fahToCel(val)
  {
    result=(val-32)*5/9;
    res.textContent=result;
  }

function celToFah(val)
  {
    result=(val*9/5)+32;
    res.textContent=result;
  }

  document.getElementById("rst").onclick=function()
  {
    document.getElementById("input").value=null;
  }