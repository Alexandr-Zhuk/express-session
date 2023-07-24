const registrationForm = document.querySelector('.register-form');
const answerContainer = document.querySelector('.answ-div');

registrationForm.addEventListener('submit', async(ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const data = await axios.post('/auth/local/registration', formData);
    if(data.data.status === 'ok'){
        answerContainer.innerHTML = 'Регистрация удалась';
    }else{
        answerContainer.innerHTML = data.data.payload.message;
    }
});