document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const gender = document.getElementById('gender').value;
        const mobileNumber = document.getElementById('mobileNumber').value;
        const email = document.getElementById('email').value;
        
       
        document.getElementById('resultFirstName').textContent = firstName;
        document.getElementById('resultLastName').textContent = lastName;
        document.getElementById('resultGender').textContent = gender;
        document.getElementById('resultMobileNumber').textContent = mobileNumber;
        document.getElementById('resultEmail').textContent = email;
      
        document.getElementById('formResults').style.display = 'block';
    });
});


