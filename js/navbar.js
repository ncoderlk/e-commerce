const $ = document.getElementById('hamburger-btn');
const $$ =  document.getElementById('menu_mobile');
$.addEventListener('click',()=>{
  $.classList.toggle('close')
  $.classList.toggle('active')
 $$.classList.toggle('hidden') 
 $$.classList.toggle('flex')

 setTimeout(()=>{
if($$.classList.contains("flex") && $.classList.contains('close')){
  $.classList.toggle('close')
  $.classList.toggle('active')
  $$.classList.toggle('hidden') 
  $$.classList.toggle('flex')
}
else{
  console.log('Mobile Menu Closed')
}
 },3600)
 
})
