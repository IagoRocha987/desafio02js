function calcular(){
    let n1 = Number(document.getElementById('nota1').value); 
    let n2 = Number(document.getElementById('nota2').value); 
    let n3 = Number(document.getElementById('nota3').value);

    let media = (n1+n2+n3)/3;

    if(media>=6){
        document.getElementById("aporep").innerHTML = "O aluno esta Aprovado";
    }else{
        document.getElementById("aporep").innerHTML= "O aluno esta Reprovado";
    }

    document.getElementById('resultado').innerHTML= media;
}