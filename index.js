// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

function truncateString(str, num) { 
    if (num <= str.length){
        str = str.slice(0, num).concat('...')
        return str
    } else {
        return 'Sorry, we are unable to truncate the string: '.concat(str + '. ') + 
            'Given truncation number is too large for given string!'
    }
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); 
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); 
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); 
  console.log(truncateString("A-", 1)); 
  console.log(truncateString("Absolutely Longer", 2)); 
  console.log(); 
  console.log(); 