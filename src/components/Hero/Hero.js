import React from 'react'

import { Section, SectionText, SectionTitle, AnimDiv } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <AnimDiv>
        <p>
          <span>
            Portfolio de
          </span>
        </p>
        <p>
          <span>
            BRIZE Sébastien
          </span>
        </p>
      </AnimDiv>
      <SectionText>
      
      </SectionText>
      <Button onClick = {() => window.location = 'https://google.com'}>Me contacter</Button>
    </LeftSection>
  </Section>
)

export default Hero
