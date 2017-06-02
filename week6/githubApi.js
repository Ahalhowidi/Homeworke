
//@Hammed Home worke about Github Api@
"use strict";
//Set up global vars
var resultEl = document.getElementById("#resultEl"); 
var btnEl = document.getElementById("searchBtn");
var loaderEl = document.getElementById("resultLoader");

btnEl.addEventListener("click", getUserInput);


//User input gathers the value from the input field and calls makeRequest
function getUserInput(event){
  var userInput = document.getElementById("user-input-field").value;
  console.log("User typed in: " + userInput);
  makeRequest(userInput); 
}
//This function will request a github user info with the word "searchTerm" in github
function makeRequest(searchTerm){
  loaderEl.classList.toggle("invisible");
  var requestURL = 'https://api.github.com/users/' + searchTerm;
  var results = [];
  //Build an XHR request and then send it.
  //If you want a more structured approach, write an XHR constructor and call it here
  //Read this for more info: https://www.kirupa.com/html5/making_http_requests_js.htm
  var xhr = new XMLHttpRequest();
  xhr.open('GET', requestURL, true);
  xhr.send();
  xhr.onreadystatechange = processRequest;
  
  //This function keeps track of changes to the xhr request
  function processRequest() {
    console.log(xhr.readyState);
    if (xhr.readyState == XMLHttpRequest.DONE){
      console.log("xhr request DONE SON");
      //console.log(xhr.response);
       results = JSON.parse(xhr.response);
      console.log(results);
      renderDOM(results);
    }else{
    var results = {
      name: "error! there was an error please try a gain"
      };
    renderDOM(results);
    }
  }
}

//This function wil render the ovie information once it has been loaded
function renderDOM(userInfo){
  loaderEl.classList.toggle("invisible");
  console.log("Rendering user results");
  var article = document.querySelector("article");
  article.innerHTML = "";

  var section = document.createElement('section');
  var title = document.createElement('h2');
  var avatar = document.createElement('img');
  var link = document.createElement('a');
  var linkUser = document.createElement('a');
  var span = document.createElement('span');

  avatar.setAttribute("src", userInfo.avatar_url);
  avatar.setAttribute("id", "avatar");
  link.setAttribute("href", userInfo.html_url);
  linkUser.setAttribute("href", '#');
  linkUser.setAttribute("name", userInfo.repos_url);
  linkUser.setAttribute("id", 'userInfo');
  link.setAttribute("target", '_blank');
  title.innerHTML = userInfo.name;
  span.innerHTML = userInfo.public_repos;

  linkUser.appendChild(title);
  link.appendChild(avatar);
  section.appendChild(linkUser);
  section.appendChild(link);
  section.appendChild(span);
  article.appendChild(section);
  var linkUserEl = document.getElementById("userInfo");
  linkUserEl.addEventListener("click", getUserInfo);
  
}
function getUserInfo(event){
  var userInfo = document.getElementById("userInfo").name;
  console.log(userInfo);
  makeUserRequest(userInfo); 
}
function makeUserRequest(searchTerm){
  loaderEl.classList.toggle("invisible");
  var requestURL = searchTerm;
  var results = [];
  //Build an XHR request and then send it.
  //If you want a more structured approach, write an XHR constructor and call it here
  //Read this for more info: https://www.kirupa.com/html5/making_http_requests_js.htm
  var xhr = new XMLHttpRequest();
  xhr.open('GET', requestURL, true);
  xhr.send();
  xhr.onreadystatechange = processRequest;
  
  //This function keeps track of changes to the xhr request
  function processRequest() {
    console.log(xhr.readyState);
    if (xhr.readyState == XMLHttpRequest.DONE){
      console.log("xhr request DONE SON");
      //console.log(xhr.response);
      var results = JSON.parse(xhr.response);
      console.log(results);
      renderDOM(results);
    }else{
    var results = {
      name: "error! there was an error please try a gain"
      };
    renderUserDOM(results);
    }
  }
}

//This function wil render the ovie information once it has been loaded
function renderUserDOM(userInfo){
  loaderEl.classList.toggle("invisible");
  console.log("Rendering user results");
  var article = document.querySelector("article");
  article.innerHTML = "";
   //userInfo.forEach(function(userInfo){
  //var section = document.createElement('ul');
  //var title = document.createElement('li');
  //var avatar = document.createElement('li');
  //var link = document.createElement('a');
  //var linkUser = document.createElement('a');
  //var span = document.createElement('span');

  //avatar.setAttribute("src", userInfo.avatar_url);
  //avatar.setAttribute("id", "avatar");
  //link.setAttribute("href", userInfo.html_url);
  // linkUser.setAttribute("href", '#');
  // linkUser.setAttribute("name", userInfo.repos_url);
  // linkUser.setAttribute("id", 'userInfo');
  // link.setAttribute("target", '_blank');
  // title.innerHTML = userInfo.full_name;
  // span.innerHTML = userInfo.public_repos;

  // linkUser.appendChild(title);
  // link.appendChild(avatar);
  // section.appendChild(linkUser);
  // section.appendChild(link);
 // section.appendChild(title);
  //article.appendChild(section);
 // var linkUserEl = document.getElementById("userInfo");
  //linkUserEl.addEventListener("click", getUserInfo);
 // });
}