function getAge(){
    
  var sel = document.getElementById("category");
  var text = sel.options[sel.selectedIndex].value;
  //sen =  document.getElementById('age');
 //senCheck =  document.getElementById('txtsenior');
   var dob = document.getElementById('dob').value;
   dob = new Date(dob);
   var today = new Date();
   var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
   document.getElementById('age').value=age;

/** 

 if (text == 'A2' || text == 'BR')
    {

       if(age <= 58  )
       {
         document.getElementById("agenote").innerHTML = "Ang kategoryang ito ay para sa edad 60 pataas lamang.";
        // alert("Ang Registration na ito ay para lamang sa Senior.");
         document.getElementById('age').value="";
        dob = '';
       }else{
          document.getElementById("agenote").innerHTML = "";
       }

     }
     
    
      if (text != 'A2' || text != 'BR')
    {

     if (age <=17)
     {
        document.getElementById("agenote").innerHTML = "Ang kategoryang ito ay para sa edad 18-59.";
         document.getElementById('txtage').value="";

     }else{
        document.getElementById("demo1").innerHTML = "";
     }

    } 
    
    
    
      if (text == 'A3')
    {

       if(age >= 60 )
       {
         document.getElementById("demo").innerHTML = "Ang kategoryang ito ay para sa edad 18-59.";
        // alert("Ang Registration na ito ay para lamang sa Senior.");
         document.getElementById('txtage').value="";
        dob = '';
       }else{
          document.getElementById("demo").innerHTML = "";
       }
     }


      if (text == 'A4' || text == 'A5' || text == 'B1' || text == 'B2' || text == 'B3' || text == 'B4' || text == 'B5' || text == 'B6' || text == 'C' )
    {

       if(age >= 60 )
       {
         document.getElementById("demo").innerHTML = "Ang kategoryang ito ay para sa edad 18-59.";
        // alert("Ang Registration na ito ay para lamang sa Senior.");
         document.getElementById('txtage').value="";
        dob = '';
       }else{
          document.getElementById("demo").innerHTML = "";
       }
     }
     */
     
   
   /** if (age < 18){
   //alert("Ang Registration na ito ay para lamang sa 18 Years Old pataas.");
   //document.getElementById('txtage').value='';
   //document.getElementById('txtbday').value='';
   document.getElementById("agenote").innerHTML = "Ang kategoryang ito ay para sa edad 18 pataas lamang.";
   // alert("Ang Registration na ito ay para lamang sa Senior.");
   document.getElementById('age').value="";
   dob = '';
     } 
     else{
      document.getElementById("agenote").innerHTML = "";
     }*/

     if (age>=12 && age<=17){
      //alert("Ang Registration na ito ay para lamang sa 18 Years Old pataas.");
      //document.getElementById('txtage').value='';
      //document.getElementById('txtbday').value='';
      // alert("Ang Registration na ito ay para lamang sa Senior.");
      document.getElementById("agenote").innerHTML = "";
        } 
        else{
         document.getElementById("agenote").innerHTML = "Ang kategoryang ito ay para sa edad 12 hanggang 17 pataas lamang.";
         document.getElementById('age').value="";
         dob = '';
        }
 
 
}
