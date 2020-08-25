window.onload = function() {

(function () {
   var time = '';
   var sec = 0;
   var min = 0;
   setInterval(function() {
       if (sec === 59) {
          sec = 0;
          min++;
       } else {
          sec++;
       };
       if (min<10) time = '0';
       time += min + ':';
       if (sec<10) time += '0';
       time += sec;
       timer.innerText = time;
   },1000);
})();

var words = ['один','два','три'];

if (!localStorage.words) {
    localStorage.words = JSON.stringify(words);
};

words = JSON.parse(localStorage.words);

word.innerText = words[~~(Math.random()*words.length)];
cell.onclick = function() {
  word.innerText = words[~~(Math.random()*words.length)];
};

};
