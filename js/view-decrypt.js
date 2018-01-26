window.addEventListener('load', () => {
  let btnDecrypt = $('#btn-decrypt');
  let $newDecrypt = '';
  let $decrypt = $('#decrypt');
  let centinel = false;

  btnDecrypt.on('click', () => {
    let $decryptValue = $decrypt.val().trim();
    if ($decryptValue) {
      // Se condiciona para que el length del input sea mayor a 5
      for (let i = 0; i < $decryptValue.length; i++) {
        // Usamos un for para recorrer sentence.
        let stringAscii = $decryptValue.charCodeAt(i);
        // Obtenemos el codigo ascii de cada caracter
        if ((stringAscii !== 32) && (stringAscii < 65) || (stringAscii > 90) && (stringAscii < 97) || (stringAscii > 122)) {
          // Restringimos los valores, para que no se ingresen valores prohibidos.
          alert('Ingresa una letra válida');
          $decrypt.val('');
          console.log($decrypt);
        } else {
          centinel = true;
          let decryptCipher = String.fromCharCode(stringAscii - (33 % 26));
          $newDecrypt += decryptCipher;
          localStorage.newDecrypt = $newDecrypt;
          window.location.href = 'view-load-decrypt.html';
        }
      }
    } else {
      // Si el usuario no ingresa una frase
      alert('Ingresa una frase!');
    }
  });
});
