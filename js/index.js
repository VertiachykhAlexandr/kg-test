const range = document.querySelector(".form__range-input");
const rangeValue = document.querySelector(".form__range-value span");

range.addEventListener("input", (event) => {
  const currentRangeValue = event.target.value;
  rangeValue.textContent = currentRangeValue;
});

const inputField = document.querySelector(".form__select-input");
const dropdown = document.querySelector(".form__select-list");
const dropdownArray = document.querySelectorAll(".form__select-item");
const selectImage = document.querySelector(".form__select-image");
const selectWrap = document.querySelector(".form__select");

inputField.addEventListener("click", () => {
  dropdown.classList.add("open");
  selectWrap.classList.add("active");
  selectImage.src = "../assets/images/arrow-white.png";
  dropdownArray.forEach((dropdown) => {
    dropdown.classList.remove("closed");
  });
});

console.log(dropdownArray);
dropdownArray.forEach((item) => {
  console.log(item.textContent);
  item.addEventListener("click", (evt) => {
    inputField.value = item.textContent;
    dropdownArray.forEach((dropdown) => {
      dropdown.classList.add("closed");
      selectImage.src = "../assets/images/arrow-dropdown.png";
      selectWrap.classList.remove("active");
    });
  });
});

document.addEventListener("click", (evt) => {
  const isDropdown = dropdown.contains(evt.target);
  const isInput = inputField.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown.classList.remove("open");
    selectImage.src = "../assets/images/arrow-dropdown.png";
    selectWrap.classList.remove("active");
  }
});

const dots = document.querySelector(".dots");

const schemeItems = document.querySelectorAll(".scheme__item");
console.log(schemeItems);

for (let i = 0; i < schemeItems.length * 6; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dots__item");
  dots.appendChild(dot);
}
