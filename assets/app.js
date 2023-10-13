// let navLink = document.querySelectorAll(".nav-link")
// let alertOk = getElementById("alert-message-ok")
// let alertMessageNo = getElementById("alert-message-no")

const divAlert = document.getElementById("div-alert")
let pAlert = document.getElementById("p-alert")
let pAlertMessageOk = document.createTextNode("IL MESSAGGIO E' STATO INVIATO CORRETTAMENTE")
let pAlertMessageNo = document.createTextNode("MESSAGGIO NON INVIATO. RIPROVARE")
let header = document.getElementById("navbar")

pAlertMessageOk



function sendMail(){
    console.log("wewe")
    let params = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        messaggio: document.getElementById("messaggio").value
    }

    const serviceId = "service_portfolio"
    const templateId = "template_pggsa0f"

    emailjs.send(serviceId, templateId, params)
    .then(function (res){
        alert("Success")
    })
    .catch(error => alert("compilare tutti i campi"))
}

window.onscroll = function(){
    if(document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10){
        console.log("scrolling")
        header.classList.add("header-scrolled")
        header.classList.remove("header-no-scrolled")
    } else{
        header.classList.add("header-no-scrolled")
        header.classList.remove("header-scrolled")
    }
}



// let section2 = document.getElementsByClassName("section2");
// let section3 = document.getElementsByClassName("section3")

// console.log(section2)

// //INTERSECTION OBSERVER
// const sections = document.querySelectorAll(".section")
// const observer = new IntersectionObserver(entries =>{
//     entries.forEach(entry=>{
//         entry.target.classList.toggle("show", entry.isIntersecting)
//         if(entry.isIntersecting) observer.unobserve(entry.target)
//     })
//     console.log(entries)
// },
// {threshold: 0.35})

// sections.forEach(section =>{
//     observer.observe(section)
// })

// const inputEmail = document.getElementById("form-input-email")
// const inputTextarea = document.getElementById("form-input-textarea")


