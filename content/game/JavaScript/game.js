var expressions = ['Make your choice again.', 'Paper cover rock.', 'Rock crushes scissors.', 'Scissors cut paper.'];

var computerChoice; //stores value of the computer's choice
var text; //text to display after the choice
var results; //results of the draw - who wins or a tie

//initial results of the user and the computer
var userPoints = 0, computerPoints = 0;
$('#computer, #user').text(userPoints);
var winningScore = 10;

//Display and restore the score
function displayScore(textH2, textH4) {
	$('#modalScore .modal-header h2').text(textH2);
	$('#modalScore .modal-body h4').text(textH4);
	$('#modalScore').modal('show');
}

function restoreScore() {
	if (userPoints == winningScore || computerPoints == winningScore) {
		var finalScore = userPoints + ' - ' + computerPoints;
		if (userPoints == winningScore) displayScore('Congratulations!', 'You win ' + finalScore);
		else if (computerPoints == winningScore) displayScore('Game over!', 'Computer beat you ' + finalScore);

		userPoints = 0;
		computerPoints = 0;
		$('#computer, #user').text(userPoints);
	}
}

//For the computer
function computerGoes() {
	var choice = Math.random();
	if (choice < 1/3) return "rock";
	if (choice < 2/3) return "paper";
	return "scissors";
}

//For the user (win - computer wins, lose - computer loses)
function userGoes(computer, win, lose, tie) {
	text = 'Computer\'s choice: <strong>' + computer + '</strong><br>';
	if (computer == lose) {
		text += '<em>You win!</em> ';
		$('#user').text(++userPoints); //update the user's score
		$("#outcome").css("background-color", "rgb(114, 249, 69)");
		return 'win';
	}
	else if (computer == win) {
		text += '<em>Computer wins!</em> ';
		$('#computer').text(++computerPoints); //update the computer's score
		$("#outcome").css("background-color", "rgb(252, 65, 65)");
		return 'lose';
	}
	else if (computer == tie) {
		text += '<em>The result is a tie!</em> ';
		$("#outcome").css("background-color", "rgb(226, 214, 38)");
		return 'tie';
	}
	else {
		text = 'Sorry! An error occured. Please try again!';
		return 'error';
	}
}

//User chooses rock
$('#rock').on('click', function() {
	//store the results
	computerChoice = computerGoes();
	results = userGoes(computerChoice, 'paper', 'scissors', 'rock');

	//compare the results
	if (results == 'win') text += expressions[2];
	else if (results == 'lose') text += expressions[1];
	else if (results == 'tie') text += expressions[0];

	//notify of the results
	$('#text').html(text);
	restoreScore();
});

//User chooses paper
$('#paper').on('click', function() {
	//store the results
	computerChoice = computerGoes();
	results = userGoes(computerChoice, 'scissors', 'rock', 'paper');

	//compare the results
	if (results == 'win') text += expressions[1];
	else if (results == 'lose') text += expressions[3];
	else if (results == 'tie') text += expressions[0];

	//notify of the results
	$('#text').html(text);
	restoreScore();
});

//User chooses scissors
$('#scissors').on('click', function() {
	//store the results
	computerChoice = computerGoes();
	results = userGoes(computerChoice, 'rock', 'paper', 'scissors');

	//compare the results
	if (results == 'win') text += expressions[3];
	else if (results == 'lose') text += expressions[2];
	else if (results == 'tie') text += expressions[0];

	//notify of the results
	$('#text').html(text);
	restoreScore();
});