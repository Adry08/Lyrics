const btnColor = document.getElementById('btnColor');

btnColor.addEventListener('click', () => {

    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)

    document.getElementById('color').style.background = `rgb(${r},${g},${b})`;
    document.getElementById('target').style.background = `rgb(${r},${g},${b})`;

});

document.getElementById('btnSave').onclick = () => {
    const screemshotTarget = document.getElementById('target')
    const output = document.getElementById('title').innerText;

    html2canvas(screemshotTarget).then((canvas) => {

        const base64image = canvas.toDataURL('image/jpeg');
        var anchor = document.createElement('a');
        anchor.setAttribute('href', base64image);
        anchor.setAttribute('download', `${output}.jpeg`);
        anchor.click();
        anchor.remove();

    });
};

let i = 0;
const title = document.getElementById('title');
const singer = document.getElementById('singer');
const lyrics = document.getElementById('lyrics');
const jacket = document.getElementById('jacket')

const change = () => {
    title.innerText = obj[i].title;
    singer.innerText = obj[i].singer;
    lyrics.innerText = obj[i].lyrics;

    jacket.innerHTML = `<img src="./Images/${i}.jpg" height="100px" width="100px"></img>`

    document.getElementById("like").classList.remove("active");
};
document.getElementById('btnRandom').addEventListener('click', () => {
    i = Math.floor(Math.random() * 5)

    change()

    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)

    document.getElementById('color').style.background = `rgb(${r},${g},${b})`;
    document.getElementById('target').style.background = `rgb(${r},${g},${b})`;

    return i

});


const obj = {
    0: {
        title: "Play this when I'm gone",
        singer: "Machine Gun Kelly",
        lyrics: "I write you this song to keep up when I'm gone if u ever feel alone"
    },
    1: {
        title: "I love you",
        singer: "Billie Eilish",
        lyrics: "It's not true, tell me i've been lied to, crying isn't like you, ooh. what the hell did I do ? Never been the type to. Let someone see right through, Ooh"
    },
    2: {
        title: "On verra",
        singer: "Nekfeu",
        lyrics: "On sèche les cours, la flemme marque le quotidien. Être en couple ça fait mal que quand t'y tien"
    },
    3: {
        title: "Macarena",
        singer: "Damso",
        lyrics: "Ce monde est à nous ce monde est à toi et moi, mais peut-être que sans moi ce monde sera à toi, et peut-être qu'avec lui ce monde sera à vous et c'est peut-être mieux ainsi. Mais sentiments danse la macarena"
    },
    4: {
        title: "Le vrai moi",
        singer: "Lompal",
        lyrics: "Tout est vraiment plus jolie près de toi, pourvue que les grains du sablier se coincent. J'ai enfin vue le vrai moi près de toi,merci pour ça"
    },
    5: {
        title: "Bad things",
        singer: "Machine Gun Kelly,Camila Cabello",
        lyrics: "I want forever even when we're not together, scars on my body so I can take whenever"
    },
}

const btnLike = document.getElementById("like");

btnLike.addEventListener("click", () => {
    btnLike.classList.toggle("active")
})


document.getElementById("next").addEventListener("click", () => {

    i = i + 1

    if (i > 5) {
        i = 0

        change();
        return i
    } else {
        change();
        return i
    }

})


document.getElementById("previous").addEventListener("click", () => {

    i = i - 1

    if (i < 0) {
        i = 5

        change();
        return i
    } else {
        change()
        return i
    }

})

console.log(JSON.stringify(obj));