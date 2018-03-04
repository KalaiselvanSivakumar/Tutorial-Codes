var themeColors = ["#16754F", "#164575", "#167175", "#4C1675", "#751665", "#751630", "#5E7516", "#754616"];
var currentTheme = 0;

function changeColorUsingCSSVariable() {
    var cssElement = document.querySelector(':root');
    var styleConfig = getComputedStyle(cssElement);
    var currentColor = styleConfig.getPropertyValue('--theme-color')
                                .trim();
    if (themeColors.indexOf(currentColor) === currentTheme) {
        currentTheme = (currentTheme + 1) % themeColors.length;
    } else {
        currentTheme = 0;
    }
    cssElement.style.setProperty('--theme-color', themeColors[currentTheme]);
}