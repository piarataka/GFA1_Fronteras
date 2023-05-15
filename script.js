var firstNameInput = document.getElementById("Fname");
var lastNameInput = document.getElementById("Lname");
var emailInput = document.getElementById("Email");
var genderInputs = document.getElementsByName("gender");
var resetButton = document.getElementById("reset");
var submitButton = document.getElementById("submit");


submitButton.addEventListener("click", function(event) {
event.preventDefault(); 
  

var firstName = firstNameInput.value;
var lastName = lastNameInput.value;
var email = emailInput.value;
var selectedGender = getSelectedGender();
  
  
  if (firstName === "" || lastName === "" || email === "" || selectedGender === "") 

    { alert("Please fill out all fields.");
  
  } 

  else {
    
        window.location.href = "extra.html";
  }

});


resetButton.addEventListener("click", function() 
  {
    resetForm();

  });


function getSelectedGender() {
  for (var i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      return genderInputs[i].value;
    }
  }
  return "";
}


function resetForm() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  for (var i = 0; i < genderInputs.length; i++) {
    genderInputs[i].checked = false;
  }
}
