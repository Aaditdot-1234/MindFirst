'use client'
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Description from '@/components/Description';

const questions = [
  { id: 1, q: 'Little interest or pleasure in doing things?' },
  { id: 2, q: 'Feeling down, depressed, or hopeless?' },
  { id: 3, q: 'Trouble falling or staying asleep, or sleeping too much?' },
  { id: 4, q: 'Feeling tired or having little energy?' },
  { id: 5, q: 'Poor appetite or overeating?' },
  { id: 6, q: 'Feeling bad about yourself, or that you are a failure or have let yourself or your family down?' },
  { id: 7, q: 'Trouble concentrating on things, such as reading the newspaper or watching television?' },
  { id: 8, q: 'Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving a lot more than usual?' },
  { id: 9, q: 'Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?' },
];

const options = [
  { text: 'Not at all', score: 0 },
  { text: 'Several days', score: 1 },
  { text: 'More than half the days', score: 2 },
  { text: 'Nearly every day', score: 3 },
];

const TestData = () => {
  const { testpageId } = useParams();
  const [responses, setResponses] = useState(Array(9).fill(0));
  const [result, setResult] = useState(''); 
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));

  const handleOptionClick = (questionId, score) => {
    const updatedResponses = [...responses];
    updatedResponses[questionId - 1] = score; 
    setResponses(updatedResponses);
  };

  const handleSubmit = () => {
    const totalScore = responses.reduce((acc, curr) => acc + curr, 0); 

    if (totalScore <= 4) {
      setResult('Minimal depression');
    } else if (totalScore <= 9) {
      setResult('Mild depression');
    } else if (totalScore <= 14) {
      setResult('Moderate depression');
    } else if (totalScore <= 19) {
      setResult('Moderately severe depression');
    } else {
      setResult('Severe depression');
    }
  };

  return (
    <div className='h-fit w-screen flex flex-col items-center justify-center'>
      <div className='w-screen flex items-center justify-start mt-[45px] px-[45px]'>
        <div className='w-full flex flex-col items-start justify-center px-[45px] bg-custom-gradient2 p-7 rounded-[50px] border-0'>
          <h1 className='text-[60px] font-[700]'>Testing for {testpageId}</h1>
          <p className='text-[20px] font-[400] pl-2 text-gray-400'>Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>
          <p className='text-[20px] font-[400] pl-2 mt-3 text-gray-400'>Please note, all fields are required.</p>
        </div>
      </div>
      <div className='m-[45px] p-[75px] bg-gray-200 rounded-[50px] border-0 flex flex-col items-start justify-center'>
        {questions.map((question) => (
          <div key={question.id} className='flex flex-col items-start justify-center'>
            <h2 className='text-[20px] font-[600] text-gray-500'>
              {question.id}. {question.q}
            </h2>
            <div className='flex items-center justify-center gap-3 text-white text-[20px] cursor-pointer m-8'>
              {options.map((option) => (
                <button
                  key={option.text}
                  className={`h-[40px] w-fit rounded-[25px] flex items-center justify-center bg-custom-gradient2 p-5 border-0 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_5px_rgba(92,95,151,0.75)] ${selectedOptions[question.id - 1] === option.score ? 'bg-blue-500' : ''}`}
                  onClick={() => {
                    const newSelectedOptions = [...selectedOptions];
                    newSelectedOptions[question.id - 1] = option.score;
                    setSelectedOptions(newSelectedOptions);
                    handleOptionClick(question.id, option.score) 
                  }}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ))}
        <button
          className='h-[50px] w-fit text-[30px] rounded-[25px] flex items-center justify-center bg-button p-5 border-0 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_5px_rgba(92,95,151,0.75)] text-white mt-[30px] ml-5'
          onClick={handleSubmit}
        >
          Submit
        </button>
        {result && (
          <div id='result' className='mt-5 text-[20px] font-[500] text-gray-700'>
            {result}
          </div>
        )}
      </div>
      <Description/>
    </div>
  );
};

export default TestData;
