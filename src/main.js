document.getElementById('submit').addEventListener('click', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try{
        const res = await fetch('http://localhost:1100/data',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({username, password})
        })

        const status = await res.text();
        console.log(status);
    }catch(e){
        console.log("Ada error: " + e);
    }
})