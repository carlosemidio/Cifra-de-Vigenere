var alfaBeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function cifrar(msg, chave) {
    var words = msg.split(" ");
    var aux = chave.toUpperCase();
    var msgCifrada = "";
    var index = 0;
    
    // Faz a troca das letras
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            if (alfaBeto.indexOf(words[i][j].toUpperCase()) >= 0) {
                if (alfaBeto.indexOf(words[i][j]) >= 0) {
                    msgCifrada += alfaBeto[((alfaBeto.indexOf(words[i][j].toUpperCase())-alfaBeto.indexOf(chave[index].toUpperCase()))+26)%26];
                } else {
                    msgCifrada += alfaBeto[((alfaBeto.indexOf(words[i][j].toUpperCase())-alfaBeto.indexOf(chave[index].toUpperCase()))+26)%26].toLowerCase();
                }
            } 
            index++;
            if (index >= aux.length) {
                index = 0;
            }        
        }

        // Separa as palavras com espaço
        msgCifrada += " ";
    }

    // Retorna a mensagem cifrada
    return msgCifrada;
}