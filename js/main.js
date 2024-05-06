let Navbar = document.querySelector('.navbar')
let Fabars = document.querySelector('.fa-bars')
 


var swiper = new Swiper(".home-slid", {
    navigation : {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        loop: true,
        keyboardControl: true,
    }
});

 
const url_base = 'http://localhost:32769';


let onClickSendMesssage = (async (frm) => {
    
    const formData = new FormData(frm);
    let message = ''
    for (var [key, value] of formData) {
        message += (value + '\r\n');
    }

    let url = `${url_base}/api/Mail/MailController?messageBody=${message}`
    let response = await fetch(url)
});

  
(async ()=> {
    // let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
    let url = `${url_base}/api/Download/AllFileWithDescription`
    let response = await fetch(url);
    
    let commits = await response.json(); // читаем ответ в формате JSON

    commits.forEach(element => {
        const htmlElement = document.createElement("div")
        htmlElement.classList.add('list-group-item')
        let descriptionText = document.createTextNode(`${element.description} (${(element.fileSize/1024/1024).toFixed(2)}МБ)`);
        htmlElement.appendChild(descriptionText)
        const subElement = document.createElement("a")
        subElement.href = `${url_base}/api/Download/Download?fileName=${element.fileName}`
        let linkText = document.createTextNode(`скачать`)
        subElement.appendChild(linkText)
        htmlElement.appendChild(subElement)
        let listGroupElement = document.querySelector('.list-group')
        listGroupElement.appendChild(htmlElement)
        console.log(element.fileName)
        console.log(element.fileSize)
        
        
    });
    
    console.log(commits)
    // alert(commits[0].author.login);
})()