document.querySelector('#clickMe').addEventListener('click', isPalindrome)

function isPalindrome(name) {

  const userWord = document.querySelector("#userWord").value;

  fetch(`/api?enteredWord=${userWord}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('#palindrome').textContent = data.palindrome 
    });

} 
