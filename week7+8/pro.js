//@Hammed Homework about Github Api@ this homework bulded depend on Lurans and Nour work
"use strict";
//Set up global vars
var resultEl = document.getElementById("#resultEl"); 
var btnEl = document.getElementById("searchBtn");
var loaderEl = document.getElementById("resultLoader");

//this myURL to load my Github page 
var myURL = 'https://api.github.com/users/ahalhowidi';
makeRequestpro('GET', myURL)
.then(function (datums) {
  var results = [];
results = JSON.parse(datums);
  renderDOM(results);
})


btnEl.addEventListener("click", getUserInput);

//User input gathers the value from the input field and calls makeRequest
function getUserInput(event){
  var userInput = document.getElementById("user-input-field").value;
  console.log("User typed in: " + userInput);
  var requestURL = 'https://api.github.com/users/' + userInput;
  makeRequestpro('GET', requestURL)
.then(function (datums) {
  var results = [];
results = JSON.parse(datums);
  renderDOM(results);
})
}

function makeRequestpro (method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

//This function wil render the ovie information once it has been loaded
function renderDOM(userInfo){

  //loaderEl.classList.toggle("invisible");
  console.log("Rendering user results");
  var article = document.querySelector("article");
  var repo = document.getElementById("resultRepoEl");
  var repoInfo = document.getElementById("resultRepoInfo");
  article.innerHTML = "";
  repo.innerHTML = "";
  repoInfo.innerHTML = "";

  var section = document.createElement('section');
  var title = document.createElement('h2');
  var avatar = document.createElement('img');
  var link = document.createElement('a');
  var linkUser = document.createElement('a');

  avatar.setAttribute("src", userInfo.avatar_url);
  avatar.setAttribute("id", "avatar");
  link.setAttribute("href", userInfo.html_url);
  linkUser.setAttribute("href", userInfo.html_url);
  linkUser.setAttribute("name", userInfo.repos_url);
  linkUser.setAttribute("id", 'userInfo');
  linkUser.setAttribute("target", '_blank');
  link.setAttribute("target", '_blank');
  title.innerHTML = userInfo.name;


  linkUser.appendChild(title);
  if (typeof userInfo.avatar_url !== 'undefined') {
  link.appendChild(avatar);}
  section.appendChild(linkUser);
  section.appendChild(link);
  article.appendChild(section);
  makeRequestpro('GET', userInfo.repos_url)
.then(function (datums) {
  var results = [];
results = JSON.parse(datums);
  renderUserDOM(results);
});
}

function renderUserDOM(userInfo){
    userInfo.map(renderUserSPA)
  }
 
function renderUserSPA(item){
  var repo = document.getElementById("resultRepoEl");
  var section = document.createElement('section');
  var title = document.createElement('h2');
  var a = document.createElement('a');
  a.href = "#";
  a.setAttribute("class", "repo");
  title.innerHTML = item.name;
  a.appendChild(title);
  section.appendChild(a);
  repo.appendChild(section);
  var url = 'https://api.github.com/repos/'+ item.full_name +'/events'
  makeRequestpro('GET', url)
  .then(function (datums) {
  var results = [];
  results = JSON.parse(datums);
  //console.log(results)
  

  a.addEventListener("click", getRepoInfo);
  function getRepoInfo(){
  makeRepoInfo(item , results);

}})
};
function makeRepoInfo(event , results){
  console.log(event)
  var repoInfo = document.getElementsByClassName("repo");
  var repo = document.getElementById("resultRepoInfo");
  var title = document.createElement('h2');
  repo.innerHTML = "";
   title.innerHTML = event.name;
   repo.appendChild(title);
   results.map(renderRepoDOM);

}
function renderRepoDOM(item){
  console.log(item)
  var repo = document.getElementById("resultRepoInfo");
  var section = document.createElement('section');
  var li = document.createElement('li');
   li.innerHTML = item.type;
  // a.appendChild(title);
   section.appendChild(li);
   repo.appendChild(section);
}
//I will continue with it


