import React from 'react';
import Container from 'components/VocabularyPageContent/Container';
import Section from 'components/VocabularyPageContent/Section';
import Task from 'components/VocabularyPageContent/Task';
import WordsImagesList from 'components/VocabularyPageContent/WordsImagesList';
import Select from 'components/VocabularyPageContent/Select';
import DBVocabularySelect from "../db/vocabularySelect";

const VocabularyPage = () => {
  return (
    <Container>
      <Section>
        <Task accentText="Exercise 1" text="Vocabulary exercises to help learn words for things you can see in a room." />
        <WordsImagesList/>
      </Section>      
      <Section>
        <Task accentText="Exercise 2" text="Match the words with the definitions." />
        <Select tasks={DBVocabularySelect} />
      </Section>
    </Container>
  )
};

export default VocabularyPage