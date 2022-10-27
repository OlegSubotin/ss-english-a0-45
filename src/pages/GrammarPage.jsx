import React from 'react';
import Container from 'components/VocabularyPageContent/Container';
import Section from 'components/Section';
import Task from 'components/VocabularyPageContent/Task';
import GrammarImage from 'components/GrammarPageContent/GrammarImage';
import Board from 'components/GrammarPageContent/Board';

const GrammarPage = () => {
  return (
    <Container>
      <Section>
        <Task
          accentText="Using the verb (to be) in Past Simple"
          text="'To be' changes into 'was / were'. It depends on sentence subject. With I / He / She / It - was. With You / We / They - were."
        />
        <GrammarImage />
        <Board/>
      </Section>
    </Container>
  )
}

export default GrammarPage