
function botao(){
    
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; //para escrever no HTML

}

function redirecionar(){
    window.open("http://google.com"); //para redirecionar a outra página em outra janela
    // window.location.href = "http://google.com"; //para redirecionar a outra página na mesma janela
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"; // this - serve pra usar em todos
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    console.log("página carregada!"); // onloda - serve para quando a página for inciada
}

function funcaoChange(elemento){
    console.log(elemento.value);
}



/*
function validarIdade(idade){
    var validar;

    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }

    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade));

function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(10, 30))

*/

/*

Para Trabalhar com DATA

var d = new Date();

console.log(d.getMonth()+1); // SEMPRE ADICIONAR '=1' PARA FICAR NO MÊS CERTO
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());

*/

/*

LAÇOS DE REPETIÇÃO - com FOR

var contar;

for(contar=0; contar<=5; contar++){

    console.log(contar);

};

*/

/*

LAÇOS DE REPETIÇÃO - com WHILE

var contar = 0;

while(contar <= 5){
    console.log(contar);
    contar++; // soma ele mais 1
};

*/

/*

CONDICIONAIS

var idade = prompt("Qual sua idade?");

if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

*/

/*

DICIONÁRIO - UTILIZA '{}'

var fruta = [{nome:"maçã",  cor:"vermelho"}, {nome:"uva",  cor:"roxo"}]

console.log(fruta[0].nome) // para ir para a variável dentro dele

*/

/*

ARRAYS

var lista = ["maçã", "pera", "laranja"]; // Isto é um ARRAY

lista.push("uva"); // adicionar mais um item ao ARRAY
lista.pop(); // retira o ultimo item do ARRAY

console.log(lista.length); // vê o tamanho do ARRAY
console.log(lista.reverse()); // escreve o ARRAY ao contrário
console.log(lista.toString()); // escreve como texto
console.log(lista.join(" - ")); // para separar como eu quiser

*/

/*

var nome = "Carlos Vinícius";
var n1 = 45;
var n2 = 18;
var frase = "Brasil é a seleção com menos titulos"

ALERT SERVE PARA APARECER UMA CAIXA NO TOPO DA TELA

alert(nome + " tem " + idade + " anos ");
alert(idade + idade2);

console.log(nome);
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);

console.log(frase.replace("menos", "mais")) //replace serve para alterar alguma palavra na variável escolhida
console.log(frase.toUpperCase()) //toUpperCase serve para deixar a frase toda em maíusculo
console.log(frase.toLowerCase()) //toLowerCase serve para deixar a frase toda em minusculo


*/