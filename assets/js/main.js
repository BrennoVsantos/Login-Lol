const botao = document.querySelector('#confirm');

const user = document.querySelector('#user');
const passwd = document.querySelector('#passwd');

botao.disabled = true;

user.addEventListener('change', liberaConfirma)
passwd.addEventListener('change', liberaConfirma)

botao.addEventListener('click', () => {
    alert('Sucesso')
})

function liberaConfirma(){
    if(user.value !== '' && passwd.value !== ''){
        botao.disabled = false
    } else {
        botao.disabled = true
    }
}
  