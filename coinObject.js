let textoPrincipal = document.createElement('H1')
textoPrincipal.innerText=("Moedas dos guerreiros 'Z' ")
document.body.appendChild(textoPrincipal)
textoPrincipal.style.color=('Black')
textoPrincipal.style.textAlign=('center')

// let contagem1= document.createElement('p')
// contagem1.innerHTML(flipResults)
// document.body.appendChild(contagem1)


const coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() * 2)
        return 
        // 1. Um ponto: Randomicamente configura a propriedade “estado” do 
       // seu objeto moeda para ser um dos seguintes valores:
       // 0 ou 1: use "this.state" para acessar a propriedade "state" neste objeto.
    },
    toString: function() { 
        if (this.state === 0){
            return "Heads"
        } else if (this.state === 1) {
            return "Tails"
        }
        // 2. Um ponto: Retorna a string "Heads" ou "Tails", dependendo de como
       //  "this.state" está como 0 ou 1.
    },
    toHTML: function() {
        const image = document.createElement('img');
        if (coin.state === 0) {
            image.className = "cara"            
            image.src = "images/goku.png";
            image.alt = "Moeda Goku";
        } else if (coin.state === 1){
            image.className = "coroa"
            image.src = "images/vegeta.png";
            image.alt = "Moeda Vegeta";
        }
        return image;
        
    }
    // 3. Um ponto: Configura as propriedades do elemento imagem 
       // para mostrar a face voltada para cima ou para baixo dependendo
       // do valor de this.state está 0 ou 1.
}

function display20Flips() {
    const results = [];
    for (let i = 1; i <= 20; i++){
        coin.flip()
        let flipResults = coin.toString()
        let ultimoRes = document.createTextNode(flipResults)
        document.body.appendChild(ultimoRes)
        results.push(flipResults)
    }

    return results
    // 4. Um ponto: Use um loop para arremessar a moeda 20 vezes, cada vez 
   // mostrando o resultado como uma string na página. 
   // Depois de que seu loop terminar, retorne um array com o 
   // resultado de cada arremesso.

}

function display20Images() {
    let guerreiroZ 
    const results = [];
    for (let i = 1; i <= 20; i++) {
        coin.flip()
        results.push(coin.toString())
        console.log(results)
        guerreiroZ = coin.toHTML()
        document.body.appendChild(guerreiroZ)
        
    }
    
    return results
    // 5. Um ponto: Use um loop para arremessar a moeda 20 vezes, cada vez 
   // mostrando o resultado como uma imagem na página. 
   // Depois de que seu loop terminar, retorne um array com o 
   // resultado de cada arremesso.
}

display20Flips()



results = display20Images()
ultimoRes = document.createTextNode(`O resultado das imagens é: ${results}`)
document.body.appendChild(ultimoRes)

