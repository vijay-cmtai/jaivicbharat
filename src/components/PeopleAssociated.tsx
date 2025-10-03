import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Award,
  Users,
  Lightbulb,
  Briefcase,
  UserCheck,
} from "lucide-react";

// Data for the people and categories
const peopleData = [
  {
    name: "Dr. Vandana Shiva",
    title: "Environmental Activist",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80",
    category: "Inspiration",
    social: "#",
    bio: "Renowned environmental activist and a powerful voice for food sovereignty, seed freedom, and sustainable agriculture worldwide.",
  },
  {
    name: "Rajendra Singh",
    title: "Water Conservationist",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80",
    category: "Inspiration",
    social: "#",
    bio: "Famously known as the 'Waterman of India', he won the Stockholm Water Prize for his incredible work in water conservation and management.",
  },
  {
    name: "Vikram Patel",
    title: "Chairman & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&q=80",
    category: "Governance",
    social: "#",
    bio: "A visionary leader with decades of experience, Vikram guides our strategic direction towards a sustainable and organic future for all.",
  },
  {
    name: "Sunita Narain",
    title: "Director General, CSE",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80",
    category: "Board of Advisors",
    social: "#",
    bio: "A prominent environmental policy expert and sustainability advocate, Sunita's insights are crucial to our governance and impact.",
  },
  {
    name: "Aarav Kumar",
    title: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80",
    category: "Executive Team",
    social: "#",
    bio: "Aarav is at the helm of our operations, driving growth and ensuring that our strategies translate into real-world impact for farmers.",
  },
  {
    name: "Anjali Sharma",
    title: "Sustainability Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&q=80",
    category: "Executive Team",
    social: "#",
    bio: "Anjali leads our environmental initiatives, focusing on carbon credit programs and ensuring our practices are ecologically sound.",
  },
  {
    name: "Priya Desai",
    title: "Chief Operations Officer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&q=80",
    category: "Management",
    social: "#",
    bio: "Priya meticulously streamlines our supply chain and on-ground operations to maximize efficiency and farmer benefit.",
  },
  {
    name: "Rohan Mehta",
    title: "Head of Farmer Relations",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&q=80",
    category: "Management",
    social: "#",
    bio: "Rohan is our bridge to the farming communities, building strong, lasting relationships based on trust and mutual growth.",
  },
];

const categories = [
  { name: "Inspiration", icon: Lightbulb },
  { name: "Board of Advisors", icon: Award },
  { name: "Governance", icon: Briefcase },
  { name: "Executive Team", icon: Users },
  { name: "Management", icon: UserCheck },
];

// This is the new, updated component
const ChangemakersSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  const filteredPeople = peopleData.filter(
    (person) => person.category === activeCategory
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
            Meet Our Changemakers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The dedicated individuals shaping the future of organic India, from
            grassroots to governance.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
                activeCategory === category.name
                  ? "text-white"
                  : "text-gray-600 bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {activeCategory === category.name && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-orange-500"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <category.icon size={16} />
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* People Cards Grid with New Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {filteredPeople.map((person) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row overflow-hidden border border-gray-100"
              >
                {/* Image Section */}
                <div className="w-full sm:w-1/3 flex-shrink-0">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section (Name, Title, Bio) */}
                <div className="p-6 flex flex-col justify-center w-full sm:w-2/3">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {person.name}
                  </h3>
                  <p className="text-teal-600 font-medium mb-4">
                    {person.title}
                  </p>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    {person.bio}
                  </p>
                  <a
                    href={person.social}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors shadow-sm w-fit"
                  >
                    <Linkedin size={16} />
                    View Profile
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ChangemakersSection;
