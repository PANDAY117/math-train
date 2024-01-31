let heading = document.querySelector('h1')
let button = document.querySelectorAll('div>div>button')

let startSection = document.querySelector('.start-section');
let quizSection = document.querySelector('.quiz-section');
let startButton = document.querySelector('.button');

let resultHeading = document.querySelector('h2')

class Question {
    constructor(){
        this.num1= this.getRandomInt(50);
        this.num2 = this.getRandomInt(50);
        this.question = `${this.num1} + ${this.num2}`;
        this.answers = [];
        this.getAnswers();
    }

    getQuestion() {
        this.num1= this.getRandomInt(50);
        this.num2 = this.getRandomInt(50);
        this.question = `${this.num1} + ${this.num2}`;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    getAnswers() {
        this.answers.splice(0, button.length);
        this.correctIndex =this.getRandomInt(button.length);
        for (let i = 0; i < button.length; i += 1) {
            if (i === this.correctIndex) {
                this.correct = this.num1 + this.num2;
                this.answers.push(this.correct);
            } else {
                this.answers.push(this.getRandomInt(100));
            }
        }
    }

    display(){
        heading.innerHTML = this.question
        for (let i =0; i < button.length; i += 1){
            button[i].innerHTML = this.answers[i];
        }
    }
}
console.log(heading)
console.log(button)
function startQuiz() {
    startSection.classList.add('hide');
    quizSection.classList.remove('hide');
}

startButton.addEventListener('click', startQuiz);

let quest = new Question();
quest.display()


for (let i =0; i < button.length; i += 1){
    button[i].addEventListener('click', CheckAnswer(i))
}

function CheckAnswer(item) {
    return function(){
        if (button[item].innerHTML === String(quest.correct)){
            resultHeading.innerHTML = 'правильно';
        }
        if (button[item].innerHTML === String(quest.correct)) {
            console.log('Правильно!');
            event.target.style.backgroundColor = 'green';
        }else{
            resultHeading.innerHTML = 'не правильно';
            event.target.style.backgroundColor = 'red';
        }
        quest.getQuestion();
        quest.getAnswers();
        quest.display();
    }
}