const video = document.querySelector("#videoElement");
const text = document.querySelector(".text");

camDetection();

async function camDetection() {
    if (navigator.mediaDevices.getUserMedia) {

        navigator.mediaDevices.getUserMedia({ video: true })


            // внутри GetUserMedia объект, внутри можем  указать, разрешено ли аудио
            // , размер видео, отдавать предпочтение задней или фронтальной камере,
            //     частоту кадров видео и т.п.Это просто объект, ничего сложного.

            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (error) {
                console.log("Something went wrong :(");
            });

        await new Promise(r => setTimeout(r, 7000));
        text.innerHTML = "привёт, фигово выглядишь :)";
        document.getElementById("text").style.display = "inline";


        //добавить анимашку(ползунок loader ), после загрузки чтоб текст красиво выпрыгивал и какую-то вариативность (через рандом?)


    }

}