const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
// /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm
// const passRegex=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
// const phoneRegex= /^\\+?[1-9][0-9]{7,14}$/;
const phoneRegex = /^\d{11}$/; 



function fnamevalidation()
{
    var fNameValid=true;
    var lNameValid=true;
    var pwdValid=true;
    var confValid=true;
    var emailValid=true;
    var phoneValid=true;


// firstName Validation
    if(document.getElementById("fname").value=="")
    {
        fNameValid=false;   
        document.getElementById("spnfname").innerHTML="&#x2716;  please Enter the Name  "
        document.getElementById("spnfname").style.color="red";
    }
    else if(document.getElementById("fname").value.length>10)
    {
        fNameValid=false;   
        document.getElementById("spnfname").innerHTML="&#x2716;  please Enter Only first Name  "
        document.getElementById("spnfname").style.color="red";
    }
    else
    {
        fNameValid=true;
        document.getElementById("spnfname").innerHTML="&#x2714;  valid "
        document.getElementById("spnfname").style.color="green";
    }

    // lastName Validation

    if(document.getElementById("lname").value=="")
        {
            fNameValid=false;   
            document.getElementById("spnlname").innerHTML="&#x2716;  please Enter the Name  "
            document.getElementById("spnlname").style.color="red";
        }
        else if(document.getElementById("lname").value.length>10)
        {
            fNameValid=false;   
            document.getElementById("spnlname").innerHTML="&#x2716;  please Enter Only last Name  "
            document.getElementById("spnlname").style.color="red";
        }
        else
        {
            lNameValid=true;
            document.getElementById("spnlname").innerHTML="&#x2714;  valid "
            document.getElementById("spnlname").style.color="green";
        }

// password Validation
        if(document.getElementById("pwduser").value=="")  // is empty
        {
            pwdValid=false;
            document.getElementById("spnpassword").innerHTML="&#x2716  Please enter the password";
            document.getElementById("spnpassword").style.color="red";
        }
        // else if(passRegex.test(document.getElementById("pwduser").value)==false)
        // {
        //     pwdValid=false;
        //     document.getElementById("spnpassword").innerHTML="&#x2716  Please enter Correct password";
        //     document.getElementById("spnpassword").style.color="red";
        // }
        else{
            pwdValid=true;
            document.getElementById("spnpassword").innerHTML="&#x2714  Valid";
            document.getElementById("spnpassword").style.color="green";
        }
// confirm the password

        if(document.getElementById("conpwd").value=="")
        {
            confValid=false;
            document.getElementById("spnconpwd").innerHTML="&#x2716  please enter the password again";
            document.getElementById("spnconpwd").style.color="red";
        }
        else if(document.getElementById("conpwd").value!=document.getElementById("pwduser").value)
        {
            confValid=false;
            document.getElementById("spnconpwd").innerHTML="&#x2716  please enter the Correct password again";
            document.getElementById("spnconpwd").style.color="red";
        }
        else
        {
            confValid=true;
            document.getElementById("spnconpwd").innerHTML="&#x2714  Valid";
            document.getElementById("spnconpwd").style.color="green";
        }
        // Email Validation
        if(document.getElementById("email").value=="")
        {
            emailValid=false;
            document.getElementById("spnemail").innerHTML="&#x2716  Please enter the Email";
            document.getElementById("spnemail").style.color="red";
        }
        else if(emailRegex.test(document.getElementById("email").value)==false)
        {
            emailValid=false;
            document.getElementById("spnemail").innerHTML="&#x2716  Please enter Correct Email";
            document.getElementById("spnemail").style.color="red";
        }
        else 
        {
            emailValid=true;
            document.getElementById("spnemail").innerHTML="&#x2714  Valid";
            document.getElementById("spnemail").style.color="green";
        }

        // Phone Validation
        if(document.getElementById("phone").value=="")
        {
            phoneValid=false;
            document.getElementById("spnphone").innerHTML="&#x2716  Please enter Your Phone";
            document.getElementById("spnphone").style.color="red";
        }
        else if(phoneRegex.test(document.getElementById("phone").value)==false)
        {
            phoneValid=false;
            document.getElementById("spnphone").innerHTML="&#x2716  Please enter Correct Phone";
            document.getElementById("spnphone").style.color="red";
        }
        else
        {
            phoneValid=true;
            document.getElementById("spnphone").innerHTML="&#x2714  Valid";
            document.getElementById("spnphone").style.color="green";
        }







    if(fNameValid&&lNameValid&&pwdValid&&confValid&&emailValid&&phoneValid)
    {
        window.location.href = "Home.html";
        return false;
    }
    else{
        return false;
    }





}

function fnameRe()
{
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("pwduser").value = "";
    document.getElementById("conpwd").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";

    document.getElementById("spnfname").innerHTML = "";
    document.getElementById("spnlname").innerHTML = "";
    document.getElementById("spnpassword").innerHTML = "";
    document.getElementById("spnconpwd").innerHTML = "";
    document.getElementById("spnemail").innerHTML = "";
    document.getElementById("spnphone").innerHTML = "";





}


function RandomQuote()
{
    var rNum=Math.ceil(Math.random()*10);

const Qoutes=[
"“Be yourself; everyone else is already taken.”― Oscar Wilde",
"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe",
"“So many books, so little time.”― Frank Zappa"
,"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein"
,"“A room without books is like a body without a soul.”― Marcus Tullius Cicero"
,"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch"
,"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss"
,"“You only live once, but if you do it right, once is enough.”― Mae West"
,"“Be the change that you wish to see in the world.”― Mahatma Gandhi"
,"“In three words I can sum up everything I've learned about life: it goes on.”― Robert Frost"
,"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”― J.K. Rowling, Harry Potter and the Goblet of Fire"
,"“Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend”― Albert Camus"

]

document.getElementById("QRandom").innerHTML=Qoutes[rNum];

// document.getElementById("QRandom").style.backgroundColor="rgba(238, 158, 171, 0.511)";


}


function logInValid()
{
        var fUserNameValid=true;
        var pwdUserValid=true;
        // preventDefault(); // منع إرسال الفورم الافتراضي


    // User  Validation 
    if(document.getElementById("user").value=="")
        {
            fUserNameValid=false;   
            document.getElementById("spnuser").innerHTML="&#x2716;  please Enter the Name  "
            document.getElementById("spnuser").style.color="red";
            document.getElementById("spanafterPassword").style.marginTop="50px";

        }
        else if(document.getElementById("user").value.length>10)
        {
            fUserNameValid=false;   
            document.getElementById("spnuser").innerHTML="&#x2716;  please Enter Only first Name  "
            document.getElementById("spnuser").style.color="red";
            document.getElementById("spanafterPassword").style.paddingTop="6rem";
        }
        else
        {
            fUserNameValid=true;
            document.getElementById("spnuser").innerHTML="&#x2714;  valid "
            document.getElementById("spnuser").style.color="green";
        }


    // password Validation
    if(document.getElementById("pwduser").value=="")  // is empty
    {
        pwdUserValid=false;
        document.getElementById("spnpwduser").innerHTML="&#x2716  Please enter the password";
        document.getElementById("spnpwduser").style.color="red";
    }
    // else if(passRegex.test(document.getElementById("pwduser").value)==false)
    // {
    //     pwdUserValid=false;
    //     document.getElementById("spnpwduser").innerHTML="&#x2716  Please enter Correct password";
    //     document.getElementById("spnpwduser").style.color="red";
    // }
    else{
        pwdUserValid=true;
        document.getElementById("spnpwduser").innerHTML="&#x2714  Valid";
        document.getElementById("spnpwduser").style.color="green";
    }

    if(fUserNameValid&&pwdUserValid)
        {
            window.location.href = "Home.html";
            return false;
        }
        else{
            return false;
        }
}