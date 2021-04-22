window.onload = function() {
  var dugmeNovaPoruka = document.querySelector("#nova-poruka");
  dugmeNovaPoruka.addEventListener("click", prikaziFormu);
  
  var dugmeSend = document.querySelector("#posalji");
  dugmeSend.addEventListener("click", posaljiPoruku);

  var dugmeIn = document.querySelector("#in");
  dugmeIn.addEventListener("click", prikaziInbox);
 
  var dugmeOut = document.querySelector("#out");
  dugmeOut.addEventListener("click", prikaziOutbox);

  var dugmeCancel = document.querySelector("#cancel");
  dugmeCancel.addEventListener("click", sakrijFormu);
}

function prikaziInbox() {
  var options = {}
  options.metod = "post";
  options.putanja  = "getInbox";
  options.korisnik = document.querySelector("#posiljalac").value;
  //AjaxZahtev(options, ProcesirajInbox)
}

function prikaziOutbox() {
  var options = {}
  options.metod = "post";
  options.putanja  = "getOutbox";
  options.korisnik = document.querySelector("#posiljalac").value;
  //AjaxZahtev(options, ProcesirajOutbox)
}

function sakrijFormu() {
  document.querySelector("#poruka-div").style.visibility="hidden";
}

function prikaziFormu() {
  document.querySelector("#poruka-div").style.visibility="visible";
}

function posaljiPoruku() {
  var posiljalac = document.querySelector("#posiljalac").value;
  var primalac = document.querySelector("#primalac").value;
  var poruka = document.querySelector("#poruka").value;
  
  if(!proveraPodataka(posiljalac, primalac, poruka)) {
    alert("pogresni podaci");
    return;
  }
  //alert("saljem podatke");

  var options = {}
  options.metod = "post";
  options.putanja  = "nova-poruka";
  options.posiljalac = posiljalac;
  options.primalac = primalac;
  options.poruka = poruka; 
  //AjaxZahtev(options, ProcesirajOdgovor)
  alert(options.posiljalac+"\n"+options.primalac+"\n"+options.poruka);
  // Sakrij formu
	sakrijFormu();
}

function proveraPodataka(posiljalac, primalac, poruka) {
  if(posiljalac == "" || primalac == "" || poruka == "") {
    return false;
  }
  return true;
}

