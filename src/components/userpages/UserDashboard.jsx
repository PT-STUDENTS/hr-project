import React from 'react';
import { FaClipboardList, FaHourglassHalf, FaCheckCircle } from 'react-icons/fa'; // Importing icons for all cards
import { motion } from 'framer-motion';

// Card components
const Card = ({ icon, title, description, value }) => (
  <motion.div
    className="bg-base-300 w-full sm:w-80 md:w-96 lg:w-80 xl:w-96 h-72 shadow-lg rounded-lg flex flex-col justify-between"
    whileHover={{ scale: 1.05 }} // Scale effect on hover
    transition={{ duration: 0.3 }}
  >
    <div className="flex flex-col items-center text-center p-4 md:p-6">
      <div className="text-4xl md:text-5xl mb-4">
        {icon} {/* Icon for the card */}
      </div>
      <h2 className="text-lg md:text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm md:text-base text-gray-700 mb-4">
        {description}: {value}
      </p>
      <div className="p-4 md:p-6">
        <button className="btn btn-primary w-full">View Details</button>
      </div>
    </div>
  </motion.div>
);

const ApplicationStats = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-6">
      <Card
        icon={<FaClipboardList className="text-green-500" />}
        title="Total Applications"
        description="Number of Applications"
        value={50}
      />
      <Card
        icon={<FaHourglassHalf className="text-yellow-500" />}
        title="Applications in Progress"
        description="Applications in Progress"
        value={20}
      />
      <Card
        icon={<FaCheckCircle className="text-blue-500" />}
        title="Accepted Applications"
        description="Accepted Applications"
        value={15}
      />
    </div>
  );
};

export default ApplicationStats;
