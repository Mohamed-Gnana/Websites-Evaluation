
$("#open").click(function(){
    $("#wrapper").animate({left:"0"},500);
$("#wrapper").animate({top:"0"},500);

})

$("#close").click(function(){
$("#wrapper").animate({top:"-99.9%"},500);
$("#wrapper").animate({left:"-99.9%"},500);
})






var imgSrc;
var file=[];
var number=0;
var secNum= (number%3);
//imagee = document.getElementById("imgbest") ;

function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                
                $('#blah')
                    .attr('src', e.target.result);
                $('#blah').css("width","100%");
                $('#blah').css("height","100%");
                
            };

            reader.readAsDataURL(input.files[0]);
        }
    }




function readUrl(f,c) {
        if (f.files && f.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                
                $("#i"+c)
                    .attr('src', e.target.result);
                $('#i'+c).css("width","100%");
                $('#i'+c).css("height","100%");
                
            };

            reader.readAsDataURL(f.files[0]);
        }
    }





function readUrl2(f,c) {
        if (f.files && f.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                
                $("#l"+c)
                    .attr('src', e.target.result);
                $('#l'+c).css("width","100%");
                $('#l'+c).css("height","100%");
                
            };

            reader.readAsDataURL(f.files[0]);
        }
    }







function cor(j , m ,title , abo ,link) {
    var p = document.getElementById("play")
    console.log(p)
    var n = ((Math.floor(j/3))*3) ;
    var cin;
    var cin2;
    
    if(n==0 && j==0){
         p.innerHTML +='<div class="carousel-item active mx-3 pl-5 pr-5" id="f'+n+'"></div>'   ;
        cin = document.getElementById("f"+n);
        console.log(cin);
    cin.innerHTML+='<div class="row pl-5" id="ff'+n+'"></div>';
    }
    else if(m==0){
        p.innerHTML +='<div class="carousel-item mx-3 pl-5 pr-5" id="f'+n+'"></div>'   ;
        cin = document.getElementById("f"+n);
        console.log(cin);
    cin.innerHTML+='<div class="row pl-5" id="ff'+n+'"></div>';
    }
    cin2 = document.getElementById("ff"+n);
    
    cin2.innerHTML +='<div class="col-md-3 mx-5 p-3" id="cardy"><a href="'+link+'"><div class="py-4 m-auto bg-light border border-secondary rounded " id="im"><img src="images/cloud1.png" id="i'+j+'"/></div><h3 class="py-2 px-2 font-weight-bold text-light py-2">website name : '+title+'</h3><label class="pr-2 text-light py-2">developer :</label><p class="font-weight-bold px-2 text-light py-2">About :'+abo+'</p></div>';
    if(m==2){
      cin2.innerHTML += '<div class="clearfix"></div>';
    }
}



function cor2(j , m ,title , abo ,link) {
    var p = document.getElementById("play2")
    console.log(p)
    var n = ((Math.floor(j/3))*3) ;
    var cin;
    var cin2;
    
    if(n==0 && j==0){
         p.innerHTML +='<div class="carousel-item active mx-3 pl-5 pr-5" id="k'+n+'"></div>'   ;
        cin = document.getElementById("k"+n);
        console.log(cin);
    cin.innerHTML+='<div class="row pl-5" id="kk'+n+'"></div>';
    }
    else if(m==0){
        p.innerHTML +='<div class="carousel-item mx-3 pl-5 pr-5" id="k'+n+'"></div>'   ;
        cin = document.getElementById("k"+n);
        console.log(cin);
    cin.innerHTML+='<div class="row pl-5" id="kk'+n+'"></div>';
    }
    cin2 = document.getElementById("kk"+n);
    
    cin2.innerHTML +='<div class="col-md-3 mx-5 p-3" id="cardy"><a href="'+link+'"><div class="py-4 m-auto bg-light border border-secondary rounded " id="im"><img src="images/cloud1.png" id="l'+j+'"/></div><h3 class="py-2 px-2 font-weight-bold text-light py-2">website name : '+title+'</h3><label class="pr-2 text-light py-2">developer :</label><p class="font-weight-bold px-2 text-light py-2">About :'+abo+'</p></div>';
    if(m==2){
      cin2.innerHTML += '<div class="clearfix"></div>';
    }
}




























var inps = document.getElementsByTagName("input");
var allData2=[];
var tit ; 
var about ; 
 var lin ;
var FolderSrc ;
if (JSON.parse(localStorage.getItem("web"))!=null){

    allData2 = JSON.parse(localStorage.getItem("web"));
}






$("#sub").click(function(){
    
    tit = document.getElementById("title") ;
    lin = document.getElementById("link") ;
    about = document.getElementById("webabout") ;
    var sign2 = {title:tit.value , aboutweb : about.value , Image : imgSrc};
    allData2.push(sign2);
    
    
    
    
    
    
    
    cor(number , secNum , tit.value , about.value , lin.value);
    cor2(number , secNum , tit.value , about.value , lin.value);
    file[number] = document.getElementById("fl") ;
    readUrl(file[number],number);
    readUrl2(file[number],number);
    
    
    
    ++number;
    secNum= (number%3) ;
    
    
    
    
    localStorage.setItem("web",JSON.stringify(allData2));
    $('#blah').attr('src', "images/no-image.svg");
    clearform();
})
  






function clearform(){
  for (var i=0; i <inps.length ; ++i ){
    inps[i].value="";
  }
}















$("#openmenu").click(function(){
    $("#menuu").animate({left : "0px"},500);
    $("body").animate({marginLeft : "400px"},500);
})
$("#closemenu").click(function(){
    $("#menuu").animate({left : '-400px'},500);
    $("body").animate({marginLeft : "0px"},500);
})


















$("#openreg").click(function(){
    $("#wrapper2").animate({left:"0"},500);
$("#wrapper2").animate({top:"0"},500);

})

$("#closereg").click(function(){
$("#wrapper2").animate({top:"-99.9%"},500);
$("#wrapper2").animate({left:"-99.9%"},500);
})


var allData=[];
var uname ; 
var upass ; 
var umail ; 
var ufirst ; 
var ulast ;

var regex = {
    username :/^[A-Z][a-z]{3,15}$/,
    userpass :/[a-z0-9]{9,25}$/,
    usermail :/\w@\w.\w/,
    userfirst:/^[A-Z][a-z0-9]{6,15}$/,
    userlast : /^[A-Z][a-z0-9]{6,15}$/
}

if (JSON.parse(localStorage.getItem("users"))!=null){

    allData = JSON.parse(localStorage.getItem("users"));
}


for (var i = 0 ; i < inps.length ; ++i){
    inps[i].addEventListener("keyup",function(e){
        validate(e.target,regex[e.target.attributes.name.value]);
    })
}

function validate(inp ,reg){
    if (reg.test(inp.value) == true){
        inp.className = "form-control py-3 is-valid" ;
    }
    else
    {
        inp.className = "form-control py-3 is-invalid" ;
    }
}

$("#submitreg").click(function(){
    uname = document.getElementById("usname") ;
    upass = document.getElementById("uspassword") ;
    umail = document.getElementById("usmail") ;
    ufirst = document.getElementById("usfirst") ;
    ulast = document.getElementById("uslast") ;
    var sign = {userName:uname.value , userPass : upass.value , userMail : umail.value , userFirst : ufirst.value , userlast : ulast.value};
    allData.push(sign);
    localStorage.setItem("users",JSON.stringify(allData));
    clearform();
})

















$("#openlog").click(function(){
    $("#wrapper3").animate({left:"0"},500);
$("#wrapper3").animate({top:"0px"},500);

})

$("#closelog").click(function(){
$("#wrapper3").animate({top:"-99.9%"},500);
$("#wrapper3").animate({left:"-99.9%"},500);
})


var unamel;
var upassl ;
$("#submitlog").click(function(){
    unamel = document.getElementById("usnamel") ;
    upassl = document.getElementById("uspasswordl") ;
    for (var i = 0 ; i < allData.length ; ++i){
        if(allData[i].userName == unamel.value){
            if(allData[i].userPass == upassl.value){
                $("#wrapper3").animate({top:"-99.9%"},500);
                $("#wrapper3").animate({left:"-99.9%"},500);
                $("#profile").css('display','inline-block');
                $("#signout").css('display','inline-block');
                $("#openreg").css('display','none');
                $("#openlog").css('display','none');
                //window.alert("Welcome " + allData[i].userFirst);
            }
            else{
                window.alert("Wrong Password");
            }
            break ;
        }
        if(i==allData.length-1 && allData[i].userName != unamel.value) {
            window.alert("Wrong UserName");
        }
    }
    clearform();
})



$("#signout").click(function(){
    $("#profile").css('display','none');
                $("#signout").css('display','none');
                $("#openreg").css('display','inline-block');
                $("#openlog").css('display','inline-block');
})
