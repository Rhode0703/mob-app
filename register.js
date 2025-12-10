const registerForm = document.getElementById("registerForm");
const cancelBtn = document.getElementById("cancelBtn");
const errorMsg = document.getElementById("errorMsg");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const gmail = document.getElementById("gmail").value.trim();
  const seat = document.getElementById("seat").value;
  const platform = document.getElementById("platform").value;

  if (!name || !address || !gmail || !seat || !platform) {
    errorMsg.textContent = "Please fill all fields!";
    return;
  }

  // Save user info to localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("address", address);
  localStorage.setItem("gmail", gmail);
  localStorage.setItem("seat", seat);
  localStorage.setItem("platform", platform);

  // Go to reference page
  window.location.href = "reference.html";
});

cancelBtn.addEventListener("click", () => {
  registerForm.reset();
  errorMsg.textContent = "";
});
