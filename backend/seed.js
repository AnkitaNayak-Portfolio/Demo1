require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./models/Course');

const courses = [
  {
    title: 'Advanced Web Development BootCamp',
    instructor: 'Sarah Drasner',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072',
    price: '$89.99',
    rating: 4.9,
    students: '12.5k',
    duration: '32h 45m',
    category: 'Development'
  },
  {
    title: 'Data Science & Machine Learning',
    instructor: 'Andrew Ng',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    price: '$99.99',
    rating: 4.8,
    students: '8.2k',
    duration: '45h 20m',
    category: 'Data Science'
  },
  {
    title: 'Master UI/UX Design Fundamentals',
    instructor: 'Gary Simon',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000',
    price: '$79.99',
    rating: 4.7,
    students: '5.1k',
    duration: '18h 15m',
    category: 'Design'
  },
  {
    title: 'Digital Marketing Masterclass',
    instructor: 'Neil Patel',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2074',
    price: '$69.99',
    rating: 4.6,
    students: '10.3k',
    duration: '22h 10m',
    category: 'Marketing'
  },
  {
    title: 'Business Strategy and Leadership',
    instructor: 'Simon Sinek',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
    price: '$120.00',
    rating: 4.9,
    students: '4.8k',
    duration: '15h 30m',
    category: 'Business'
  },
  {
    title: 'Professional Photography Basics',
    instructor: 'Peter McKinnon',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=2000',
    price: '$59.99',
    rating: 4.8,
    students: '7.6k',
    duration: '12h 00m',
    category: 'Photography'
  },
  {
    title: 'Full-Stack React & Node.js',
    instructor: 'Brad Traversy',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070',
    price: '$89.99',
    rating: 4.8,
    students: '15.2k',
    duration: '28h 15m',
    category: 'Development'
  },
  {
    title: 'Python for Data Analysis',
    instructor: 'Jose Portilla',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=2000',
    price: '$94.99',
    rating: 4.7,
    students: '9.4k',
    duration: '20h 45m',
    category: 'Development'
  },
  {
    title: 'Figma to Code',
    instructor: 'Kevin Powell',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=2070',
    price: '$45.00',
    rating: 4.9,
    students: '6.1k',
    duration: '10h 30m',
    category: 'Design'
  }
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
    console.log("Connected to DB, seeding...");
    await Course.deleteMany({});
    await Course.insertMany(courses);
    console.log("Seeded successfully!");
    process.exit(0);
}).catch(err => {
    console.error(err);
    process.exit(1);
});
