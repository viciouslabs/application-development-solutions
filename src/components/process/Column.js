import styled from 'styled-components';

import { device } from '../../utils/getDevice';

const borderRadiusLeft = "8px 0px 0px 8px";
const borderRadiusRight = "0px 8px 8px 0px";
const borderRadiusCenter = "0px 0px 0px 0px";

const borderRadiusMap = {
  left: borderRadiusLeft,
  right: borderRadiusRight,
  center: borderRadiusCenter
};

const validFloats = ['left', 'right'];

export default styled.div`
  width: ${props => props.width || '100%'};
  float: ${props => validFloats.includes(props.float) ? props.float : 'left'};
  padding: 10px;
  height: 170px;
  box-sizing: border-box;
  border-radius: ${props => borderRadiusMap[props.float] || borderRadiusCenter};
  background-color: ${props => props['background-color'] || 'white'};

  @media ${device.tabletMax} {
    height: 200px;
  }

  @media ${device.mobileLMax} {
    width: 100%;
    float: none;
    display: ${props => props.type === 'auxiliary' ? 'none' : 'block'};
    text-align: center;
  }
`;