var censorWords = ["fuck"];
var customCensorWords = [];

function censor(inStr){


	for(i in censorWords) {

		inStr = inStr.replace(censorWords[i], "***");
	}

	for(i in customCensorWords) {

		inStr = inStr.replace(customCensorWords[i], "***");
	}
}

function addCensorWord(word){

	customCensorWords.push(word);

}

function getCensorWords(){

	return censorWords.concat(customCensorWords);
}

exports.censor = censor;
exports.addCensorWord = addCensorWord;
exports.getCensorWords = getCensorWords;