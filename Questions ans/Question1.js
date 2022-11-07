function LongestWord(sen) {
    const words = sen.split(' ');
    let maxWord = '';
    let max = 0;
  
    for (let word of words) {
      const filteredWord = word.replace(/[^a-zA-Z0-9]/gi, '');
      if (filteredWord.length > max) {
        maxWord = filteredWord;
        max = filteredWord.length;
      }
    }
  
    // code goes here
    return maxWord;
  }