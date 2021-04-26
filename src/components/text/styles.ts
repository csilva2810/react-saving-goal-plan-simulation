import styled from 'styled-components';
import {
  variant,
  typography,
  color,
  TypographyProps,
  ColorProps,
} from 'styled-system';

type TextProps = TypographyProps &
  ColorProps & {
    variant?:
      | 'label'
      | 'paragraph'
      | 'subtitle'
      | 'headingSmall'
      | 'headingMedium'
      | 'caption';
  };
const Text = styled('div')<TextProps>(
  color,
  typography,
  variant({
    prop: 'variant',
    variants: {
      label: {
        fontFamily: 'Work Sans',
        fontSize: ['12px', '14px'],
        lineHeight: '150%',
      },
      paragraph: {
        fontFamily: 'Work Sans',
        fontSize: ['14px', '16px'],
        lineHeight: '150%',
      },
      subtitle: {
        fontFamily: 'Work Sans',
        fontSize: ['18px', '20px'],
        lineHeight: '120%',
      },
      headingSmall: {
        fontFamily: 'Rubik',
        fontSize: ['20px', '22px'],
        lineHeight: '120%',
      },
      headingMedium: {
        fontFamily: 'Rubik',
        fontSize: ['24px', '32px'],
        lineHeight: '120%',
      },
      caption: {
        fontFamily: 'Work Sans',
        fontSize: '12px',
        lineHeight: '130%',
      },
    },
  })
);

Text.defaultProps = {
  variant: 'paragraph',
};

export default Text;
