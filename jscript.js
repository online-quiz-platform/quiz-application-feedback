document.addEventListener("DOMContentLoaded", function () {
  const submitQuizButton = document.getElementById("submitQuizButton");
  const feedbackPopup = document.getElementById("feedbackPopup");
  const rateTitle = document.querySelector(".popup-content h2");
  const feedbackForm = document.getElementById("feedbackForm");
  const ratingInput = document.getElementById("rating");
  const numberCircle = document.getElementById("numberCircle");
  const commentsInput = document.getElementById("comments");
  const closeFeedbackPopup = document.getElementById("closeFeedbackPopup");
  const thankYouPopup = document.getElementById("thankYouPopup");
  const closeThankYouPopup = document.getElementById("closeThankYouPopup");

  // Show feedback popup and hide submit button
  submitQuizButton.addEventListener("click", function () {
    feedbackPopup.style.display = "block";
    submitQuizButton.style.display = "none";
    rateTitle.classList.add("flash");
    setTimeout(() => {
      rateTitle.classList.remove("flash");
    }, 500);
  });

  // Close feedback popup and show submit button
  closeFeedbackPopup.addEventListener("click", function () {
    feedbackPopup.style.display = "none";
    submitQuizButton.style.display = "block";
  });

  // Close thank you popup
  closeThankYouPopup.addEventListener("click", function () {
    thankYouPopup.style.display = "none";
  });

  // Handle star rating selection
  const stars = document.querySelectorAll(".star");

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      ratingInput.value = value;
      stars.forEach((s) => {
        s.classList.remove("selected");
        s.classList.remove("hover");
      });
      for (let i = 0; i < value; i++) {
        stars[i].classList.add("selected");
      }
    });

    star.addEventListener("mouseover", function () {
      const value = this.getAttribute("data-value");
      stars.forEach((s) => s.classList.remove("hover"));
      for (let i = 0; i < value; i++) {
        stars[i].classList.add("hover");
      }
    });

    star.addEventListener("mouseout", function () {
      stars.forEach((s) => s.classList.remove("hover"));
    });
  });

  // Generate number circles dynamically
  const totalNumbers = 10; // Number of circles to generate

  for (let i = 1; i <= totalNumbers; i++) {
    const span = document.createElement("span");
    span.textContent = i;
    span.setAttribute("data-value", i);
    span.classList.add("number-circle-span");
    numberCircle.appendChild(span);

    // Click event to select number circle
    span.addEventListener("click", function () {
      const selectedSpan = numberCircle.querySelector(".selected");
      if (selectedSpan) {
        selectedSpan.classList.remove("selected");
      }
      span.classList.add("selected");
      document.getElementById("recommend").value =
        span.getAttribute("data-value");
    });
  }

  // Form submission
  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const rating = ratingInput.value;
    const recommend = document.getElementById("recommend").value;
    const comments = commentsInput.value;

    if (!rating || !recommend || !comments) {
      alert("Please fill all the fields.");
      return;
    }

    feedbackPopup.style.display = "none";
    thankYouPopup.style.display = "block";
  });

  // Cancel button functionality
  document
    .getElementById("cancelButton")
    .addEventListener("click", function () {
      feedbackForm.reset();
      feedbackPopup.style.display = "none";
      submitQuizButton.style.display = "block";
    });
});
