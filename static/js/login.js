window.addEventListener("load", function() {
  function sign_up(){
      login.style.transform = "rotateY(180deg)";
      signup.style.transform = "rotateY(0deg)";
  }

  function log_in(){
      login.style.transform = "rotateY(0deg)";
      signup.style.transform = "rotateY(-180deg)";
  }
  
  function over(){
      this.style.backgroundColor="#0066ff";
  }

  function out(){
      this.style.backgroundColor='#94b5e6';
  }

  function changeImg() {
    var arrays = new Array(
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    );
    code = ''; 
    for(var i = 0; i < 4; i++) {
        var r = parseInt(Math.random() * arrays.length);
        code += arrays[r];
    }
    document.getElementById('code').innerHTML = code; 
  }

  function check() {
    var input_code = document.getElementById('vcode').value;
    if(input_code.toLowerCase() == code.toLowerCase()) {
        return true;
    }
    alert("Please enter the correct captcha!");
    return false;
  }

  let login = document.querySelector(".login");
  let signup = document.querySelector(".signup");
  let loginbtn = document.querySelector(".loginbtn");
  let signupbtn = document.querySelector(".signupbtn");
  let regbtn = document.querySelector(".reg");
  let codee= document.getElementById("code");
  let sig = document.querySelector(".sig");

  var code;  
  changeImg();
  loginbtn.onclick = log_in;
  signupbtn.onclick = sign_up;
  regbtn.onclick = check;
  codee.onclick =changeImg;
  sig.onmouseover = over;
  sig.onmouseout = out;
  regbtn.onmouseover = over;
  regbtn.onmouseout = out;


});