export default function renderHome() {
  let maincontent =document.createElement('div');
  maincontent.setAttribute('id', 'main-content');
  let welcome = document.createElement('div');
  welcome.setAttribute('id', 'welcome');
  let titlewelcome = document.createElement('h1');
  titlewelcome.innerText = 'welcome to good taste restaurent';
  let  messagewelcome = document.createElement('p');
  messagewelcome.innerText = 'Nashaka kumenyako si les cousins cousines boba baramushigikiye kugira nivyaba vyarabaye  kurya nirukankanye invitation nsubire gushima'
  welcome.appendChild(titlewelcome);


  let socialIcon = document.createElement('div');
  socialIcon.setAttribute('id', 'container-social');
  let call = document.createElement('div');
  call.setAttribute('id', 'call-us');
  let calIcon = document.createElement('i');
  calIcon.classList.add('fas', 'fa-phone', 'fa-lg');
  let callText = document.createElement('p');
  callText.innerText = '+257 79171532';   
  call.appendChild($callIcon);
  call.appendChild($callText);

  socialIcon.appendChild(call);
  maincontent.appendChild(welcome);

}


