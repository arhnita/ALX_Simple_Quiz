function checkAnswer(){
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const formFeedback = document.getElementById('feedback')
    const userAnswer = selectedOption.value;

    //answer comparison
    if(correctAnswer === userAnswer){
        formFeedback.textContent = 'Correct! Well done.'
    } else{
        formFeedback.textContent = `That's incorrect. Try again!`;

    }
}

const submitAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener('click', checkAnswer)