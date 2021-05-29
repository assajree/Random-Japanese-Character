var items_a = [
    ["a", "あ", "ア"],
    ["i", "い", "イ"],
    ["u", "う", "ウ"],
    ["e", "え", "エ"],
    ["o", "お", "オ"],
];

var items_ka = [
    ["ka", "か", "カ"],
    ["ki", "き", "キ"],
    ["ku", "く", "ク"],
    ["ke", "け", "ケ"],
    ["ko", "こ", "コ"],

    ["ga", "が", "ガ"],
    ["gi", "ぎ", "ギ"],
    ["gu", "ぐ", "グ"],
    ["ge", "げ", "ゲ"],
    ["go", "ご", "ゲ"],
];

var items_sa = [
    ["sa", "さ", "サ"],
    ["shi", "し", "シ"],
    ["su", "す", "ス"],
    ["se", "せ", "セ"],
    ["so", "そ", "ソ"],

    ["za", "ざ", "ザ"],
    ["zi/ji", "じ", "ジ"],
    ["zu", "ず", "ズ"],
    ["ze", "ぜ", "ゼ"],
    ["zo", "ぞ", "ゾ"],
];
var items_ta = [

    ["ta", "た", "タ"],
    ["chi", "ち", "チ"],
    ["tsu", "つ", "ツ"],
    ["te", "て", "テ"],
    ["to", "と", "ト"],

    ["da", "だ", "ダ"],
    ["di/ji", "ぢ", "ヂ"],
    ["du/zu", "づ", "ヅ"],
    ["de", "で", "デ"],
    ["do", "ど", "ド"],
];

var items_na = [
    ["na", "な", "ナ"],
    ["ni", "に", "ニ"],
    ["nu", "ぬ", "ヌ"],
    ["ne", "ね", "ネ"],
    ["no", "の", "ノ"],

    ["ba", "ば", "バ"],
    ["bi", "び", "ビ"],
    ["bu", "ぶ", "ブ"],
    ["be", "べ", "ベ"],
    ["bo", "ぼ", "ボ"],

    ["pa", "ぱ", "パ"],
    ["pi", "ぴ", "ピ"],
    ["pu", "ぷ", "プ"],
    ["pe", "ぺ", "ペ"],
    ["po", "ぽ", "ポ"]
];
var items_ha = [
    ["ha", "は", "ハ"],
    ["hi", "ひ", "ヒ"],
    ["fu/hu", "ふ", "フ"],
    ["he", "へ", "ヘ"],
    ["ho", "ほ", "ホ"],
];
var items_ma = [
    ["ma", "ま", "マ"],
    ["mi", "み", "ミ"],
    ["mu", "む", "ム"],
    ["me", "め", "メ"],
    ["mo", "も", "モ"],
];
var items_ya = [
    ["ya", "や", "ヤ"],
    ["yu", "ゆ", "ユ"],
    ["yo", "よ", "ヨ"],
];
var items_ra = [
    ["ra", "ら", "ラ"],
    ["ri", "り", "リ"],
    ["ru", "る", "ル"],
    ["re", "れ", "レ"],
    ["ro", "ろ", "ロ"],
];
var items_wa = [
    ["wa", "わ", "ワ"],
    ["wo", "を", "ヲ"],
    ["n", "ん", "ン"],
];

var items = [];

var typeIndex = 1;
var charIndex = 0;
var oldChar = "あ";

// document ready
document.addEventListener("DOMContentLoaded", function(event) {

    var level = getCookie("level");
    if (level)
        cboLevel.value = level;
    else
        level = -1;

    items = buildItems(level);

});

function changeType(index) {

    if (typeIndex == index) {
        // random if repeatedly click on same type radio
        random(index);
    } else {
        typeIndex = index;
        refreshText();
    }
}

function setType(index) {
    typeIndex = index;
    switch (index) {
        case 0:
            eng.checked = true;
            break;
        case 1:
            hiragana.checked = true;
            break;
        case 2:
            katagana.checked = true;
            break;
            //default:
            // code block
    }
}

function refreshText() {
    var item = items[charIndex][typeIndex];
    display.innerHTML = item;
}

function random(type) {

    if (type != undefined)
        setType(type);

    var level = Number(cboLevel.value);
    var randomLength = getRandomLength(level);

    var newCharIndex = Math.floor(Math.random() * items.length);
    var newChar = items[newCharIndex][1];
    if (oldChar == newChar) {
        random()
    } else {
        charIndex = newCharIndex;
        oldChar = newChar;
        refreshText();

    }
}

function getRandomLength(level) {
    switch (level) {
        case 1:
            return 5;
            break;
        case 2:
            return 10;
            break;
        case 3:
            return 15;
            break;
        case 4:
            return 20;
            break;
        case 5:
            return 25;
            break;
        case 6:
            return 30;
            break;
        case 7:
            return 35;
            break;
        case 8:
            return 38;
            break;
        case 9:
            return 43;
            break;
        case 10:
            return 46;
            break;
        default:
            return items.length
    }
}

function setLevel() {
    var level = cboLevel.options[cboLevel.selectedIndex].value;
    document.cookie = "level=" + level + ";" + "SameSite=None; Secure";

    items = buildItems(level);
}

function buildItems(level) {
    var result = [];
    switch (Number(level)) {
        case 0.01:
            result = result.concat(items_a);
            break;
        case 0.02:
            result = result.concat(items_ka);
            break;
        case 0.03:
            result = result.concat(items_sa);
            break;
        case 0.04:
            result = result.concat(items_ta);
            break;
        case 0.05:
            result = result.concat(items_na);
            break;
        case 0.06:
            result = result.concat(items_ha);
            break;
        case 0.07:
            result = result.concat(items_na);
            break;
        case 0.08:
            result = result.concat(items_ya);
            break;
        case 0.09:
            result = result.concat(items_ra);
            break;
        case 0.10:
            result = result.concat(items_wa);
            break;
        case -1:
            result = result.concat(items_wa);
        case 8:
            result = result.concat(items_ra);
        case 7:
            result = result.concat(items_ya);
        case 6:
            result = result.concat(items_ma);
        case 5:
            result = result.concat(items_ha);
        case 4:
            result = result.concat(items_na);
        case 3:
            result = result.concat(items_ta);
        case 2:
            result = result.concat(items_sa);
        case 1:
            result = result.concat(items_ka);
            break;
    }

    // console.log(result);
    return result;

}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}