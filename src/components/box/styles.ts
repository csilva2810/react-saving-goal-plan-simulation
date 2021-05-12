import styled from 'styled-components';
import {
  space,
  layout,
  color,
  flexbox,
  grid,
  SpaceProps,
  LayoutProps,
  ColorProps,
  FlexboxProps,
  GridProps,
} from 'styled-system';

type Props = SpaceProps & LayoutProps & ColorProps & FlexboxProps & GridProps;

const Box = styled('div')<Props>(space, layout, color, flexbox, grid);

export default Box;
