var currentQuestion = 0;
var score = 0;
var totQuestions = quiz.questions.length;
document.write(totQuestions + "-" + quiz.questions.length);
var arr=[];
var arr1=[];
var container = document.getElementById('quizContainer');
var questionE1 = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var validnatu = document.getElementById('valid');
var resultCont = document.getElementById('result');
var alert1 = document.getElementById('detector');
var alert2 = document.getElementById('detectwrg');
var q;
function loadQuestion (questionIndex) {
	q = quiz.questions[questionIndex];
	questionE1.textContent = (questionIndex + 1) + '.' + q.text;
	opt1.textContent = q.choice[0].text;
	opt2.textContent = q.choice[1].text;
	opt3.textContent = q.choice[2].text;
	opt4.textContent = q.choice[3].text;
};
function loadNextQuestion() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption) {
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	for (var i = 0; i < quiz.questions[currentQuestion].choice[i].length; i++) {
		if (quiz.questions[currentQuestion].answer == answer) {
			score += 10;
			document.write(score);
			arr.push(questions[currentQuestion],questions[currentQuestion].answer);
			break;
		} else {
			arr1.push(questions[currentQuestion],answer)
		}
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		if (score < 0) {
			resultCont.textContent = 'Your Score' + 0;
			return;
		} else {
			resultCont.textContent = 'Your Score' + score;
			return;
		}
	}
	loadQuestion(currentQuestion);
}
function validate() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	var answer = selectedOption.value;
	var right = 0;
	var wrong = 0;
	if (quiz.questions[currentQuestion].answer == answer) {
		score += 10;
		alert1.innerHTML = "<p>This is Correct</p>";
		return;
	} else{
		alert1.innerHTML = "<p>This is wrong</p>";
		return;
	}
};
loadQuestion(currentQuestion);