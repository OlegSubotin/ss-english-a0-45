import React from 'react';
import Container from 'components/VocabularyPageContent/Container';
import Section from 'components/Section';
import Task from 'components/VocabularyPageContent/Task';
import Video from 'components/SpeakingPageContent/Video';

const SpeakingPage = () => {
  return (
    <Container>
      <Section>
        <Task
          accentText="Exercise 1"
          text="Watch the video and try to understand"
        />
        <Video/>
      </Section>
    </Container>
  )
}

export default SpeakingPage