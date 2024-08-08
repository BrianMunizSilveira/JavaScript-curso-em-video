function tabuada() {
    var num = document.getElementById('num');
    var res = document.getElementById('res');

    if (num.value.length == 0) {
        alert('Por favor, digite um número!!');
    } else {
        var n = Number(num.value);
        var c = 1;
        res.innerHTML = '';
        while (c <= 10) {
            var item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            item.value = `tab${c}`;
            res.appendChild(item);
            c++;
        }
    }
}