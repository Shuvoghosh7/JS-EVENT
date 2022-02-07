function makeRed(){
    document.body.style.backgroundColor='red';
}
//use document.getElementById in onclick
const blue = document.getElementById('bluebutton')
blue.onclick=makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='blue';
}
// anonymous function . derict use function
const green = document.getElementById('greenButton');
green.onclick=function () {
document.body.style.backgroundColor='green';
}
//handel by using addEventListener('click',function name);
const brown = document.getElementById('brownButton')
       brown.addEventListener('click',makeBrown);
       function makeBrown(){
       document.body.style.backgroundColor='brown';

       }

//another handeler by using addEventListener('click',derict function);
const Fuchsia =document.getElementById('fuchsiaButton');
       Fuchsia.addEventListener('click',function(){
        document.body.style.backgroundColor='Fuchsia';
       })
// Derict use addEventListener by anonumis function
   document.getElementById('OliveButton').addEventListener('click',function(){
    document.body.style.backgroundColor='Olive';

   })
