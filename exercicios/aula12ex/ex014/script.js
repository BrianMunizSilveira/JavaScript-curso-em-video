function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'foto-manha.webp'
        document.body.style.background = '#FCB56E'
        // #FCB56E
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        document.body.style.background = '#3F6681'
        // #3F6681
        img.src = 'foto-tarde.webp'
    } else {
        // Boa noite
        img.src = 'foto-noite.webp'
        document.body.style.background = '#2C3140'
        // #2C3140
    }
}