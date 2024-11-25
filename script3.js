// Get references to elements
const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItemBtn");
const deleteItemBtn = document.getElementById("deleteItemBtn");
const moveUpBtn = document.getElementById("moveUpBtn");
const moveDownBtn = document.getElementById("moveDownBtn");
const changeColorBtn = document.getElementById("changeColorBtn");
const changeFontBtn = document.getElementById("changeFontBtn");
const cartItems = document.getElementById("cartItems");

// Function to add an item
addItemBtn.addEventListener("click", () => {
    const itemName = itemInput.value.trim();
    if (itemName === "") return alert("Enter an item!");
    const li = document.createElement("li");
    li.textContent = itemName;
    li.addEventListener("click", () => selectItem(li));
    cartItems.appendChild(li);
    itemInput.value = "";
});

// Function to select an item
function selectItem(item) {
    document.querySelectorAll("#cartItems li").forEach((li) => li.classList.remove("selected"));
    item.classList.add("selected");
}

// Function to delete the selected item
deleteItemBtn.addEventListener("click", () => {
    const selectedItem = document.querySelector("#cartItems .selected");
    if (selectedItem) selectedItem.remove();
    else alert("No item selected!");
});

// Function to move the selected item up
moveUpBtn.addEventListener("click", () => {
    const selectedItem = document.querySelector("#cartItems .selected");
    if (selectedItem && selectedItem.previousElementSibling) {
        cartItems.insertBefore(selectedItem, selectedItem.previousElementSibling);
    }
});

// Function to move the selected item down
moveDownBtn.addEventListener("click", () => {
    const selectedItem = document.querySelector("#cartItems .selected");
    if (selectedItem && selectedItem.nextElementSibling) {
        cartItems.insertBefore(selectedItem.nextElementSibling, selectedItem);
    }
});

// Function to change the color of the selected item
changeColorBtn.addEventListener("click", () => {
    const selectedItem = document.querySelector("#cartItems .selected");
    if (selectedItem) {
        selectedItem.style.backgroundColor = "orange";
        selectedItem.style.color = "white";
    } else {
        alert("No item selected!");
    }
});

// Function to change the font of the selected item
changeFontBtn.addEventListener("click", () => {
    const selectedItem = document.querySelector("#cartItems .selected");
    if (selectedItem) {
        selectedItem.style.fontFamily = "Courier New, monospace";
        selectedItem.style.fontSize = "18px";
    } else {
        alert("No item selected!");
    }
});
