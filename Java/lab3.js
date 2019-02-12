var count=0;
var totalcount=0;
var chance=12;
var previous=0;
var now=0;
var goku=false;
var frieza=false;
var majin=false;
var step1 = function()
{
  var a1=document.getElementById("header");
  a1.innerText="WHO DARE SUMMON ME !!!";
  a1.onclick=null;
  var a2=document.getElementById("dragon");
  a2.style.display="block";
  var a3=document.getElementById("p1");
  a3.style.display="block";
  window.alert("WHO DARE SUMMON ME !!!");
}
var step2 = function()
{
  var a2=document.getElementById("p1");
  a2.style.display="none";
  var b1=document.getElementById("header");
  b1.innerText="WHO DARE SUMMON ME !!!";
  var b2=document.getElementById("p2");
  b2.style.display="block";
}
var step3 = function()
{
  var a3=document.getElementById("p2");
  a3.style.display="none";
  var b1=document.getElementById("header");
  b1.innerText="Solve it or DIE!!!";
  var b2=document.getElementById("begin");
  b2.style.display="block";
}
var img1 = function()
{
  var a3=document.getElementById("img1");
  a3.src="goku.jpg";
  count++;
  totalcount++;
  if(count==1)
  {
    previous=1;
  }
  else if(count==2)
  {
    now=1;
    if(previous!=now)
    {
      var img1=document.getElementById("img1");
      var img2=document.getElementById("img2");
      var img3=document.getElementById("img3");
      var img4=document.getElementById("img4");
      var img5=document.getElementById("img5");
      var img6=document.getElementById("img6");
      if(goku==false)
      {
        img1.src="back.png"
        img3.src="back.png"
      }
      if(frieza==false)
      {
        img2.src="back.png"
        img6.src="back.png"
      }
      if(majin==false)
      {
      img4.src="back.png"
      img5.src="back.png"
      }
    }
    else {
      goku=true;
    }
    count=0;
    previous=0;
    now=0;
  }
  if((goku==true)&&(frieza==true)&&(majin==true))
  {
    var final=document.getElementById("p3");
    final.style.display="block";
  }
  else if(totalcount==chance)
  {
    var be=document.getElementById("begin");
    be.style.display="none";
    var be=document.getElementById("p4");
    be.style.display="block";
  }
}
var img2=function()
{
  var a3=document.getElementById("img2");
  a3.src="frieza.png";
  count++;
  totalcount++;
  if(count==1)
  {
    previous=2;
  }
  else if(count==2)
  {
    now=2;
    if(previous!=now)
    {
      var img1=document.getElementById("img1");
      var img2=document.getElementById("img2");
      var img3=document.getElementById("img3");
      var img4=document.getElementById("img4");
      var img5=document.getElementById("img5");
      var img6=document.getElementById("img6");
      if(goku==false)
      {
        img1.src="back.png"
        img3.src="back.png"
      }
      if(frieza==false)
      {
        img2.src="back.png"
        img6.src="back.png"
      }
      if(majin==false)
      {
      img4.src="back.png"
      img5.src="back.png"
      }
    }
    else {
      frieza=true;
    }
    count=0;
    previous=0;
    now=0;
  }
  if((goku==true)&&(frieza==true)&&(majin==true))
  {
    var final=document.getElementById("p3");
    final.style.display="block";
  }
  else if(totalcount==chance)
  {
    var be=document.getElementById("begin");
    be.style.display="none";
    var be=document.getElementById("p4");
    be.style.display="block";
  }
}
var img3 = function()
{
  var a3=document.getElementById("img3");
  a3.src="goku.jpg";
  count++;
  totalcount++;
  if(count==1)
  {
    previous=1;
  }
  else if(count==2)
  {
    now=1;
    if(previous!=now)
    {
      var img1=document.getElementById("img1");
      var img2=document.getElementById("img2");
      var img3=document.getElementById("img3");
      var img4=document.getElementById("img4");
      var img5=document.getElementById("img5");
      var img6=document.getElementById("img6");
      if(goku==false)
      {
        img1.src="back.png"
        img3.src="back.png"
      }
      if(frieza==false)
      {
        img2.src="back.png"
        img6.src="back.png"
      }
      if(majin==false)
      {
      img4.src="back.png"
      img5.src="back.png"
      }
    }
    else {
      goku=true;
    }
    count=0;
    previous=0;
    now=0;
  }
  if((goku==true)&&(frieza==true)&&(majin==true))
  {
    var final=document.getElementById("p3");
    final.style.display="block";
  }
  else if(totalcount==chance)
  {
    var be=document.getElementById("begin");
    be.style.display="none";
    var be=document.getElementById("p4");
    be.style.display="block";
  }
}
var img4=function()
{
  var a3=document.getElementById("img4");
  a3.src="Majin_Buu.png";
  count++;
  totalcount++;
  if(count==1)
  {
    previous=3;
  }
  else if(count==2)
  {
    now=3;
    if(previous!=now)
    {
      var img1=document.getElementById("img1");
      var img2=document.getElementById("img2");
      var img3=document.getElementById("img3");
      var img4=document.getElementById("img4");
      var img5=document.getElementById("img5");
      var img6=document.getElementById("img6");
      if(goku==false)
      {
        img1.src="back.png"
        img3.src="back.png"
      }
      if(frieza==false)
      {
        img2.src="back.png"
        img6.src="back.png"
      }
      if(majin==false)
      {
      img4.src="back.png"
      img5.src="back.png"
      }
    }
    else {
      majin=true;
    }
    count=0;
    previous=0;
    now=0;
  }
  if((goku==true)&&(frieza==true)&&(majin==true))
  {
    var final=document.getElementById("p3");
    final.style.display="block";
  }
  else if(totalcount==chance)
  {
    var be=document.getElementById("begin");
    be.style.display="none";
    var be=document.getElementById("p4");
    be.style.display="block";
  }
}
var img5=function()
{
  var a3=document.getElementById("img5");
  a3.src="Majin_Buu.png";
  count++;
  totalcount++;
  if(count==1)
  {
    previous=3;
  }
  else if(count==2)
  {
    now=3;
    if(previous!=now)
    {
      var img1=document.getElementById("img1");
      var img2=document.getElementById("img2");
      var img3=document.getElementById("img3");
      var img4=document.getElementById("img4");
      var img5=document.getElementById("img5");
      var img6=document.getElementById("img6");
      if(goku==false)
      {
        img1.src="back.png"
        img3.src="back.png"
      }
      if(frieza==false)
      {
        img2.src="back.png"
        img6.src="back.png"
      }
      if(majin==false)
      {
      img4.src="back.png"
      img5.src="back.png"
      }
    }
    else {
      majin=true;
    }
    count=0;
    previous=0;
    now=0;
  }
  if((goku==true)&&(frieza==true)&&(majin==true))
  {
    var final=document.getElementById("p3");
    final.style.display="block";
  }
  else if(totalcount==chance)
  {
    var be=document.getElementById("begin");
    be.style.display="none";
    var be=document.getElementById("p4");
    be.style.display="block";
  }
}
var img6=function()
{
  var a3=document.getElementById("img6");
  a3.src="frieza.png";
  count++;
  totalcount++;
  if(count==1)
  {
    previous=2;
  }
  else if(count==2)
  {
    now=2;
    if(previous!=now)
    {
      var img1=document.getElementById("img1");
      var img2=document.getElementById("img2");
      var img3=document.getElementById("img3");
      var img4=document.getElementById("img4");
      var img5=document.getElementById("img5");
      var img6=document.getElementById("img6");
      if(goku==false)
      {
        img1.src="back.png"
        img3.src="back.png"
      }
      if(frieza==false)
      {
        img2.src="back.png"
        img6.src="back.png"
      }
      if(majin==false)
      {
      img4.src="back.png"
      img5.src="back.png"
      }
    }
    else {
      frieza=true;
    }
    count=0;
    previous=0;
    now=0;
  }
  if((goku==true)&&(frieza==true)&&(majin==true))
  {
    var final=document.getElementById("p3");
    final.style.display="block";
  }
  else if(totalcount==chance)
  {
    var be=document.getElementById("begin");
    be.style.display="none";
    var be=document.getElementById("p4");
    be.style.display="block";
  }
}
