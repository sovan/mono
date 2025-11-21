export const productionStyle = {};
export const developmentStyle = {
  minHeight: '40px',
  margin: '0',
  padding: '5px',
  cursor: 'pointer',
  backgroundColor: '#fff',
  border: '1px dotted',
};

export const devContainer = {
  ...developmentStyle,
  borderColor: '#5c1aeb',
};
export const devHoverContainer = {
  ...devContainer,
  backgroundColor: '#5c1aeb',
};

export const devRow = { ...developmentStyle, borderColor: '#bc2188' };
export const devHoverRow = { ...devContainer, backgroundColor: '#bc2188' };

export const devCol = { ...developmentStyle, borderColor: '#d2d912' };
export const devHoverCol = { ...developmentStyle, backgroundColor: '#d2d912' };

export const devText = { ...developmentStyle, borderColor: '#d98888' };
export const devHoverText = { ...developmentStyle, backgroundColor: '#d98888' };

export const devForm = { ...developmentStyle, borderColor: '#1aeb4b' };
export const devHoverForm = { ...developmentStyle, backgroundColor: '#1aeb4b' };
