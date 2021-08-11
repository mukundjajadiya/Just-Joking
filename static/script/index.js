/** @format */

var h1_question = document.getElementById("question");
var h1_answer = document.getElementById("answer");

var joke_url = "https://v2.jokeapi.dev/joke/Any";

fetch(joke_url)
	.then((response) => response.json())
	.then((data) => {
		if (data.setup) {
			h1_question.innerText = `Question :\n ${data.setup}`;
			h1_answer.innerText = `Answer:\n ${data.delivery}`;
		}
		if (data.joke) {
			h1_answer.innerText = `Joke:\n ${data.joke}`;
		}
	});
