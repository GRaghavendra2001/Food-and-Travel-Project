var emailid="sumraghu99@gmail.com"
var password="Raghu@"
function authorized()
{
    var usergivenid1=document.getElementById("Email").value
    var usergivenpass1=document.getElementById("pass").value
    if(emailid==usergivenid1 &&password==usergivenpass1)
    {
        document.getElementById("frm").setAttribute("action","../html/homepage.html")
        document.getElementById("but").setAttribute("type","submit")
    }
    else if(emailid!=usergivenid1 &&password==usergivenpass1)
    {
       
        document.getElementById("result").innerHTML="Wrong Email ID"
    }
    else if(emailid==usergivenid1 &&password!=usergivenpass1)
    {
        document.getElementById("result").innerHTML="Wrong Password"
    }
    else 
    {
        
        document.getElementById("result").innerHTML="Wrong UserID and Password"
    }

}

function visiblePassword()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","../monkey/openeyes.jpg")
    document.getElementById("visible").style.transform="rotateY(360deg)"
}
function hidePassword()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","../monkey/closeeyes.jpg")
    document.getElementById("visible").style.transform="rotateY(-360deg)"
}
