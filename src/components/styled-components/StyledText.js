import { colors } from "styles/colors";
import styled, { css } from "styled-components";

export const St = styled.span`
  word-break: keep-all;

  ${(props) => props.h1 && h1}
  ${(props) => props.h2 && h2}
  ${(props) => props.h3 && h3}
  ${(props) => props.s1 && s1}
  ${(props) => props.s2 && s2}
  ${(props) => props.s3 && s3}
  ${(props) => props.s4 && s4}
  ${(props) => props.s5 && s5}
  ${(props) => props.b1 && b1}
  ${(props) => props.b2 && b2}
  ${(props) => props.c1 && c1}
  ${(props) => props.c2 && c2}
  ${(props) => props.c3 && c3}

  ${(props) => props.primary && primary}
  ${(props) => props.secondary && secondary}
  ${(props) => props.black && black}
  ${(props) => props.g0 && g0}
  ${(props) => props.g1 && g1}
  ${(props) => props.g2 && g2}
  ${(props) => props.g3 && g3}
  ${(props) => props.g4 && g4}
  ${(props) => props.g5 && g5}
  ${(props) => props.g6 && g6}
  ${(props) => props.g7 && g7} 
  ${(props) => props.white && white}
  ${(props) => props.red && red}
  ${(props) => props.disableSelect && disableSelect} 
  ${(props) => props.color && color} 

  /*마진 속성*/
  ${(props) => props.m && m}
  ${(props) => props.mt && mt}
  ${(props) => props.mb && mb}
  ${(props) => props.ml && ml}
  ${(props) => props.mr && mr}
  ${(props) => props.mx && mx}
  ${(props) => props.my && my}
  /*패딩 속성*/
  ${(props) => props.p && p}
  ${(props) => props.pt && pt}
  ${(props) => props.pb && pb}
  ${(props) => props.pl && pl}
  ${(props) => props.pr && pr}
  ${(props) => props.px && px}
  ${(props) => props.py && py}

  ${(props) => props.center && center}
  ${(props) => props.left && left}
  ${(props) => props.right && right}
`;

const h1 = css`
  font-family: "Pretendard-Bold";
  font-size: 36px;
  line-height: 1.4;
`;
const h2 = css`
  font-family: "Pretendard-Bold";
  font-size: 28px;
  line-height: 1.4;
`;
const h3 = css`
  font-family: "Pretendard-Bold";
  font-size: 20px;
  line-height: 1.4;
`;
const s1 = css`
  font-family: "Pretendard-Bold";
  font-weight: bold;
  font-size: 18px;
  line-height: 1.4;
`;
const s2 = css`
  font-family: "Pretendard-Bold";
  font-weight: bold;
  font-size: 16px;
  line-height: 1.4;
`;
const s3 = css`
  font-family: "Pretendard-Bold";
  font-weight: bold;
  font-size: 14px;
  line-height: 1.4;
`;
const s4 = css`
  font-family: "Pretendard-Bold";
  font-weight: bold;
  font-size: 12px;
  line-height: 1.4;
`;
const s5 = css`
  font-family: "Pretendard-Bold";
  font-weight: bold;
  font-size: 11px;
  line-height: 1.4;
`;
const b1 = css`
  font-family: "Pretendard-Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.4;
`;
const b2 = css`
  font-family: "Pretendard-Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.4;
`;
const c1 = css`
  font-family: "Pretendard-Medium";
  font-size: 13px;
  line-height: 1.4;
`;
const c2 = css`
  font-family: "Pretendard-Medium";
  font-size: 12px;
  line-height: 1.4;
`;
const c3 = css`
  font-family: "Pretendard-Medium";
  font-size: 10px;
  line-height: 1.4;
`;
const primary = css`
  color: ${colors.primary};
`;
const secondary = css`
  color: ${colors.secondary};
`;
const black = css`
  color: ${colors.black};
`;
const g7 = css`
  color: ${colors.g7};
`;
const g6 = css`
  color: ${colors.g6};
`;
const g5 = css`
  color: ${colors.g5};
`;
const g4 = css`
  color: ${colors.g4};
`;
const g3 = css`
  color: ${colors.g3};
`;
const g2 = css`
  color: ${colors.g2};
`;
const g1 = css`
  color: ${colors.g1};
`;
const g0 = css`
  color: ${colors.g0};
`;
const white = css`
  color: ${colors.white};
`;
const red = css`
  color: red;
`;

const color = css`
  color: ${(props) => props.color};
`;

const disableSelect = css`
  user-select: none;
`;

const center = css`
  text-align: center;
`;
const left = css`
  text-align: left;
`;
const right = css`
  text-align: right;
`;

//------------------------------------------------------------------
const p = css`
  padding: ${(props) => props.p}px !important;
`;
const pt = css`
  padding-top: ${(props) => props.pt}px !important;
`;
const pb = css`
  padding-bottom: ${(props) => props.pb}px !important;
`;
const pl = css`
  padding-left: ${(props) => props.pl}px !important;
`;
const pr = css`
  padding-right: ${(props) => props.pr}px !important;
`;
const px = css`
  padding-left: ${(props) => props.px}px !important;
  padding-right: ${(props) => props.px}px !important;
`;
const py = css`
  padding-top: ${(props) => props.py}px !important;
  padding-bottom: ${(props) => props.py}px !important;
`;
//------------------------------------------------------------------
const m = css`
  margin: ${(props) => props.m}px !important;
`;
const mt = css`
  margin-top: ${(props) => props.mt}px !important;
`;
const mb = css`
  margin-bottom: ${(props) => props.mb}px !important;
`;
const ml = css`
  margin-left: ${(props) => props.ml}px !important;
`;
const mr = css`
  margin-right: ${(props) => props.mr}px !important;
`;
const mx = css`
  margin-left: ${(props) => props.mx}px !important;
  margin-right: ${(props) => props.mx}px !important;
`;
const my = css`
  margin-top: ${(props) => props.my}px !important;
  margin-bottom: ${(props) => props.my}px !important;
`;
//------------------------------------------------------------------
