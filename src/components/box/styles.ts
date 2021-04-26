import styled from 'styled-components';
import {
  space,
  layout,
  color,
  flexbox,
  SpaceProps,
  LayoutProps,
  ColorProps,
  FlexboxProps,
} from 'styled-system';

type Props = SpaceProps & LayoutProps & ColorProps & FlexboxProps;

const Box = styled('div')<Props>(space, layout, color, flexbox);

export default Box;
