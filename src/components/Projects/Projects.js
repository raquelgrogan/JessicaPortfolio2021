import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { graphicDesign } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="graphic">
    <SectionDivider />
    <SectionTitle main>Graphic Design</SectionTitle>
    <GridContainer>
      {graphicDesign.map((project) => (
        <BlogCard key={project.id}>
          {project.type == 'image' ?
            (<a href={project.image} target="_blank">
              <Img src={project.image} />
            </a>) : (
              <video width="100%" height="100%" controls poster="/GraphicDesign/FanIntoFlamePoster.jpg">
                <source src={project.image} type="video/mp4" />
              </video>
            )}
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
          </TitleContent>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;