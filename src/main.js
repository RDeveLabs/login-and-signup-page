document.getElementById('submit').addEventListener('click', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    try{
        const form = new FormData();
        form.append(username);
        const res = await fetch('https://belajar.rdevelabs.biz.id/data',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: form
        })

        const status = await res.text();
        console.log(status);
    }catch(e){
        console.log("Ada error: " + e);
    }
})