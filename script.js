var quoteContainer = document.getElementById("quote-info");
var authorContainer = document.getElementById("author-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://talaikis.com/api/quotes/random/');
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderQ(ourData.quote);
    renderA(ourData.author);
  };
  ourRequest.send();
});

function renderQ(data) {
  quoteContainer.insertAdjacentHTML('beforeend', data);
}

function renderA(data) {
  authorContainer.insertAdjacentHTML('beforeend','-');
  authorContainer.insertAdjacentHTML('beforeend', data);
  authorContainer.insertAdjacentHTML('beforeend','-')
}