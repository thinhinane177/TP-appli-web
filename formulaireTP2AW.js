
    function validation(){
  
      var PostalAddress = document.getElementById("PostalAddress").value;
      
      if(PostalAddress.length < 5){
        // afficher une erreur
        
      }
      
      // ou faire une validation de tous les champs en une seule fois 
    document.getElementById("Error").innerHTML = "";
    
  for(let item of document.querySelectorAll('.inputAW')){
    if(item.value.length < 5 ){
      // recuperation du label
      var label =   document.querySelector("label[for="+item.id+"]").textContent;
      // ajout du message d'erreur
      document.getElementById("Error").innerHTML += `Minimum 5 caractères pour : ${label} <br/>`;
      
      // ajout de la classe CSS "display"
      document.getElementById("Error").classList.add("display");
        document.getElementById("resultat").classList.remove("display")
  
    }
      
  }
    if(document.getElementById("Error").innerHTML == ""){
      var PostalAddress = document.getElementById("PostalAddress").value
      document.getElementById("resultat").innerHTML = `Bienvenue à ${PostalAddress}`;
      document.getElementById("Error").classList.remove("display")
    document.getElementById("resultat").classList.add("display")
    }

     
  
    
  }