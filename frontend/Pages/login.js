document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new URLSearchParams(new FormData(this));

    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            document.getElementById('errorMessage').textContent = errorMessage;
            document.getElementById('errorMessage').style.display = 'block';
        } else {
            // Redirect to home page or perform other actions on successful login
            window.location.href = '/home';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
const wrapper = document.querySelector(".wrapper"),
          signupHeader = document.querySelector(".signup header"),
          loginHeader = document.querySelector(".login header");

        loginHeader.addEventListener("click", () => {
          wrapper.classList.add("active");
        });
        signupHeader.addEventListener("click", () => {
          wrapper.classList.remove("active");
        });