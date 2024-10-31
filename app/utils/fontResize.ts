const MAX_LIMIT = 3;
const MIN_LIMIT = -3;

let fontSizeProperties = [
    '--bannerHeadingSize',
    '--mainHeadingSize',
    '--secTitleSize',
    '--subHeadingFontSize',
    '--contentFontSize',
    '--cardTitleFontSize',
    '--profileCardTitleFontSize',
    '--profileCardRoleFontSize',
    '--newsMainTitleFontSize',
    '--newsListTitleFontSize',
    '--newsDateFontSize',
    '--ctaBorderFontSize',
    // '--homeIndicatorsFontSize',
    // '--homeIndicatorsSubSupFontSize',
    // '--homeIndicatorsLabelFontSize',
    '--innerIndicatorFontSize',
    '--innerIndicatorsLabelFontSize',
    '--poppinsContentFontSize',
    '--paragrapghLgFontSize',
    '--copyRightFontSize'
   
  ];
  let lineHeightProperties = [
   '--bannerHeadingLineHeight',
   '--mainHeadingLineHeight',
   '--secTitleLineHeight',
   '--subHeadingLineHeight',
   '--contentLineHeight',
   '--cardTitleLineHeight',
   '--profileCardTitleLineHeight',
   '--profileCardRoleLineHeight',
   '--newsMainTitleLineHeight',
   '--newsListTitleLineHeight',
   '--newsDateLineHeight',
   '--ctaBorderLineHeight',
//    '--homeIndicatorsLineHeight',
//    '--homeIndicatorsSubLineHeight',
//    '--homeIndicatorsLabelLineHeight',
   '--innerIndicatorLineHeight',
   '--innerIndicatorsLabelLineHeight',
   '--poppinsContentLineHeight',
   '--paragrapghLgLineHeight',
   '--copyRightLineHeight'
  ];
  const allProperties = [...fontSizeProperties, ...lineHeightProperties];

let counter = 0;

export const increaseCSSProperties = () => {
    if (counter < MAX_LIMIT) {
        const root = document.documentElement;
        allProperties.forEach((property) => {
            const currentValue = getComputedStyle(root).getPropertyValue(property).trim();
            const numericValue = parseInt(currentValue, 10);
            root.style.setProperty(property, (numericValue + 1) + 'px');
        });
        counter++;
    } else {
    }
};

export const decreaseCSSProperties = () => {
    if (counter > MIN_LIMIT) {
        const root = document.documentElement;
        allProperties.forEach((property) => {
            const currentValue = getComputedStyle(root).getPropertyValue(property).trim();
            const numericValue = parseInt(currentValue, 10);
            root.style.setProperty(property, (numericValue - 1) + 'px');
        });
        counter--;
    } else {
    }
};

export const resetCSSProperties = () => {
    const root = document.documentElement;
    allProperties.forEach((property) => {
        root.style.removeProperty(property);
    });
    counter = 0;  // Reset the counter as well
};
