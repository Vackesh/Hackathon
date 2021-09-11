//main div
var maindiv = document.createElement('div');
maindiv.setAttribute('id','maindiv');
document.body.append(maindiv);

//search box
var search = document.createElement('input');
search.setAttribute('type','text');
search.setAttribute('id','search');
document.body.append(search);

// button
var submit = document.createElement('input');
submit.setAttribute('type','button');
submit.setAttribute('value','Submit');
submit.setAttribute('id','button');
submit.setAttribute('onclick','foo()');
document.body.append(submit);

// button
var clear = document.createElement('input');
clear.setAttribute('type','button');
clear.setAttribute('value','Clear');
clear.setAttribute('id','clear');
clear.setAttribute('onclick','clr1()');
document.body.append(clear);

//div
var div = document.createElement('div');
div.setAttribute('id','div1');
document.body.append(div)

div.append(search,submit,clear);

//para
var display = document.createElement('p');
display.setAttribute('id','data');
document.body.append(display);

maindiv.append(div,display);

async function foo(){
    var nam = document.getElementById("search").value
    var nationalize = await fetch(`https://api.nationalize.io?name=${nam}`);
    var nationalizedata = await nationalize.json();
    var resultjson = ("Name : "+nationalizedata.name+"<br>"+"Country 1 : "+JSON.stringify(nationalizedata.country[0])+"<br>"+"Country 2 : "+JSON.stringify(nationalizedata.country[1]));
    //console.log(nationalizedata);
    document.getElementById('data').innerHTML =(resultjson);
 

    // for(let key in nationalizedata) {
    //     var val = (key + ":", nationalizedata[key]);
    //     console.log(key + ":", nationalizedata[key]);
    // }
    // document.getElementById('data').innerHTML=val

}


function clr1(){
    document.getElementById('data').value=" ";
    
}