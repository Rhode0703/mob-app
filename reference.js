const referenceForm = document.getElementById("referenceForm");
const backBtn = document.getElementById("backBtn");

// Display user info from localStorage
document.getElementById("nameDisplay").textContent = localStorage.getItem("name");
document.getElementById("addressDisplay").textContent = localStorage.getItem("address");
document.getElementById("gmailDisplay").textContent = localStorage.getItem("gmail");
document.getElementById("seatDisplay").textContent = localStorage.getItem("seat");
document.getElementById("platformDisplay").textContent = localStorage.getItem("platform");

// Go back to registration page
backBtn.addEventListener("click", () => {
  window.location.href = "register.html";
});

referenceForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const reference = document.getElementById("reference").value.trim();
  if (!reference) return alert("Please enter a payment reference!");

  const reservationData = {
    name: localStorage.getItem("name"),
    address: localStorage.getItem("address"),
    gmail: localStorage.getItem("gmail"),
    seat: localStorage.getItem("seat"),
    platform: localStorage.getItem("platform"),
    reference,
  };

  try {
    const response = await fetch("http://localhost:3000/reserve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservationData),
    });

    const result = await response.json();
    if (result.success) {
      alert("✅ Reservation successful!");
      localStorage.clear();
      window.location.href = "success.html"; // Optional
    } else {
      alert("Error: " + result.message);
    }
  } catch (err) {
    console.error(err);
    alert("Server error. Please try again later.");
  }
});
