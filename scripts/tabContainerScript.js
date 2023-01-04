var tabsButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");
var projectSection = document.querySelector("#projects");

function showPanel(panelIndex, panelColor, textColor, height) {
    tabsButtons.forEach(function(node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabsButtons[panelIndex].style.backgroundColor = panelColor;
    tabsButtons[panelIndex].style.color = textColor;
    tabPanels.forEach(function(node) {
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "grid";
    tabPanels[panelIndex].style.backgroundColor = panelColor;
    projectSection.style.height = height;
}

showPanel(0, 'white', 'crimson',);
