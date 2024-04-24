idade = document.getElementById('idade');
button = document.getElementById('btn_idade');
const handleClick = () => {
    if(idade.value > 17)alert('Parabéns! você é maior de idade, pode prosseguir em nosso site');
    else alert('Infelizmente você é menor de idade, volte para nosso site em uma outra época de sua vida!');
}
button.addEventListener('click', handleClick);

const handleMenuClick = () => {
    alert('obrigado por clicar aqui! mas infelizmente não programei essa parte do site ainda');
}