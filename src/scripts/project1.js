const returnButton = document.getElementById("return"); // Use the correct ID
returnButton.addEventListener("click", () => {
  console.log("done");
});

const linkElement = document.querySelector(
  'link[rel="stylesheet"][href="/src/styles/success.css"]'
);

if (window.innerWidth <= 625) {
  linkElement.href = "../styles/successMob.css";
} else {
  linkElement.href = "../styles/success.css";
}

document.body.onload = () => {
  if (window.innerWidth <= 625) {
    linkElement.href = "../styles/successMob.css";
  } else {
    linkElement.href = "../styles/success.css";
  }
};

// The size of the image and success message changes based on the size of the browser window
const mobileStylesheet = "../styles/successMob.css";
const desktopStylesheet = "../styles/success.css";

const changeLink = (width) => {
  if (width <= 625) {
    linkElement.href = mobileStylesheet;
  } else {
    linkElement.href = desktopStylesheet;
  }
};

const linkElement = document.querySelector(
  'link[rel="stylesheet"][href="/src/styles/success.css"]'
);

changeLink(window.innerWidth);

window.addEventListener("resize", changeLink);