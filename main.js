var name_array= [];
function submit(){
    var display_student_array= [];
    for (var j=1; j <= 4; j++){
        var nameofstudent= document.getElementById("name_of_the_student_"+j).value ;
        console.log(nameofstudent);
        name_array.push(nameofstudent);
    }
    console.log(name_array);
    var length_array= name_array.length;
    console.log(length_array);
    for (var i=0; i< length_array; i++){
        display_student_array.push("<h4>Name-"+name_array[i]+"</h4>");
        
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    
    var remove_comma= display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_array.sort();
    console.log(name_array);
    var display_array_sorting= [];
    var length_array=name_array.length;
    for (var k=0; k< length_array; k++){
        display_array_sorting.push("<h4>Name-"+name_array[k]+"</h4>");
    }
    console.log(display_array_sorting);
    var remove_comma= display_array_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}
function newupdate(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+name_array+"</h1>";

} 