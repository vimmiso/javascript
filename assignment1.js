var qualification = document.getElementById("Qualification");

arr = ["CSE","IT"];
arr2 = ["1","2","3","4","5"];

var ex = document.getElementById("Experience");
for(var i=0;i<arr2.length;i++){
    var option = document.createElement("option");
    txt = document.createTextNode(arr2[i]);
    option.appendChild(txt);
    option.setAttribute("value",arr2[i]);
    ex.insertBefore(option,ex.lastChild);
}

    var optgrp = document.createElement("optgroup");
    optgrp.label="ME";
    optgrp.appendChild(new Option(arr[0]));
    optgrp.appendChild(new Option(arr[1]));
    qualification.appendChild(optgrp);

    optgrp = document.createElement("optgroup");
    optgrp.label="BE";
    optgrp.appendChild(new Option(arr[0]));
    optgrp.setAttribute("value",arr[0]);
    optgrp.appendChild(new Option(arr[1]));
    qualification.appendChild(optgrp);

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
    // var linebreak = document.createElement('<br >');
    // element.appendChild(lineBreak);

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
    checks.appendChild(ch);
    checks.appendChild(label);
   
}

// function selectGender(){
    // var gender2 = document.getElementsByName("Female");
    // if(gender2.checked===true){
    //     gend = gender2.value;

    // }
    // var gender1 = document.getElementsByName("Male");
    // if(gender1.checked===true){
        
    //    gend = gender1.value;
        
    // }


    
function submitForm(){
    var gend='';
    var gender2 = document.getElementById("Female");
    alert(gender2.checked);
    if(gender2.checked===true){
        gend = gender2.value;

    }
    var gender1 = document.getElementById("Male");
    if(gender1.checked===true){
        
       gend = gender1.value;
        
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
        Qualification: document.getElementById("Qualification").vlaue,
        Experience: document.getElementById("Experience").value,
        CodingLanguages: document.getElementById("check").value
    };
console.log(obj);
// alert("hello");
    
}


   


