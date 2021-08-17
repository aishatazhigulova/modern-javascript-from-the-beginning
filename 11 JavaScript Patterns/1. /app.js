// Basic structure


// STANDARD MODULE PATTERN
const UICtrl = (function() {
  let text = 'Hello World';

  const changeText = () => {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText() {
      changeText();
      // console.log(text);
    }
  }
})();

UICtrl.callChangeText();
// UICtrl.changeText();

console.log(UICtrl.text); 