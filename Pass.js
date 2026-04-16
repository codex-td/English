
 // Admin login simulation (extra)
  const loginBtn = document.getElementById('loginBtn');
  const loginPass = document.getElementById('loginPass');
  const errorMessage = document.getElementById('error-message');

  if(loginBtn) {
    loginBtn.addEventListener('click', () => {
      const password = loginPass.value.trim();
      if(password === '001@Thuli_$Deshan:T1-M:T') {
        showToast('✅ Login successful! Redirecting...');
        window.location.href ="My english Admin.html";
      } else {
        errorMessage.classList.remove('hidden1');
        loginPass.value = '';
      }
    });
  }