var alfaBeto =  ' !"#$%&'+"'"+'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ['+"\\"+']^_`abcdefghijklmnopqrstuvwxyz{|}~';

function decifrar(msg, chave) {
    var msgDecifrada = "";
    var index = 0;

    // Desfaz a troca das letras
    for (var i = 0; i < msg.length; i++) {
        if (alfaBeto.indexOf(msg[i]) >= 0) {
            msgDecifrada += alfaBeto[(((alfaBeto.indexOf(msg[i])-alfaBeto.indexOf(chave[index]))+alfaBeto.length)%(alfaBeto.length))];
            index++;
        } else {
            msgDecifrada += msg[i];
        }
        
        if (index >= chave.length) {
            index = 0;
        }
    }

    // Retorna a mensagem cifrada
    return msgDecifrada;
}
