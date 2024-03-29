// The size of the image and success message changes based on the size of the browser window
const form = document.querySelector(".form");
const image = document.querySelector(".img");

const mobileImage = "./assets/images/illustration-sign-up-mobile.svg";
const desktopImage = "./assets/images/illustration-sign-up-desktop.svg";

const changeLink = (widht) => {
  if (widht <= 625) {
    image.src = mobileImage;
  } else {
    image.src = desktopImage;
  }
};
changeLink(window.innerWidth);

window.addEventListener("resize", () => {
  changeLink(window.innerWidth);
});

document.body.onload = () => {
  changeLink(window.innerWidth);
};

//
if (form) {
  const emailInput = form.querySelector('input[name="email"]');
  const errorSpan = document.querySelector("span");

  emailInput.addEventListener("input", () => {
    const isValid = validateEmail(emailInput.value);
    updateErrorDisplay(isValid);
  });

  form.addEventListener("submit", (event) => {
    if (!validateEmail(emailInput.value)) {
      event.preventDefault();
      updateErrorDisplay(false);
    } else {
      // شيل الرسالة دي وحط بتاعة البريد الي حابب ترسلها
      event.preventDefault();
      console.log("Valid email, form submitted!");
      window.location.href = "./src/pages/active.html";
      window.localStorage.setItem("email", emailInput.value);
    }
  });

  function validateEmail(email) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  function updateErrorDisplay(isValid) {
    errorSpan.style.display = isValid ? "none" : "inline-block";
    emailInput.style.cssText = isValid
      ? ""
      : "background-color: #ffe8e4; border-color: red; color: #ff6257;";
  }
}

