'use client';

import React, { useState, useRef, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestForm = () => {
  const budgetOptions = [
    { value: 'under_5k', label: 'Under $5000' },
    { value: '5k_to_10k', label: '$5000 - $10,000' },
    { value: '10k_to_20k', label: '$10,000 - $20,000' },
    { value: 'above_20k', label: 'Above $20,000' },
  ];

  const servicesOptions = [
    { value: 'ui-ux design', label: 'UI-UX Design' },
    { value: 'Website Development', label: 'Website Development' },
    { value: 'mobile app development', label: 'Mobile App Development' },
    { value: 'Software Development', label: 'Software Development' },
    { value: 'Cloud Services', label: 'Cloud Services' },
    { value: 'Data Analytics', label: 'Data Analytics' },
    { value: 'Cybersecurity', label: 'Cybersecurity' },
    { value: 'IT Consulting', label: 'IT Consulting' },
    { value: 'digital_marketing', label: 'Digital Marketing' },
    { value: 'Frontend development', label: 'Frontend Development' },
    { value: 'Backend development', label: 'Backend Development' },
    { value: 'Artificial Intelligence', label: 'Artificial Intelligence' },
    { value: 'IoT', label: 'IoT' },
    { value: 'Blockchain', label: 'Blockchain' },
    { value: 'others', label: 'Others' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    contact: '',
    description: '',
    services: '',
    sendNDA: false,
    mathAnswer: '',
    newsletter: false,
  });

  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

 
  const budgetDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  const [openBudgetDropdown, setOpenBudgetDropdown] = useState(false);
  const [openServicesDropdown, setOpenServicesDropdown] = useState(false);

 
  const toggleBudgetDropdown = () => setOpenBudgetDropdown(!openBudgetDropdown);
  const toggleServicesDropdown = () => setOpenServicesDropdown(!openServicesDropdown);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (budgetDropdownRef.current && !budgetDropdownRef.current.contains(e.target)) {
        setOpenBudgetDropdown(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target)) {
        setOpenServicesDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox' && e.target.checked !== undefined) {
      setFormData((prev) => ({
        ...prev,
        [name]: e.target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.budget) newErrors.budget = 'Please select a budget range.';
    if (!phoneRegex.test(formData.contact)) newErrors.contact = 'Enter a valid contact number (10-15 digits).';
    if (!formData.description.trim()) newErrors.description = 'Please provide a brief project description.';
    if (!formData.services) newErrors.services = 'Please select a service.';
    if (formData.mathAnswer.trim() !== '10') newErrors.mathAnswer = 'Please answer the math question correctly.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      toast.success(result.message || 'Request sent successfully!');
    } catch (error) {
      toast.error('Failed to send request, please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl p-6 lg:p-8 max-w-2xl mx-auto mt-8 lg:mt-0 w-full">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-6">Request a Proposal</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={`border text-sm border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'focus:ring-yellow-400'}`}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Work Email"
            className={`border border-gray-300 text-sm p-4 rounded-lg w-full focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'focus:ring-yellow-400'}`}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div ref={budgetDropdownRef} className="relative">
            <button
              type="button"
              onClick={toggleBudgetDropdown}
              className={`border text-sm border-gray-300 p-4  rounded-lg w-full text-left focus:outline-none focus:ring-2 ${errors.budget ? 'border-red-500' : 'focus:ring-yellow-400'}`}
            >
              {formData.budget ? budgetOptions.find(option => option.value === formData.budget)?.label : 'Select Budget'}
            </button>
            {openBudgetDropdown && (
              <div className="absolute left-0 right-0  bg-white border border-gray-300 max-h-40 overflow-y-auto mt-1 z-10">
                {budgetOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, budget: option.value }));
                      setOpenBudgetDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          {errors.budget && <span className="text-red-500 text-sm">{errors.budget}</span>}

          <input
            type="tel"
            name="contact"
            placeholder="Contact number"
            className={`border border-gray-300 text-sm p-4 rounded-lg w-full focus:outline-none focus:ring-2 ${errors.contact ? 'border-red-500' : 'focus:ring-yellow-400'}`}
            onChange={handleChange}
            required
          />
          {errors.contact && <span className="text-red-500 text-sm">{errors.contact}</span>}
        </div>

        <div ref={servicesDropdownRef} className="relative">
          <button
            type="button"
            onClick={toggleServicesDropdown}
            className={`border border-gray-300 p-4 text-left text-sm rounded-lg w-full appearance-none max-h-32 overflow-y-auto focus:outline-none focus:ring-2 ${errors.services ? 'border-red-500' : 'focus:ring-yellow-400'}`}
          >
            {formData.services ? servicesOptions.find(option => option.value === formData.services)?.label : 'Select a Service'}
          </button>
          {openServicesDropdown && (
            <div className="absolute left-0 right-0 bg-white border border-gray-300 max-h-40 overflow-y-auto mt-1 z-10">
              {servicesOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, services: option.value }));
                    setOpenServicesDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-yellow-400 hover:text-white cursor-pointer "
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
        {errors.services && <span className="text-red-500 text-sm">{errors.services}</span>}

        <textarea
          name="description"
          rows={4}
          placeholder="Describe your idea to help us assign the relevant consultation expert."
          className={`border border-gray-300 p-4 text-sm rounded-lg w-full focus:outline-none focus:ring-2 ${errors.description ? 'border-red-500' : 'focus:ring-yellow-400'}`}
          onChange={handleChange}
          required
        ></textarea>
        {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleFileUploadClick}
            className="bg-yellow-400 text-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            +
          </button>
          <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept=".jpg,.png,.pdf,.docx" />
        </div>

        <div className="flex items-center">
          <input type="checkbox" name="sendNDA" checked={formData.sendNDA} onChange={handleChange} className="mr-2 text-sm" />
          <label className="text-sm">Send me a copy of NDA</label>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            name="mathAnswer"
            placeholder="4 + 6 = ?"
            className={`border border-gray-300 p-2 rounded-lg w-20 focus:outline-none focus:ring-2 ${errors.mathAnswer ? 'border-red-500' : 'focus:ring-yellow-400'}`}
            onChange={handleChange}
            required
          />
          {errors.mathAnswer && <span className="text-red-500 text-sm ml-2">{errors.mathAnswer}</span>}
        </div>

        <button className="bg-black text-white px-8 py-3 text-sm rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RequestForm;
