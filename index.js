window.setTimeout(popupAppears, 5000);

let popup = document.createElement("div");

function popupAppears() {
    //create
    popup.className = "popup";
    document.body.prepend(popup);
    let x = document.createElement("span");
    x.className = "x";
    x.textContent = "X";
    popup.appendChild(x);
    let centered = document.createElement("span");
    centered.className = "centered";
    popup.appendChild(centered);
    let lineOne = document.createElement("p");
    lineOne.className = "line-one";
    lineOne.textContent = "We've got a deal for you.";
    let lineTwo = document.createElement("p");
    lineTwo.className = "line-two";
    lineTwo.textContent = "Click below for your very special offer, just for you.";
    let claim = document.createElement("button");
    claim.className = "claim-btn";
    claim.textContent = "Claim Now";
    centered.appendChild(lineOne);
    centered.appendChild(lineTwo);
    centered.appendChild(claim);

    //listen
    x.addEventListener("click", putAway)
    claim.addEventListener("click", moveDown)
}

function putAway(e) {
    popup.style.display = "none";
}

function moveDown(e) {
    popup.className = "popdown";
}