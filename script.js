
// const start = document.querySelector("#start")

// start.addEventListener('click',gerarTabela)

// function gerarTabela(){
//     const linhas = document.querySelector("#linhas").value;
//     const colunas = document.querySelector("#colunas").value;
//     const table = document.querySelector("#table");

//    for(let i = 0; i < linhas;i++){
//        const linhas = document.createElement('tr');

//        for(let j = 0; j < colunas;j++){
//         const colunas = document.createElement('td');
//         linhas.appendChild(colunas);
        
//        }
//        table.appendChild(linhas);
//    }
   
// }





    const criar = document.getElementById('start');


criar.addEventListener('click',createTable)

function createTable(){
    const table = document.getElementById('table');
        const linhas = document.getElementById('linhas').value;
            const colunas = document.getElementById('colunas').value;

    for(let i = 0; i < linhas; i++){
       const linhas = document.createElement('tr')
        for(let j = 0; j < colunas; j++){
            const colunas = document.createElement('td')
            linhas.appendChild(colunas)
        }
        table.appendChild(linhas)
    }
    
}
























