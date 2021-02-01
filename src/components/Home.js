import React,{ Component } from "react";
import styled from "styled-components";
import {CartesianGrid, Tooltip, XAxis, ResponsiveContainer, YAxis, AreaChart, Area} from "recharts";
import bgImage from "../asset/home/ocean.jpg"

const MainBanner = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${bgImage});
  
`;
const MainSloganDiv = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  left: 100px;
  top: 50px;
  
  
`;

const MainSlogan = styled.p`
  color: black;
  font-size: x-large;
`;

const CharDsc = styled.div`
  width: 100%;
  font-size: xx-large;
  text-align: center;
  
`;

const CharDsc2 = styled.div`
  width: 100%;
  font-size: x-large;
  
  
`;

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border-width: 3px;
  border-style: solid;
  border-color: green;
  color: green;
  padding: 0.25em 1em;
  font-size: 25px;
  cursor: pointer;
  
`;

function Home() {
    return (
        <>
            <MainBanner>
                <MainSloganDiv>
                    <MainSlogan>
                        <b>코로나가 만든 플라스틱 산더미들..<br/>
                        버려진 쓰레기들은 바다로 떠밀려 해양동물들이 해파리로 착각을 해 먹게됩니다<br/>
                        세계자연기금(WWF)에 따르면 연간 800만t의 플라스틱들이 바다로 유출되고 있습니다.<br/>
                        플라스틱 폐기물로 고통받는 동물들을 위해 친환경 일회용품 사용을 권장합니다<br/>
                        친환경 제품 사용에 동참해주세요</b>
                    </MainSlogan>
                </MainSloganDiv>
            </MainBanner>
            <br></br>   
            <br></br>
            <CharDsc>
                일회용품 사용량
            
            </CharDsc>
            <br></br>   
            <ResponsiveContainer width='130%' aspect='5'>
                <AreaChart
                    height={200}
                    data={data}
                    margin={{top: 1, right: 600, left: 200, bottom: 1}}
                >
                    <XAxis dataKey="name"/>
                    <YAxis type="number" domain={['0', 'auto']} allowDataOverflow={true}/>
                    <Tooltip/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Area type="monotone" dataKey="trash" stroke="#ff7300" yAxisId={0}/>
                    {/*<Line type="monotone" dataKey="green" stroke="#387908" yAxisId={1}/>*/}
                </AreaChart>
            </ResponsiveContainer>
            <br></br>
            <br></br>
            <Last></Last>
            <br></br>
            <Positive></Positive>
            <Positive2></Positive2>
        </>
    );
}

class Last extends Component {
    render(){
        return(
            <CharDsc>
                <StyledButton>친환경 제품의 긍정적인 면</StyledButton>
            
            </CharDsc>

        );
    }
}

class Positive extends Component {
    render(){
        return(
            <CharDsc2>
                1.친환경 제품은 한국산업환경기술원이 인증했다는 환경마크가 붙어 있어
                소비자들에게 환경성 개선 정보를 재공하고, 기업이 친환경제품을
                더 많이 개발 생산하도록 유도하게 됌.
                
            
            </CharDsc2>

        );
    }
}
class Positive2 extends Component {
    render(){
        return(
            <CharDsc2>
               
                2. 바이오매스 식품기구
                생체 호르몬에 악영향에 미치는 PBBS(폴리브롬화바이페닐) 등과
                같은 난연제가 사용되지 않아서 안전하고 생식,기형,내분비계에 
                장애를 일으킬 수도 있는 가소제를 쓰지 않아 더욱 안심
            
            </CharDsc2>

        );
    }
}
    
const data = [
    {
        name: '2015', trash: 61.97, green: 2400, amt: 2400,
    },
    {
        name: '2016', trash: 63.01, green: 1398, amt: 2210,
    },
    {
        name: '2017', trash: 64.12, green: 9800, amt: 2290,
    },
    {
        name: '2018', trash: 65.28, green: 3908, amt: 2000,
    },
    {
        name: '2019', trash: 66.49, green: 4800, amt: 2181,
    },
    {
        name: '2020', trash: 67.41, green: 3800, amt: 2500,
    },
];


export default Home;
