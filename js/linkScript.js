var myLinks = document.getElementById('myLinks');

var links = [
    {
        platform: `my-CV`,
        icon: `<i class="fa-solid fa-file fa-xl px-1"></i>`,
        link: "https://www.pinterest.com/YasRam102",
        user: "YasRam102",
    },
    {
        platform: `facebook`,
        icon: `<i class="fa-brands fa-facebook fa-xl px-1"></i>`,
        link: "https://www.facebook.com/YasRam102",
        user: "YasRam102",
    },
    {
        platform: `linkedin`,
        icon: `<i class="fa-brands fa-linkedin-in fa-xl px-1"></i>`,
        link: "https://www.linkedin.com/in/yasram",
        user: "yasram",
    },
    {
        platform: `github`,
        icon: `<i class="fa-brands fa-github fa-xl px-1"></i>`,
        link: "https://github.com/YasRam",
        user: "YasRam",
    },
    {
        platform: `gmail`,
        icon: `<i class="fa-brands fa-google fa-xl px-1"></i>`,
        link: "y.r.a.elnobe@gmail.com",
        user: "y.r.a.elnobe@gmail.com",
    },
    {
        platform: `whatsApp`,
        icon: `<i class="fa-brands fa-whatsapp fa-xl px-1"></i>`,
        link: "https://wa.me/+201202442138",
        user: "01202442138",
    },
    {
        platform: `myWhatsApp`,
        icon: `<i class="fa-brands fa-whatsapp fa-xl px-1"></i>`,
        link: "https://wa.me/+201554367882",
        user: "01554367882",
    },
    {
        platform: `twitter`,
        icon: `<i class="fa-brands fa-twitter fa-xl px-1"></i>`,
        link: "https://twitter.com/YRamadan202",
        user: "YRamadan202",
    },
    {
        platform: `gitlab`,
        icon: `<i class="fa-brands fa-gitlab fa-xl px-1"></i>`,
        link: "https://gitlab.com/YasRam",
        user: "YasRam",
    },
    {
        platform: `instagram`,
        icon: `<i class="fa-brands fa-instagram fa-xl px-1"></i>`,
        link: "https://www.instagram.com/yasram102",
        user: "yasram102",
    },
    {
        platform: `pinterest`,
        icon: `<i class="fa-brands fa-pinterest fa-xl px-1"></i>`,
        link: "https://www.pinterest.com/YasRam102",
        user: "YasRam102",
    },
    
];

var linkContainer = ``;
let i = 0;
for (const link of links) {

    linkContainer += `
            <div class="fw-bold link border border-2 p-3 my-2 rounded-pill d-flex justify-content-between ${link.platform}">
                <a href="${link.link}"
                    class="text-decoration-none text-white w-100 text-start d-flex">
                    ${link.icon}
                    <div class="w-100 text-center">
                        ${link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                        
                    </div>
                </a>
                <div class="copy ${link.platform}" data-link="${link.user}">
                    <i class="fa-solid fa-file-contract fa-xl notCopy"></i>
                    <i class="fa-solid fa-file-circle-check fa-xl d-none doneCopy"></i>
                </div>
            </div>
`
}

myLinks.innerHTML = linkContainer;
// i = 0;

let copyDiv = document.querySelectorAll(".copy");
copyDiv.forEach((div) => {
    // console.log(div.children[1]);
    div.addEventListener('click', function () {
        let link = this.dataset.link;
        navigator.clipboard.writeText(link)

        // div.children[0].setAttribute("class","d-none")
        // div.children[1].removeAttribute("class")
        // div.children[0].setAttribute("class","fa-solid fa-file-circle-check fa-xl")

        // console.log('ss');
        // let linknum = this.dataset.num;
        // let notCopy = document.querySelectorAll(".notCopy");
        // let doneCopy = document.querySelectorAll(".doneCopy");
        // notCopy[linknum].setAttribute("class","d-none")
        // doneCopy[linknum].removeAttribute("class","d-none")
        // console.log(notCopy[linknum]);
    })
})
