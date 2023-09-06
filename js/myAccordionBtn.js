const accordionItems = document.querySelectorAll(".my-accordion-item");
const accordionItem = document.querySelector(".my-accordion-item");
accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    const createLine = document.createElement("div");
    item.style.cssText =
      "box-shadow: none !important;border: none !important; outline: none;border-right-color: none !important;border-left-color: none !important; border-top-color: none !important;border-bottom-color: none !important;";
    item.append(createLine);
    accordionItem.style.cssText = "position: relative;overflow:hidden;";
    createLine.style.cssText =
      "background-color: #DAA520;position: absolute;width: 5px;height: 100%;left:4.5%";
  });
});

// function showLine() {
//   console.log("btn clicked");
//   //   document.style.display = "block";
//   const createLine = document.createElement("div");
//   //   accordionItem.append(createLine);
//   createLine.style.cssText =
//     "background-color: yellow;position: absolute;width: 5px;height: 100%;left:4%";
// }
