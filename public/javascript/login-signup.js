document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('login-signup-bg');
  document.querySelectorAll('.show-password-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      // Find the input just before the toggle in the same input group
      const pwd = toggle.parentElement.querySelector('input[type=\"password\"], input[type=\"text\"]');
      const icon = toggle.querySelector('i');
      if (pwd.type === 'password') {
        pwd.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        pwd.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  });
});