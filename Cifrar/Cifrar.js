var alfaBeto =  ' !"#$%&'+"'"+'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

function cifrar(msg, chave) {
    var msgCifrada = "";
    var index = 0;
    var words = msg.split("\n");
    
    // Faz a troca das letras
    for (var i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (alfaBeto.indexOf(words[i][j]) >= 0) {
                msgCifrada += alfaBeto[(alfaBeto.indexOf(words[i][j])+alfaBeto.indexOf(chave[index]))%alfaBeto.length];
                index++;
            } else {
                msgCifrada += words[i][j];
            }
            
            if (index >= chave.length) {
                index = 0;
            }
        }

        msgCifrada += "<br>";
    }

    // Retorna a mensagem cifrada
    return msgCifrada;
}