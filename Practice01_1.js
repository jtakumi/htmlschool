const btn=document.getElementById('btn');
const txt=document.getElementById('txt');
btn.addEventListener('click',function(){
  const choise = window.confirm('CLICK COMPLETE');
  if(choise){
      txt.textContent='OKがクリックされました。';
  }else{
    txt.textContent='キャンセルがクリックされました。';
  }
})
