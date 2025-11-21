export const developmentStyle = {
  minHeight: '40px',
  margin: '0',
  padding: '5px',
  border: '1px dotted',
  cursor: 'pointer',
  backgroundColor: '#fff',
};
export const productionStyle = {};
export const devText = { ...developmentStyle, borderColor: '#f00' };
export const devForm = { ...developmentStyle, borderColor: '#1aeb4b' };
export const devRow = { ...developmentStyle, borderColor: '#bc2188' };
export const devCol = { ...developmentStyle, borderColor: '#d2d912' };
export const devContainer = {
  ...developmentStyle,
  borderColor: '#5c1aeb',
};

export const devHoverContainer = {
  ...devContainer,
  backgroundColor: '#5c1aeb',
};
export const devHoverRow = { ...devContainer, backgroundColor: '#bc2188' };

export const devHoverCol = { ...developmentStyle, backgroundColor: '#d2d912' };
export const devHoverText = { ...developmentStyle, backgroundColor: '#f00' };
