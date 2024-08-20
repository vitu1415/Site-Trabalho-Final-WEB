function funcaoContato(formulario){
    nome = formulario.nome.value;
    email = formulario.email.value;
    telefone = formulario.tel.value;
    dataNascimento = formulario.nascimento.value;
    sexo = document.getElementsByName("sexo").value;
    
    document.getElementById("resul").innerHTML=("nome = "+nome+
    "<br>Email = "+email+
    "<br>telefone = "+telefone+
    "<br>Data de nascimento = "+dataNascimento)+
    "<br>Sexo = "+sexo;
}