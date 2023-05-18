function validate(e){
    e.preventDefault();
    var pass = document.getElementById("password").value
    var confirm = document.getElementById("confirm_password").value
    if(pass !== confirm) {
       window.alert("Passwords does not match!");
    }  
    
   
    // Validating Name

    var first_name = document.getElementById("first_name").value;
    first_name = first_name.trim();
    if(first_name.length == 0){
        alert("Enter the valid first name")
    }
    for(let i=0; i<first_name.length; i++){
        if((first_name[i] >= 'a' && first_name[i] <= 'z') || (first_name[i] >= 'A' && first_name[i] <= 'Z') || (first_name[i] === ' '))  {

        }  
        else{
            window.alert("Enter the valid first name");
            break;
        }
    }

    var last_name = document.getElementById("last_name").value;
    last_name = last_name.trim();
    if(last_name.length == 0){
        alert("Enter the valid last name")
    }
    for(let i=0; i<last_name.length; i++){
        if((last_name[i] >= 'a' && last_name[i] <= 'z') || (last_name[i] >= 'A' && last_name[i] <= 'Z') || (last_name[i] === ' '))  {
            
        }  
        else{
            window.alert("Enter the valid last name");
            break;
        }
    }


    //validating mobile


    var mobile = document.getElementById("phone").value;
    if(mobile.length != 10){
        window.alert("Invalid Phone Number");
    }
    else if(mobile[0] >='0' && mobile[0] <= '5'){
        window.alert("Invalid Phone Number");
    }
    else{
        for(let i=0; i<10; i++){
            if(mobile[i] >= '0' && mobile[i] <= '9'){

            }
            else{
                window.alert("Invalid Phone Number");
                break;
            }
        }
    }

  

    //table logic

    // var table = document.createElement("table");
    // var div = document.getElementById("mytable");
    // div.appendChild(table);
    // table.id = "user_table";
    // table.style.borderCollapse = "collapse";

    // //creating Caption

    // var caption = document.createElement('caption');
    // var cap = document.createTextNode("User Details");
    // caption.appendChild(cap);
    // table.appendChild(caption);

    // const fields = ["First_Name", "Last_Name", "Phone", "Password"];

    // var thead = document.createElement("thead");
    // for (let i = 0; i < 4; i++) {
    //     let th = document.createElement("th");
    //     let h = document.createTextNode(fields[i]);
    //     th.appendChild(h);
    //     th.style.border = "2px solid black";
    //     th.style.textAlign = "center";
    //     thead.append(th);
    // }
    // table.appendChild(thead)
    // // console.log(div);
    // var tbody = document.createElement("tbody");
    // if(fname !== null && lname !== null && pass != null &&  mob != null){
    //     const row = [fname, lname, mob, pass];
    //     for (let i = 0; i < row.length; i++) {
    //         let td = document.createElement("td");
    //         let d = document.createTextNode(rows[i]);
    //         td.style.border = "2px solid black"
    //         td.appendChild(d);
    //         td.style.padding = '10px';
    //         td.style.textAlign = "center";
    //         tbody.append(td);
    //     }
    // }
    
    console.log(first_name + " " + last_name + " " + mobile);
}

document.getElementById("register").addEventListener('click', validate);