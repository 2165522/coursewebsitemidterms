
function toggle_visibility(id) {
                var e = document.getElementById(id);
                if(e.style.display == 'block')
                    e.style.display = 'none';
                else{
                    e.style.display = 'block';
                }
                    
            }

$(function(){
  $('[data-toggle="popover"]').popover()
});


function checkCSS(){
    var q1 = document.forms.form.q1.value;
    var q2 = document.forms.form.q2.value;
    var q3 = document.forms.form.q3.value;
    var q4 = document.forms.form.q4.value;
    var q5 = document.forms.form.q5.value;
    var q6 = document.forms.form.q5.value;
    var q7 = document.forms.form.q5.value;
    var q8 = document.forms.form.q5.value;
    var q9 = document.forms.form.q5.value;
    var q10 = document.forms.form.q5.value;
    var q11 = document.forms.form.q5.value;
    var q12 = document.forms.form.q5.value;
    var q13 = document.forms.form.q5.value;
    var q14 = document.forms.form.q5.value;
    var q15 = document.forms.form.q5.value;
    
    var points = 0;
    var total = 15;
    
    if (q1 == "B"){
        points++;
    }
    if (q2 == "B"){
        points++;
    }
    if (q3 == "B"){
        points++;
    }
    if (q4 == "C"){
        points++;
    }
    if (q5 == "A"){
        points++;
    }
    if (q6 == "D"){
        points++;
    }
    if (q7 == "A"){
        points++;
    }
    if (q8 == "C"){
        points++;
    }
    if (q9 == "C"){
        points++;
    }
    if (q10 == "B"){
        points++;
    }
    if (q11 == "B"){
        points++;
    }
    if (q12 == "C"){
        points++;
    }
    if (q13 == "D"){
        points++;
    }
    if (q14 == "A"){
        points++;
    }
    if (q15 == "C"){
        points++;
    }
    
    alert("You got "+points+"/"+total);
}

function checkJS(){
    var q1 = document.forms.form.q1.value;
    var q2 = document.forms.form.q2.value;
    var q3 = document.forms.form.q3.value;
    var q4 = document.forms.form.q4.value;
    var q5 = document.forms.form.q5.value;
    var q6 = document.forms.form.q5.value;
    var q7 = document.forms.form.q5.value;
    var q8 = document.forms.form.q5.value;
    var q9 = document.forms.form.q5.value;
    var q10 = document.forms.form.q5.value;
    var q11 = document.forms.form.q5.value;
    var q12 = document.forms.form.q5.value;
    var q13 = document.forms.form.q5.value;
    var q14 = document.forms.form.q5.value;
    var q15 = document.forms.form.q5.value;
    
    var points = 0;
    var total = 7;
    
    if (q1 == "A"){
        points++;
    }
    if (q2 == "C"){
        points++;
    }
    if (q3 == "B"){
        points++;
    }
    if (q4 == "D"){
        points++;
    }
    if (q5 == "B"){
        points++;
    }
    if (q6 == "D"){
        points++;
    }
    if (q7 == "B"){
        points++;
    }
    
    alert("You got "+points+"/"+total);
}