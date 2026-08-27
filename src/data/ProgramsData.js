import program1 from "../assets/program1.png";
import program2 from "../assets/program2.png";
import program3 from "../assets/program3.png";
import program4 from "../assets/program4.png";
import program5 from "../assets/program5.png";
import program6 from "../assets/program6.png";
import program7 from "../assets/program7.png";
import program8 from "../assets/program8.png";
import program9 from "../assets/program9.png";
import program10 from "../assets/program10.png";
import program11 from "../assets/program11.png";
import program12 from "../assets/program12.png";
import program13 from "../assets/program13.png";
import program14 from "../assets/program14.jpg";
import program15 from "../assets/program15.png";
import program16 from "../assets/program16.jpg";
import program17 from "../assets/program17.jpg";
import program18 from "../assets/program18.jpg";
import program19 from "../assets/program19.jpg";
import program20 from "../assets/program20.jpg";
import program21 from "../assets/program21.png";

const programsData = [

  // ================= 1. BASKETBALL BOYS =================
  {
    id: 1,
    title: "Basketball Boys",
    image: program1,

    tagline:
      "Shoot for Success with Ribat’s Basketball Program!",

    description:
      "Suitable for all ages. Improve your dribbling, shooting, and teamwork while having fun and staying active. Enroll today and reach new heights on the court.",

    coach: "Muhammad Azeem-u-Shan",

    coachDetails: [
      "MSc. Sport Science",
      "Represented the 50th Pakistan National Basketball team",
    ],

    levels: [
      "Level 1: 7:00 pm – 8:00 pm",
      "Level 2: 8:00 pm – 9:00 pm",
    ],

    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",

    whatsappLink:
      "https://api.whatsapp.com/send?phone=923192009490&text=Hello%20Ribat%21%0AName%3A%0ALike%20to%20know%20more%20information%20about%20-%20%27Basketball%20Boys%27",
  },


  // ================= 2. BASKETBALL GIRLS =================
  {
    id: 2,
    title: "Basketball Girls",
    image: program2,

    tagline:
      "Shoot for Success with Ribat’s Basketball Program!",

    description:
      "Suitable for all ages. Improve your dribbling, shooting, and teamwork while having fun and staying active.",

    coach: "Hina Moin",

    coachDetails: [
      "Captain of the Sindh Women’s Basketball Team in 2016, leading the team to a Bronze Medal at the National Championship.",
      "Won a Gold Medal at the Sindh Games, representing the Karachi Basketball Team.",
      "Represented the Pakistan Army Basketball Team for 4 years, competing at national-level tournaments.",
    ],

    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",

    whatsappLink:
      "https://api.whatsapp.com/send?phone=923192009490&text=Hello%20Ribat%21%0AName%3A%0ALike%20to%20know%20more%20information%20about%20-%20%27Basketball%20Girls%27",
  },


  // ================= 3. FUTSAL =================
  {
    id: 3,
    title: "Futsal",
    image: program3,

    tagline:
      "Elevate your skills with Ribat’s Futsal Program!",

    description:
      "Perfect for all ages and skill levels, our program offers professional coaching, competitive matches, and a fun, energetic environment. Develop your agility, teamwork, and ball control while enjoying the fast-paced action of Futsal.",

    coach: "Syed Nasir Ali",

    coachDetails: [
      "AFC ‘C’ Certified",
      "National Team 1995 to 2000",
      "NBP Junior Football Coach 2015",
      "NBP Senior Football Coach 2018",
    ],

    levels: [
      "Level 1: 7:30 pm – 8:30 pm",
      "Level 2: 8:30 pm – 9:30 pm",
    ],

    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",

    whatsappLink:
      "https://api.whatsapp.com/send?phone=923192009490&text=Hello%20Ribat%21%0AName%3A%0ALike%20to%20know%20more%20information%20about%20-%20%27Futsal%27",
  },


  // ================= 4. GIRLS FUTSAL =================
  {
    id: 4,
    title: "Girls Futsal",
    image: program4,

    tagline: "",

    description:
      "Designed for girls aged 8+, this is more than a place to play. It’s where confidence grows, friendships are built, and every session inspires strength, discipline, and teamwork.",

    coach: "Sumiyah Mushtaq",

    coachDetails: [
      "Pakistan Football Federation certified",
      "Paris Saint-Germain Academy Qatar International Camp – Pakistan 2025",
      "14th Sindh Games Sukkur (Gold Medal)",
      "15th Sindh Games Mirpur Khas (Gold Medal)",
    ],

    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",

    whatsappLink:
      "https://api.whatsapp.com/send?phone=923192009490&text=Hello%20Ribat%21%0AName%3A%0ALike%20to%20know%20more%20information%20about%20-%20%27Girls%20Futsal%27",
  },


  // ================= 5. TEDDY FUTSAL & PICKLEBALL =================
  {
    id: 5,
    title: "Teddy Futsal & Pickleball",
    image: program5,

    tagline:
      "Introducing Teddy Sports at Ribat 🎾⚽",

    description:
      "Join us for a fun introduction to movement, coordination, teamwork, and building confidence!",

    coach: "Muhammad Shariq Siddiqui",

    coachDetails: [
      "Pioneer of pickleball in Pakistan; first internationally qualified coach and Head Coach of the national team",
      "16+ years coaching experience; trained athletes for domestic and international competitions; leadership roles in sports federations",
    ],

    registrationFee: "Rs 1000",
    monthlyFee: "₨4,000",
    uniformFee: "₨2,500",

    whatsappLink:
      "https://api.whatsapp.com/send?phone=923192009490&text=Hello%20Ribat%21%0AName%3A%0ALike%20to%20know%20more%20information%20about%20-%20%27Teddy%20Futsal%20%26%20Pickleball%27",
  },


  // ================= 6. MARTIAL ARTS MALE =================
  {
    id: 6,
    title: "Martial Arts Male",
    image: program6,

    tagline:
      "Unlock your potential with Ribat’s Martial Arts Program!",

    description:
      "Our expert instructors offer comprehensive training in various disciplines. Perfect for all ages and skill levels, our program focuses on physical fitness, self-defense, and personal growth, supervised by Mr. Abdul Samad (Markaz Martial Arts Academy), with a female coach available for students. Join us to boost your confidence, discipline, and overall well-being. Enroll today and start your journey towards mastery!",

    coach: "Abdul Samad",

    coachDetails: [
      "Markaz Martial Arts Academy",
      "Female coach available for students",
    ],

    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",

    whatsappLink:
      "https://api.whatsapp.com/send?phone=923192009490&text=Hello%20Ribat%21%0AName%3A%0ALike%20to%20know%20more%20information%20about%20-%20%27Martial%20Arts%20Male%27",
  },


  // ================= 7. MARTIAL ARTS FEMALE =================
  {
    id: 7,
    title: "Martial Arts Female",
    image: program7,

    tagline:
      "Unlock your potential with Ribat’s Martial Arts Program!",

    description:
      "Our expert instructors offer comprehensive training in various disciplines. Perfect for all ages and skill levels, our program focuses on physical fitness, self-defense, and personal growth, supervised by Mr. Abdul Samad (Markaz Martial Arts Academy), with a female coach available for students. Join us to boost your confidence, discipline, and overall well-being. Enroll today and start your journey towards mastery!",

    coach: "Abdul Samad",

    coachDetails: [
      "Markaz Martial Arts Academy",
      "Female coach available for students",
    ],

    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",

    whatsappLink:
      "https://api.whatsapp.com/send?phone=923192009490&text=Hello%20Ribat%21%0AName%3A%0ALike%20to%20know%20more%20information%20about%20-%20%27Martial%20Arts%20Female%27",
  },


  // ================= 8. SKATING =================
  {
    id: 8,
    title: "Skating",
    image: program8,

    tagline:
      "Join Ribat’s Skating Club and improve your balance, coordination, and confidence.",

    description:
      "Join Ribat’s Skating Club and improve your balance, coordination, and confidence while enjoying the fast-paced world of skating.",

    coach: "Muhammad Tahir",

    coachDetails: [
      "2nd Position at Naltre Curling Ice Hockey 2025",
      "4th Position at World Cup Turkey 2024",
      "1st Position at Bangkok Asian Championship – Girls Team Coach 2016",
    ],

    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",

    whatsappLink:
      "https://api.whatsapp.com/send?phone=923192009490&text=Hello%20Ribat%21%0AName%3A%0ALike%20to%20know%20more%20information%20about%20-%20%27Skating%27",
  },


  // ================= 9–21 =================
  // Details baad mein add ki ja sakti hain.

  {
    id: 9,
    title: "Program 9",
    image: program9,
    tagline: "Ribat Program",
    description: "Program details will be added soon.",
    coach: "",
    coachDetails: [],
    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",
    whatsappLink: "#",
  },

  {
    id: 10,
    title: "Program 10",
    image: program10,
    tagline: "Ribat Program",
    description: "Program details will be added soon.",
    coach: "",
    coachDetails: [],
    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",
    whatsappLink: "#",
  },

  {
    id: 11,
    title: "Program 11",
    image: program11,
    tagline: "Ribat Program",
    description: "Program details will be added soon.",
    coach: "",
    coachDetails: [],
    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",
    whatsappLink: "#",
  },

  {
    id: 12,
    title: "Program 12",
    image: program12,
    tagline: "Ribat Program",
    description: "Program details will be added soon.",
    coach: "",
    coachDetails: [],
    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",
    whatsappLink: "#",
  },

  {
    id: 13,
    title: "Program 13",
    image: program13,
    tagline: "Ribat Program",
    description: "Program details will be added soon.",
    coach: "",
    coachDetails: [],
    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",
    whatsappLink: "#",
  },

  {
    id: 14,
    title: "Program 14",
    image: program14,
    tagline: "Ribat Program",
    description: "Program details will be added soon.",
    coach: "",
    coachDetails: [],
    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",
    whatsappLink: "#",
  },

  {
    id: 15,
    title: "Program 15",
    image: program15,
    tagline: "Ribat Program",
    description: "Program details will be added soon.",
    coach: "",
    coachDetails: [],
    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",
    whatsappLink: "#",
  },

  {
    id: 16,
    title: "Program 16",
    image: program16,
    tagline: "Ribat Program",
    description: "Program details will be added soon.",
    coach: "",
    coachDetails: [],
    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",
    whatsappLink: "#",
  },

  {
    id: 17,
    title: "Program 17",
    image: program17,
    tagline: "Ribat Program",
    description: "Program details will be added soon.",
    coach: "",
    coachDetails: [],
    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",
    whatsappLink: "#",
  },

  {
    id: 18,
    title: "Program 18",
    image: program18,
    tagline: "Ribat Program",
    description: "Program details will be added soon.",
    coach: "",
    coachDetails: [],
    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",
    whatsappLink: "#",
  },

  {
    id: 19,
    title: "Program 19",
    image: program19,
    tagline: "Ribat Program",
    description: "Program details will be added soon.",
    coach: "",
    coachDetails: [],
    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",
    whatsappLink: "#",
  },

  {
    id: 20,
    title: "Program 20",
    image: program20,
    tagline: "Ribat Program",
    description: "Program details will be added soon.",
    coach: "",
    coachDetails: [],
    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",
    whatsappLink: "#",
  },

  {
    id: 21,
    title: "Program 21",
    image: program21,
    tagline: "Ribat Program",
    description: "Program details will be added soon.",
    coach: "",
    coachDetails: [],
    registrationFee: "Rs 1000",
    monthlyFee: "₨3,500",
    uniformFee: "₨2,500",
    whatsappLink: "#",
  },
];

export default programsData;