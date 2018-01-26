window.addEventListener('load', () => {
  let $sentenceCipher = $('#sentence-cipher');

  $sentenceCipher.text(localStorage.newSentence);
  console.log($sentenceCipher);
});
