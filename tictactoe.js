let main4=document.getElementById("site");
let main1=document.getElementById("header");
let main2=document.getElementById("header2");
let main3=document.getElementById("header3");
   main2.remove();
   main3.remove();
function myfun1()
{ 
  main4.appendChild(main2);
  main1.remove();
  main3.remove();
}
function myfun3()
{
  main2.remove();
  main4.appendChild(main1);
  main3.remove();
}

var details=[{name:"vikash",password:"vijay"}];
function loginpage()
{
  var name=document.getElementById("lname").value;
  var password=document.getElementById("lpass").value;
  var obj={"name":name ,"password":password};
  var flag=false;

   for(let i in details)
  {
    if(details[i].name==name && details[i].password==password)
    flag=true;
   }
   if(flag)
  {
  main1.remove();
  main4.appendChild(main3);
}
 else
  alert("incorrect details");
}

function myfun2()
{
  var name=document.getElementById("rname").value;
  var password=document.getElementById("rpass").value;
  var obj={"name":name, "password":password};
  details.push(obj);
  alert("registered Sucessfully\n click back to login page");  
}
function myfun4()
{
  alert("vetri");
}