let palindromes = [];

getAllPalindromesInAString = (inputString) => {
    if(inputString.length == 1 || inpurString.length == 0) {
        return inputString;
    }

    // Get all the palindromes and store them in an array
    for (var i = 0; i < inputString.length; i++) {
        expandAroundCenter(i-1, i+1, inputString);
        expandAroundCenter(i, i+1, inputString);
    }
}

expandAroundCenter = (left, right, s) => {
    while(left >=0 && right <= s.length && s[left] === s[right]) {
        palindromes.push(s.substring(left, right+1));
        left--;
        right++;
    }
}

getSecondLongestPalindrome = (inputString) => {
    getAllPalindromesInAString(inputString);
    
    if(palindromes === undefined || palindromes.length == 0) {
        console.log("No Palindrome exists");
    } else if (palindromes.length == 0) {
        console.log("No Second Palindrome exists");
    } else {
        /*  So we have more than one element in the palindromes array and they are not sorted, 
            So I create a new lengths array and sorted it, extracted the secong longest length 
            and looped through palindromes array to find a palindrome with that length 
        */
        let lengths = palindromes.map(item => item.length);
        // Need to paas a function to sort because we want to sort these as numeric values and not string
        lengths.sort(compareNum);
        let secondLongestLength = lengths[lengths.length-2];
        
        palindromes.forEach((item, index, array) => {
            if(item.length == secondLongestLength) {
                console.log("Found Palindrome: "+item);
            }
        });
    }
}

compareNum = (a,b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

getSecondLongestPalindrome("abffffba");

