import { useState } from 'react';

const faqs = [
  {
    question: '¿Lorem Ipsum is?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    question: '¿Lorem Ipsum is?',
    answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: '¿Lorem Ipsum is?',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    question: '¿Lorem Ipsum is?',
    answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: '¿Lorem Ipsum is?',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#EBEBEB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full  rounded-2xl px-6 py-4 text-left transition-all duration-300 ease-in-out border-[#2A2A2A] border-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[29px] font-nimbus font-medium text-gray-900" >
                    {faq.question}
                  </span>
                  <span 
                    className={`transform transition-transform border-2 border-[#2A2A2A] rounded-full duration-300 ease-in-out ${
                      openIndex === index ? 'rotate-90' : ''
                    }`}
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      className="transform transition-transform duration-300"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}