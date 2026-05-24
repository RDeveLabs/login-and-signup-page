import axios from 'axios';


document.getElementById('submit').addEventListener('click', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    try{
        const form = new FormData();
        form.append("username", username);
        form.append("password", password);
        const res = await axios.post('https://belajar.rdevelabs.biz.id/data',{
            method: 'POST',
            body: form
        })

        const status = await res.text();
        console.log(form);
        console.log(status);
    }catch(e){
        console.log("Ada error: " + e);
    }
})