function seleccodigo(dig){     
        const digito=dig;
        document.getElementById("numero").value=digito;
}

function seleccionarMensaje(mensj){     
        const textomsm=mensj;
        document.getElementById("mensaje").value=textomsm;
}

const evento = document.getElementById('enviar')
const enviarFormulario =() => {
        let mensaje = document.getElementById('mensaje').value;
        let numero= document.getElementById('numero').value;

var ventana= window.open(`https://api.whatsapp.com/send?phone=%2B${numero}&text=%20${mensaje}%20`,'_blank');    
}
evento.addEventListener('click', enviarFormulario) 




