const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, QuestaoAtual

startButton.addEventListener('click', iniciarJogo)
nextButton.addEventListener('click', () => {
  QuestaoAtual++
  proximaQuestao()
})

function iniciarJogo() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  QuestaoAtual = 0
  questionContainerElement.classList.remove('hide')
  proximaQuestao()
}

function proximaQuestao() {
  resetar()
  showQuestion(shuffledQuestions[QuestaoAtual])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

/* faz voltar pro default ao trocar de pergunta*/ function resetar() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > QuestaoAtual + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Jogar de novo'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Quanto é 2+2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: 'peixe', correct: true },
      { text: 'batata', correct: false },
    ]
  },
  {
    question: 'água ou refri??',
    answers: [
      { text: 'água', correct: true },
      { text: 'água', correct: true },
      { text: 'água', correct: true },
      { text: 'água', correct: true }
    ]
  },
  {
    question: 'bolinho Ana Maria é bom?',
    answers: [
      { text: 'com certeza', correct: true },
      { text: 'Sim', correct: true },
      { text: 'Obvio', correct: true },
      { text: 'sem dúvidas', correct: true }
    ]
  },
  {
    question: 'Quanto é 8*5?',
    answers: [
      { text: '40', correct: true },
      { text: 'banana', correct: false },
      { text: '22', correct: false },
      { text: '30', correct: false }

    ]
  }
]