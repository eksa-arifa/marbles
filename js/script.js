const select = document.querySelector('.kotak .taruhan select');
const text_player = document.querySelector('.kotak .info .player span');
const text_musuh = document.querySelector('.kotak .info .musuh span');

let player = 10;
let musuh = 10;
let menang = "Kamu menang";
let kalah = "Kamu kalah dan mati tertembak"

let random = Math.floor(Math.random()* 11);

    text_player.innerHTML = "Kelereng-Mu = " + player;
    text_musuh.innerHTML = "Kelereng-lawan = " + musuh;

function ganjil(){
  var k = confirm("Apakah kamu yakin memilih ganjil?");
  if (k == true) {
  if (random >= 0 && random <= 5) {
    if (musuh < select.options[select.selectedIndex].value) {
      alert("Kelereng musuh kurang");
      return;
    }else{
      player = parseInt(player) + parseInt(select.options[select.selectedIndex].value);
    
      musuh = musuh - select.options[select.selectedIndex].value;
    }
    
    alert("Kamu benar dan berhasil mendapat "+ select.options[select.selectedIndex].value + " kelereng dari lawanmu");
    
    text_player.innerHTML = "Kelereng-Mu = " + player;
    text_musuh.innerHTML = "Kelereng-lawan = " + musuh;
    
    if (player >= 20) {
      alert(menang);
      location.reload();
    }
    
    random = Math.floor(Math.random()* 11);
    
  }else{
    if (player < select.options[select.selectedIndex].value) {
      alert("Kelereng-mu kurang");
      return;
    }else{
      player = player - select.options[select.selectedIndex].value;
    
      musuh = parseInt(musuh) + parseInt(select.options[select.selectedIndex].value);
    }
    
    alert("Kamu Salah dan kehilangan "+ select.options[select.selectedIndex].value + " kelereng oleh lawanmu");
    
    text_player.innerHTML = "Kelereng-Mu = " + player;
    text_musuh.innerHTML = "Kelereng-lawan = " + musuh;
    
    if (musuh >= 20) {
      alert(kalah);
      location.reload();
    }
    
    random = Math.floor(Math.random()* 11);
  }
  }else{
    return;
  }
}

function genap(){
  var k = confirm("Apakah kamu yakin ingin memilih genap?");
  
  if (k == true) {
  if (random >= 6 && random <= 11) {
    if (musuh < select.options[select.selectedIndex].value) {
      alert("Kelereng musuh kurang");
      return;
    }else{
      player = parseInt(player) + parseInt(select.options[select.selectedIndex].value);
    
      musuh = musuh - select.options[select.selectedIndex].value;
    }
    
    alert("Kamu benar dan berhasil mendapat "+ select.options[select.selectedIndex].value + " kelereng dari lawanmu");
    
    text_player.innerHTML = "Kelereng-Mu = " + player;
    text_musuh.innerHTML = "Kelereng-lawan = " + musuh;
    
    if (player >= 20) {
      alert(menang);
      location.reload();
    }
    
    random = Math.floor(Math.random()* 11);
  }else{
    if (player < select.options[select.selectedIndex].value) {
      alert("Kelereng-Mu kurang");
      return;
    }else{
      musuh = parseInt(musuh) + parseInt(select.options[select.selectedIndex].value);
    
      player = player - select.options[select.selectedIndex].value;
    }
    
    alert("Kamu Salah dan kehilangan "+ select.options[select.selectedIndex].value + " kelereng oleh lawanmu");
    
    text_player.innerHTML = "Kelereng-Mu = " + player;
    text_musuh.innerHTML = "Kelereng-lawan = " + musuh;
    
    if (musuh >= 20) {
      alert(kalah);
      location.reload();
    }
    
    random = Math.floor(Math.random()* 11);
  }
  }else{
    return;
  }
}

function info(){
Swal.fire({
  icon: 'info',
  title: 'INFO',
  text: 'Terinspirasi dari salah satu permainan dari serial squid game ,dimana pemain harus menebak ganjil atau genap dari lawan,dan jika benar kelereng akan bertambah sesuai jumlah taruhan,dan jika salah maka kelereng akan berkurang sesuai jumlah taruhan,menangkan dengan menghabiskan kelereng lawan'
})
}