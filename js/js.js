var siteName= document.getElementById("siteName")
var siteURL=document.getElementById("siteURL")
var sites=[]
closebtn=document.getElementById("closebtn")
var isValid

//Event Listeners
closebtn.addEventListener("click",close)
document.addEventListener("keydown",function(e){
  switch (e.key) { 
    case "Escape":
  close();
  break;
}
})
overlay.addEventListener("click", close);
content.addEventListener("click", function(e) {
  e.stopPropagation();
});

//functions
function add() {
  if (validation()) {
    var site={
    name: siteName.value,
    url: siteURL.value,
    }
    sites.push(site)
    display(sites)
}
}
function display(List) {
  var blackBox = "";
  for (var i = 0; i < List.length; i++) {
    blackBox += `<tr>
      <td>${i+1}</td>
      <td>${List[i].name}</td>
      <td><a href="http://${List[i].url}" target="_blank"><button id="visit" class="visit text-center rounded px-3 py-2"><i class="fa-solid fa-eye pe-2 visit"></i>Visit</button></a></td>
      <td><button onclick="del(${i})" class="delete text-center rounded px-3 py-2"><i class="fa-solid fa-trash-can delete"></i> Delete</button></td>
    </tr>`;
  }
  document.getElementById("info").innerHTML = blackBox;
}

function close(){
    overlay.classList.replace("d-flex","d-none")
  }

function validation(){
  var nameRegex = /^.{3,}$/;
  var urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?([a-zA-Z0-9-]+)(?:\.[a-zA-Z]+){1,}/;
  var isNameValid = nameRegex.test(siteName.value);
  var isURLValid = urlRegex.test(siteURL.value);

  if (!isNameValid || !isURLValid) {
    overlay.classList.replace("d-none", "d-flex");
  }
  return isNameValid && isURLValid;
}
function del(index){
    sites.splice(index,1)
    display(sites)

}



