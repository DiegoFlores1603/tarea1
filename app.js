var input = document.getElementsByClassName('formulario__input');
for (var i=0;i<input.length;i++){
    input[i].addEventListener('keyup',function(){
      if(this.value.length<=1){
          
          this.nextElementSibling.classList.remove('fijar');
      } else {
        
        this.nextElementSibling.classList.add('fijar');
      }
    });
}
