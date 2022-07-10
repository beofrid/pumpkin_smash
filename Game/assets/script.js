let data = [
    'pudor', 'labor', 'nobre', 'moral', 'poder', 'amora', 'gouda', 'massa', 'sonho', 'farsa',
    'amigo', 'coser', 'prole', 'tenaz', 'digno', 'culto', 'orgia', 'denso', 'forte', 'coeso',
    'velho', 'regra', 'ordem', 'clava', 'prosa', 'usura', 'manso', 'limbo', 'pleno', 'humor',
    'acaso', 'cisma', 'valor', 'ritmo', 'garbo', 'prumo', 'laico', 'parco', 'noite', 'ajuda']
  

let word = data[Math.floor(Math.random()*data.length)]
// let word = 'ajuda'

//div assign
let div0 = document.querySelectorAll('.displayLetter')[0]
let div1 = document.querySelectorAll('.displayLetter')[1]
let div2 = document.querySelectorAll('.displayLetter')[2]
let div3 = document.querySelectorAll('.displayLetter')[3]
let div4 = document.querySelectorAll('.displayLetter')[4]

//to animation
const wrongArray = []


//description
addEventListener('load', onLoad)

function onLoad () {
    
     //descripton of word
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

function indexLetter () { 
    //get the element of user input
    let inputCharacter = document.getElementById('char')
    let char1 = inputCharacter.value
    let char = char1.toLowerCase();
    inputCharacter.value = ""

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

    //
    if (char !== word0 && char !== word1 && char !== word2 && char !== word3 && char !== word4){
        if (wrongArray.includes(char)){
            alert("Você já tentou essa letra! 😠")
        }
        else {
            wrong.innerText += ` ${char}`
            wrongArray.push(char)}
    
    
    }
    console.log (typeof(wrongArray), wrongArray)



    
    
    }
    

   



    

    































