var qualification = document.getElementById("Qualification");

arr = ["B.E","B.Tech","M.E","M.Tech"];
arr2 = ["1","2","3","4","5"];

var ex = document.getElementById("Experience");
for(var i=0;i<arr2.length;i++){
    var option = document.createElement("option");
    txt = document.createTextNode(arr2[i]);
    option.appendChild(txt);
    option.setAttribute("value",arr2[i]);
    ex.insertBefore(option,ex.lastChild);
}

var optgrp = document.getElementById('Qualification');
    optgrp.appendChild(new Option(arr[0]));
    optgrp.appendChild(new Option(arr[1]));
    optgrp.appendChild(new Option(arr[2]));
    optgrp.appendChild(new Option(arr[3]));
    
function langObj(LanguageName, IsEnabled){
    this.LanguageName = LanguageName;
    this.IsEnabled = IsEnabled;
    this.type="checkbox";
    this.label=LanguageName;
}


arrlang = ["C/C++","Java","C#","Php","Python"];

arrlang[0] = new langObj("C/C++",true);
arrlang[1]  = new langObj("Java",true);
arrlang[2]  = new langObj("C#",false);
arrlang[3]  = new langObj("Php",false);
arrlang[4]  = new langObj("Python",false);


var checks = document.getElementById("check");
for(var i=0;i<arrlang.length;i++){

    var ch = document.createElement("INPUT");

        ch.setAttribute("type", "checkbox");
        ch.setAttribute("name", arrlang[i].LanguageName);
        ch.setAttribute("value", arrlang[i].IsEnabled);

    var label = document.createElement("label");
        label.htmlFor="id";
        label.appendChild(document.createTextNode(arrlang[i].LanguageName));
    if(ch.name===arrlang[0].LanguageName || ch.name===arrlang[1].LanguageName){
        ch.checked=true;
    }
    var br = document.createElement("br");
    
    checks.appendChild(ch);
    checks.appendChild(label);
    checks.appendChild(br);

}




    
function submitForm(){
    var gend="";
    var gender2 = document.getElementById("Female");
    var gender1 = document.getElementById("Male");
  
    if(gender2.checked===true){
        gend = gender2.value;

    }
    if(gender1.checked===true){
        gend = gender1.value;
    }
    

    var xQua = document.getElementById('Qualification');
  
    var p = xQua.selectedIndex;
 
    var y = document.getElementsByTagName('option')[p].value;
 
    var xCod = document.getElementsByTagName('input');
    var yCod =[];

    for(var i=0;i<xCod.length ;i++){
        
        if(xCod[i].type=== 'checkbox' && xCod[i].checked===true){
            yCod.push(xCod[i].name);
        }
    }

   
    var obj = {
        FirstName: document.getElementById("firstName").value,
        LastName: document.getElementById("lastName").value,
        Email:document.getElementById("Email").value,
        ContactNumber: document.getElementById("contactNumber").value,
        Address: document.getElementById("Address").value,
        Username: document.getElementById("userName").value,
        Password: document.getElementById("password").value,
        Gender: gend,
        Qualification: y,
        Experience: document.getElementById("Experience").value,
        CodingLanguages: yCod
    };
    console.log(obj);

    
}


   


