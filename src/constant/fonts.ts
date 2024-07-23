const FontFamily = {
  Regular: 'Poppins-Regular',
  Bold: 'Poppins-Bold',
  SemiBold: 'Poppins-SemiBold',
  Black: 'Poppins-Black',
  Light: 'Poppins-Light',
  Medium: 'Poppins-Medium',
  Thin: 'Poppins-Thin ',
} as const;

type Fonts = keyof typeof FontFamily;

export {FontFamily};
export type {Fonts};
