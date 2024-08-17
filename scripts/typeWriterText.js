document.addEventListener('DOMContentLoaded', () => {
  const dataText = ["FRONT_END(){", "BACK_END(){", "FULL_STACK(){"];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      const element = document.getElementById('typeWriterText');
      element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(() => {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 1000);
    }
  }

  function deleteText(text, i, fnCallback) {
    if (i >= 0) {
      const element = document.getElementById('typeWriterText');
      element.innerHTML = text.substring(0, i) + '<span aria-hidden="true"></span>';

      setTimeout(() => {
        deleteText(text, i - 1, fnCallback);
      }, 50);
    } else if (typeof fnCallback == 'function') {
      fnCallback();
    }
  }

  function startTextAnimation(i) {
    if (i < dataText.length) {
      typeWriter(dataText[i], 0, () => {
        if (i === dataText.length - 1) {
          setTimeout(() => {
            deleteText(dataText[i], dataText[i].length, () => {
              startTextAnimation(0);
            });
          }, 3000);
        } else {
          setTimeout(() => {
            deleteText(dataText[i], dataText[i].length, () => {
              startTextAnimation(i + 1);
            });
          }, 1000);
        }
      });
    }
  }

  startTextAnimation(0);
});
