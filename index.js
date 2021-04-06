var i=0;
function add(){
  var input=document.getElementById('input').value;
  var li=document.createElement('Li');
var txt=document.createTextNode(input);



  li.appendChild(txt);
  var cont=document.getElementById('myUL');
  cont.appendChild(li);

  document.getElementById('input').value=" ";
 
  console.log(i);
  li.addEventListener("click" ,function () {
    li.style.textDecoration='line-through'
    
  })
  li.addEventListener("dblclick" ,function () {

  cont.removeChild(li);
    
  })

}

