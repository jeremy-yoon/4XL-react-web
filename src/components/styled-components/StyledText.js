import styled, { css } from "styled-components";

export const Stext = styled.span`
  ${(props) => props.h1 && h1}
  ${(props) => props.h2 && h2}
  ${(props) => props.h3 && h3}
  ${(props) => props.s1 && s1}
  ${(props) => props.s2 && s2}
  ${(props) => props.s3 && s3}
  ${(props) => props.s4 && s4}
  ${(props) => props.b1 && b1}
  ${(props) => props.b2 && b2}
  ${(props) => props.c1 && c1}
  ${(props) => props.c2 && c2}

  ${(props) => props.black && black}
  ${(props) => props.white && white}

  margin-top: ${(props) => props.mgt || 0}px;
  margin-bottom: ${(props) => props.mgb || 0}px;
  margin-left: ${(props) => props.mgl || 0}px;
  margin-right: ${(props) => props.mgr || 0}px;

  padding-top: ${(props) => props.pdt || 0}px;
  padding-bottom: ${(props) => props.pdb || 0}px;
  padding-left: ${(props) => props.pdl || 0}px;
  padding-right: ${(props) => props.pdr || 0}px;

  ${(props) => props.ct && ct}
  ${(props) => props.left && left}
  ${(props) => props.right && right}
`;

const h1 = css`
  font-family: Helvetica-Black;
  font-size: 160px;
  line-height: 160px;
  letter-spacing: 0.05em;
`;
const h2 = css`
  font-family: Helvetica-ExtraBold;
  font-size: 120px;
  line-height: 130px;
`;
const h3 = css`
  font-family: Helvetica-ExtraBold;
  font-size: 24px;
  line-height: 30px;
`;
const s1 = css`
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
`;
const s2 = css`
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`;
const s3 = css`
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
`;
const s4 = css`
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
`;
const b1 = css`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
const b2 = css`
  font-family: Helvetica-Regular;
  font-size: 14px;
  line-height: 20px;
`;
const c1 = css`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
`;
const c2 = css`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 18px;
`;

// const primary = css`
//   color: ${colors.primary};
// `;
const black = css`
  color: ${(props) =>
    props.theme.colors.titleColor ? props.theme.colors.titleColor : black};
  transition: all 0.25s linear;
`;
// const g0 = css`
//   color: ${colors.gray0};
// `;
// const g1 = css`
//   color: ${colors.gray1};
// `;
// const g2 = css`
//   color: ${colors.gray2};
// `;
// const g3 = css`
//   color: ${colors.gray3};
// `;
// const g4 = css`
//   color: ${colors.gray4};
// `;
// const g5 = css`
//   color: ${colors.gray5};
// `;
// const g6 = css`
//   color: ${colors.gray6};
// `;
// const g7 = css`
//   color: ${colors.gray7};
// `;
const white = css`
  color: ${(props) =>
    props.theme.colors.titleColor ? props.theme.colors.titleColor : white};
  transition: all 0.25s linear;
`;

const ct = css`
  text-align: center;
`;
const left = css`
  text-align: left;
`;
const right = css`
  text-align: right;
`;
