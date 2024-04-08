const checkBtn = document.getElementById("check-btn");
const isAPalindrome = " is a palindrome.";
const IsNotPalindrome = " is not a palindrome.";

function isPalimdrome(text){
  if (text.length === 1) {
    return true
  }
  let cleanText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let i = 0;
  let e = cleanText.length-1;
  while(i <= e){
    if (cleanText[i] === cleanText[e]) {
      i++;
      e--;
    }else return false
  }
  return true
};

function checkIfTextIsPalindrome(){
  let textInput = document.getElementById("text-input");
  let text = textInput.value;
  if (text.length === 0) {
    alert("Please input a value");
    return
  };
  let isPalindrome = isPalimdrome(text);
  const result = document.getElementById("result");
  if (isPalindrome) {
    result.innerHTML = text + isAPalindrome;
  }else result.innerHTML = text + IsNotPalindrome;
  
  textInput.value = "";
}
checkBtn.addEventListener('click', checkIfTextIsPalindrome);