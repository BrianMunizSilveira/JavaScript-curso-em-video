function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO]-Verifique os dados. O campo deve estar preenchido e não pode exceder o atual ano.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-homem.webp')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-homem.webp')
            } else if (idade < 50) {
                //Adulto 
                img.setAttribute('src', 'adulto.webp')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.webp')
            }
        } else if (fsex [1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-mulher.webp')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-mulher.webp')
            } else if (idade < 50) {
                //Adulto 
                img.setAttribute('src', 'adulta.webp')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa.webp')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}