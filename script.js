var table_flag = 0;

function validate(e) {

    e.preventDefault();

    var flag = false;

    // Validating Name

    var first_name = document.getElementById("first_name").value;
    first_name = first_name.trim();
    if (first_name.length == 0) {
        // alert("Enter the valid first name")
        document.getElementById("fname_error").textContent = "Enter the valid first name";
        document.getElementById("fname_error").style.color = "red";
        document.getElementById("first_name").style.borderColor = "red";
        // window.location.href = "index.html";
        flag = true;
        return false;
    }
    else {
        document.getElementById("fname_error").textContent = "";
        document.getElementById("first_name").style.borderColor = "#dee2e6";
    }
    for (let i = 0; i < first_name.length; i++) {
        if ((first_name[i] >= 'a' && first_name[i] <= 'z') || (first_name[i] >= 'A' && first_name[i] <= 'Z') || (first_name[i] === ' ')) {
            document.getElementById("fname_error").textContent = "";
            document.getElementById("first_name").style.borderColor = "#dee2e6";
        }
        else {
            // window.alert("Enter the valid first name");
            document.getElementById("fname_error").textContent = "Enter the valid first name";
            document.getElementById("fname_error").style.color = "red";
            document.getElementById("first_name").style.borderColor = "red";
            // window.location.href = "index.html";
            flag = true;
            return false;
        }
    }

    var last_name = document.getElementById("last_name").value;
    last_name = last_name.trim();
    if (last_name.length == 0) {
        // alert("Enter the valid last name")
        document.getElementById("lname_error").textContent = "Enter the valid last name";
        document.getElementById("lname_error").style.color = "red";
        document.getElementById("last_name").style.borderColor = "red";
        flag = true;
        return false;
    }
    else {
        document.getElementById("lname_error").textContent = "";
        document.getElementById("last_name").style.borderColor = "#dee2e6";
    }
    for (let i = 0; i < last_name.length; i++) {
        if ((last_name[i] >= 'a' && last_name[i] <= 'z') || (last_name[i] >= 'A' && last_name[i] <= 'Z') || (last_name[i] === ' ')) {
            document.getElementById("lname_error").textContent = "";
            document.getElementById("last_name").style.borderColor = "#dee2e6";
        }
        else {
            // window.alert("Enter the valid last name");
            document.getElementById("lname_error").textContent = "Enter the valid last name";
            document.getElementById("lname_error").style.color = "red";
            document.getElementById("last_name").style.borderColor = "red";
            flag = true;
            return false;
        }
    }


    //validating mobile


    var mobile = document.getElementById("phone").value;
    if (mobile.length != 10) {
        // window.alert("Invalid Phone Number");
        document.getElementById("mobile_error").textContent = "Enter the valid phone number";
        document.getElementById("mobile_error").style.color = "red";
        document.getElementById("phone").style.borderColor = "red";
        flag = true;
        return false;
    }
    else if (mobile[0] >= '0' && mobile[0] <= '5') {
        // window.alert("Invalid Phone Number");
        document.getElementById("mobile_error").textContent = "Enter the valid phone number";
        document.getElementById("mobile_error").style.color = "red";
        document.getElementById("phone").style.borderColor = "red";
        flag = true;
        return false;
    }
    else {
        for (let i = 0; i < 10; i++) {
            if (mobile[i] >= '0' && mobile[i] <= '9') {
                document.getElementById("mobile_error").textContent = "";
                document.getElementById("phone").style.borderColor = "#dee2e6";
            }
            else {
                // window.alert("Invalid Phone Number");
                document.getElementById("mobile_error").textContent = "Enter the valid phone number";
                document.getElementById("mobile_error").style.color = "red";
                document.getElementById("phone").style.borderColor = "red";
                flag = true;
                return false;
            }
        }
    }


    //EMAIL VALIDATION

    const mail_regex = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
    const email = document.getElementById("email").value;
    if (email.match(mail_regex) === null) {
        document.getElementById("email_error").textContent = "Enter the valid phone number";
        document.getElementById("email_error").style.color = "red";
        document.getElementById("email").style.borderColor = "red";
        flag = true;
        return false;
    }
    else {
        document.getElementById("email_error").textContent = "";
        document.getElementById("email").style.borderColor = "#dee2e6";
    }

    //Gender

    const gen = document.getElementsByName("gender");
    var gender;
    for (let i = 0; i < gen.length; i++) {
        if (gen[i].checked) {
            gender = gen[i].value;
        }
    }



    //password validation

    var pass = document.getElementById("password").value
    var confirm = document.getElementById("confirm_password").value
    if (pass !== confirm) {
        // window.alert("Passwords does not match!");
        document.getElementById("confpass_error").textContent = "Password does not match";
        document.getElementById("confpass_error").style.color = "red";
        document.getElementById("confirm_password").style.borderColor = "red";
        flag = true;
        return false;
    }
    else {
        document.getElementById("confpass_error").textContent = "";
        document.getElementById("confirm_password").style.borderColor = "#dee2e6";
    }



    //Dropdown menu

    const ques = document.getElementById("select_menu").value;
    if (ques === "sel") {
        document.getElementById("select_op").textContent = "Choose from the given options";
        document.getElementById("select_op").style.color = "red";
        flag = true;
        return false;
    }
    else {
        document.getElementById("select_op").textContent = "";
    }
    console.log(ques);



    // Answer validation

    var answer = document.getElementById('answer').value;
    answer = answer.trim();
    if (answer.length === 0) {
        // window.alert("Invalid answer");
        document.getElementById("ans_error").textContent = "Enter the valid answer";
        document.getElementById("ans_error").style.color = "red";
        document.getElementById("answer").style.borderColor = "red";
        flag = true;
        return false;
    }
    else {
        document.getElementById("ans_error").textContent = "";
        document.getElementById("answer").style.borderColor = "#dee2e6";
    }


    //Local Storage


    if (flag == false) {
        // e.preventDefault();     

        storing_data(first_name, last_name, gender, mobile, email, pass, ques, answer);

        create_and_display_table(first_name, last_name, gender, mobile, email, pass, ques, answer);

        alert("All Details Entered Successfully");

        return true;
    }

    return false;

}

document.getElementById("register").addEventListener('click', validate);

function create_and_display_table(first_name, last_name, gender, mobile, email, pass, ques, answer) {
    if (table_flag == 0) {
        table_flag = 1;
        var table = document.createElement("table");
        var div = document.getElementById("mytable");
        div.appendChild(table);
        table.id = "user_table";
        table.style.borderCollapse = "collapse";
        table.style.width = "100%";

        //creating Caption

        // var caption = document.createElement('caption');
        // var cap = document.createTextNode("User Details");
        // caption.appendChild(cap);
        // table.appendChild(caption);

        const fields = ["First_Name", "Last_Name", "Gender", "Phone", "email", "Password", "Security Question", "answer"];

        var thead = document.createElement("thead");
        for (let i = 0; i < 8; i++) {
            let th = document.createElement("th");
            let h = document.createTextNode(fields[i]);
            // th.style.color = "orange";
            th.appendChild(h);
            th.style.borderBottom = "1px solid #ddd"
            th.style.textAlign = "center";
            th.style.overflow = "auto"
            thead.append(th);
        }
        table.appendChild(thead);
        var tbody = document.createElement("tbody");
        var row = [first_name, last_name, gender, mobile, email, pass, ques, answer];
        for (let i = 0; i < row.length; i++) {
            let td = document.createElement("td");
            let d = document.createTextNode(row[i]);
            // td.style.color = "orange";
            td.style.borderBottom = "1px solid #ddd"
            td.appendChild(d);
            td.style.padding = '10px';
            td.style.textAlign = "center";
            td.style.overflow = "auto";
            tbody.append(td);
        }
        table.appendChild(tbody);
    }

    else {
        var table = document.getElementById("user_table");
        var tbody = document.createElement("tbody");
        var row = [first_name, last_name, gender, mobile, email, pass, ques, answer];
        for (let i = 0; i < row.length; i++) {
            let td = document.createElement("td");
            let d = document.createTextNode(row[i]);
            // td.style.color = "orange";
            td.style.borderBottom = "1px solid #ddd"
            td.appendChild(d);
            td.style.padding = '10px';
            td.style.textAlign = "center";
            td.style.overflow = "auto";
            tbody.append(td);
        }
        table.appendChild(tbody);
    }
}
function storing_data(first_name, last_name, gender, mobile, email, pass, ques, answer) {
    const json_obj = {
        FIRST_NAME: first_name,
        LAST_NAME: last_name,
        GENDER: gender,
        EMAIL: document.getElementById("email").value,
        MOBILE: mobile,
        PASSWORD: pass,
        Question: ques,
        answer: answer
    }

    const ans = JSON.stringify(json_obj);
    localStorage.setItem("userdata", ans);
    console.log(first_name + " " + last_name + " " + mobile);
}
