function game() {
	var riddles = ["Everyone has it and no one can lose it, what is it?",
	"What has a neck but no head?",
	"What has a face and two hands but no arms or legs?",
	"What has a thumb and four fingers but is not alive?",
	"What grows up while growing down?",
	"You can't keep this until you have given it.",
	"Past mountain, meadow, field, and hill, it follows a river while standing still.",
	"The more it dries, the wetter it gets. What is it?",
	"Take off my skin, I won't cry, but you will! What am I?",
	"What's black when you get it, red when you use it, and white when you're all through with it?",
	"I know a word of letters three. Add two, and fewer there will be!",
	"What grows when it eats, but dies when it drinks?",
	"The capital of Turkey is a long word. Can you spell it?",
	"What happens when you throw a yellow rock into a purple stream?",
	"Poor people have it. Rich people need it. If you eat it you die. What is it?",
	"What word becomes shorter when you add two letters to it?",
	"What is so delicate that saying its name breaks it?",
	"What goes up and down without moving?",
	"I am the beginning of the end, and the end of time and space. I am essential to creation, and I surround every place. What am I?",
	"Two in a corner,\n1 in a room,\n0 in a house, but 1 in a shelter. \nWhat am I?",
	"Some months have 30 days, some months have 31 days; how many have 28?",
	"Forward I'm heavy, but backwards I'm not. What am I?",
	"What goes up and doesn't come back down?",
	"Your mother's brother's only brother-in-law is asleep on your couch. Who is asleep on your couch?",
	"What belongs to you but is used more by others?"];
	var answers = ["shadow",
	"bottle",
	"clock",
	"glove",
	"goose",
	"promise",
	"riverbank",
	"towel",
	"onion",
	"charcoal",
	"few",
	"fire",
	"i t",
	"splash",
	"nothing",
	"short",
	"silence",
	"stairs",
	"the letter e",
	"the letter r",
	"all",
	"ton",
	"age",
	"father",
	"name"]
	
	var correct = true;
	
	while (correct)  {
		var x = Math.floor(Math.random()*riddles.length);
		var userAnswer = prompt(riddles[x]);
		if (userAnswer !== answers[x]) {
			sweetAlert("You have answered incorrectly. You lose!");
			correct = false;
		} else {
			riddles.splice(x,1);
			answers.splice(x,1);
			if (correct === false) {
				sweetAlert("You have answered all 25 riddles correctly! You win!");
			}
		}
	}
}
