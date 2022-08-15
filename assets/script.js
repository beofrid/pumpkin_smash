



// array with all words used in the game
let data = [
    'pudor', 'labor', 'nobre', 'moral', 'poder', 'amora', 'gouda', 'massa', 'sonho', 'farsa',
    'amigo', 'coser', 'prole', 'tenaz', 'digno', 'culto', 'orgia', 'denso', 'forte', 'coeso',
    'velho', 'regra', 'ordem', 'clava', 'prosa', 'usura', 'manso', 'limbo', 'pleno', 'humor',
    'acaso', 'cisma', 'valor', 'ritmo', 'garbo', 'prumo', 'laico', 'parco', 'noite', 'ajuda'
]
  
// pick random word of data array 
let indexWord = Math.floor(Math.random()*data.length)
let word = data[indexWord]
console.log(indexWord)

//switch variable to be used on animations
let hintSwitch = 0

//assign letters to each div
let div0 = document.querySelectorAll('.displayLetter')[0]
let div1 = document.querySelectorAll('.displayLetter')[1]
let div2 = document.querySelectorAll('.displayLetter')[2]
let div3 = document.querySelectorAll('.displayLetter')[3]
let div4 = document.querySelectorAll('.displayLetter')[4]

// alphabet: accepted characters on input
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];

let lose = 0
//to animation
let wrongArray = []


//=====================================================================================================================================================================================
//the "onLoad" function sets on page load a hint for each word
//=====================================================================================================================================================================================

addEventListener('load', onLoad)
function onLoad () {
    let indexDescription = document.getElementById('description')
    switch (word) {
    case 'pudor': indexDescription.innerText = "Sentimento e atitude desenvolvidos por uma educação rígida calcada em conceitos culturais."
        break;
    case 'labor': indexDescription.innerText = "Geralmente usado quando se fala em uma atividade onde a pessoa sente o peso do trabalho, uma atividade mais sofrida."
        break;
    case 'nobre': indexDescription.innerText = "Merecedor de respeito pelas suas boas qualidades e méritos, que tende a fazer o bem, generoso."
        break; 
    case 'moral': indexDescription.innerText = "Conjunto de valores, normas e noções sobre o que é certo ou errado, proibido e permitido, dentro de uma determinada sociedade."
        break;
    case 'poder': indexDescription.innerText = "É um termo que se originou a partir do latim possum, que significa “ser capaz de”, e é uma palavra que pode ser aplicada em diversas definições e áreas."
        break;
    case 'amora': indexDescription.innerText = "Fruto pequeno, de cor escura, de sabor acre e doce, largamente usado na confecção de geleias."
        break;
    case 'gouda': indexDescription.innerText = "Queijo de origem holandesa, de formato cilíndrico, pasta não cozida, feito com leite de vaca."
        break;
    case 'massa': indexDescription.innerText = "Quantidade de matéria sólida ou pastosa, de maior ou menor coesão, ger. de forma indefinida."
        break;
    case 'sonho': indexDescription.innerText = "Conjunto de sensações, percepções e representações mais ou menos realistas, geralmente visuais, que aparecem durante um período específico do dia, de caráter confuso e incoerente."
        break; 
    case 'farsa': indexDescription.innerText = "Ação ou comportamento ardiloso que induz ao engano; mentira."
        break;
    case 'amigo': indexDescription.innerText = "indivíduo que mantém um relacionamento de afeto, consideração e respeito por outra pessoa."
        break;
    case 'coser': indexDescription.innerText = "Unir com linha, ou qualquer fio, e agulha, dando pontos."
        break;      
    case 'prole': indexDescription.innerText = "Conjunto de pessoas que descendem de um indivíduo ou de um casal; descendência."
        break;
    case 'tenaz': indexDescription.innerText = "Utilizado para indicar a persistência, a teimosia ou ainda a resistência de uma pessoa ante a uma situação difícil."
        break;
    case 'digno': indexDescription.innerText = "Diz-se de pessoa que merece alguma coisa; meritório ou benemerente."
        break; 
    case 'culto': indexDescription.innerText = "Conjunto de atitudes e ritos pelos quais se adora uma divindade."
        break;
    case 'orgia': indexDescription.innerText = "Na Antiguidade, ritual festivo em honra do deus Dioniso (entre os gregos) ou Baco (entre os romanos)."
        break;
    case 'denso': indexDescription.innerText = "Diz-se do objeto que tem muita massa e peso em relação ao volume."
        break;      
    case 'forte': indexDescription.innerText = "Que tem constituição física avantajada. Robusto, vigoroso."
        break;
    case 'coeso': indexDescription.innerText = "Apresenta harmonia; ajustado, concorde."
        break;
    case 'velho': indexDescription.innerText = "Existe há muito tempo, de época remota."
        break;
    case 'regra': indexDescription.innerText = "Princípio/fórmula que rege o apropriado a se fazer."
        break; 
    case 'ordem': indexDescription.innerText = "Relação inteligível estabelecida entre uma pluralidade de elementos."
        break;
    case 'clava': indexDescription.innerText = "Arma que consiste num pedaço de pau grosso, mais volumoso numa das extremidades, e que se usava para ataque e defesa"
        break;
    case 'prosa': indexDescription.innerText = "Expressão natural da linguagem escrita ou falada, sem metrificação intencional e não sujeita a ritmos regulares"
        break;      
    case 'usura': indexDescription.innerText = "Contrato de empréstimo com cláusula de pagamento de juros por parte do devedor."
        break;
    case 'manso': indexDescription.innerText = "De gênio afável, sossegado, bom"
        break;
    case 'limbo': indexDescription.innerText = "Estado de indecisão, incerteza, indefinição."
        break; 
    case 'pleno': indexDescription.innerText = "Que se mostra cheio, repleto."
        break;
    case 'humor': indexDescription.innerText = "Líquido secretado pelo corpo e que era tido como determinante das condições físicas e mentais do indivíduo. Na Antiguidade clássica contavam-se quatro *****es: sangue, bile amarela, fleuma ou pituíta e bile negra ou atrabílis."
        break;
    case 'acaso': indexDescription.innerText = "Ocorrência, acontecimento casual, incerto ou imprevisível."
        break;
    case 'cisma': indexDescription.innerText = "Separação de uma pessoa ou de um grupo em relação a alguém por motivos políticos, ideológicos, literários ou religiosos."
        break;
    case 'valor': indexDescription.innerText = "É o equivalente justo em pecúlio do que se pode ser comprado ou vendido."
        break; 
    case 'ritmo': indexDescription.innerText = "Sucessão de tempos que se alternam com intervalos regulares."
        break;
    case 'garbo': indexDescription.innerText = "Elegância de modos, de gestos; donaire, galhardia."
        break;
    case 'prumo': indexDescription.innerText = "Instrumento usado para verificar a verticalidade de um lugar ou o eixo de um sólido"
        break;
    case 'laico': indexDescription.innerText = "Que ou aquele que é hostil à influência, ao controle da Igreja e do clero sobre a vida intelectual e moral, sobre as instituições e os serviços públicos."
        break;
    case 'parco': indexDescription.innerText = "Característica do que é poupado ou econômico."
        break;
    case 'noite': indexDescription.innerText = "Período ocorrido durante a rotação da Terra. A duração varia consoante a estação do ano e o local da Terra onde se encontra: maior nos pólos, menor nos trópicos."
        break;
    case 'ajuda': indexDescription.innerText = "É normal as pessoas procurarem para resolução de diversos problemas que sozinhas não conseguem solucionar."
    break
    default: indexDescription.innerText = "nothing"
        break;
    }

}
function reload() {
    window.location.reload(true)
}



//=====================================================================================================================================================================================
// The most important function. Here the input field triggers multiple events:
    // get the letter written by the user on input
    // set a default lower case for entering data
    // assiign wrong letters to "incorrect" display
    //
//=====================================================================================================================================================================================
function indexLetter () { 
    //get the element of user input
    let inputCharacter = document.getElementById('char')
    let char1 = inputCharacter.value
    inputCharacter.value = ""
    if (alphabet.includes(char1)){
        let char = char1.toLowerCase();
    

        //assign data to incorrect output
        let wrong = document.getElementById('incorrect') 
  
        //index separation of drawn word
        let word0 = word[0]
        let word1 = word[1]
        let word2 = word[2]
        let word3 = word[3]
        let word4 = word[4]

        // //console test
        // console.log(word0,word1,word2,word3,word4,word)

        //conditional to fill the word
        if (char === word0){
            div0.innerHTML = word0       
        }
        if (char === word1){
            div1.innerHTML = word1
        }
        if (char === word2){
        div2.innerHTML = word2
        }
        if (char === word3){
            div3.innerHTML = word3
        }
        if (char === word4){
            div4.innerHTML = word4
        }

        //already tried letter filter
        if (char !== word0 && char !== word1 && char !== word2 && char !== word3 && char !== word4){
            if (wrongArray.includes(char)){
                alert("Você já tentou essa letra! 😠")
            }
            else {
                wrong.innerText += ` ${char}`
                wrongArray.push(char)}
        }
    }

   
    // animation, difficulty and endgame
    function animation () {

    //difficulty
        let radio = document.querySelectorAll('input[name="difficulty"]');
    
    // end game lose depends of the var wrong5, so the elements are declared here
        let situation = document.getElementById('situation')
        let congrat = document.getElementById('congrat')
        let displayLose = () => { 
            congrat.innerText = "Perdeu"
            setTimeout(() => {
                situation.classList.remove("hidden")

            }, 1500);
           } 
        
    //set values to each difficulty
        for(let i = 0; i < radio.length; i++)
            if (radio[i].checked) {
                if (radio[i].value == "Easy"){
                    var wrong1 = 2
                    var wrong2 = 4
                    var wrong3 = 6
                    var wrong4 = 8
                    var wrong5 = 10
                    if (wrongArray.length === wrong5) {displayLose()}
                }
        
                else if (radio[i].value == "Medium"){
                    var wrong1 = 1
                    var wrong2 = 2
                    var wrong3 = 3
                    var wrong4 = 4
                    var wrong5 = 5
                    console.log("Escolheu medium")
                    if (wrongArray.length === wrong5) {displayLose()}
                }
        
                else if (radio[i].value == "Hard"){
                    var wrong1 = 1
                    var wrong2 = 1
                    var wrong3 = 1
                    var wrong4 = 2
                    var wrong5 = 3
                    console.log("Escolheu hard")
                    if (wrongArray.length === wrong5) {displayLose()}                     
                } 
                // if (wrongArray.length === wrong5) {lose = 1 }                     
            }
        
        // elements to anvil/pumpkin animation
        document.getElementById('anvil')
        document.getElementById('display')
        document.getElementById('pumpkin')
            

        //anvil animation
        if (wrongArray.length == wrong1){
            anvil.style.transform = "translateY(-30px)";
        }
        if (wrongArray.length == wrong2){
            anvil.style.transform = "translateY(-80px)";
        }
        if (wrongArray.length == wrong3){
            anvil.style.transform = "translateY(-150px)";
        }
        if (wrongArray.length == wrong4){
                anvil.style.transform = "translateY(-210px)";
                display.classList.add("animate")
            }
        if (wrongArray.length == wrong5){
                anvil.src ="assets/anvilFall.png"
                anvil.style.transform = "translateY(150px)"
                setTimeout(() => {
                    pumpkin.src = "assets/end.png"
                    anvil.classList.add("hidden")}, 1000);           
            }              
        
        }
        animation()
    
    
    
    
    function end () {
  
        if (
            div0.innerText.length === 1
            && div1.innerText.length === 1
            && div2.innerText.length === 1
            && div3.innerText.length === 1
            && div4.innerText.length === 1){
            situation.classList.remove("hidden")
            congrat.innerText = "Venceu"
        }
        
    
    } 
end()
        console.log (typeof(wrongArray), wrongArray.length)

}

function help () {
    document.getElementById("text")
    text.style.transform = "translateY(30px)"
    text.style.opacity = "100"
}
function help2 () {
    document.getElementById("text")
    text.style.opacity = "0"
    text.style.transform = "translateY(-20px)"
}

function hint () {
    
    let menu = document.getElementById('menu')
    let bar = document.getElementsByClassName('bar')
    let description = document.getElementById('description')
    
    if (hintSwitch === 0){
        bar[0].classList.add("n1")
        bar[1].classList.add("n2")
        bar[2].classList.add("n3")
        menu.classList.add("resize")
        setTimeout(() => {description.classList.remove("opacity")}, 800)
        setTimeout(() => {menu.classList.add("reposition")}, 1100)

        hintSwitch++
}
    else if (hintSwitch === 1) {
        bar[0].classList.remove("n1")
        bar[1].classList.remove("n2")
        bar[2].classList.remove("n3")
        menu.classList.remove("resize")
        setTimeout(() => {description.classList.add("opacity")}, 1100)
        setTimeout(() => {menu.classList.remove("reposition")}, 1100)
        
        hintSwitch--
    }
    console.log(hintSwitch)
   
}

function difficulty() {

    let toHide1 = document.getElementById("block")
        toHide1.style.display = "none"

    let filterRemove = document.getElementById("mainSection")
        filterRemove.classList.remove("blur")

    let radio = document.querySelectorAll('input[name="difficulty"]');
        if (radio[2].checked){
            if (radio[2].value === "Hard"){
                console.log("Escolheu hard")
                    let menu = document.getElementById('hiddenIfHard')
                        menu.style.display = "none"}}

   



}
