var quiz = {
	"questions" : [{
	"question" : "Capital of INDIA?",
	"choices" : [
	{
	option : "DELHI",
	isCorrect : true,
	feedback : "Correct"
    },
	{
	option : "Bangalore",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	option : "Pune",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	option : "Mumbai",
	isCorrect : false,
	feedback : "Incorrect"
    }
	],
	"hint" : "The choices starts with letter D",
},
{
	"question" : "Who is the first Indian to score 100 centuries?",
	"choices" : [
	{
	option : "Sachin",
	isCorrect : true,
	feedback : "Correct"
    },
	{
	option : "Dhoni",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	option : "Kohili",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	option : "Dravid",
	isCorrect : false,
	feedback : "Incorrect"
    }
	],
	"hint" : "His name starts with letter S",
},
{
	"question" : "Which year Andhra and Telangana got seperated?",
	"choices" : [
	{
	option : "1925",
	isCorrect : false,
	feedback : "Incorrect"
    },
	{
	option : "1938",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	option : "2010",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	option : "2014",
	isCorrect : true,
	feedback : "Correct"
    }
	],
	"hint" : "The answer ends with 4"
},
{
	"question" : "Who was the first mughal emperor?",
	"choices" : [
	{
	option : "Dabur",
	isCorrect : false,
	feedback : "Incorrect"
    },
	{
	option : "Akbar",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	option : "Humayaun",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	option : "Babur",
	isCorrect : true,
	feedback : "Correct"
    }
	],
	"hint" : "Answer starts with B."
}
]
}
var i = 0
var j = 0
function display() {
	document.getElementById('question1').innerHTML = quiz.questions[i].question
	document.getElementById('hint1').innerHTML = quiz.questions[i].hint
	document.getElementById('radio1').innerHTML = '<input type = "radio" name = "q1" value = "choices 1" onclick="radioclick('+i+','+j+')">' + quiz.questions[i].choices[j].option + '<br>'
												+'<input type = "radio" name = "q1" value = "choices 2" onclick="radioclick('+i+','+j+1+')">' + quiz.questions[i].choices[j+1].option + '<br>'
												+'<input type = "radio" name = "q1" value = "choices 3" onclick="radioclick('+i+','+j+2+')">' + quiz.questions[i].choices[j+2].option + '<br>'
												+'<input type = "radio" name = "q1" value = "choices 4" onclick="radioclick('+i+','+j+3+')">' + quiz.questions[i].choices[j+3].option + '<br>'
	document.getElementById('question2').innerHTML = quiz.questions[i+1].question
	document.getElementById('hint2').innerHTML = quiz.questions[i+1].hint
	document.getElementById('radio2').innerHTML = '<input type = "radio" name = "q2" value = "choices 1" onclick="radioclicknew('+i+1+','+j+')">' + quiz.questions[i+1].choices[j].option + '<br>'
												+'<input type = "radio" name = "q2" value = "choices 2" onclick="radioclicknew('+i+1+','+j+1+')">' + quiz.questions[i+1].choices[j+1].option + '<br>'
												+'<input type = "radio" name = "q2" value = "choices 3" onclick="radioclicknew('+i+1+','+j+2+')">' + quiz.questions[i+1].choices[j+2].option + '<br>'
												+'<input type = "radio" name = "q2" value = "choices 4" onclick="radioclicknew('+i+1+','+j+3+')">' + quiz.questions[i+1].choices[j+3].option + '<br>'
    hideButton('Prev')
};
function radioclick(i,j) {
	if (quiz.questions[i].choices[j].isCorrect) {
		string=''
		string += '<div class="alert alert-success alert-dismissible">'
		string += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		string += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+quiz.questions[i].choices[j].feedback+'</strong>'
	    document.getElementById('feedback1').innerHTML = string
	} else {
		string=''
		string += '<div class="alert alert-warning alert-dismissible">'
		string += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		string += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+quiz.questions[i].choices[j].feedback+'</strong>'
	    document.getElementById('feedback1').innerHTML = string
	}
}
function radioclicknew(i,j) {
    if (quiz.questions[i].choices[j].isCorrect) {
		string=''
		string += '<div class="alert alert-success alert-dismissible">'
		string += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		string += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+quiz.questions[i].choices[j].feedback+'</strong>'
	    document.getElementById('feedback2').innerHTML = string
	} else {
		string=''
		string += '<div class="alert alert-warning alert-dismissible">'
		string += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		string += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+quiz.questions[i].choices[j].feedback+'</strong>'
	    document.getElementById('feedback2').innerHTML = string
	}	
}
function prev() {
	i=i-2;
	if (i < 0) {
		i = 0;
		hideButton('Prev')
		return;
	}
	showButton('Prev')
	showButton('Next')
	document.getElementById('question1').innerHTML = quiz.questions[i].question
	document.getElementById('hint1').innerHTML = quiz.questions[i].hint
	document.getElementById('radio1').innerHTML = '<input type = "radio" name = "q1" value = "choices 1" onclick="radioclick('+i+','+j+')">' + quiz.questions[i].choices[j].option + '<br>'
												+'<input type = "radio" name = "q1" value = "choices 2" onclick="radioclick('+i+','+j+1+')">' + quiz.questions[i].choices[j+1].option + '<br>'
												+'<input type = "radio" name = "q1" value = "choices 3" onclick="radioclick('+i+','+j+2+')">' + quiz.questions[i].choices[j+2].option + '<br>'
												+'<input type = "radio" name = "q1" value = "choices 4" onclick="radioclick('+i+','+j+3+')">' + quiz.questions[i].choices[j+3].option + '<br>'
	document.getElementById('question2').innerHTML = quiz.questions[i+1].question
	document.getElementById('hint2').innerHTML = quiz.questions[i+1].hint
	document.getElementById('radio2').innerHTML = '<input type = "radio" name = "q2" value = "choices 1" onclick="radioclicknew('+i+1+','+j+')">' + quiz.questions[i+1].choices[j].option + '<br>'
												+'<input type = "radio" name = "q2" value = "choices 2" onclick="radioclicknew('+i+1+','+j+1+')">' + quiz.questions[i+1].choices[j+1].option + '<br>'
												+'<input type = "radio" name = "q2" value = "choices 3" onclick="radioclicknew('+i+1+','+j+2+')">' + quiz.questions[i+1].choices[j+2].option + '<br>'
												+'<input type = "radio" name = "q2" value = "choices 4" onclick="radioclicknew('+i+1+','+j+3+')">' + quiz.questions[i+1].choices[j+3].option + '<br>'
    if (i == 0) hideButton('Prev')
}
function next() {
	i=i+2
	if (i > quiz.questions.length - 1) {
		i = quiz.questions.length - 1
		hideButton('Next')
		return
	}
	showButton('Next')
	showButton('Prev')
	document.getElementById('question1').innerHTML = quiz.questions[i].question
	document.getElementById('hint1').innerHTML = quiz.questions[i].hint
	document.getElementById('radio1').innerHTML = '<input type = "radio" name = "q1" value = "choices 1" onclick="radioclick('+i+','+j+')">' + quiz.questions[i].choices[j].option + '<br>'
												+'<input type = "radio" name = "q1" value = "choices 2" onclick="radioclick('+i+','+j+1+')">' + quiz.questions[i].choices[j+1].option + '<br>'
												+'<input type = "radio" name = "q1" value = "choices 3" onclick="radioclick('+i+','+j+2+')">' + quiz.questions[i].choices[j+2].option + '<br>'
												+'<input type = "radio" name = "q1" value = "choices 4" onclick="radioclick('+i+','+j+3+')">' + quiz.questions[i].choices[j+3].option + '<br>'
	document.getElementById('question2').innerHTML = quiz.questions[i+1].question
	document.getElementById('hint2').innerHTML = quiz.questions[i+1].hint
	document.getElementById('radio2').innerHTML = '<input type = "radio" name = "q2" value = "choices 1" onclick="radioclicknew('+i+1+','+j+')">' + quiz.questions[i+1].choices[j].option + '<br>'
												+'<input type = "radio" name = "q2" value = "choices 2" onclick="radioclicknew('+i+1+','+j+1+')">' + quiz.questions[i+1].choices[j+1].option + '<br>'
												+'<input type = "radio" name = "q2" value = "choices 3" onclick="radioclicknew('+i+1+','+j+2+')">' + quiz.questions[i+1].choices[j+2].option + '<br>'
												+'<input type = "radio" name = "q2" value = "choices 4" onclick="radioclicknew('+i+1+','+j+3+')">' + quiz.questions[i+1].choices[j+3].option + '<br>'
    if (i == quiz.questions.length - 2) hideButton('Next')
}
function hideButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'hidden'
}
function showButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'visible'
}
function reset() {
	location.reload()
}