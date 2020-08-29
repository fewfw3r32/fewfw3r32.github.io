window.onload = function() {

    (function() {
        var time = '';
        var sec = 0;
        var min = 0;
        setInterval(function() {
            time = '';
            if (sec === 59) {
                sec = 0;
                min++;
            } else {
                sec++;
            };
            if (min < 10) time = '0';
            time += min + ':';
            if (sec < 10) time += '0';
            time += sec;
            timer.innerText = time;
        }, 1000);
    })();

    var arrows = ['↑', '↓', '→'];
    var words = ['один', 'два', 'три'];
    var pos = ~~(Math.random() * words.length);
    if (!localStorage.words) {
        localStorage.words = JSON.stringify(words);
    };
    words = JSON.parse(localStorage.words);
    word.innerText = words[pos];
    roll.innerText = arrows[~~(Math.random() * 3)];
    cell.onclick = function(e) {
        if (e.target.className == "remove") {
            if (confirm('Удалить слово?')) {
                words.splice(pos, 1);
                localStorage.words = JSON.stringify(words);
            };
        } else if (e.target.className == "roll") {
            roll.innerText = '?';
            setTimeout(function() { roll.innerText = arrows[~~(Math.random() * 3)]; },200);
            //setTimeout(function() { roll.style.fontSize = '7vw'; },100);
            //setTimeout(function() { roll.style.fontSize = '8vw'; },200);
        } else {
            pos = ~~(Math.random() * words.length);
            word.innerText = words[pos];
        };
    };
};
