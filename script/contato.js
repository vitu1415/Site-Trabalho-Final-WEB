function funcaoContato(formulario){
    let nome = formulario.nome.value;
    let email = formulario.email.value;
    let telefone = formulario.tel.value;
    let dataNascimento = formulario.nascimento.value;
    let mas = document.getElementById('masculino');
    let fem = document.getElementById('feminino');

    if(mas.checked){
        sexo = mas.value;
    }else if(fem.checked){
        sexo = fem.value;
    }else{
        sexo = "s/valor";
    }

    document.getElementById("resul").innerHTML=("nome = "+nome+
    "<br>Email = "+email+
    "<br>telefone = "+telefone+
    "<br>Data de nascimento = "+dataNascimento)+
    "<br>Sexo = "+sexo;
}