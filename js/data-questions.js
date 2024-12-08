export const questions = [
  {
    image: 'lights1.svg',
    question: 'Hvad ser du?',
    answer: 'Motorbåd forfra'
  },
  {
    image: 'lights2.svg',
    question: 'Hvad ser du?',
    answer: 'Sejlbåd, styrbords side'
  },
  {
    image: 'lights3.svg',
    question: 'Hvad ser du?',
    answer: 'Sejlbåd, bagbords side'
  },
  {
    image: 'lights4.svg',
    question: 'Hvad ser du?',
    answer: 'Sejlbåd, agter'
  },
  {
    image: 'skib-anker.svg',
    question: 'Hvad ser du?',
    answer: 'Skib, der ligger for anker'
  },
  {
    image: 'lights6.svg',
    question: 'Hvad ser du?',
    answer: 'Skib, der er let'
  },
  {
    image: 'lights7.svg',
    question: 'Hvad ser du?',
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
  },
  {
    image: 'uddybningsfartoj.svg',
    question: 'Hvad ser du?',
    answer: 'Uddybingsfartøj, der gør fart'
  },
  {
    image: 'minerydningsfartoj.svg',
    question: 'Hvad ser du?',
    answer: 'Minerydningsfortøj'
  },
  {
    image: 'skib-manovre.svg',
    question: 'Hvad ser du?',
    answer: 'Skib, der er begrænset i sin evne til at manøvrere'
  },
  {
    image: 'skib-kommando.svg',
    question: 'Hvad ser du?',
    answer: 'Skib, der ikke er under kommando og gør fart'
  },
  {
    image: 'skib-lods.svg',
    question: 'Hvad ser du?',
    answer: 'Skib, der udfører lods-tjeneste'
  },
  {
    image: 'skib-trawl.svg',
    question: 'Hvad ser du?',
    answer: 'Skib, der fisker med trawl'
  },
  {
    image: 'skib-fisk.svg',
    question: 'Hvad ser du?',
    answer: 'Skib, der fisker (ikke trawl)'
  },
  {
    image: 'skib-sejl-motor.svg',
    question: 'Hvad ser du?',
    answer: 'Sejlskib, der går for motor, eller motorskib (under 100m)'
  },
  {
    image: 'skib-slaeb.svg',
    question: 'Hvad ser du?',
    answer: 'Skib med slæb (under 200m)'
  },
  {
    image: 'skib-slaeb-lang.svg',
    question: 'Hvad ser du?',
    answer: 'Skib med slæb (over 200m)'
  }
]

export function getRandomQuestionId() {
  return Math.floor(Math.random() * questions.length)
}