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

    // ["ta", "た", "タ"],
    // ["chi", "ち", "チ"],
    // ["tsu", "つ", "ツ"],
    // ["te", "て", "テ"],
    // ["to", "と", "ト"],

    // ["na", "な", "ナ"],
    // ["ni", "に", "ニ"],
    // ["nu", "ぬ", "ヌ"],
    // ["ne", "ね", "ネ"],
    // ["no", "の", "ノ"],

    // ["ha", "は", "ハ"],
    // ["hi", "ひ", "ヒ"],
    // ["fu/hu", "ふ", "フ"],
    // ["he", "へ", "ヘ"],
    // ["ho", "ほ", "ホ"],

    // ["ma", "ま", "マ"],
    // ["mi", "み", "ミ"],
    // ["mu", "む", "ム"],
    // ["me", "め", "メ"],
    // ["mo", "も", "モ"],

    // ["ya", "や", "ヤ"],
    // ["yu", "ゆ", "ユ"],
    // ["yo", "よ", "ヨ"],

    // ["ra", "ら", "ラ"],
    // ["ri", "り", "リ"],
    // ["ru", "る", "ル"],
    // ["re", "れ", "レ"],
    // ["ro", "ろ", "ロ"],

    // ["wa", "わ", "ワ"],
    // ["wo", "を", "ヲ"],

    // ["ga", "が", "ガ"],
    // ["gi", "ぎ", "ギ"],
    // ["gu", "ぐ", "グ"],
    // ["ge", "げ", "ゲ"],
    // ["go", "ご", "ゲ"],

    // ["za", "ざ", "ザ"],
    // ["zi/ji", "じ", "ジ"],
    // ["zu", "ず", "ズ"],
    // ["ze", "ぜ", "ゼ"],
    // ["zo", "ぞ", "ゾ"],

    // ["da", "だ", "ダ"],
    // ["di/ji", "ぢ", "ヂ"],
    // ["du/zu", "づ", "ヅ"],
    // ["de", "で", "デ"],
    // ["do", "ど", "ド"],

    // ["ba", "ば", "バ"],
    // ["bi", "び", "ビ"],
    // ["bu", "ぶ", "ブ"],
    // ["be", "べ", "ベ"],
    // ["bo", "ぼ", "ボ"],

    // ["pa", "ぱ", "パ"],
    // ["pi", "ぴ", "ピ"],
    // ["pu", "ぷ", "プ"],
    // ["pe", "ぺ", "ペ"],
    // ["po", "ぽ", "ポ"],

    ["n", "ん", "ン"]
];

var typeIndex = 1;
var charIndex = 0;

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
			console.log(eng);
			eng.checked = true;
			break;
		case 1:
			console.log(hiragana);
			hiragana.checked = true;
			break;
		case 2:
			console.log(katagana);
			katagana.checked = true;
			break;
		//default:
		// code block
	}
}

function refreshText()
{
    var item = items[charIndex][typeIndex];
    console.log(item);
    display.innerHTML=item;
}

function random(type) {
	console.log("type", type);
	if(type != undefined )
		setType(type);
	
    // console.log(display.innerHTML);

    // console.log("random");
    var newCharIndex= Math.floor(Math.random() * items.length);
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
