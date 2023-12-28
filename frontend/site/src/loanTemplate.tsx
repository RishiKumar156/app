import React, { useEffect } from 'react';
import * as fs from 'fs';
import * as Docxtemplater from 'docxtemplater';

const LoanAgreementTemplate = () => {
  useEffect(() => {
    // Load the Word document template
    const templatePath = 'C:/Users/Rishik%20kumar/Downloads/loanAgreementTemplate.docx';
    const content = fs.readFileSync(templatePath, 'binary');

    // Sample data for the loan agreement
    const data = {
      loanAmount: 'TWO-THOUSAND',
      borrowerName: 'John Doe',
      borrowerAddress: '123 Main St, City',
      lenderName: 'Lender Inc.',
      lenderAddress: '456 Oak St, Town',
      startDate: '01/01/2023',
      dueDate: '12/31/2023',
      weeklyPayment: '$50.00',
      monthlyPayment: '$200.00',
      lumpSumAmount: '$2,000.00',
      interestRate: '5%', // Customize as needed
    };

    // Create a new Docxtemplater instance
    const doc = new Docxtemplater();
    doc.load(content);

    // Set the data in the template
    doc.setData(data);

    // Perform the templating process
    doc.render();

    // Get the output as a buffer
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });

    // Save or display the generated Word document as needed
    // For example, you can use file-saver to save the document
    // or create a download link for the user

    // Note: In a real application, you might want to save the buffer to a file or upload it to a server.
  }, []);

  return <div>Generating Loan Agreement document...</div>;
};

export default LoanAgreementTemplate;
