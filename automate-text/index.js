let elem = document.getElementById('fuzzy-landing-header')
const words = ["  ", 'MIS Templates', 'ESOP management', 'Credits'];
let i = 0;
let timer;

let obj = {
  isInputActive: true
}

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function () {
    if (word && word.length > 0) {
      let initialAtt = elem.getAttribute('placeholder') || ''
      elem.setAttribute('placeholder', initialAtt + word.shift());
    } else {
      deletingEffect();
      return false;
    };

    timer = setTimeout(loopTyping, 200);
  };

  if (obj.isInputActive) {
    loopTyping();
  }
};

function deletingEffect() {
  let word = words[i] && words[i].split("");
  var loopDeleting = function () {
    if (word && word.length > 0) {
      word.pop();
      elem.setAttribute('placeholder', word.join(""));
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      typingEffect();
      return false;
    };
    timer = setTimeout(loopDeleting, 100);
  };
  loopDeleting();
};

function focusElementFn() {
  obj.isInputActive = false
}

function focusoutElementFn() {
  obj.isInputActive = true
  typingEffect()
}

typingEffect()

elem.addEventListener('focus', focusElementFn)
elem.addEventListener('focusout', focusoutElementFn)
