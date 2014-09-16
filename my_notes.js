      it("returns an empty array when there are no completions", function(){
        expect(t.autoComplete("a")).toEqual([]);
