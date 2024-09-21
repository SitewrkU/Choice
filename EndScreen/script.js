var autistic = parseInt(localStorage.getItem('autistic')) || 0;
var badChoice = parseInt(localStorage.getItem('badChoice')) || 0;
var BestCh = parseInt(localStorage.getItem('BestCh')) || 0;

window.onload = function() {
    document.getElementById('BestCh').textContent = BestCh;
    if (BestCh > 0){
        document.getElementById('BestChNote').textContent = "Ви явно вмієте вибирати, в такому стані це рідкість!";
    }else{
        document.getElementById('BestChNote').textContent = "З вибором у вас проблеми, звернітся до психолога або психіатра";
    }


    document.getElementById('badChoice').textContent = badChoice;
    if(badChoice === 0){
        document.getElementById('badChoiceNote').textContent = "Це признак святої людини, вам відкриті всі дороги в цьому житті!";
    }else if(badChoice > 0 && badChoice < 5){
        document.getElementById('badChoiceNote').textContent = "Це багато не говорить, можливо ви зробили такий вибір випадково";
    }else if(badChoice === 5){
        document.getElementById('badChoiceNote').textContent = "Ви чортова сатана, і я не знаю з якої преісподні ви вилізли!!"
    }

    document.getElementById('autistic').textContent = autistic;
    if(autistic === 0){
        document.getElementById('autisticNote').textContent = "Мої вітання, ви абсолютно здорова та врівноважена людина! Я пишаюся вами";
    }else if(autistic > 0 && autistic <= 4){
        document.getElementById('autisticNote').textContent = "Цей показник викликає сумніви, 'А чи здорова ви людина?', будьте обережніші!";
    }else if(autistic >= 5 && autistic < 7){
        document.getElementById('autisticNote').textContent = "Таке число заставляє задуматися, дуже серйозно. Можливо вам потрібно пройти тест на аутиста..";
    }else if(autistic === 7){
        document.getElementById('autisticNote').textContent = "Мої вітання любий друже! Ти абсолютно є аутистом. Я не знаю, що тебе так потріпало в житті, порекомендую ізолюватися.";
    }
};