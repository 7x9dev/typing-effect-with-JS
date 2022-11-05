let text = "I am a web developer...";
let i = 0;
let speed = 250;

function type() {
   if (i < text.length) {
      document.querySelector("#typingTxt").textContent += text.charAt(i);
      i++;
      setTimeout(type, speed)
   }
}
type();
