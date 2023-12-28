import React, { useState } from 'react';
import mammoth from 'mammoth';

const JsonToWordConverter = () => {
  const [jsonContent, setJsonContent] = useState({
    Title: 'Document Title',
    Content: 'This is some content.',
    Author: 'John Doe',
    Date: '2023-01-01',
    Sections: {
      Section1: 'Content of Section 1',
      Section2: 'Content of Section 2',
    },
  });

  const convertToJson = () => {
    const htmlContent = Object.entries(jsonContent)
      .map(([key, value]) => `<h1>${key}</h1><p>${value}</p>`)
      .join('');

    const options = {
      styleMap: [
        "p[style-name='Heading 1'] => h1:fresh",
        "p[style-name='Heading 2'] => h2:fresh",
        // Add more style mappings as needed
      ],
    };

    mammoth.extractRawText({ value: htmlContent }, options)
      .then(({ value }) => {
        const blob = new Blob([value], { type: 'application/msword' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'output.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error converting to Word:', error));
  };

  return (
    <div>
      <h2>JSON to Word Converter</h2>
      <button onClick={convertToJson}>Convert to Word</button>
    </div>
  );
};

export default JsonToWordConverter;
