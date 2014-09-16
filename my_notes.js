Overall, I think we need to run auto computer using some kind of library, so we will make use of the learn function


      it("returns an empty array when there are no completions", function(){
        expect(t.autoComplete("a")).toEqual([]);
We get back an empty array from words function if there are no words in the trie. 
So somehow we need to set it up so that the passing in a try with no words in it if we're trying to complete something and we don't have any words like that.


If you want to play with the autocompleter.js you need to open your node console in terminal and set Autocompleter = require("./autocompleter.js"). Then you create a new instance of Autocompleter

var autocompleter = new Autocompleter
and run autocompleter.readFile("./mini_titles").

There needs to be some kind of method called to read file which calls learn on whatever it's parameters are. 
So it looks like auto completer must be a class, or rather a constructor.
