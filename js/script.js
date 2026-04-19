function addItem() {
    const div = document.createElement("div");
    div.className = "alert alert-success mt-3";
    div.innerText = "This element was added using JavaScript";
    document.getElementById("content").appendChild(div);
}