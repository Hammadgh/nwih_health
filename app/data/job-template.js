// Job Template - Copy this structure to add new jobs to jobs.js
// Replace all the placeholder values with your actual job information

const jobTemplate = {
  id: 'unique-job-id', // Required: Unique identifier (e.g., 'rn-seattle-wa', 'cma-tacoma-wa')
  title: 'Job Title', // Required: The job title
  department: 'Department Name', // Optional: Department (e.g., 'Nursing', 'Clinical Support')
  location: 'City, State', // Optional: Job location
  pay: '$XX - $XX/hour', // Optional: Salary information
  employmentType: ['Full-time'], // Optional: Array of employment types
  applyUrl: 'https://your-application-url.com', // Required: Link to apply
  description: `Brief job description goes here.`, // Optional: Short description
  responsibilities: [ // Optional: Array of job responsibilities
    'Responsibility 1',
    'Responsibility 2',
    'Responsibility 3',
  ],
  qualifications: [ // Optional: Array of required qualifications
    'Qualification 1',
    'Qualification 2',
    'Qualification 3',
  ],
  schedule: [ // Optional: Array of schedule details
    'Schedule detail 1',
    'Schedule detail 2',
  ],
  benefits: [ // Optional: Array of benefits
    'Benefit 1',
    'Benefit 2',
    'Benefit 3',
  ],
};

// Example of a complete job entry:
const exampleJob = {
  id: 'rn-seattle-wa',
  title: 'Registered Nurse (RN)',
  department: 'Nursing',
  location: 'Seattle, WA',
  pay: '$45 - $55/hour',
  employmentType: ['Full-time'],
  applyUrl: 'https://www.indeed.com/cmp/Northwest-Integrated-Health-1/jobs',
  description: `Seeking an experienced RN to join our integrated care team providing comprehensive treatment for patients with substance use disorders.`,
  responsibilities: [
    'Conduct patient assessments and develop care plans',
    'Administer medications and monitor patient responses',
    'Coordinate with medical providers and support staff',
    'Maintain accurate documentation in electronic health records',
    'Provide patient education and support',
  ],
  qualifications: [
    'Active RN License in Washington State (Required)',
    '2+ years nursing experience (Preferred)',
    'Experience in behavioral health or addiction treatment (Preferred)',
    'Valid BLS certification',
  ],
  schedule: [
    'Monday - Friday, 8:00 AM - 5:00 PM',
    'Some weekend coverage may be required',
  ],
  benefits: [
    '401(k) matching',
    'Comprehensive health insurance',
    'Paid time off and holidays',
    'Professional development opportunities',
    'Employee wellness program',
  ],
};

export { jobTemplate, exampleJob };
