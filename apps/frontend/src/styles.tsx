export const productionStyle = {};
export const developmentStyle = {
  minHeight: '40px',
  margin: '0',
  padding: '5px',
  cursor: 'pointer',
  backgroundColor: '#fff',
  border: '1px dotted #000',
};
export const devHoverContainer = {
  ...developmentStyle,
  backgroundColor: '#c2c0c0',
};

export const style = (isDev: boolean, hovered: boolean) => {
  if (isDev) {
    if (hovered) {
      return devHoverContainer;
    } else {
      return developmentStyle;
    }
  } else {
    return productionStyle;
  }
};
