fetch("https://icanhazdadjoke.com/slack")
  .then(data => data.json())
  .then(jokeData => {
    console.log(jokeData)
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');
    jokeElement.innerHTML = jokeText;
  })