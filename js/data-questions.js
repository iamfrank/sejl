export const questions = [
  {
    image: 'lights1.svg',
    question: 'Hvad ser du i mørket?',
    answer: 'Motorbåd forfra'
  },
  {
    image: 'lights2.svg',
    question: 'Hvad ser du i mørket?',
    answer: 'Sejlbåd, styrbords side'
  },
  {
    image: 'lights3.svg',
    question: 'Hvad ser du i mørket?',
    answer: 'Sejlbåd, bagbords side'
  },
  {
    image: 'lights4.svg',
    question: 'Hvad ser du i mørket?',
    answer: 'Sejlbåd, agter'
  },
  {
    image: 'lights5.svg',
    question: 'Hvad ser du i mørket?',
    answer: 'Skib, der ligger for anker'
  },
  {
    image: 'lights6.svg',
    question: 'Hvad ser du i mørket?',
    answer: 'Skib, der er let'
  },
  {
    image: 'lights7.svg',
    question: 'Hvad ser du i mørket?',
    answer: 'Sejlbåd forfra'
  },
  {
    image: 'boje-nord.svg',
    question: 'Hvad ser du?',
    answer: 'Kompasafmærkning nord'
  },
  {
    image: 'boje-syd.svg',
    question: 'Hvad ser du?',
    answer: 'Kompasafmærkning syd'
  },
  {
    image: 'boje-ost.svg',
    question: 'Hvad ser du?',
    answer: 'Kompasafmærkning øst'
  },
  {
    image: 'boje-vest.svg',
    question: 'Hvad ser du?',
    answer: 'Kompasafmærkning vest'
  },
  {
    image: 'skib-grund.svg',
    question: 'Hvad ser du?',
    answer: 'Skib på grund'
  },
  {
    image: 'skib-dybgang.svg',
    question: 'Hvad ser du?',
    answer: 'Skib, der er hæmmet af sin dybgang'
  }
]

export function getRandomQuestionId() {
  return Math.floor(Math.random() * questions.length)
}