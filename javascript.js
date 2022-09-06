function Cadastrar(){

        if (document.getElementById("Inf").style.display ===  "block") {
            document.getElementById("Inf").style.display =  "none"
        }
        else {
            document.getElementById("Inf").style.display =  "block"
        }
}
function Buscar(){

    if (document.getElementById("Inf").style.display ===  "block") {
        document.getElementById("Inf").style.display =  "none"
    }
    else {
        document.getElementById("Inf").style.display =  "block"
    }
}
function Removera(){

    if (document.getElementById("Inf").style.display ===  "block") {
        document.getElementById("Inf").style.display =  "none"
    }
    else {
        document.getElementById("Inf").style.display =  "block"
    }
}

    let Nome = new Array();
    let Ident = new Array();
    let Telefone = new Array();

    

function Salvar(){
    let CadastrarID = document.getElementById('CadastrarID').value;
    let CadastrarNome = document.getElementById('CadastrarNome').value;
    let CadastrarTelefone = document.getElementById('CadastrarTelefone').value;
    Ident[Ident.length] = CadastrarID;
    Nome[Nome.length] = CadastrarNome;
    Telefone[Telefone.length] = CadastrarTelefone;
    
    
}
function Remover(){
   var rem = document.getElementById("Remove").value;
    for (var i = 0; i <= Nome.length; i++) {
            if (Nome[i] === rem ) {
                Nome.splice(i, 1);
                alert (rem+" foi removido")
            } 
            
        }
        for (var i = 0; i <= Ident.length; i++) {
            if (Ident[i] === rem ) {
                Ident.splice(i, 1);
                alert (rem+" foi removido")
            } 
            
        }
        for (var i = 0; i <= Telefone.length; i++) {
            if (Telefone[i] === rem ) {
                Telefone.splice(i, 1);
                alert (rem+" foi removido")
            } 
            
        }
        
    }



function print(){
    let content="<b> Todos os Cadastros: <br><br>";

    for (var i=0;i<Nome.length;i++){
        content +="Nome: "+Nome[i]+"<br>";
    }
    for (var i=0;i<Ident.length;i++) {
        content +="ID: "+Ident[i]+"<br>";
    }
    for (var i=0;i<Telefone.length;i++){
        content +="Telefone: "+Telefone[i]+"<br>";
    }
    document.getElementById("display").innerHTML = content;
}

function Procura() {
    var input = document.getElementById("Buscar").value;
     for (i=0; i<Nome.length; i++){
       if (Nome[i] == input) {
          alert("Nome foi encontrado: " + Nome[i]); 
          return;
        }
    
    
      for (i=0; i<Ident.length; i++){
       if (Ident[i] == input) {
          alert("ID foi encontrado: "+Ident[i]); 
          return;
       }
    }
    }
      for (i=0; i<Telefone.length; i++){
       if (Telefone[i] == input) {
          alert("Telefone foi encontrado: "+Telefone[i]); 
          return;
       }
    }
    
    alert("Não foi cadastrado");
 
 }
    
