function verificar(){
    var data = new Date()//Pega determinada data
    var ano = data.getFullYear()//Pega a data do ano atual
    var fano= document.getElementById('txtano')//fano formulário do ano
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique os dados digitados e tente novamente.')
    }else {
        var fsex= document.getElementsByName('radsex')//fsex == formulário sexo
        var idade = ano - Number(fano.value)
        var gênero = ' '
        var img = document.createElement('img')//cria uma tag chamada 'img'
        img.setAttribute('id', 'foto')//criou um atributo chamado foto para img
        if (fsex[0].checked){//Se for homem
            gênero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png') //criou um atributo do tipo source 'src' e chamou a imagem.
            }else if(idade >9 && idade <21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade >20 && idade <50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if(fsex[1].checked){//Se for mulher
            gênero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')    
            }else if(idade >9 && idade <21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade >20 && idade <50){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }  
        }
        //res.style.textAlign = 'center' essa linha serve para centralizar o texto
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)//Serve para adicionar um elemento e neste caso do tipo 'img'
    }
}