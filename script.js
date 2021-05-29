var items = [
    ["a", "あ", "ア"],
    ["i", "い", "イ"],
    ["u", "う", "ウ"],
    ["e", "え", "エ"],
    ["o", "お", "オ"],

    ["ka", "か", "カ"],
    ["ki", "き", "キ"],
    ["ku", "く", "ク"],
    ["ke", "け", "ケ"],
    ["ko", "こ", "コ"],

    ["sa", "さ", "サ"],
    ["shi", "し", "シ"],
    ["su", "す", "ス"],
    ["se", "せ", "セ"],
    ["so", "そ", "ソ"],

    ["ta", "た", "タ"],
    ["chi", "ち", "チ"],
    ["tsu", "つ", "ツ"],
    ["te", "て", "テ"],
    ["to", "と", "ト"],

    ["na", "な", "ナ"],
    ["ni", "に", "ニ"],
    ["nu", "ぬ", "ヌ"],
    ["ne", "ね", "ネ"],
    ["no", "の", "ノ"],

    ["ha", "は", "ハ"],
    ["hi", "ひ", "ヒ"],
    ["fu/hu", "ふ", "フ"],
    ["he", "へ", "ヘ"],
    ["ho", "ほ", "ホ"],

    ["ma", "ま", "マ"],
    ["mi", "み", "ミ"],
    ["mu", "む", "ム"],
    ["me", "め", "メ"],
    ["mo", "も", "モ"],

    ["ya", "や", "ヤ"],
    ["yu", "ゆ", "ユ"],
    ["yo", "よ", "ヨ"],

    ["ra", "ら", "ラ"],
    ["ri", "り", "リ"],
    ["ru", "る", "ル"],
    ["re", "れ", "レ"],
    ["ro", "ろ", "ロ"],

    ["wa", "わ", "ワ"],
    ["wo", "を", "ヲ"],
	["n", "ん", "ン"],

    ["ga", "が", "ガ"],
    ["gi", "ぎ", "ギ"],
    ["gu", "ぐ", "グ"],
    ["ge", "げ", "ゲ"],
    ["go", "ご", "ゲ"],

    ["za", "ざ", "ザ"],
    ["zi/ji", "じ", "ジ"],
    ["zu", "ず", "ズ"],
    ["ze", "ぜ", "ゼ"],
    ["zo", "ぞ", "ゾ"],

    ["da", "だ", "ダ"],
    ["di/ji", "ぢ", "ヂ"],
    ["du/zu", "づ", "ヅ"],
    ["de", "で", "デ"],
    ["do", "ど", "ド"],

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

var typeIndex = 1;
var charIndex = 0;

// document ready
document.addEventListener("DOMContentLoaded", function(event) {
	
	var level = getCookie("level");	
	if(level)
		cboLevel.value = level;
});

function changeType(index) {
	
	if(typeIndex == index)
	{
		// random if repeatedly click on same type radio
		random(index);
	}
	else
	{
		typeIndex = index;
		refreshText();
	}
}

function setType(index) {
    typeIndex = index;
	switch(index) {
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

function refreshText()
{
    var item = items[charIndex][typeIndex];
    display.innerHTML=item;
}

function random(type) {
	if(type != undefined )
		setType(type);
		
	var level = Number(cboLevel.value);
	var randomLength = getRandomLength(level);
		
    var newCharIndex= Math.floor(Math.random() * randomLength);
    if(newCharIndex == charIndex)
    {
        random()
    }
    else
    {
        charIndex = newCharIndex
        refreshText();
    
    }
}

function getRandomLength(level)
{
	switch(level)
	{	
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
		default :			
			return items.length
	}
}

function setLevel()
{
	var level = cboLevel.options[cboLevel.selectedIndex].value;
	document.cookie = "level=" + level + ";" + "SameSite=None; Secure";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
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
