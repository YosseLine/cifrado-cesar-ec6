window.addEventListener('load', () => {
  let btnCipher = $('#btn-cipher');
  let $newSentence = '';
  let $sentence = $('#sentence');
  let centinel = false;

  btnCipher.on('click', () => {
    let $sentenceValue = $sentence.val().trim();
    if ($sentenceValue) {
      // Se condiciona para que el length del input sea mayor a 5
      for (let i = 0; i < $sentenceValue.length; i++) {
        // Usamos un for para recorrer sentence.
        let stringAscii = $sentenceValue.charCodeAt(i);
        // Obtenemos el codigo ascii de cada caracter
        if ((stringAscii !== 32) && (stringAscii < 65) || (stringAscii > 90) && (stringAscii < 97) || (stringAscii > 122)) {
          // Restringimos los valores, para que no se ingresen valores prohibidos.
          alert('Ingresa una letra válida');
          $sentence.val('');
          console.log($sentence);
        } else {
          centinel = true;
          let cesarCipher = String.fromCharCode((stringAscii - 65 + 33) % 26 + 65);
          $newSentence += cesarCipher;
          console.log($newSentence);
          localStorage.newSentence = $newSentence;
          console.log(localStorage.newSentence);
          window.location.href = 'view-cipher.html';
        }
      }
    } else {
      // Si el usuario no ingresa una frase
      alert('Ingresa una frase!');
    }
  });
});
