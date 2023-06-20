const button = document.querySelector("#buttonId") as HTMLButtonElement;

if (button) {
  button.addEventListener("click", () => {
    console.log("Click");
  });
}
