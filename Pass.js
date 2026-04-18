// Admin login
const loginBtn = document.getElementById('loginBtn1');
const loginPass = document.getElementById('loginPass1');
const errorMessage = document.getElementById('error-message1');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const password = loginPass.value.trim();
        
        // ✅ Correct password check (match with HTML IDs)
        if (password === '001@Thuli_$Deshan:T1-M:T' || password === 'E001@U_M_R:Admin-M/T') {
            showToast('✅ Login successful! Redirecting...');
            window.location.href = "My english Admin.html";
        } else {
            errorMessage.style.display = 'block';
            loginPass.value = '';
            showToast('❌ Invalid password!', true);
        }
    });
    
    // Enter key support
    loginPass.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });
}