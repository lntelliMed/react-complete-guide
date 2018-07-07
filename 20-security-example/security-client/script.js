
const userInputInHTML = (input) => {
  const p = document.getElementById("userInput");
  // E.g. try: <img src="/" onerror = "alert(1);">
  p.innerHTML = input;

  // Instead:
  // const textnode = document.createTextNode(input);
  // p.appendChild(textnode);
}
const sendToServer = () => {
  const input = document.querySelector('#userinput').value;
  userInputInHTML(input);
  fetch('http://localhost:3000/secret', {
    method: 'POST',
    body: JSON.stringify({userInput: input}),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
};
