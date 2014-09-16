      it("returns an empty array when there are no completions", function(){
        expect(t.autoComplete("a")).toEqual([]);
We get back an empty array from words function if there are no words in the trie. 
So somehow we need to set it up so that the passing in a try with no words in it if we're trying to complete something and we don't have any words like that.
