// Add Recommendation to the List
function addRecommendation() {
  // Get the message from the textarea
  let recommendation = document.getElementById("new_recommendation");

  // Check if the recommendation field is not empty
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");

    // Create a new 'recommendation' element and add the user's message
    let element = document.createElement("div");
    element.setAttribute("class", "recommendation highlight"); // Add 'highlight' class to newly added recommendation
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";

    // Append the new recommendation to the list
    document.getElementById("all_recommendations").appendChild(element);

    // Show the popup
    showPopup(true, "Thank you for your recommendation!");

    // Scroll to the newly added recommendation smoothly
    element.scrollIntoView({ behavior: "smooth" });

    // Highlight the newly added recommendation for a few seconds
    setTimeout(() => {
      element.classList.remove("highlight");
    }, 3000); // Removes the highlight after 3 seconds

    // Reset the value of the textarea
    recommendation.value = "";
  } else {
    // Show an error message if the field is empty
    showPopup(true, "Please enter a valid recommendation.");
  }
}

// Show or Hide the Popup
function showPopup(bool, message = "") {
  let popup = document.getElementById("popup");
  let popupText = popup.querySelector("h3");

  // Set the message inside the popup
  popupText.textContent = message;

  if (bool) {
    popup.style.visibility = "visible";
    popup.style.opacity = 1; // Smooth fade-in effect
    popup.style.transform = "translate(-50%, -50%) scale(1)";

    // Hide popup automatically after 3 seconds
    setTimeout(() => {
      showPopup(false);
    }, 3000);
  } else {
    popup.style.opacity = 0; // Smooth fade-out effect
    popup.style.transform = "translate(-50%, -50%) scale(0.9)";
    setTimeout(() => {
      popup.style.visibility = "hidden";
    }, 500); // Wait for the fade-out effect to complete before hiding
  }
}
