document.onkeydown = (e) => {
    const { keyCode: c } = e;
    switch (c) {
        case 83:
        case 85:
        case 65:
        case 73:
        case 74:
        case 123:
            e.preventDefault();
            break;
    }
};

document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
    document.getElementById("contextMenu").style.display = "none"
}

function rightClick(e) {
    e.preventDefault();
};

$(document).keypress(function(e) {
    return false;
});