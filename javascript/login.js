// var email="graghavendra615@gmail.com"
// var pass="Raghu@123"
// function autho()
// {
//     var usergivenid=document.getElementById("Email").value
//     var usergivenpass=document.getElementById("pass").value
//     if(email==usergivenid &&pass==usergivenpass)
//     {
//         document.getElementById("form").setAttribute("action","../html/homepage.html")
//         document.getElementById("but").setAttribute("type","submit")
//     }
//     else if(email!=usergivenid &&pass==usergivenpass)
//     {
//         document.getElementById("inputDiv").style.borderColor="red"
//         document.getElementById("passDiv").style.borderColor="royalblue"
//         document.getElementById("body").style.backgroundImage="linear-gradient(70deg,red,purple)"
//         document.getElementById("result").innerHTML="Wrong Email ID"
//     }
//     else if(email==usergivenid &&pass!=usergivenpass)
//     {
//         document.getElementById("passDiv").style.borderColor="red"
//         document.getElementById("inputDiv").style.borderColor="royalblue"
//         document.getElementById("body").style.backgroundImage="linear-gradient(70deg,rgb(255,1,111),red)"
//         document.getElementById("result").innerHTML="Wrong Password"
//     }
//     else 
//     {
//         document.getElementById("passDiv").style.borderColor="red"
//         document.getElementById("inputDiv").style.borderColor="red"
//         document.getElementById("body").style.backgroundImage="linear-gradient(70deg,red,red)"
//         document.getElementById("result").innerHTML="Wrong UserID and Password"
//     }

// }

// function visiblePassword()
// {
//     document.getElementById("pass").removeAttribute("type")
//     document.getElementById("visible").setAttribute("src","../Assets/images/openeyes.jpg")
//     document.getElementById("visible").style.transform="rotateY(360deg)"
// }
// function hidePassword()
// {
//     document.getElementById("pass").setAttribute("type","password")
//     document.getElementById("visible").setAttribute("src","../Assets/images/closeeyes.jpg")
//     document.getElementById("visible").style.transform="rotateY(-360deg)"
// }