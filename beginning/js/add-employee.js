// HANDLE THE LOAD EVENT OF THE WINDOW

window.addEventListener('load', () => {

    
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    
    let width = 800;
    let height = 700;
            
// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
        
    window.resizeTo(width, height);
                 

    // MOVE THE POPUP TO THE MIDDLE OF THE SCREEN

    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));
      
    // HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
    
    
    document.getElementById('cancel').addEventListener('click', () => {

        window.close();
  
    
          
    // CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
      
        let empForm = window.document.getElementById('empForm');
        empForm.addEventListener('submit', () => {
      

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

            e.preventDefault();
    
    // CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
    
            let id;
            let name;
            let extension;
            let email;
            let department;

        
    // SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

            window.document.getElementById("id").value;
            window.document.getElementById("name").value;
            window.document.getElementById("extension").value;
            window.document.getElementById("email").value;
            window.document.getElementById("department").value;
        
    
    // GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

            let output = window.opener.document.getElementById("loginDetails");
    
    // SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

            output.innerHTML = "<br><br>Id: " + id + "<br>Name: " + name + "<br>Extension:" + extension + "<br>Email" + email + "<br>Department:" + department;
    
    
    // CLOSE THE POPUP
    
            window.close();
   
   // THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
        });
    });
});
