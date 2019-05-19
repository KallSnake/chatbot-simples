know = {
    "ola" : "Oi",
    "oi" : "Ola",
    "como vai?" : "bem",
    "a porta esta aberta ou fechada" : "fechada!",
    "valor do dolar?" : "1 dolar equilave a R$ 3,85",
    "valor do euro?" : "1 euro equilave a R$ 4,32",
    "o que é IA?" : "IA de Inteligência Artificial é um ramo da ciência da computação que se propõe a elaborar dispositivos que simulem a capacidade humana de raciocinar, perceber, tomar decisões e resolver problemas, enfim, a capacidade de ser inteligente.",
    "o que é o ifba?" : "IFBA de Instituto Federal de Educação, Ciência e Tecnologia da Bahia é uma instituição de ensino da República Federativa do Brasil, criada mediante transformação do Centro Federal de Educação Tecnológica da Bahia (CEFET/BA), através da Lei Federal 11.892.[1] Sua reitoria está instalada em Salvador, no bairro do Canela. Na capital baiana, no bairro do Barbalho, também está localizado um dos campi do Instituto, o campus Salvador.",
    "chatbot o que é?" : "Chatbot (ou chatterbot) é um programa de computador que tenta simular um ser humano na conversação com as pessoas. O objetivo é responder as perguntas de tal forma que as pessoas tenham a impressão de estar conversando com outra pessoa e não com um programa de computador. Após o envio de perguntas em linguagem natural, o programa consulta uma base de conhecimento e em seguida fornece uma resposta que tenta imitar o comportamento humano",
    "ok" : ":)",
    "ok" : ":)"
};


function talk() {


    var user = document.getElementById("userBox").value;

    document.getElementById("userBox").value = "";

    document.getElementById("chatLog").innerHTML += 'Usuário:  ' + user + '<br> <br> <hr class="bg-danger">';


    if (user in know) {

        document.getElementById("chatLog").innerHTML += 'Robo:  ' +  know[user] + '<br> <br> <hr class="bg-danger">';

        // document.getElementById("chatLog").innerHTML += 'Robo: Alguma outra pergunta? <br> <br> <hr class="bg-danger">';

    } else {

        document.getElementById("chatLog").innerHTML += 'Robo:  ' + 'Eu não entendi sua pergunta... <br> <br>';

        document.getElementById("chatLog").innerHTML += 'Robo:  ' + 'Qual sua dúvida? <br> <br> <hr class="bg-danger">';

    }


} 