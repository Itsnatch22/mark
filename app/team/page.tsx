'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
const teamMembers = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'Frontend Developer',
    bio: 'Alice is a React wizard who breathes Tailwind and typescript. She once refactored a legacy codebase in a weekend. Certified CSS sorceress 🧙‍♀️.',
    socials: {
      twitter: 'https://twitter.com/alicejohnson',
      linkedin: 'https://linkedin.com/in/alicejohnson',
      github: 'https://github.com/alicejohnson',
    },
    image: '/team/avatar1.jpg',
  },
  {
    id: 2,
    name: 'Bob Singh',
    role: 'UX Designer',
    bio: 'Bob sees the world in grids and spacing. He’s Figma’s #1 fan and probably has a dark mode tattoo. Making things *feel* right since 2016.',
    socials: {
      twitter: 'https://twitter.com/bobsingh',
      linkedin: 'https://linkedin.com/in/bobsingh',
      github: null,
    },
    image: '/team/avatar2.jpg',
  },
  {
    id: 3,
    name: 'Carla Diaz',
    role: 'Project Manager',
    bio: 'Carla runs the show with 200 Trello cards and zero fear. Juggles timelines like she’s in Cirque du Soleil 🎪. Fluent in dev-speak and exec-speak.',
    socials: {
      twitter: null,
      linkedin: 'https://linkedin.com/in/carladiaz',
      github: null,
    },
    image: '/team/avatar3.jpg',
  },
  {
    id: 4,
    name: 'David Lin',
    role: 'Full-Stack Engineer',
    bio: 'David eats backend APIs for breakfast and deploys to production without breaking a sweat. MongoDB in one hand, Next.js in the other.',
    socials: {
      twitter: 'https://twitter.com/davidlin',
      linkedin: 'https://linkedin.com/in/davidlin',
      github: 'https://github.com/davidlin',
    },
    image: '/team/avatar4.jpg',
  },
  {
    id: 5,
    name: 'Ella Stone',
    role: 'Cybersecurity Analyst',
    bio: 'Ella hacks her own systems before the bad guys do. If your password is "1234", she’s already disappointed in you 😤. Loves encryption and Earl Grey.',
    socials: {
      twitter: 'https://twitter.com/ellastone',
      linkedin: 'https://linkedin.com/in/ellastone',
      github: null,
    },
    image: '/team/avatar5.jpg',
  },
  {
    id: 6,
    name: 'Frank Ocean—not that one',
    role: 'DevOps Engineer',
    bio: 'Frank builds pipelines like he’s laying train tracks. CI/CD master, Docker disciple, and Terraform whisperer. Loves uptime more than sleep.',
    socials: {
      twitter: 'https://twitter.com/franknottheartist',
      linkedin: 'https://linkedin.com/in/devfranko',
      github: 'https://github.com/frankocean',
    },
    image: '/team/avatar1.jpg',
  },
  {
    id: 7,
    name: 'Grace Lee',
    role: 'Data Scientist',
    bio: 'Grace turns data into insights faster than you can say "machine learning". Pythonista and R guru. If it’s not in a Jupyter notebook, it didn’t happen.',
    socials: {
      twitter: null,
      linkedin: 'https://linkedin.com/in/gracelee',
      github: null,
    },
    image: '/team/avatar2.jpg',
  },
    {
        id: 8,
        name: 'Henry Ford',
        role: 'Marketing Specialist',
        bio: 'Henry knows how to make a product fly off the shelves. SEO ninja and content marketing wizard. If it’s not on Google, it doesn’t exist.',
        socials: {
        twitter: 'https://twitter.com/henryford',
        linkedin: 'https://linkedin.com/in/henryford',
        github: null,
        },
        image: '/team/avatar3.jpg',
    },
    {
        id: 9,
        name: 'Ivy Chen',
        role: 'Quality Assurance Engineer',
        bio: 'Ivy finds bugs faster than you can say "regression testing". If it’s not in the test suite, it’s not real. Loves automation and coffee.',
        socials: {
        twitter: null,
        linkedin: 'https://linkedin.com/in/ivychen',
        github: null,
        },
        image: '/team/avatar4.jpg',
    },
    {
        id: 10,
        name: 'Jack Sparrow',
        role: 'Content Writer',
        bio: 'Jack spins words like a pirate spins tales. If it’s not engaging, it’s not worth writing. Loves storytelling and rum (just kidding).',
        socials: {
        twitter: 'https://twitter.com/jacksparrow',
        linkedin: 'https://linkedin.com/in/jacksparrow',
        github: null,
        },
        image: '/team/avatar5.jpg',
    },
    {
        id: 11,
        name: 'Kathy Bates',
        role: 'Customer Support Specialist',
        bio: 'Kathy solves problems faster than you can say "customer satisfaction". If it’s not in the ticketing system, it didn’t happen. Loves helping people.',
        socials: {
        twitter: null,
        linkedin: 'https://linkedin.com/in/kathybates',
        github: null,
        },
        image: '/team/avatar1.jpg',
    },
    {
        id: 12,
        name: 'Leo Messi',
        role: 'Business Analyst',
        bio: 'Leo analyzes data like he’s dribbling past defenders. If it’s not in the spreadsheet, it didn’t happen. Loves Excel and football (soccer).',
        socials: {
        twitter: 'https://twitter.com/leomessi',
        linkedin: 'https://linkedin.com/in/leomessi',
        github: null,
        },
        image: '/team/avatar2.jpg',
    },
    {
        id: 13,
        name: 'Mia Wong',
        role: 'Network Administrator',
        bio: 'Mia keeps the network running smoother than a well-oiled machine. If it’s not in the topology diagram, it didn’t happen. Loves routers and switches.',
        socials: {
        twitter: null,
        linkedin: 'https://linkedin.com/in/miawong',
        github: null,
        },
        image: '/team/avatar3.jpg',
    },
    {
        id: 14,
        name: 'Nina Simone',
        role: 'Graphic Designer',
        bio: 'Nina designs graphics that make you go "wow". If it’s not in Adobe, it didn’t happen. Loves colors and creativity.',
        socials: {
        twitter: 'https://twitter.com/ninasimone',
        linkedin: 'https://linkedin.com/in/ninasimone',
        github: null,
        },
        image: '/team/avatar4.jpg',
    },
    {
        id: 15,
        name: 'Oscar Wilde',
        role: 'SEO Specialist',
        bio: 'Oscar optimizes websites like he’s writing poetry. If it’s not on page one, it doesn’t exist. Loves keywords and content strategy.',
        socials: {
        twitter: null,
        linkedin: 'https://linkedin.com/in/oscarwilde',
        github: null,
        },
        image: '/team/avatar5.jpg',
    },
    {
        id: 16,
        name: 'Paula Abdul',
        role: 'Social Media Manager',
        bio: 'Paula manages social media like she’s running a talent show. If it’s not trending, it didn’t happen. Loves hashtags and engagement.',
        socials: {
        twitter: 'https://twitter.com/paulaabdul',
        linkedin: 'https://linkedin.com/in/paulaabdul',
        github: null,
        },
        image: '/team/avatar1.jpg',
    },
    {
        id: 17,
        name: 'Quincy Jones',
        role: 'IT Support Specialist',
        bio: 'Quincy solves IT problems faster than you can say "help desk". If it’s not in the ticketing system, it didn’t happen. Loves troubleshooting and tech support.',
        socials: {
        twitter: null,
        linkedin: 'https://linkedin.com/in/quincyjones',
        github: null,
        },
        image: '/team/avatar2.jpg',
    },
    {
        id: 18,
        name: 'Rihanna',
        role: 'Sales Executive',
        bio: 'Rihanna sells like she’s on stage at a concert. If it’s not in the CRM, it didn’t happen. Loves closing deals and making connections.',
        socials: {
        twitter: 'https://twitter.com/rihanna',
        linkedin: 'https://linkedin.com/in/rihanna',
        github: null,
        },
        image: '/team/avatar3.jpg',
    },
    {
        id: 19,
        name: 'Steve Jobs',
        role: 'Product Manager',
        bio: 'Steve manages products like he’s launching a rocket. If it’s not in the roadmap, it didn’t happen. Loves innovation and user experience.',
        socials: {
        twitter: null,
        linkedin: 'https://linkedin.com/in/stevejobs',
        github: null,
        },
        image: '/team/avatar4.jpg',
    },
    {
        id: 20,
        name: 'Taylor Swift',
        role: 'Content Strategist',
        bio: 'Taylor strategizes content like she’s writing a hit song. If it’s not in the content calendar, it didn’t happen. Loves storytelling and creativity.',
        socials: {
        twitter: 'https://twitter.com/taylorswift',
        linkedin: 'https://linkedin.com/in/taylorswift',
        github: null,
        },
        image: '/team/avatar5.jpg',
    },
    {
        id: 21,
        name: 'Uma Thurman',
        role: 'Business Development Manager',
        bio: 'Uma develops business like she’s starring in a blockbuster. If it’s not in the pipeline, it didn’t happen. Loves networking and partnerships.',
        socials: {
        twitter: null,
        linkedin: 'https://linkedin.com/in/umathurman',
        github: null,
        },
        image: '/team/avatar1.jpg',
    },
    {
        id: 22,
        name: 'Vin Diesel',
        role: 'Cloud Architect',
        bio: 'Vin architects clouds like he’s directing a movie. If it’s not in the cloud, it didn’t happen. Loves scalability and reliability.',
        socials: {
        twitter: 'https://twitter.com/vindiesel',
        linkedin: 'https://linkedin.com/in/vindiesel',
        github: null,
        },
        image: '/team/avatar2.jpg',
    },
    {
        id: 23,
        name: 'Will Smith',
        role: 'Game Developer',
        bio: 'Will develops games like he’s starring in a blockbuster. If it’s not in Unity, it didn’t happen. Loves gaming and storytelling.',
        socials: {
        twitter: null,
        linkedin: 'https://linkedin.com/in/willsmith',
        github: null,
        },
        image: '/team/avatar3.jpg',
    },
    {
        id: 24,
        name: 'Xena Warrior Princess',
        role: 'Blockchain Developer',
        bio: 'Xena develops blockchain solutions like she’s fighting for justice. If it’s not decentralized, it didn’t happen. Loves cryptography and innovation.',
        socials: {
        twitter: 'https://twitter.com/xenawarriorprincess',
        linkedin: 'https://linkedin.com/in/xenawarriorprincess',
        github: null,
        },
        image: '/team/avatar4.jpg',
    },
    {
        id: 25,
        name: 'Yoda',
        role: 'AI Specialist',
        bio: 'Yoda specializes in AI like he’s training Jedi. If it’s not in TensorFlow, it didn’t happen. Loves machine learning and the Force.',
        socials: {
        twitter: null,
        linkedin: 'https://linkedin.com/in/yoda',
        github: null,
        },
        image: '/team/avatar5.jpg',
    },
    {
        id: 26,
        name: 'Zoe Saldana',
        role: 'Virtual Reality Developer',
        bio: 'Zoe develops VR experiences like she’s starring in a sci-fi movie. If it’s not immersive, it didn’t happen. Loves virtual worlds and storytelling.',
        socials: {
        twitter: 'https://twitter.com/zoesaldana',
        linkedin: 'https://linkedin.com/in/zoesaldana',
        github: null,
        },
        image: '/team/avatar1.jpg',
    },
    {
        id: 27,
        name: 'Aaron Paul',
        role: 'AR Developer',
        bio: 'Aaron develops AR experiences like he’s starring in a thriller. If it’s not augmented, it didn’t happen. Loves blending reality and technology.',
        socials: {
        twitter: null,
        linkedin: 'https://linkedin.com/in/aaronpaul',
        github: null,
        },
        image: '/team/avatar2.jpg',
    }
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-lg text-gray-600">
            Meet the brainiacs behind the magic ✨
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedMember(member.id)}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer border border-gray-200 hover:border-blue-500 transition-all"
            >
              <div className="h-48 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Member Modal */}
        <AnimatePresence>
          {selectedMember !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                {selectedMember && (
                  <>
                    <div className="relative h-64 w-full">
                      <Image
                        src={teamMembers[selectedMember - 1].image}
                        alt={teamMembers[selectedMember - 1].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {teamMembers[selectedMember - 1].name}
                      </h2>
                      <p className="text-blue-600 text-lg mb-4">
                        {teamMembers[selectedMember - 1].role}
                      </p>
                      <p className="text-gray-700 mb-6">
                        {teamMembers[selectedMember - 1].bio}
                      </p>

                      {/* Social Links */}
                      <div className="flex space-x-4">
                        {teamMembers[selectedMember - 1].socials.twitter && (
                          <Link
                            href={teamMembers[selectedMember - 1].socials.twitter || ''}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-600"
                          >
                            <span className="sr-only">Twitter</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </Link>
                        )}
                        {teamMembers[selectedMember - 1].socials.linkedin && (
                          <a
                            href={teamMembers[selectedMember - 1].socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-900"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </a>
                        )}
                        {teamMembers[selectedMember - 1].socials.github && (
                          <a
                            href={teamMembers[selectedMember - 1].socials.github || ''}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-gray-600"
                          >
                            <span className="sr-only">GitHub</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
