const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
const embaralharQuestoes, currentQuestionIndex

startButton.addEventListener('click', iniciarJogo)



function iniciarJogo(){
    startButton.classList.add('hide')
    embaralharQuestoes = questions.sort(() => Math.random() - .5)
    questionContainer.classList.remove('hide')
    IrProximaQuestao()
}

function IrProximaQuestao(){

}

function SelecionarResposta(){

}

const = questions [
    {
        question: 'Quanto é 2+2?'
        answers: [
            {text: '4', correct: true},
            {text: '20', correct: false},
            {text: '12', correct: false},
            {text: '6', correct: false};
        ]
    }
]