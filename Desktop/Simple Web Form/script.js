document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const gender = document.getElementById('gender').value;
        const mobileNumber = document.getElementById('mobileNumber').value;
        const email = document.getElementById('email').value;
        
        
            var input = document.getElementById("firstName");
            if (input.value.length < 8 || input.value.length > 18) {
                alert("Input must be between 8 and 18 characters long.");
                return false;
            }
            
    
       
        document.getElementById("lastName").oninput = function() {
            if (this.value.length < 8 || this.value.length > 18) {
                this.setCustomValidity("Input must be between 8 and 18 characters long.");
            } else {
                this.setCustomValidity("");
            }
        };

        document.getElementById("age").oninput = function() {
            if (this.value.length < 18 || this.value.length > 110) {
                this.setCustomValidity("Input must be between 18 and 110.");
            } else {
                this.setCustomValidity("");
            }
        };

       
            var input = document.getElementById("mobileNumber");
            if (input.value.length < 10 || input.value.length > 10) {
                alert("Input must be 10 characters long.");
                return false;
            }
    



        document.getElementById('resultFirstName').textContent = firstName;
        document.getElementById('resultLastName').textContent = lastName;
        document.getElementById('resultGender').textContent = gender;
        document.getElementById('resultMobileNumber').textContent = mobileNumber;
        document.getElementById('resultEmail').textContent = email;
      
        document.getElementById('formResults').style.display = 'block';
    });
});


