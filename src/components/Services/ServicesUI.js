import Image from 'next/image';

const ServicesUI = () => {
    const spotlightData = [
        {
          type: 'Service',
          title: 'UI Design ',
          description: 'Read the event',
          link: '/ui-designing-company',
          image: '/assets/Home/Spotlight/ui-design.png',
        },
        {
          type: 'Service',
          title: 'UX Design ',
          description: 'Read the event',
          link: '/ux-design-company',
          image: '/assets/Home/Spotlight/ux-design.png',
        },
        {
          type: 'Service',
          title: 'Website Design & Development',
          description: 'Read the service',
          link: '/website-development-company',
          image: '/assets/Home/Spotlight/Website-Design.png',
        },
        {
          type: 'Article',
          title: 'Mobile App Development',
          description: 'Read the article',
          link: '/app-modernization-company',
          image: '/assets/Home/Spotlight/mobile-app.png',
        },
        {
          type: 'Article',
          title: 'Software Development',
          description: 'Read the article',
          link: '/software-development-company',
          image: '/assets/Home/Spotlight/software-development-company.png',
        },
        {
          type: 'Article',
          title: 'Cloud Managed UI',
          description: 'Read the article',
          link: '/cloud-app-development-company',
          image: '/assets/Home/Spotlight/cloud-managed-services.png',
        },
        {
          type: 'Article',
          title: 'Data Visualization',
          description: 'Read the article',
          link: '/data-visualisation-company',
          image: '/assets/Home/Spotlight/data-visualization.png',
        },
        {
          type: 'Article',
          title: 'Offshore Development Center',
          description: 'Read the article',
          link: '/user-research-company',
          image: '/assets/Home/Spotlight/offshore-development-center.png',
        },
        
        {
          type: 'Article',
          title: 'Ecommerce Development',
          description: 'Read the article',
          link: '/user-research-company',
          image: '/assets/Home/Spotlight/ecommerce-services-1.png',
        },
        {
          type: 'Article',
          title: 'Digital Marketing',
          description: 'Read the article',
          link: '/digital-marketing-company',
          image: '/assets/Home/Spotlight/digital-marketing.png',
        },
        {
          type: 'Article',
          title: 'Social Media Marketing',
          description: 'Read the article',
          link: '/social-media-marketing-company',
          image: '/assets/Home/Spotlight/SEM-Services.png',
        },
        {
          type: 'Article',
          title: 'Search Engine Optimization',
          description: 'Read the article',
          link: '/user-research-company',
          image: '/assets/Home/Spotlight/SEO-Services.png',
        },
      ];
      

  return (
    <div className="bg-dark text-black py-10 lg:py-24 px-5 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {spotlightData.map((item, index) => (
       <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group">
       <Image
         src={item.image}
         alt={item.title}
         className="w-full h-full object-cover"
         layout="responsive"
         width={300}
         height={300}
       />
       <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
       <div className="absolute bottom-0 p-6 text-white">
         <span className="block text-sm uppercase mb-2">{item.type}</span>
         <h3 className="text-xl font-bold max-h-600">{item.title}</h3>
         <a
           href={item.link}
           className="inline-block mt-4 text-sm text-blue-300 hover:underline"
         >
           {item.description} &rarr;
         </a>
       </div>
     </div>
     
        ))}
      </div>
    </div>
  );
};

export default ServicesUI;
