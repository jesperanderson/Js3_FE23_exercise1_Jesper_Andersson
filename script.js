let homeDOM = document.getElementsByTagName('a')[0];
let aboutDOM = document.getElementsByTagName('a')[1];
let contactDOM = document.getElementsByTagName('a')[2];


let contentDOM = document.getElementById('content'); 
fetchPage('home.html');

homeDOM.addEventListener('click', (event) => {
    event.preventDefault(); 
    history.pushState({ page: 'home' }, "", "/home.html");
    fetchPage('home.html');
});

aboutDOM.addEventListener('click', (event) => {
    event.preventDefault();
    history.pushState({ page: 'about' }, "", "/about.html");
    fetchPage('about.html');
});

contactDOM.addEventListener('click', (event) => {
    event.preventDefault();
    history.pushState({ page: 'contact' }, "", "/contact.html");
    fetchPage('contact.html');
});


function fetchPage(filename) {
    if (typeof filename !== "string") return;

    fetch(filename)
        .then((result) => result.text())
        .then((data) => {
            contentDOM.innerHTML = data;
        })
        .catch((error) => {
            contentDOM.innerHTML = '<p>Kunde inte ladda innehållet.</p>';
        });
}


window.addEventListener('popstate', (event) => {
    let page = event.state ? event.state.page : 'home';
    let filename = `${page}.html`;
    fetchPage(filename);
});
