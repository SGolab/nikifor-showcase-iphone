import React,{useLayoutEffect, useRef} from 'react';
import styled from "styled-components"

import gsap from "gsap";

const Section = styled.section`
  width:100vw;
  height: 200vh;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--white);
  
  & > *:nth-child(even){
    align-self: flex-end;
    margin-right: 4rem;
    text-align: right;
  }
  &>*:nth-child(odd){
    margin-left: 4rem;
  }
  
`

const MainTitle = styled.h1`
  font-size:var(--fontBig);
  font-family: var(--fontL);
  background-image: linear-gradient(-45deg, var(--gradient));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`

const TextBlockRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`

const TextBlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`

const Title = styled.div`
  font-size: var(--fontlg);
  margin-bottom: 1rem;
`

const Text = styled.div`
  font-size: var(--fontxs);
  color: var(--greyLight);
  margin-bottom: 0.5rem;
  width:55%;
`

const TextContainer = styled.div`
  width:100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(-25deg);
  z-index: 1;
  margin-bottom: 4rem;
`

const MovingText = styled.div`
  font-size: var(--fontBig);
  font-family: var(--fontL);
  background-image: linear-gradient(-45deg, var(--gradient));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`

const DisplaySection = () =>{

    const container = useRef(null)
    const textOne = useRef(null)
    const textTwo = useRef(null)


    useLayoutEffect(()=>{
        let t1 = gsap.timeline({
            scrollTrigger:{
                trigger: container.current,
                start:"top-=500 top",
                end:"bottom top",
                scrub:1,
            }
        }).fromTo(textOne.current,{x:0},{x:"-20%"},"key1")
            .fromTo(textTwo.current,{x:0},{x:"20%"},"key1")

        return() =>{
            if(t1) t1.kill()
        }
    },[])

    return(
        <Section>
            <MainTitle>
                Impressive <br/> Display
            </MainTitle>
            <TextBlockRight>
                <Title>Super Ratine XDR Display</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea magnam molestias odio repellendus veniam voluptate voluptatibus. Accusantium aperiam, aut distinctio dolorum excepturi illum magni officiis pariatur quasi quidem quos tempora.
                </Text>
            </TextBlockRight>
            <TextBlockLeft ref={container}>
                <Title>Big is better</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea magnam molestias odio repellendus veniam voluptate voluptatibus. Accusantium aperiam, aut distinctio dolorum excepturi illum magni officiis pariatur quasi quidem quos tempora.
                </Text>
            </TextBlockLeft>

            <TextContainer>
                <MovingText ref={textOne}>Toughter than ever</MovingText>
                <MovingText ref={textTwo}>Every touch matters.</MovingText>
            </TextContainer>
        </Section>
    )
}

export default DisplaySection;