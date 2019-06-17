let caixa = document.querySelectorAll('div')

function mudarCor(){
    this.style.backgroundColor = "red";
    this.innerHTML = 'X';
}

for(let itens in caixa){
    caixa[itens].onclick = mudarCor;
}