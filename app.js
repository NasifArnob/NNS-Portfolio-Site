
async function jokeFetch(){

  let config = {
    header: {
      Accept: "application/json",
    },
  };

  let  joke = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");

  let jokeData = await joke.json();

  document.querySelector(".joke").innerHTML = "The Random Joke: " + jokeData.joke;
  console.log(jokeData.joke);
};

jokeFetch();
