const COLORS = {
  white: '#FFFFFF',
  purple: '#674DEE',
  secondary_purple: '#6C19D8',
  tertiary_purple: '#652D90',
  text_gray: '#848484',
  placeholder_text: '#9B9B9B',
  placeholder_bg: '#F9F9F9',
  placeholder_stroke: '#CACACA',
  black: '#000000',
  yellow: '#F6921E',
  green: '#00CD46',
};

type Colors = keyof typeof COLORS;

export {COLORS};
export type {Colors};
