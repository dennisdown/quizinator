let startButton = document.getElementById('start-btn')
let nextButton = document.getElementById('next-btn')
let questionContainerElement = document.getElementById('question-container')
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


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
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
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

 let questions = [
   {
     question: 'Inside which HTML element do we put JavaScript?',
     answers: [
      {text: '<script>', correct: true },
      {text: '<javaScript>', correct: false },
      {text: '<js>', correct: false },
      {text: '<scripture>', correct: false }
     ]
   },
   {
     question: 'How do you creat a function in JavaScript?',
     answers: [
      {text: 'function === myfunction', correct: false },
      {text: 'function.myFunction', correct: false },
      {text: 'function myFunction()', correct: true },
      {text: 'function: myfunction()', correct: false }
     ]
   },
   {
     question: 'How can you add a comment in JavaScript',
     answers: [
      {text: '"This is a comment"', correct: false },
      {text: '// This is a comment', correct: true },
      {text: '<--This is a comment-->', correct: false },
      {text: '<-*This is a comment', correct: false }
     ]
   },
   {
     question: 'What is the correct way to write an array?',
     answers: [
      {text: 'let colors = 1.)red 2.)blue 3.)green', correct: false },
      {text: 'let colors = "red", "blue", "green"', correct: false },
      {text: 'let colors = ["red", "blue", "green"]', correct: true },
      {text: 'var colors = rgb(red,blue,green)', correct: false }
     ]
   },
  ]