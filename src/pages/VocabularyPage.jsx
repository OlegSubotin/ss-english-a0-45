import React from 'react';
import Container from 'components/VocabularyPageContent/Container';
import Section from 'components/VocabularyPageContent/Section';
import Task from 'components/VocabularyPageContent/Task';
import WordsImagesList from 'components/VocabularyPageContent/WordsImagesList';
import wordsImagesDB from '../db/wordsImages.json';

const VocabularyPage = () => {
  return (
    <Container>
      <Section>
        <Task accentText="Exercise 1" text="Vocabulary exercises to help learn words for things you can see in a room." />
        <WordsImagesList words={wordsImagesDB} />
      </Section>      
      <Section>
        <Task text="Vocabulary exercises to help learn words for things you can see in a room." />
      </Section>
      
    </Container>
  )
};

export default VocabularyPage