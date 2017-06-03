//@Hammed Homework about Github Api@ this homework bulded depend on Lurans and Nour work
"use strict";
//Set up global vars
var resultEl = document.getElementById("#resultEl");
var i = 0; 
var btnEl = document.getElementById("searchBtn");
var loaderEl = document.getElementById("resultLoader");
//this myURL to load my Github page 
var myURL = 'https://api.github.com/users/ahalhowidi';
  makeRequest(myURL);

btnEl.addEventListener("click", getUserInput);

//User input gathers the value from the input field and calls makeRequest
function getUserInput(event){
  var userInput = document.getElementById("user-input-field").value;
  console.log("User typed in: " + userInput);
  var requestURL = 'https://api.github.com/users/' + userInput;
  makeRequest(requestURL); 
}
//This function will request a github user info with the word "searchTerm" in github
function makeRequest(searchTerm){
  loaderEl.classList.toggle("invisible");
  var results = [];
  //Build an XHR request and then send it.
  var xhr = new XMLHttpRequest();
  xhr.open('GET', searchTerm, true);
  xhr.send();
  xhr.onreadystatechange = processRequest;
  
  //This function keeps track of changes to the xhr request
  function processRequest() {
    console.log(xhr.readyState);
    if (xhr.readyState == XMLHttpRequest.DONE){
      console.log("xhr request DONE SON");
       results = JSON.parse(xhr.response);
      console.log(results);
      if (typeof results.id !== 'undefined') {renderDOM(results);}
    else{
     results = {
      name: "error! there was an error please try a gain"
      };
    renderDOM(results);
    }
  }
}
}

//This function wil render the ovie information once it has been loaded
function renderDOM(userInfo){

  loaderEl.classList.toggle("invisible");
  console.log("Rendering user results");
  var article = document.querySelector("article");
  var repo = document.getElementById("resultRepoEl");
  article.innerHTML = "";
  repo.innerHTML = "";

  var section = document.createElement('section');
  var title = document.createElement('h2');
  var avatar = document.createElement('img');
  var link = document.createElement('a');
  var linkUser = document.createElement('a');
  var span = document.createElement('span');

  avatar.setAttribute("src", userInfo.avatar_url);
  avatar.setAttribute("id", "avatar");
  link.setAttribute("href", userInfo.html_url);
  linkUser.setAttribute("href", userInfo.html_url);
  linkUser.setAttribute("name", userInfo.repos_url);
  linkUser.setAttribute("id", 'userInfo');
  linkUser.setAttribute("target", '_blank');
  link.setAttribute("target", '_blank');
  title.innerHTML = userInfo.name;
  span.innerHTML = userInfo.public_repos;

  linkUser.appendChild(title);
  if (typeof userInfo.avatar_url !== 'undefined') {
  link.appendChild(avatar);}
  section.appendChild(linkUser);
  section.appendChild(link);
  // section.appendChild(span);
  article.appendChild(section);
  makeUserRequest(userInfo.repos_url);
  
}

function makeUserRequest(searchTerm){
  return new Promise(function(resolve,reject){
  loaderEl.classList.toggle("invisible");
  var results = [];
  //Build an XHR request and then send it.
  var xhr = new XMLHttpRequest();
  xhr.open('GET', searchTerm, true);
  xhr.send();
  xhr.onreadystatechange = processRequest;
  
  //This function keeps track of changes to the xhr request
  function processRequest() {
    console.log(xhr.readyState);
    if (xhr.readyState == XMLHttpRequest.DONE){
      resolve(request.responseText);}
      console.log("xhr request DONE Repo");
       results = JSON.parse(xhr.response);
      //console.log(results);
       // if (typeof results !== 'undefined') {

        renderUserDOM(results);
      //}
    
  }
}
}

//This function wil render the ovie information once it has been loaded
function renderUserDOM(userInfo){
  // i have to do this with promis
  loaderEl.classList.toggle("invisible");
  console.log("Rendering user results");
  console.log(userInfo);
  
  userInfo.map(renderUserSPA);
  // var linkUserEl = document.getElementsByClassName("repo");
  // linkUserEl.addEventListener("hover", getRepoInfo);  
}
function renderUserSPA(item){
  var repo = document.getElementById("resultRepoEl");

  var section = document.createElement('section');
  var title = document.createElement('h2');
  var a = document.createElement('a');
  a.href = "#";
  a.name = i;
  a.setAttribute("class", "repo");
  i++;
  title.innerHTML = item.name;
  a.appendChild(title);
  section.appendChild(a);
  repo.appendChild(section);
}
function getRepoInfo(event){
  var userInfo = document.getElementsByClassName("repo").name;
  console.log(userInfo);
  //makeRequest(userInfo); 
}

//I will continue with Promise tomorrow

