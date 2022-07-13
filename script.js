const inputDatas = document.getElementById('inputToDoList')
const buttonInsert = document.getElementById('buttonToDoList')
const elementUl = document.getElementById('elementUl')
// funcionalidade para capturar o valor digitado pela tecla Enter
inputDatas.addEventListener('keypress', (e) => {
    if(e.key == 'Enter'){
        const textTask = inputDatas.value
        inputDatas.value = ''
        elementUl.appendChild(addTask(textTask))
    }
},false)
// funcionalidade para capturar o valor digitado pelo click do mouse
buttonInsert.addEventListener('click',()=>{
    const textTask = inputDatas.value
    inputDatas.value = ''
    elementUl.appendChild(addTask(textTask))
})

// funcionalidade adicionar a tarefa na tela
function addTask(textTask) {
    // funcionalidade verificar se o campo está vazio e alertar o usuário
    if (textTask == ''){
        alert('Informe uma tarefa!')
    } else {
        // funcionalidade criar os elementos que componhem o HTML da tarefa inserida
        const elementLI = document.createElement('li')
        const elementP = document.createElement('p')
        const elementButton = document.createElement('input')
        
        elementButton.type = 'button'
        elementButton.value = '-'
    
        elementLI.setAttribute('id', 'task')
        elementLI.setAttribute('class', 'taskFormat')
        elementP.textContent = textTask
    
        elementLI.appendChild(elementP)
        elementLI.appendChild(elementButton)
    
        return elementLI
    }
  
}