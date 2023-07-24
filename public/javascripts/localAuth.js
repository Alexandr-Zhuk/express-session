const authForm = document.querySelector('.auth-form');
const answerContainer = document.querySelector('.answ-div');

authForm.addEventListener('submit', async(ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const data = await axios.post('/auth/local/login', formData);
    if(data.data.status === 'ok'){
        answerContainer.innerHTML = 'Авторизация удалась';
    }else{
        answerContainer.innerHTML = data.data.payload.message;
    }
});