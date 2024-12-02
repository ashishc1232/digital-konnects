import JobListingCareers from "../components/Career/JobListingCareers";
import TopHeaderCareer from "../components/Career/TopHeaderCareer";
import WhyJoinUsCareer from "../components/Career/WhyJoinUsCareer";
import Footer from "../components/Common/Footer";
import React from "react";
import Heading from "../components/Common/Heading";
import Navbar from "../components/Header/Navbars";
const Career = () => {
  return (
    <div>
      <Navbar />
      <Heading
        titletext="Career"
        title="Career "
        subtext="Get ready to solve challenging problems and turn your ideas into reality with Digital-Konnect Services & Consulting Pvt Ltd. At Digital-Konnect, we’re empowered, supported, and inspired to make a difference every day."
      />
      <TopHeaderCareer />
      <WhyJoinUsCareer />
      <JobListingCareers />
      <Footer />
    </div>
  );
};

export default Career;
