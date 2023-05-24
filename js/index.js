const count  = 10000;
var slideNum = 1;
var slideNum1 = 1;
var counter = 0;
var counter1 = 0;
Slides(slideNum);
SSlides(slideNum1);


function sliderChange(num)
{   
    Slides(slideNum += num);
}

function Slide(num, pid)
{
    id = pid.id;
    if(id == "D1")
        SSlides(slideNum1 = num);
    else
        Slides(slideNum = num);
}

function Slides(num)
{
    var i;
    var slides = document.getElementsByClassName("Image");
    var dots = document.getElementsByClassName("dot");
    if (num > slides.length) 
    {
        slideNum = 1
    }
    if (num < 1)
    {
        slideNum = slides.length
    }
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideNum-1].style.display = "block";
    dots[slideNum-1].className += " active";
    
    if(counter)
    {
        clearTimeout(timer1);
        clearTimeout(timer2);
        counter = 0;
    }
    else
    {
        var timer1 = setTimeout('slideNum++',count);
        var timer2 = setTimeout("Slides(slideNum)",count);
        counter = 0;
    }
    
}   

function SSlides(num)
{
    var i;
    var slides = document.getElementsByClassName("container");
    var dots = document.getElementsByClassName("dot1");
    if (num > slides.length) 
    {
        slideNum1 = 1
    }
    if (num < 1)
    {
        slideNum1 = slides.length
    }
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideNum1-1].style.display = "flex";
    dots[slideNum1-1].className += " active";
    
    if(counter1)
    {
        clearTimeout(timer1);
        clearTimeout(timer2);
        counter1 = 0;
    }
    else
    {
        var timer1 = setTimeout('slideNum1++',7500);
        var timer2 = setTimeout("SSlides(slideNum1)",7500);
        counter1 = 0;
    }
    
}   
var k = 0;
var c = 0;
let request = new XMLHttpRequest();
let requestURL = 'blog.json';
request.open('GET', requestURL);   
request.responseType = 'json';
request.send();
request.onload = function()
{
    var data = request.response;
    for(i in data)
    {
        c += 1
        
        var lep = "B-id" + c
        var he = "image" + c
        var ce = "title" + c
        var be = "text" + c
        
        var je = document.createElement("DIV");  
        je.classList.add("Info")        
        je.id = lep;   
        document.getElementById("BlogShow").appendChild(je);  
        

        var el = document.createElement("h1");
        var pe = document.createElement("h3");
        var ae = document.createElement("img");

        var jel = data[i][ce]
        el.innerHTML = jel.replace(/`DEL`/gi,'<br>')
        document.getElementById(lep).appendChild(el)

        

        var jae = data[i][he]

        if(jae != "None")
        {
            ae.style.marginTop = "3%";
            ae.setAttribute('src',jae)
            ae.setAttribute('width',"300")
            ae.setAttribute('height',"200")
            document.getElementById(lep).appendChild(ae)
        }

        var jpe = data[i][be]
        pe.innerHTML = jpe.replace(/`DEL`/gi,'<br>')
        document.getElementById(lep).appendChild(pe)
        
        
    }
    for(j in data)
    {
       
        k += 1
        var idc = "P-id" + k
        var titlec = "title" + k

        var titleD = document.createElement("h1");
        titleD.id = idc; 
        titleD.setAttribute("onclick","func(this)")
        var titleH = data[j][titlec]
        titleD.innerHTML = titleH.replace(/`DEL`/gi,'<br>')
        document.getElementById("BlogPicker").appendChild(titleD);
    }
    
    
}

var l = 0
let requestin = new XMLHttpRequest();
let requestinURL = 'news.json';
requestin.open('GET', requestinURL);   
requestin.responseType = 'json';
requestin.send();
requestin.onload = function()
{
    var data = requestin.response;
    for(i in data)
    {
        
        l += 1;
        var lep = "N-id" + l
        var ce = "title" + l
        var he = "image" + l
        
        var je = document.createElement("DIV");  
        je.classList.add("NewsHolder");        
        je.id = lep;   
        document.getElementById("NewsBord").appendChild(je);  
        

        var el = document.createElement("h1");
        var ae = document.createElement("img");


        var jae = data[i][he]
        if(jae != "None")
        {
            ae.style.padding = "25px";
            ae.setAttribute('src',jae)
            ae.setAttribute('width',"300")
            ae.setAttribute('height',"300")
            document.getElementById(lep).appendChild(ae)
        }
        else
        {
            ae.style.padding = "25px";
            ae.setAttribute('src',"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Color_icon_cyan.svg/1200px-Color_icon_cyan.svg.png")
            ae.setAttribute('width',"300")
            ae.setAttribute('height',"300")
            document.getElementById(lep).appendChild(ae)
        }

        
        var jel = data[i][ce]
        el.innerHTML = jel.replace(/`DEL`/gi,'<br>')
        document.getElementById(lep).appendChild(el)

    }
    
}


var kik = 0;
function func(check)
{
        var id = check.id.replace('P','#B')
        if($('#BlogShow').scrollTop() != 0)
        {
            $('#BlogShow').animate({
                scrollTop: 0
            },
            'slow');
        }
        setTimeout(function(){
            
            $('#BlogShow').animate({
                scrollTop: $(id).position().top 
            },
            'slow');
            console.log($(id).position().top )

        },1000)
}

var sa = 0
window.onload = function(){window.setTimeout(funcc(),1000)}

function funcc()
{
    sa++
    console.log(sa)
    if(sa == 1)
    {
        gas = document.getElementById("NewsBord").scrollWidth;
        $('#NewsBord').animate({
            scrollLeft:  gas
        },
        100000);
        setTimeout("funcc()",92000)
    }
    else
    {
        $('#NewsBord').animate({
            scrollLeft:  0
        },
        92000);
        sa =0
        setTimeout("funcc()",92000)
    }
        
        

    
}







