let startButton = document.getElementById('start-btn')
let nextButton = document.getElementById('next-btn')
let questionContainerElement = document.getElementById('question-container')
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)


function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    let button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
  })
}

function resetState(){
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  let selectedButton = e.target 
  let correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children)
}

 let questions = [
   {
     question: 'Inside which HTML element do we put JavaScript?',
     answers: [
      {text: '<script>', correct: true },
      {text: '<javaScript>', correct: false },
      {text: '<js>', correct: false },
      {text: '<scripture>', correct: false }
     ]
   }
 ]