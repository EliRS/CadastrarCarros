// This is a JavaScript file
$(document).on('keyup','#ano',function(){
  $(this).val(this.value.replace(/\D/g, ''));
  if (this.value.length > 4) {
    this.value = this.value.slice(0,4); 
  }
});

$(document).on('keyup','#valor',function(){
  if (this.value.length > 9) {
    this.value = this.value.slice(0,9); 
  }
});


$(document).on('keyup change click focus','#cor',function(){
  $('#colocar').text("Cor: " + $(this).val());
});
// /\d|,/g     /^\d+,\d{2}$/


$(document).on('click','#cadastro',function(){
    
    if($("#marca").val() != "" && $("#modelo").val() != "" && $("#ano").val() != "" && $("#cor").val() != "" && $("#valor").val() != ""){
      var parametros = {
        "marca": $("#marca").val(),
        "modelo": $("#modelo").val(),
        "ano": $("#ano").val(),
        "cor": $("#cor").val(),
        "valor": $("#valor").val()  
      }

      var elem = document.getElementById("myBar");   
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          //elem.innerHTML = '<i class="fas fa-car-crash"></i>';
          clearInterval(id);
        } else {
          width+=3; 
          elem.style.width = width + '%'; 
          elem.innerHTML = width+'%';
        }
      }

      $.ajax({
        type:"post",
        url:"https://cadastro-carro-elirsflash.c9users.io/cadastrarCarro.php",
        data:parametros,
        success:function(data){
          if(width == 100){
            navigator.notification.alert(data);
            elem.style.width = 0 + '%'; 
            elem.innerHTML =  '0%';
          }
          $("#marca").val(""),
          $("#modelo").val(""),
          $("#ano").val(""),
          $("#cor").val(""),
          $("#valor").val("");
        },
        error:function(data){
          if(width == 100){
            navigator.notification.alert(data);
            elem.style.width = 0 + '%'; 
            elem.innerHTML =  '0%';
          }
        }
      });
    }else{
      navigator.notification.alert("Preencher todos os campos ")
    }
    
});
