let test = document.getElementById("test");
let Reading = document.getElementById("Reading");
let Listening = document.getElementById("Listening");
let Writing = document.getElementById("Writing");
let Speaking = document.getElementById("Speaking");
let Grammer = document.getElementById("Grammer");

let testContainer = "";
let ReadingContainer = "";
let ListeningContainer = "";
let WritingContainer = "";
let SpeakingContainer = "";
let GrammerContainer = "";

// console.log(test);
let websites = [
    {
        img: 'newsinlevels.png',
        gategory: "Reading",
        wibsiteName: "newsinlevels",
        url: "https://www.newsinlevels.com/",
        discription: "Read an article",
        how: "once a day",
    }, {
        img: 'ted.jpg',
        gategory: "Listening",
        wibsiteName: "ted",
        url: "https://www.ted.com/",
        discription: "watch a video",
        how: "once a day",
    }, {
        img: 'voanews.jpg',
        gategory: "Listening",
        wibsiteName: "voanews",
        url: "https://learningenglish.voanews.com/",
        discription: "watch an article",
        how: "once a day",
    }, {
        img: 'newsinlevels.png',
        gategory: "Speaking",
        wibsiteName: "newsinlevels",
        url: "https://www.free4talk.com/",
        discription: "whatch an article",
        how: "once a day",
    }, {
        img: 'gutenberg.jpg',
        gategory: "Reading",
        wibsiteName: "gutenberg for books",
        url: "https://www.gutenberg.org/ebooks/70761",
        discription: "whatch an article",
        how: "once a day",
    }, {
        img: 'slider-02.jpg',
        gategory: "Speaking",
        wibsiteName: "Pronunciation of American English Vowel Sounds",
        url: "https://www.youtube.com/playlist?list=PL4B28722936C871E8",
        discription: "whatch an article",
        how: "once a day",
    }, {
        img: 'engvid.png',
        gategory: "test",
        wibsiteName: "engvid",
        url: "https://www.engvid.com/",
        discription: "whatch an article",
        how: "once a day",
    }, {
        img: '2.jpg',
        gategory: "Speaking",
        wibsiteName: "American English Pronunciation with Jennifer",
        url: "https://www.youtube.com/playlist?list=PL81BCA0A2CB139CB7",
        discription: "whatch an article",
        how: "once a day",
    }, {
        img: 'voscreen.png',
        gategory: "test",
        wibsiteName: "voscreen",
        url: "https://www.voscreen.com/",
        discription: "whatch an article",
        how: "once a day",
    }, {
        img: 'lyricstraining.png',
        gategory: "Listening",
        wibsiteName: "lyricstraining",
        url: "https://lyricstraining.com/",
        discription: "whatch an article",
        how: "once a day",
    }, {
        img: 'esl-lab.png',
        gategory: "test",
        wibsiteName: "esl-lab",
        url: "https://www.esl-lab.com/",
        discription: "whatch an article",
        how: "once a day",
    }, {
        img: 'newsinlevels2.png',
        gategory: "Grammer",
        wibsiteName: "grammarinlevels",
        url: "https://www.grammarinlevels.com/",
        discription: "whatch an article",
        how: "once a day",
    }, {
        img: 'Youglish.jpg',
        gategory: "Listening",
        wibsiteName: "youglish",
        url: "https://youglish.com/",
        discription: "whatch an article",
        how: "once a day",
    }, {
        img: 'Oxford.jpg',
        gategory: "test",
        wibsiteName: "OXFORD",
        url: "https://elt.oup.com/student/americanenglishfile/1/a_grammar/file09/grammar09_b01?cc=eg&selLanguage=en",
        discription: "whatch an article",
        how: "once a day",
    }, {
        img: 'bbc.jpg',
        gategory: "Reading",
        wibsiteName: "bbc",
        url: "https://www.bbc.com/",
        discription: "whatch an article",
        how: "once a day",
    },
]


function contain(i) {
    let block = `<div class="col-3">
            <a href="${websites[i].url}" class="text-decoration-none text-body">
                <img class="card-img-top w-100 h-50 rounded-3" src="../img/eng/${websites[i].img}" alt="Card image cap">
                <div class="card-body text-center ">
                    <p class="card-text">${websites[i].wibsiteName}</p>
                    <p class="card-text">${websites[i].discription}</p>
                    <p class="card-text">${websites[i].how}</p>
                </div>
            </a>
        </div>`

    return block;
}

for (let i = 0; i < websites.length; i++) {
    // console.log(contain(i));

    if (websites[i].gategory == "test") {
        testContainer += contain(i);
    } else if (websites[i].gategory == "Reading") {
        ReadingContainer += contain(i);
    } else if (websites[i].gategory == "Listening") {
        ListeningContainer += contain(i);
    } else if (websites[i].gategory == "Writing") {
        WritingContainer += contain(i);
    } else if (websites[i].gategory == "Speaking") {
        SpeakingContainer += contain(i);
    } else if (websites[i].gategory == "Grammer") {
        GrammerContainer += contain(i);
    }
}

// console.log(Reading);

test.innerHTML = testContainer;
Reading.innerHTML = ReadingContainer;
Listening.innerHTML = ListeningContainer;
Writing.innerHTML = WritingContainer;
Speaking.innerHTML = SpeakingContainer;
Grammer.innerHTML = GrammerContainer;
