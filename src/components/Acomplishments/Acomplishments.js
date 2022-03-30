import React from 'react'

import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const data = [
  { number: 20, text: 'Open Source Projects' },
  { number: 1000, text: 'Students' },
  { number: 1900, text: 'Github Followers' },
  { number: 5000, text: 'Github Stars' }
]

const Acomplishments = () => (
  <Section id='acom'>
    <SectionDivider />
    <br/>
    <SectionTitle>Je sais pas encore</SectionTitle>
    <SectionText>
      E4 /E5 + plus fichiers etc...
    </SectionText>

  </Section>
)

export default Acomplishments
