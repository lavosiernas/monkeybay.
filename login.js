
function togglePasswordVisibility() {
    var senhaInput = document.getElementById("senha");
    var eyeIcon = document.getElementById("eye-icon");
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        eyeIcon.src = "../monkeybayint/logo/olho aberto.png";
    } else {
        senhaInput.type = "password";
        eyeIcon.src = "../monkeybayint/logo/olho fechado.png";
    }
  }
      
  
     
  