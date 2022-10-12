import { css } from "styled-components";

export const FocusStyle = css`
  outline: 2px solid ${(p) => p.theme.palette.warning.active};
  outline-offset: 0.5rem;
`;
