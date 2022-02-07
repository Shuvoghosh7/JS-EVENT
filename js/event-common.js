function justFunction(){
    const paragrap = document.getElementById('clicking-method')
    paragrap.innerText='set by the function';
    paragrap.style.color='white';
    document.body.style.backgroundColor='DeepPink';
}
// derict 
document.getElementById('derict-handler').addEventListener('click',function(){
    const addpara = document.getElementById('clicking-method')
   addpara.innerText='set by the function and more thing';
   document.body.style.backgroundColor='LawnGreen';
     })
// derict systen in input text
document.getElementById('updateButton').addEventListener('click',function(){
    const inputFlid = document.getElementById('input-fild');
    //set value in p tag
    const addpara = document.getElementById('clicking-method')
    addpara.innerText=inputFlid.value;
    //inpu filed show empty
    inputFlid.value='';
})