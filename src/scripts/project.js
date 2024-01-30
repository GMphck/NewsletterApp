// const form = document.querySelector(".form");

// window.addEventListener("resize", function () {
//   const image = document.querySelector(".img");

//   if (window.innerWidth <= 625) {
//     image.src = "/assets/images/illustration-sign-up-mobile.svg";
//     console.log("done");
//   } else {
//     image.src = "/assets/images/illustration-sign-up-desktop.svg";
//   }
// });

// document.body.onload = () => {
//   const imoge = document.querySelector(".img");

//   if (window.innerWidth <= 625) {
//     imoge.src = "/assets/images/illustration-sign-up-mobile.svg";
//   }
// };

// The size of the image and success message changes based on the size of the browser window
const form = document.querySelector(".form");
const image = document.querySelector(".img");

// const linkElement = document.querySelector('link[id="activeCss"]');
// console.log(linkElement);

// const mobileStylesheet = "../styles/successMob.css";
// const desktopStylesheet = "../styles/success.css";
const mobileImage = "/assets/images/illustration-sign-up-mobile.svg";
const desktopImage = "/assets/images/illustration-sign-up-desktop.svg";

const changeLink = (widht) => {
  console.log("resize");
  if (widht <= 625) {
    image.src = mobileImage;
    // linkElement.href = mobileStylesheet;

    console.log("size is mobile image");
  } else {
    image.src = desktopImage;
    // linkElement.href = desktopStylesheet;
    console.log("size is desktop image");
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
      window.location.href = "../pages/active.html";
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

// const returnButton = document.getElementById("return");

// returnButton.addEventListener("click", () => {
//   console.log("done");
// });
