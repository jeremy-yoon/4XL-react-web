import styled, { css } from "styled-components";

// margin : ${props => props.margin.map(i => i + 'px') || 0};

export const Sdiv = styled.div`
  ${(props) => props.row && row}
  ${(props) => props.col && col}
  ${(props) => props.ct && ct}
  ${(props) => props.start && start}
  ${(props) => props.aend && aend}
  ${(props) => props.jend && jend}
  ${(props) => props.act && act}
  ${(props) => props.jct && jct}
  ${(props) => props.sb && sb}

  ${(props) => props.white && white}

  /*마진 속성*/
  ${(props) => props.mg && mg}
  margin-top: ${(props) => props.mgt || 0}px;
  margin-bottom: ${(props) => props.mgb || 0}px;
  margin-left: ${(props) => props.mgl || 0}px;
  margin-right: ${(props) => props.mgr || 0}px;

  /*패딩 속성*/
  padding-top: ${(props) => props.pdt || 0}px;
  padding-bottom: ${(props) => props.pdb || 0}px;
  padding-left: ${(props) => props.pdl || 0}px;
  padding-right: ${(props) => props.pdr || 0}px;

  /*나머지 속성*/
  ${(props) => props.bg && bg}
  border-radius: ${(props) => props.br || 0}px;

  ${(props) => props.flex && flex}

  width: ${(props) => props.w || "auto"};
  height: ${(props) => props.h || "auto"};
`;

const mg = css`
  margin: ${(props) => props.mg}px;
`;
const bg = css`
  background-color: ${(props) => props.bg};
`;
const flex = css`
  flex: ${(props) => props.flex};
`;

const row = css`
  display: flex;
  flex-direction: row;
`;
const col = css`
  display: flex;
  flex-direction: column;
`;

const ct = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const sb = css`
  display: flex;
  justify-content: space-between;
`;

const start = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const aend = css`
  display: flex;
  align-items: flex-end;
`;

const jend = css`
  display: flex;
  justify-content: flex-end;
`;

const jct = css`
  display: flex;
  justify-content: center;
`;

const act = css`
  display: flex;
  align-items: center;
`;

const white = css`
  background-color: white;
`;
