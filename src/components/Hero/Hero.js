import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/> Jessica's Portfolio
      </SectionTitle>
      <SectionText>
        This portfilio contains my 3D animations, Graphic Design, and Motion Graphics I've created throughout the years.
      </SectionText>
      <Button onClick={() => location.href = 'mailto:raquelgrogan@gmail.com'}>Email Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;