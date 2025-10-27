let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
// Existing FAQ code remains
// Sign In Modal
const signinBtn = document.querySelector(".signin__button");


const modal = document.getElementById("signinModal");
const closeBtn = document.querySelector(".close-btn");
const signinForm = document.getElementById("signinForm");

// Open modal
signinBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal on X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicked outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
// Handle Sign In form submit
document.getElementById("signinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("signinEmail").value;
  const password = document.getElementById("signinPassword").value;

  // Dummy check (you can change credentials here)
  if (email === "Sumit@gmail.com" && password === "123") {
    alert("Login successful!");
    window.location.href = "main.html"; // redirect to main Netflix page
  } else {
    alert("Invalid email or password");
  }
});
// Handle Get Started button
document.getElementById("getStartedBtn").addEventListener("click", function(e) {
  e.preventDefault();

  const emailInput = document.getElementById("signupEmail").value;

  if (!emailInput) {
    alert("Please enter your email.");
    return;
  }

  // Pre-fill the email in the Sign In modal
  document.getElementById("signinEmail").value = emailInput;

  // Open Sign In modal
  document.getElementById("signinModal").style.display = "flex";
});
getStartedBottomBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const bottomEmailInput = document.querySelector('.FAQ__get__started__email .email__input').value;

  if (!bottomEmailInput) {
    alert("Please enter your email.");
    return;
  }

  // Pre-fill email in Sign In modal
  signinEmail.value = bottomEmailInput;
  signinPassword.value = ''; // clear password field

  // Open Sign In modal
  signinModal.style.display = 'flex';
});
