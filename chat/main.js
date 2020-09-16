function start() {
    var frameset = document.createElement('frameset');
    var one = document.createElement('frame');
    var two = document.createElement('frame');

    frameset.setAttribute('cols', '50%, 50%');

    one.src = 'http://nekto.me/chat';
    two.src = 'https://chatvdvoem.ru/';

    frameset.appendChild(one);
    frameset.appendChild(two);

    document.body.setAttribute('style', 'margin: 0px;');
    document.body.appendChild(frameset);
};

start();
