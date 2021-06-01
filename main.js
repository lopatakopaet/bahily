console.log('test');
let ua = {
    logoSubtitle: 'виробник одноразових медичних бахіл',
}
let ru = {
    logoSubtitle: 'производитель одноразовых медицинских бахил',
}

function changeLang(lan) {
    lengthObj = Object.getOwnPropertyNames(lan).length;
    for (var i = 0; i <= lengthObj - 1; i++) {
        objKey = Object.getOwnPropertyNames(lan)[i];
        document.getElementById(objKey).innerText = func(objKey);
    }

    function func(a) {
        for (key in lan) {
            if (key == a) {
                return (lan[key]);
            }
        }
    }
}
changeLang(ru)


// <button class="translate" id="en" onclick="
// changeLang(en);
// ">English</button>
// <button class="translate" id="ua" onclick="
// changeLang(ua);
// ">Українська</button>
//
// <p class="lang">
//     <p id="home">Home</p>
//     </p>
//     <p class="lang">
//     <p id="about">About Us</p>
// </p>
// <p class="lang">
//     <p id="contact">Contact s</p>
// </p>