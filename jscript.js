document.addEventListener("DOMContentLoaded", function () {
  const submitQuizButton = document.getElementById("submitQuizButton");
  const feedbackPopup = document.getElementById("feedbackPopup");
  const thankYouPopup = document.getElementById("thankYouPopup");
  const closeFeedbackPopup = document.getElementById("closeFeedbackPopup");
  const closeThankYouPopup = document.getElementById("closeThankYouPopup");
  const feedbackForm = document.getElementById("feedbackForm");
  const ratingInput = document.getElementById("rating");
  const recommendInput = document.getElementById("recommend");
  const stars = document.querySelectorAll(".star");

  submitQuizButton.addEventListener("click", function () {
    feedbackPopup.style.display = "block";
    submitQuizButton.style.display = "none";
  });

  closeFeedbackPopup.addEventListener("click", function () {
    feedbackPopup.style.display = "none";
    submitQuizButton.style.display = "block";
  });

  closeThankYouPopup.addEventListener("click", function () {
    thankYouPopup.style.display = "none";
  });

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      ratingInput.value = value;
      stars.forEach((s) => s.classList.remove("selected"));
      for (let i = 0; i < value; i++) {
        stars[i].classList.add("selected");
      }
    });

    star.addEventListener("mouseover", function () {
      stars.forEach((s) => s.classList.remove("hover"));
      for (let i = 0; i < this.getAttribute("data-value"); i++) {
        stars[i].classList.add("hover");
      }
    });

    star.addEventListener("mouseout", function () {
      stars.forEach((s) => s.classList.remove("hover"));
    });
  });

  const numberCircle = document.getElementById("numberCircle");

  for (let i = 1; i <= 10; i++) {
    const span = document.createElement("span");
    span.textContent = i;
    span.setAttribute("data-value", i);
    span.addEventListener("click", function () {
      recommendInput.value = this.getAttribute("data-value");
      document
        .querySelectorAll("#numberCircle span")
        .forEach((s) => s.classList.remove("selected"));
      this.classList.add("selected");
    });
    numberCircle.appendChild(span);
  }

  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const rating = ratingInput.value;
    const recommend = recommendInput.value;
    const comments = document.getElementById("comments").value;

    if (!rating || !recommend || !comments) {
      alert("Please fill all the fields.");
      return;
    }

    feedbackPopup.style.display = "none";
    thankYouPopup.style.display = "block";
  });

  document
    .getElementById("cancelButton")
    .addEventListener("click", function () {
      feedbackForm.reset();
      feedbackPopup.style.display = "none";
      submitQuizButton.style.display = "block";
    });
});
