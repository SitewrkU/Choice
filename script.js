var RarityDiv = document.getElementById('rarityS');
var ch1 = document.getElementById('ch1');
var ch2 = document.getElementById('ch2');
var isEnabled1 = true; //Чи можна натиснути кнопку, під час затримки дві секунди = false
var isEnabled2 = true; //Так само

var badChoice = 0; 
var BestCh = 0;
var autistic = 0;

//    {fo: 'Вибір1', so: 'Вибір2', rt: 'Rare'}
var options = [
    {fo: 'Нагодувати сотню голодних котят', so: 'Получити PS5 з GTA VI', rt: 'Rare'},
    {fo: 'Грати в хом\'ка кожну годину, кожен день, весь вільний час клацати, щоб потім можливо получити ЦІЛИЙ бакс', so: 'Піти на завод і працювати 24/7, і получати стабільну зарплату', rt: 'Epic'},
    {fo: 'Побритися налисо за 5000', so: 'Побрити налисо друга за 5000', rt: 'Common'},
    {fo: 'Бути заядлим анімешником, передивитися кожне аніме в світі по 10 раз і бути все життя залежним', so: 'Бути бомжом', rt: 'Rare'},
    {fo: 'Бути Іваномзоло2004', so: 'Стати голубом і срати людям на голови', rt: 'Common'},
    {fo: 'Вміти ставати невидимим коли завгодно, і де завгодно', so: 'Вміти телепортуватися куди завгодно ', rt: 'Rare'},
    {fo: 'Вміти управляти своїми снами та повністю їх пам\'ятати', so: 'Получити 1,000,000$', rt: 'Common'},
    {fo: 'Стати аніме тянкою на 24 години', so: 'Получити компанію Тесла', rt: 'Legendary'},
    {fo: 'Жити тільки 20 років, але в багатстві та щасті', so: 'Прожити довге життя, але в бідності', rt: 'Common'},
    {fo: 'З\'їсти самий гострий перець в світі за стакан пива', so: 'Зламати свій телефон', rt: 'Rare'},
    {fo: 'Грати все життя в Доту', so: 'Грати все життя в Раст', rt: 'Epic'},
    {fo: 'Ніколи більше не хворіти', so: 'Безкінечна шаурма', rt: 'Rare'},
    {fo: 'Допомогти бідній бабусі перейти через дорогу', so: 'Получити круте ліжко з милими котиками', rt: 'Common'},
    {fo: 'Бути бідним, але попадеш в рай', so: 'Бути багатим, але попадеш в ад', rt: 'Common'},
    {fo: 'Допомогти другу в важкій ситуації в його житті, тим самим позичивши йому 3,000', so: 'Заказати великий сет ролів, і зїсти це все в одного', rt: 'Epic'},
    {fo: 'Кіт', so: 'Собака', rt: 'Common'},
    {fo: 'Пoлучити новенький айфон', so: 'Получити іграшку трансформер Оптімус Прайм', rt: 'Epic'},
    {fo: 'Прожити все життя тільки в селі, але бути самим уважаємим і багатим там', so: 'Бути бомжом але жити в мегаполісі', rt: 'Rare'},
    {fo: 'Насрати в басейн і скупати там друга, сказавжи що це просто коричневий фарбник', so: 'Відмовитися', rt: 'Legendary'},
    {fo: 'Сайт параша', so: 'Сайт імба люта', rt: 'Rare', unclickableDiv: 'True'},
    {fo: 'Minecraft', so: 'Terraria', rt: 'Epic'},
    {fo: 'Варіант 1', so: 'Варіант 2', rt: 'Rare'},
    {fo: 'Відпочинок на морі', so: 'Відпочинок в горах', rt: 'Common'},
    {fo: 'Піца', so: 'Суші', rt: 'Common'},
    {fo: 'Солоне', so: 'Солодке', rt: 'Common'},
    {fo: 'З\'їсти кілограм морозива за раз', so: 'Слухати все життя інстасамку', rt: 'Rare'},
    {fo: 'Грати в шахи з голубом', so: 'В карти з білкою', rt: 'Epic'},
    {fo: 'Бути героєм', so: 'Бути злодієм', rt: 'Common'},
    {fo: 'Розмовляти тільки шепотом', so: 'Тільки кричати', rt: 'Rare'},
    {fo: 'Бути завжди на п’ять хвилин пізно', so: 'Завжди на п’ять хвилин рано', rt: 'Common'},
    {fo: 'Мати ніс як у Піноккіо', so: 'Вуха як у Спока', rt: 'Rare'},
    {fo: 'Видалити бравл старс і начати розвиватися інтелектуально', so: 'Відмовитися(Хочу апнути 35 ранг на едгоро)', rt: 'Legendary'},
    {fo: 'Робити те, що любиш, але не отримувати за це великої винагороди', so: 'Робити те, що не подобається, але заробляти багато', rt: 'Rare'},
    {fo: 'Вся їжа солодка', so: 'Вся їжа солона', rt: 'Rare'},
    {fo: 'Мати руки, які постійно липкі', so: 'Ноги, які завжди холодні', rt: 'Common'},
    {fo: 'Почати дивитися лололошку', so: 'Бути врівноваженою людиною', rt: 'Epic'},
    {fo: 'Використовувати Windows', so: 'Використовувати великий Linux', rt: 'Rare'},
    {fo: 'Прибрати любу існуючу річ в світі назавжди', so: '100.000.000$', rt: 'Epic'},
    {fo: 'Подратися з бомжом за 1.000.000$', so: 'Відмовитися(Я багати)', rt: 'Rare'},
    {fo: 'Грати в нові реалістичні пк ігри', so: 'Грати в велікій Standoff 2', rt: 'Legendary', unclickableDiv: 'True'},
    {fo: 'Говорити на мові птахів', so: 'Розуміти мову комах', rt: 'Common'}
];
options.forEach(option => option.useble = "True"); //Добавлення useble всім елементам, useble визначає чи елемент уже повторювався

function filterUsableOptions() { //По суті створює окремий список який відрікає елементи які уже повторювалися
    return options.filter(function(option) {
    return option.useble === "True";
});

}
function getRandomOption() {
    var usableOptions = filterUsableOptions();
    
    var randomIndex = Math.floor(Math.random() * usableOptions.length);
    var selectedOption = usableOptions[randomIndex];

    options[options.indexOf(selectedOption)].useble = "False"; //Вибір стає ізгоєм так як він по суті уже попався, міняється в осн списку
    return selectedOption;
}



document.getElementById("ch1").addEventListener("click", function() { //fo------------------------------
    if (isEnabled1) {
        isEnabled1 = false;
        isEnabled2 = false;
        ch1.style.backgroundColor = '#4feb34';
        ch2.style.backgroundColor = '#a8a8a8';
        ch1.style.cursor = 'default';
        ch2.style.cursor = 'default';
        
        // Має виконуватися через дві секундни
        setTimeout(function() {
            ch1.style.backgroundColor = '#4682B4';
            ch2.style.backgroundColor = '#FF6347';
            ch1.style.cursor = 'pointer';
            ch2.style.cursor = 'pointer';
            isEnabled1 = true;
            isEnabled2 = true;

            if (currentOption.fo === 'Насрати в басейн і скупати там друга, сказавжи що це просто коричневий фарбник') {
                badChoice++;

            } else if (currentOption.fo === 'Грати в хом\'ка кожну годину, кожен день, весь вільний час клацати, щоб потім можливо получити ЦІЛИЙ бакс') {
                autistic++;
            }else if (currentOption.fo === 'Бути заядлим анімешником, передивитися кожне аніме в світі по 10 раз і бути все життя залежним') {
                autistic++;
            }else if (currentOption.fo === 'Бути Іваномзоло2004') {
                autistic++;
            }else if (currentOption.fo === 'Грати все життя в Доту') {
                autistic++;
            }else if (currentOption.fo === 'Почати дивитися лололошку') {
                autistic++;

            }else if (currentOption.fo === 'Стати аніме тянкою на 24 години') {
                BestCh++;
            }else if (currentOption.fo === 'Прожити все життя тільки в селі, але бути самим уважаємим і багатим там') {
                BestCh++;
            }else if (currentOption.fo === 'Видалити бравл старс і начати розвиватися інтелектуально') {
                BestCh++;
            }else if (currentOption.fo === 'Подратися з бомжом за 1.000.000$') {
                BestCh++;
            }

            setDivValues();

        }, 2000); // 2000 мілісекунд = 2 секунди
    } else {
        console.log("Змінна isEnabled дорівнює false");
    }
});





document.getElementById("ch2").addEventListener("click", function() { //so--------------------------------
    if (isEnabled2) {
        isEnabled1 = false;
        isEnabled2 = false;
        ch2.style.backgroundColor = '#4feb34';
        ch1.style.backgroundColor = '#a8a8a8';
        ch2.style.cursor = 'default';
        ch1.style.cursor = 'default';
        
        // Має виконуватися через дві секундни
        setTimeout(function() {
            ch1.style.backgroundColor = '#4682B4';
            ch2.style.backgroundColor = '#FF6347';
            ch1.style.cursor = 'pointer';
            ch2.style.cursor = 'pointer';
            isEnabled1 = true;
            isEnabled2 = true;

            if (currentOption.so === 'Получити PS5 з GTA VI') {
                badChoice++;
            } else if (currentOption.so === 'Побрити налисо друга за 5000') {
                badChoice++;
            } else if (currentOption.so === 'Получити круте ліжко з милими котиками') {
                badChoice++;
            } else if (currentOption.so === 'Заказати великий сет ролів, і зїсти це все в одного') {
                badChoice++;

            } else if (currentOption.so === 'Відмовитися(Хочу апнути 35 ранг на едгоро)') {
                autistic++;
            } else if (currentOption.so === 'Слухати все життя інстасамку') {
                autistic++;
            }


            setDivValues();
        }, 2000); // 2000 мілісекунд = 2 секунди
    } else {
        console.log("Змінна isEnabled дорівнює false");
    }
});










function setDivValues() {
    var randomOption = getRandomOption(); // Отримуємо випадковий елемент
    currentOption = randomOption; //Для рахунків

    var firstDiv = document.getElementById('firstDiv');
    var secondDiv = document.getElementById('secondDiv');

    firstDiv.textContent = randomOption.fo;
    secondDiv.textContent = randomOption.so;

    if (randomOption.rt === "Common") {
        RarityDiv.style.backgroundColor = '#7c8079';
        RarityDiv.title = 'Рідкість вибору: Common'
    } else if (randomOption.rt === "Rare") {
        RarityDiv.style.backgroundColor = '#9ffa50';
        RarityDiv.title = 'Рідкість вибору: Rare'
    } else if (randomOption.rt === "Epic") {
        RarityDiv.style.backgroundColor = '#9c00bf';
        RarityDiv.title = 'Рідкість вибору: Epic'
    } else if (randomOption.rt === "Legendary") {
        RarityDiv.style.backgroundColor = '#ffe600';
        RarityDiv.title = 'Рідкість вибору: Legendary'
    }

    if (randomOption.unclickableDiv === "True"){
        isEnabled1 = false;
        ch1.style.cursor = 'default';
    }
    console.log("Рахунок badChoice: " + badChoice);

    checkAllUsed();
}   







function checkAllUsed() {
    var allUsed = options.every(function(option) {
        return option.useble === "False";
    });
    
    if (allUsed) {
        localStorage.setItem('badChoice', badChoice);
        localStorage.setItem('autistic', autistic);
        localStorage.setItem('BestCh', BestCh);
        window.location.href = "EndScreen/index.html"; 
    }
}

setDivValues();