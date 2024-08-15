import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NextRegistrationDetails = () => {
  const [formData, setFormData] = useState({
    universityName: '',
    yearOfStudy: '',
    program: '',
  });

  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const errors = {};
    if (!formData.universityName) errors.universityName = 'Please select a university.';
    if (!formData.yearOfStudy) errors.yearOfStudy = 'Please select a year of study.';
    if (!formData.program) errors.program = 'Please select a program.';

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    // Clear errors
    setErrors({});

    // Handle form submission
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('universityName', formData.universityName);
    formDataToSubmit.append('yearOfStudy', formData.yearOfStudy);
    formDataToSubmit.append('program', formData.program);
    if (file) formDataToSubmit.append('coverLetter', file);

    // For demonstration purposes, log the FormData object
    for (let pair of formDataToSubmit.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    // You would normally use fetch or axios to submit the form data
    // Example with fetch:
    // fetch('/submit', {
    //   method: 'POST',
    //   body: formDataToSubmit,
    // }).then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));

    navigate('/success'); // Replace with your actual success page route
  };

  const backgroundImageStyle = {
    backgroundImage: 'url(/images/phone.PNG)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%'
  };

  return (
    <div style={backgroundImageStyle} className="flex backdrop-blur-md justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 backdrop-blur-md rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-white">Educational Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">University Name</label>
            <select
              name="universityName"
              value={formData.universityName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="" disabled>Select a university</option>
              <option value="Harvard">Harvard University</option>
              <option value="MIT">Massachusetts Institute of Technology</option>
              <option value="Stanford">Stanford University</option>
              {/* Add more options as needed */}
            </select>
            {errors.universityName && <p className="text-red-600 text-sm mt-1">{errors.universityName}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">Year of Study</label>
            <select
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="" disabled>Select year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
              {/* Add more options as needed */}
            </select>
            {errors.yearOfStudy && <p className="text-red-600 text-sm mt-1">{errors.yearOfStudy}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">Program</label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="" disabled>Select a program</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Engineering">Engineering</option>
              <option value="Business">Business</option>
              <option value="Biology">Biology</option>
              {/* Add more options as needed */}
            </select>
            {errors.program && <p className="text-red-600 text-sm mt-1">{errors.program}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">Cover Letter</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-900 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {file && <p className="text-gray-300 text-sm mt-1">Selected file: {file.name}</p>}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NextRegistrationDetails;
