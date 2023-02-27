function isPalindrome(word) {
    console.log(`Testing word "${word}"`);
    if (word.length <= 1) {
      console.log(`"${word}" is a palindrome`);
      return true; 
    } else if (word[0] === word[word.length - 1]) {
      console.log(`Comparing "${word[0]}" and "${word[word.length - 1]}"`);
      return isPalindrome(word.slice(1, word.length - 1)); 
    } else {
      console.log(`"${word}" is not a palindrome`);
      return false; 
    }
  }
  
  isPalindrome("racecar"); 
  isPalindrome("kayak"); 
  isPalindrome("hello");
  