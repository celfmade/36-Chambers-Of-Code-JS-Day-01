class Problem {
        /**
     * Have the wordCount(input) take the str string parameter being passed
     * and return the number of words the string contains
     * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
     * separated by single spaces.
     */
    wordCount(input) {
        // code goes here
        
            let string = input.split(" ");  //split the word into strings
            let wordLength = string.length; //count the lenght of string 

            return wordLength;

        }



    /**
     * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
     letter of each word. Words will be separated by only one space.
    * 
    */
    letterCapitalize(str) {

        // split the sentence in a string
        const word = str.split(" ");

        for (var i = 0, x = word.length; i < x; i++) {
            word[i] = word[i][0].toUpperCase() + word[i].substr(1);
        }
    
        return word.join(" ");
    }



    /**
     * Have the function firstReverse(String input) take the input parameter being passed and
     * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
     * program should return the string sredoC dna dlroW olleH.
     */

    firstReverse(input){
       //split into string 
       //reverse the order of the string
      //put the string back together 

    
     return input.split('').reverse().join("");
    }
 
    /**
     * Have the longestWord(String input) take the input parameter being passed and return the
     * largest word in the string. If there are two or more words that are the same length,
     * return the first word from the string with that length. Ignore punctuation and assume
     * input will not be empty.
     */
    longestWord(input) {
        // code goes here
        let stringWord = input.split(" ");
        //create the varible to hold longst word in string
    const sortedArry = stringWord.sort( (inputA, inputB) => {
        return inputB.length - inputA.length;
    }

    )
        //create a for loop to go through string
        for( var i = 0; i < stringWord.length; i++){
            if(stringWord[i].length > longest)
            longest = stringWord[i].length;
        }
    }

    /**
     * Have the swapCase(String input) take the input parameter and swap the case of each
     * character. For example: if str is "Hello World" the output should be hELLO wORLD.
     * Let numbers and symbols stay the way they are.
     */
    swapCase(str) {
        // code goes here
        return null;
    }

}

module.exports = Problem;