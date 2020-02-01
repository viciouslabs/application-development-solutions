import styled from 'styled-components';

export default styled.div`
  background-image: url(${props => props.img});
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;
`;