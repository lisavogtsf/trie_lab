
Trie = function(){
	this.characters = {};
};

Trie.prototype.learn = function(word, index){
	if (index === undefined){
		index = 0;
	} 
	if (index < word.length) {
		var letter = word[index];
		if (this.characters[letter] === undefined) {
			// create new Trie
			this.characters[letter] = new Trie();
		} 
			// move on through new or existing Trie
			index++;
			this.characters[letter].learn(word, index);
	} else {
		// end of word
		// this.isWord = true;
		this.isWord = true;
	}

	// This function should add the given word,
	// starting from the given index,
	// to this Trie.

	// It will be recursive.  It will tell
	// the correct child of this Trie to learn the word
	// starting from a later index.

	// Consider what the learn function should do
	// when it reaches the end of the word?
	// A word does not necessarily end at a leaf.
	// You must mark nodes which are the ends of words,
	// so that the words can be reconstructed later.
};

Trie.prototype.find = function(word, index){

	if (word.length < 1 || word.length === undefined) {
		return false;
	}
	if (index === undefined || index < 0){
		index = 0;
	} 

	var letter = word[index];

	if (this.characters[letter] === undefined) {
		// word not in tree
		return false;
	} else {
		if (index < word.length -1) {
			// not at end of word, keep going
			index++;
			return this.characters[letter].find(word, index);	

		} else if (index === word.length - 1) {
			// found!
			return this.characters[letter];
		} else {
			// past end of word
			return false;
		}

	}
// 	if (index < word.length -1) {
// 		// test for presence of letter in trie
// 		if (this.characters[letter] === undefined) {
// 			// word not in tree
// 			return false;
// 		} else {
// 			// move on through Trie, searching
// 			index++;
// 			this.find(word, index);	
// 		}	

// 	} else if (index === word.length - 1) {
// 		// by the index & word.length you know you are
// 		// at the end of the word you are looking for
// 		console.log("word, ", word);
// 		console.log("index, ", index);
// 		console.log("this ", this);
// 		console.log("this.characters, ", this.characters);
// 		console.log("letter ", letter);
// 		console.log("this.characters[letter], ", this.characters[letter].isWord);
// 		console.log("this.characters[letter].isWord, ", this.characters[letter].isWord);
// 		console.log("########################### end of word test");

// 		if (this.characters[letter].isWord === true) {
// 			// this is already a learned word
// 			// return it
// 			return this.characters[letter];
// 		} else {
// 			// then part of the word is in the trie, but not marked as a word
// 			// 
// 			return this.characters[letter];
// 		}

// 	} else {
// 		// error, went off end of word
// 		return false;
// 	}
// 	// This function will return the node in the trie
// 	// which corresponds to the end of the passed in word.

// 	// Be sure to consider what happens if the word is not in this Trie.
};

Trie.prototype.getWords = function(words, currentWord){

	currentWord = currentWord || "";
	words = words || [];

	if (this.isWord){
		// console.log("When found a word, this, ", this);
		// console.log("When found a word, currentWord, ", currentWord);
		console.log("words in getWords function, ", words);
		words.push(currentWord);
		console.log("words in getWords function, AFTER PUSH ", words);
	} 
	// console.log("made it to loop through characters, build currentWord ", currentWord);
	// if it isn't a word already
	for (var key in this.characters) {
		// console.log("key in loop, ",  key);
		// console.log("currentword in loop, ", currentWord);
		this.characters[key].getWords(words, currentWord + key);
	}
	return words;

	// This function will return all the words which are
	// contained in this Trie.
	// it will use currentWord as a prefix,
	// since a Trie doesn't know about its parents.
};

Trie.prototype.autoComplete = function(prefix){

	var allWordsInTrie = [];
	var testResult = null;
	var results = [];
	var testFcn = null;
	var words = [];
	var key = "";

	if (prefix === undefined){
		return false;
	}

	if (this.find(prefix)){
		console.log("prefix, ", prefix);
		console.log("allWordsInTrie, ", allWordsInTrie);

		// as long as the prefix is actually in the Trie
		// get all the words in the trie
		allWordsInTrie = this.getWords(words, prefix);

		// testFcn is the function that will be plugged into forEach
		// testFcn creates a new Trie that learns each taco/word
		// then testFcn tries to find the prefix in that testTrie
		// if the prefix is in that test Trie then we want to 
		// get taco out of this function and into the results array
		// console.log("allWordsInTrie" , allWordsInTrie);
		testFcn = function (taco){
			console.log("taco in testfcn", taco);
			testTrie = new Trie();
			testTrie.learn(taco);
			// find prefix in testTrie, taco from all tacos
			testResult = testTrie.find(prefix);
			
			if (testResult){
				// prefix is in testTrie
				// add taco_IN_TRIE to results
				results.push(taco);
				// return? no need to finish loop
		
				// if WORD_IN_Trie doesn't include prefix
				// exclude that word, continue in loop
			}
		};

		//where is this word coming from??
		// word is just the key?
		// for key in allWordsInTrie
		// but we have an array here, so that doesn't work
		// testFcn and word are both paramaters of forEach
		allWordsInTrie.forEach(testFcn, key);

		return results;

	} else {
		// prefix not found in Trie
		// return empty array 
		var emptyTrie = new Trie();
		return emptyTrie.getWords();
	}

	// This function will return all completions 
	// for a given prefix.
	// It should use find and getWords.
};

try{
	module.exports = Trie;
} catch(e){

}