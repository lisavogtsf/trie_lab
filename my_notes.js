Overall, I think we need to run auto computer using some kind of library, so we will make use of the learn function


      it("returns an empty array when there are no completions", function(){
        expect(t.autoComplete("a")).toEqual([]);
We get back an empty array from words function if there are no words in the trie. 
So somehow we need to set it up so that the passing in a try with no words in it if we're trying to complete something and we don't have any words like that.
