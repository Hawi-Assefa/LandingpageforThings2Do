document.addEventListener('DOMContentLoaded', function() {
    var emailForm = document.getElementById('email-form');
  
    emailForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var emailInput = document.getElementById('email-input').value;
      var link = 'https://hawi-assefa.github.io/HawisThings2Do/' ;
      window.location.href = link;
    });
  });