document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  
    // Muestra el modal después de 3 segundos (3000 milisegundos)
    setTimeout(function(){
      modal.style.display = "block";
    }, 3000);
  });
  