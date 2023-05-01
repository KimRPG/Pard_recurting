import styled, { ThemeProvider, css } from 'styled-components';
import { theme } from '../../../styles/theme';
import { useState } from 'react';

const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 3.7500vw;
  white-space: pre-line;
  text-align : center;
`;
const Subtitle3 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Subtitle3};
    font-weight: ${props => props.theme.fontWeights.Subtitle3};
    color : #FFFFFF;
    font-family: 'NanumSquare Neo';
    margin-bottom: 3.7500vw;
    white-space: pre-line;
    text-align: center;

`;

const PartDiv = styled.div`
    padding-left:5.5556vw;
    padding-right: 112px;
    padding-top: 100px;
    height: 62vw;
    background-color: blue;//연습용
`;
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr); //4개씩 넣고 각 넓이는 1fr이다
    grid-gap: 20px;//서로 20px의 차이가 있도록
    grid-auto-rows: 30px;
    
`
const Column = styled.div`
    //나중에 이미지 넣을 공간

    background-color: white; // 연습용   
    ${props => props.hover && css` //props.hover 값이 true일때 css값을 넣어라
    background-color: black; //운영진의 간단한 소개

  `}
`

function AboutManagement() {
    let arr=[1,2,3,4,5,6,7,8,9] //ARRAY 값 운영진의 정보를 넣을 예정
    const [isHovering, setIsHovering]=useState(-1);
    const handleMouseEnter=(index)=>{
        setIsHovering(index);
    }
    const handleMouseLeave=()=>{
        setIsHovering(-1);
    }
    return (
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header7>거친 파도를 뚫고 나가는<br></br>파드 1기 운영진을 소개합니다</Header7>
            <Subtitle3>함께 했을 때 더 큰 일을 <br></br> 이룰 수 있음을 강하게 믿고 있어요</Subtitle3>
            <GridContainer>
                {arr.map(function(a,i){
                    return(<Column key = {i} 
                            hover = {i===isHovering}
                            onMouseEnter={()=> handleMouseEnter(i)}
                            onMouseLeave={handleMouseLeave} 
                            className={isHovering ? "hover":""}> {a} </Column>)
                })}
                {/* <Column>Column 1</Column>
                <Column>Column 2</Column>
                <Column>Column 3</Column> */}

            </GridContainer>
            </ThemeProvider>
        </PartDiv>
    );
}

export default AboutManagement;