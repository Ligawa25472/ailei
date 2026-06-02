export type CourseEvent = {
  id: string;
  date: string;
  day: string;
  duration: string;
  title: string;
  location: string;
  address: string;
  price: number;
  status: "available" | "fully-booked" | "waitlist";
  category: string;
  details: string;
  month: string;
  ticketLabel: string;
  spotsAvailable?: number;
};

export const courseCategories = [
  { label: "STCW Basic Training 2 Day", filter: "stcw-basic" },
  { label: "USCG Captains License", filter: "captains" },
  { label: "STCW Advanced Fire Fighting Online", filter: "stcw-online" },
  { label: "STCW Online/Blended Courses", filter: "stcw-online" },
  { label: "Yacht Crew Training", filter: "yacht" },
  { label: "Entertainment", filter: "entertainment" },
];

export const scheduleData: CourseEvent[] = [
  // === MARCH 2026 - STCW BASIC ===
  {
    id: "ev-sowsk",
    date: "26",
    day: "Thu",
    duration: "2 days",
    title: "Fort Lauderdale - STCW Basic Training (Revalidation) Course",
    location: "Fort Lauderdale, FL",
    address: "4200 South Congress Avenue, Lake Worth FL 33461",
    price: 695,
    status: "fully-booked",
    category: "stcw-basic",
    details: `STCW Basic Training (Blended) Course

The 2-day STCW Basic training revalidation course is approved by the US Coastguard and internationally recognized.

Practical training includes Fire Fighting and Personal Survival Techniques.

Day 1 Fort Lauderdale 9am to Noon
Day 2 Lake Worth Fire Academy 9am to 5pm

(Candidates should note that the fire fighting curriculum is physically demanding and may expose you to high temperatures while conducting the required course exercises in the fire training simulator. Personal survival techniques will expose you to normal hazards associated with a water training facility while conducting the required course exercises in the pool. You must be able to tread water (float) for a minimum of 1 minute without any flotation devices)`,
    month: "March, 2026",
    ticketLabel: "STCW Basic Training Fort Lauderdale",
  },
  {
    id: "ev-sbi0",
    date: "26",
    day: "Thu",
    duration: "2 days",
    title: "Fort Lauderdale 2 Day STCW Blended Basic Training",
    location: "Fort Lauderdale, FL",
    address: "4200 South Congress Avenue, Lake Worth FL 33461",
    price: 1095,
    status: "fully-booked",
    category: "stcw-basic",
    details: `STCW Basic Training (Blended) Course (2 Days)

The 2-day STCW Basic training is a blended course, approved by the US Coastguard and recognized by all Flag registries.

Online theory training is completed using our marine learning platform followed by 2 Days of Practical training, including Fire Fighting, Personal Survival Techniques, First Aid/CPR & Assessments.

Day 1 Lake Worth (Fire Fighting) 9am to 5pm / Fort Lauderdale (PST/First Aid CPR) 9am to 5pm
Day 2 Fort Lauderdale (PST/First Aid CPR) 9am to 5pm

Please note that transportation is provided on both days from the Four Points Sheraton hotel (cruise port)

(Candidates should note that the fire fighting curriculum is physically demanding and may expose you to high temperatures while conducting the required course exercises in the fire training simulator. Personal survival techniques will expose you to normal hazards associated with a water training facility while conducting the required course exercises in the pool. Please contact the school if you are a non-swimmer)`,
    month: "March, 2026",
    ticketLabel: "Fort Lauderdale STCW Basic Training Blended",
  },
  {
    id: "ev-sbi1",
    date: "26",
    day: "Thu",
    duration: "2 days",
    title: "Fort Lauderdale 2 Day STCW Blended Basic Training & VPDSD Combined",
    location: "Fort Lauderdale, FL",
    address: "4200 South Congress Avenue, Lake Worth FL 33461",
    price: 1195,
    status: "fully-booked",
    category: "stcw-basic",
    details: `Combined STCW Basic Training and VPDSD course. Includes all four elements of basic training plus Vessel Personnel with Designated Security Duties certification.

The 2-day STCW Basic training is a blended course, approved by the US Coastguard and recognized by all Flag registries. The VPDSD component is completed online.

Day 1 Lake Worth (Fire Fighting) 9am to 5pm / Fort Lauderdale (PST/First Aid CPR) 9am to 5pm
Day 2 Fort Lauderdale (PST/First Aid CPR) 9am to 5pm`,
    month: "March, 2026",
    ticketLabel: "Fort Lauderdale STCW Basic Training & VPDSD Combined",
  },
  {
    id: "ev-sbi2",
    date: "26",
    day: "Thu",
    duration: "2 days",
    title: "Fort Lauderdale 2 Day STCW Blended Basic Training Fire, PST, PSSR",
    location: "Fort Lauderdale, FL",
    address: "4200 South Congress Avenue, Lake Worth FL 33461",
    price: 1095,
    status: "fully-booked",
    category: "stcw-basic",
    details: `STCW Basic Training (Blended) Course covering Fire Fighting, Personal Survival Techniques (PST), and Personal Safety & Social Responsibilities (PSSR).

Approved by the US Coastguard and recognized by all Flag registries.`,
    month: "March, 2026",
    ticketLabel: "Fort Lauderdale STCW Basic Training Fire, PST, PSSR",
  },

  // === APRIL 2026 ===
  {
    id: "ev-s7mgh",
    date: "1",
    day: "Wed",
    duration: "3 days",
    title: "Captain OUPV (6-PACK) to 100-Ton License Blended Course & Exam (MARTSA-281)",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 1095,
    status: "fully-booked",
    category: "captains",
    details: `Captain OUPV to 100-Ton License Blended Course & Exam

Our course provides you with the following endorsements, depending on vessel size and sea service (refer to the NMC USCG Checklists).

• Master of vessels of less than 100 GRT (Near coastal, or Great Lakes & Inland or Inland Waters)
• Operator of uninspected Passenger Vessels (OUPV) (Near Coastal, or Great Lakes & Inland, or Inland Waters)

Gain the essential skills and knowledge needed to command vessels with confidence. Our USCG-approved course covers navigation, safety, and seamanship while preparing you for success on the open water.

Course delivery:
• Online Courses
• 3 Days in person for practical training and preparation, concluding with the required examinations.

Subjects include: Seamanship, Navigation, Ship handling, Maritime Law, Emergency procedures, Vessel construction and design, Training on our professional ship simulator.

Examinations - Five Exam Modules:
• Rules of the Road: International and Inland (50 Questions, 90% pass mark)
• Navigation General (50 Questions, 70% pass mark)
• Chart Navigation (10 Questions, 90% pass mark)
• Deck General (50 Questions, 70% pass mark)
• Deck Safety (50 Questions, 70% pass mark)

Note: A course certificate may be used for one application for the issuance of an endorsement and may not be used for any applications thereafter.`,
    month: "April, 2026",
    ticketLabel: "USCG Approved Captains Course OUPV (6-Pack) and 100 Ton Captain (MARTSA-281)",
  },
  {
    id: "ev-orl-apr13-vpdsd",
    date: "13",
    day: "Mon",
    duration: "2 days",
    title: "Orlando (Port Canaveral) - 2 Day STCW Blended Basic Training & VPDSD Combined (Blended) Course",
    location: "Orlando/Port Canaveral, FL",
    address: "6236 Kingspointe Pkwy, #1, Orlando, FL 32819",
    price: 1195,
    status: "available",
    category: "stcw-basic",
    details: `Combined STCW Basic Training and VPDSD course at our Orlando location near Port Canaveral.

The 2-day STCW Basic training is a blended course, approved by the US Coastguard and recognized by all Flag registries. Includes VPDSD certification.

Day 1 (Orlando): First Aid, CPR & Survival Techniques
Day 2 (Port Canaveral): Firefighting

(Candidates should note that the fire fighting curriculum is physically demanding and may expose you to high temperatures. Personal survival techniques will expose you to normal hazards associated with a water training facility. Please contact the school if you are a non-swimmer)`,
    month: "April, 2026",
    ticketLabel: "Orlando STCW Basic Training & VPDSD Combined",
  },
  {
    id: "ev-orl-apr13-basic",
    date: "13",
    day: "Mon",
    duration: "2 days",
    title: "Orlando (Port Canaveral) - 2 Day STCW Blended Basic Training (Blended) Course",
    location: "Orlando/Port Canaveral, FL",
    address: "6236 Kingspointe Pkwy, #1, Orlando, FL 32819",
    price: 1095,
    status: "available",
    category: "stcw-basic",
    details: `STCW Basic Training (Blended) Course (2 Days)

Online theory training is completed using our marine learning platform followed by 2 Days of Practical training, including Fire Fighting, Personal Survival Techniques, First Aid/CPR & Assessments.

Day 1 (Orlando): First Aid, CPR & Survival Techniques
Day 2 (Port Canaveral): Firefighting

(Candidates should note that the fire fighting curriculum is physically demanding. Please contact the school if you are a non-swimmer)`,
    month: "April, 2026",
    ticketLabel: "Orlando STCW Basic Training Blended",
  },
  {
    id: "ev-orl-apr13-reval",
    date: "13",
    day: "Mon",
    duration: "2 days",
    title: "Orlando (Port Canaveral) - STCW Basic Training (Revalidation) Course",
    location: "Orlando/Port Canaveral, FL",
    address: "6236 Kingspointe Pkwy, #1, Orlando, FL 32819",
    price: 695,
    status: "fully-booked",
    category: "stcw-basic",
    details: `STCW Basic Training Revalidation Course at our Orlando location near Port Canaveral.

The revalidation course is approved by the US Coastguard and internationally recognized. Practical training includes Fire Fighting and Personal Survival Techniques.`,
    month: "April, 2026",
    ticketLabel: "Orlando STCW Basic Training Revalidation",
  },
  {
    id: "ev-fll-apr20-basic",
    date: "20",
    day: "Mon",
    duration: "2 days",
    title: "Fort Lauderdale 2 Day STCW Blended Basic Training",
    location: "Fort Lauderdale, FL",
    address: "4200 South Congress Avenue, Lake Worth FL 33461",
    price: 1095,
    status: "available",
    category: "stcw-basic",
    details: `STCW Basic Training (Blended) Course (2 Days)

The 2-day STCW Basic training is a blended course, approved by the US Coastguard and recognized by all Flag registries.

Online theory training is completed using our marine learning platform followed by 2 Days of Practical training, including Fire Fighting, Personal Survival Techniques, First Aid/CPR & Assessments.

Day 1 Lake Worth (Fire Fighting) 9am to 5pm / Fort Lauderdale (PST/First Aid CPR) 9am to 5pm
Day 2 Fort Lauderdale (PST/First Aid CPR) 9am to 5pm

Please note that transportation is provided on both days from the Four Points Sheraton hotel (cruise port)`,
    month: "April, 2026",
    ticketLabel: "Fort Lauderdale STCW Basic Training Blended",
  },
  {
    id: "ev-fll-apr20-vpdsd",
    date: "20",
    day: "Mon",
    duration: "2 days",
    title: "Fort Lauderdale 2 Day STCW Blended Basic Training & VPDSD Combined",
    location: "Fort Lauderdale, FL",
    address: "4200 South Congress Avenue, Lake Worth FL 33461",
    price: 1195,
    status: "available",
    category: "stcw-basic",
    details: `Combined STCW Basic Training and VPDSD course at Fort Lauderdale.

Includes all four elements of basic training plus Vessel Personnel with Designated Security Duties certification.`,
    month: "April, 2026",
    ticketLabel: "Fort Lauderdale STCW Basic Training & VPDSD Combined",
  },
  {
    id: "ev-orl-apr28-vpdsd",
    date: "28",
    day: "Tue",
    duration: "2 days",
    title: "Orlando (Port Canaveral) - 2 Day STCW Blended Basic Training & VPDSD Combined (Blended) Course",
    location: "Orlando/Port Canaveral, FL",
    address: "6236 Kingspointe Pkwy, #1, Orlando, FL 32819",
    price: 1195,
    status: "available",
    category: "stcw-basic",
    details: `Combined STCW Basic Training and VPDSD course at Orlando/Port Canaveral.

Day 1 (Orlando): First Aid, CPR & Survival Techniques
Day 2 (Port Canaveral): Firefighting`,
    month: "April, 2026",
    ticketLabel: "Orlando STCW Basic Training & VPDSD Combined",
  },
  {
    id: "ev-orl-apr28-basic",
    date: "28",
    day: "Tue",
    duration: "2 days",
    title: "Orlando (Port Canaveral) - 2 Day STCW Blended Basic Training (Blended) Course",
    location: "Orlando/Port Canaveral, FL",
    address: "6236 Kingspointe Pkwy, #1, Orlando, FL 32819",
    price: 1095,
    status: "available",
    category: "stcw-basic",
    details: `STCW Basic Training Blended Course at Orlando/Port Canaveral.

Online learning followed by 2 days of hands-on practical training.`,
    month: "April, 2026",
    ticketLabel: "Orlando STCW Basic Training Blended",
  },

  // === MAY 2026 ===
  {
    id: "ev-orl-may12-vpdsd",
    date: "12",
    day: "Tue",
    duration: "2 days",
    title: "Orlando (Port Canaveral) - 2 Day STCW Blended Basic Training & VPDSD Combined (Blended) Course",
    location: "Orlando/Port Canaveral, FL",
    address: "6236 Kingspointe Pkwy, #1, Orlando, FL 32819",
    price: 1195,
    status: "available",
    category: "stcw-basic",
    details: `Combined STCW Basic Training and VPDSD course at Orlando/Port Canaveral in May.`,
    month: "May, 2026",
    ticketLabel: "Orlando STCW Basic Training & VPDSD Combined",
  },
  {
    id: "ev-orl-may12-basic",
    date: "12",
    day: "Tue",
    duration: "2 days",
    title: "Orlando (Port Canaveral) - 2 Day STCW Blended Basic Training (Blended) Course",
    location: "Orlando/Port Canaveral, FL",
    address: "6236 Kingspointe Pkwy, #1, Orlando, FL 32819",
    price: 1095,
    status: "available",
    category: "stcw-basic",
    details: `STCW Basic Training Blended Course at Orlando/Port Canaveral in May.`,
    month: "May, 2026",
    ticketLabel: "Orlando STCW Basic Training Blended",
  },
  {
    id: "ev-yacht-interior-may12",
    date: "12",
    day: "Tue",
    duration: "5 days",
    title: "Yachting - STCW Basic Training (Blended) & Interior Crew Training Discounted Package Orlando (MARTSA-104)",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 8422 International Drive, Orlando FL 32819",
    price: 1600,
    status: "available",
    category: "yacht",
    spotsAvailable: 4,
    details: `STCW Basic Training (Blended) – 2 Days May 12th/13th

(Please contact the school if you wish to complete basic training on another date).

USCG-approved, globally recognized training. Complete online theory, followed by 2 days of hands-on training:

Day 1 (Orlando): First Aid, CPR & Survival Techniques
Day 2 (Port Canaveral): Firefighting

Jumpstart your yachting career today!

Yacht Stewardess - May 14th, 15th & 16th

Travel the world, meet new people, and earn while working on luxury yachts!

Our Yacht Interior Course, led by industry pros, covers stewardess essentials—bartending, food service, networking, and securing your first yacht job. We also guide you through resumes, interviews, documentation, and recruitment.`,
    month: "May, 2026",
    ticketLabel: "Yachting - STCW Basic Training & Interior Crew Training Package",
  },
  {
    id: "ev-yacht-interior-may14",
    date: "14",
    day: "Thu",
    duration: "3 days",
    title: "Yachting - Interior Crew Training Orlando (MARTSA-103)",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 8422 International Drive, Orlando FL 32819",
    price: 895,
    status: "available",
    category: "yacht",
    details: `Yacht Interior Crew Training

Travel the world, meet new people, and earn while working on luxury yachts!

Our Yacht Interior Course, led by industry pros, covers stewardess essentials—bartending, food service, networking, and securing your first yacht job. We also guide you through resumes, interviews, documentation, and recruitment.`,
    month: "May, 2026",
    ticketLabel: "Yachting - Interior Crew Training Orlando",
  },
  {
    id: "ev-fll-may21-reval",
    date: "21",
    day: "Thu",
    duration: "2 days",
    title: "Fort Lauderdale - STCW Basic Training (Revalidation) Course",
    location: "Fort Lauderdale, FL",
    address: "4200 South Congress Avenue, Lake Worth FL 33461",
    price: 695,
    status: "available",
    category: "stcw-basic",
    details: `STCW Basic Training Revalidation at Fort Lauderdale. Approved by the US Coastguard and internationally recognized.`,
    month: "May, 2026",
    ticketLabel: "STCW Basic Training Revalidation Fort Lauderdale",
  },
  {
    id: "ev-fll-may21-basic",
    date: "21",
    day: "Thu",
    duration: "2 days",
    title: "Fort Lauderdale 2 Day STCW Blended Basic Training",
    location: "Fort Lauderdale, FL",
    address: "4200 South Congress Avenue, Lake Worth FL 33461",
    price: 1095,
    status: "available",
    category: "stcw-basic",
    details: `STCW Basic Training (Blended) Course (2 Days) at Fort Lauderdale.

The 2-day STCW Basic training is a blended course, approved by the US Coastguard and recognized by all Flag registries.`,
    month: "May, 2026",
    ticketLabel: "Fort Lauderdale STCW Basic Training Blended",
  },
  {
    id: "ev-fll-may21-vpdsd",
    date: "21",
    day: "Thu",
    duration: "2 days",
    title: "Fort Lauderdale 2 Day STCW Blended Basic Training & VPDSD Combined",
    location: "Fort Lauderdale, FL",
    address: "4200 South Congress Avenue, Lake Worth FL 33461",
    price: 1195,
    status: "available",
    category: "stcw-basic",
    details: `Combined STCW Basic Training and VPDSD course at Fort Lauderdale in May.`,
    month: "May, 2026",
    ticketLabel: "Fort Lauderdale STCW Basic Training & VPDSD Combined",
  },

  // === JUNE 2026 ===
  {
    id: "ev-orl-jun1-vpdsd",
    date: "1",
    day: "Mon",
    duration: "2 days",
    title: "Orlando (Port Canaveral) - 2 Day STCW Blended Basic Training & VPDSD Combined (Blended) Course",
    location: "Orlando/Port Canaveral, FL",
    address: "6236 Kingspointe Pkwy, #1, Orlando, FL 32819",
    price: 1195,
    status: "available",
    category: "stcw-basic",
    details: `Combined STCW Basic Training and VPDSD at Orlando/Port Canaveral in June.`,
    month: "June, 2026",
    ticketLabel: "Orlando STCW Basic Training & VPDSD Combined",
  },
  {
    id: "ev-orl-jun1-basic",
    date: "1",
    day: "Mon",
    duration: "2 days",
    title: "Orlando (Port Canaveral) - 2 Day STCW Blended Basic Training (Blended) Course",
    location: "Orlando/Port Canaveral, FL",
    address: "6236 Kingspointe Pkwy, #1, Orlando, FL 32819",
    price: 1095,
    status: "available",
    category: "stcw-basic",
    details: `STCW Basic Training Blended Course at Orlando/Port Canaveral in June.`,
    month: "June, 2026",
    ticketLabel: "Orlando STCW Basic Training Blended",
  },
  {
    id: "ev-captains-jun10",
    date: "10",
    day: "Wed",
    duration: "3 days",
    title: "Captain OUPV (6-PACK) to 100-Ton License Blended Course & Exam (MARTSA-281)",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 1095,
    status: "available",
    category: "captains",
    details: `Captain OUPV to 100-Ton License Blended Course & Exam

Our course provides you with the following endorsements, depending on vessel size and sea service:

• Master of vessels of less than 100 GRT (Near coastal, or Great Lakes & Inland or Inland Waters)
• Operator of uninspected Passenger Vessels (OUPV) (Near Coastal, or Great Lakes & Inland, or Inland Waters)

Course delivery:
• Online Courses
• 3 Days in person for practical training and preparation, concluding with the required examinations.

Subjects: Seamanship, Navigation, Ship handling, Maritime Law, Emergency procedures, Vessel construction and design, Training on our professional ship simulator.`,
    month: "June, 2026",
    ticketLabel: "USCG Approved Captains Course OUPV (6-Pack) and 100 Ton Captain (MARTSA-281)",
  },
  {
    id: "ev-orl-jun16-vpdsd",
    date: "16",
    day: "Tue",
    duration: "2 days",
    title: "Orlando (Port Canaveral) - 2 Day STCW Blended Basic Training & VPDSD Combined (Blended) Course",
    location: "Orlando/Port Canaveral, FL",
    address: "6236 Kingspointe Pkwy, #1, Orlando, FL 32819",
    price: 1195,
    status: "available",
    category: "stcw-basic",
    details: `Combined STCW Basic Training and VPDSD at Orlando/Port Canaveral mid-June.`,
    month: "June, 2026",
    ticketLabel: "Orlando STCW Basic Training & VPDSD Combined",
  },
  {
    id: "ev-orl-jun16-basic",
    date: "16",
    day: "Tue",
    duration: "2 days",
    title: "Orlando (Port Canaveral) - 2 Day STCW Blended Basic Training (Blended) Course",
    location: "Orlando/Port Canaveral, FL",
    address: "6236 Kingspointe Pkwy, #1, Orlando, FL 32819",
    price: 1095,
    status: "available",
    category: "stcw-basic",
    details: `STCW Basic Training Blended Course at Orlando/Port Canaveral mid-June.`,
    month: "June, 2026",
    ticketLabel: "Orlando STCW Basic Training Blended",
  },
  {
    id: "ev-yacht-deck-jun16",
    date: "16",
    day: "Tue",
    duration: "5 days",
    title: "Yachting - STCW Basic Training (Blended) & Deckhand Training Discounted Package Orlando (MARTSA-106)",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 8422 International Drive, Orlando FL 32819",
    price: 1600,
    status: "available",
    category: "yacht",
    details: `STCW Basic Training (Blended) & Deckhand Training Package

USCG-approved, globally recognized training. Complete online theory, followed by hands-on training combining STCW basics with yacht deckhand skills.`,
    month: "June, 2026",
    ticketLabel: "Yachting - STCW & Deckhand Training Package",
  },
  {
    id: "ev-yacht-deck-jun18",
    date: "18",
    day: "Thu",
    duration: "3 days",
    title: "Yachting - Deckhand Course (MARTSA-105)",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 8422 International Drive, Orlando FL 32819",
    price: 895,
    status: "available",
    category: "yacht",
    details: `Yacht Deckhand Course

Comprehensive training covering tender operations, water sports instruction, exterior maintenance, navigation, and all skills needed to secure your first deckhand position on a superyacht.`,
    month: "June, 2026",
    ticketLabel: "Yachting - Deckhand Course",
  },
  {
    id: "ev-orl-jun29-vpdsd",
    date: "29",
    day: "Mon",
    duration: "2 days",
    title: "Orlando (Port Canaveral) - 2 Day STCW Blended Basic Training & VPDSD Combined (Blended) Course",
    location: "Orlando/Port Canaveral, FL",
    address: "6236 Kingspointe Pkwy, #1, Orlando, FL 32819",
    price: 1195,
    status: "available",
    category: "stcw-basic",
    details: `Combined STCW Basic Training and VPDSD at Orlando/Port Canaveral end of June.`,
    month: "June, 2026",
    ticketLabel: "Orlando STCW Basic Training & VPDSD Combined",
  },
  {
    id: "ev-orl-jun29-basic",
    date: "29",
    day: "Mon",
    duration: "2 days",
    title: "Orlando (Port Canaveral) - 2 Day STCW Blended Basic Training (Blended) Course",
    location: "Orlando/Port Canaveral, FL",
    address: "6236 Kingspointe Pkwy, #1, Orlando, FL 32819",
    price: 1095,
    status: "available",
    category: "stcw-basic",
    details: `STCW Basic Training Blended Course at Orlando/Port Canaveral end of June.`,
    month: "June, 2026",
    ticketLabel: "Orlando STCW Basic Training Blended",
  },

  // === JULY 2026 ===
  {
    id: "ev-yacht-xtraining-jul10",
    date: "10",
    day: "Fri",
    duration: "3 days",
    title: "Yachting - X Training Fort Lauderdale (MARTSA-102)",
    location: "Fort Lauderdale, FL",
    address: "4200 South Congress Avenue, Lake Worth FL 33461",
    price: 895,
    status: "available",
    category: "yacht",
    details: `Yacht X Training (Cross-Training) at Fort Lauderdale.

Comprehensive cross-training program for yacht crew looking to expand their skill set across both interior and exterior departments.`,
    month: "July, 2026",
    ticketLabel: "Yachting - X Training Fort Lauderdale",
  },

  // === OCTOBER 2026 ===
  {
    id: "ev-yacht-interior-oct20",
    date: "20",
    day: "Tue",
    duration: "3 days",
    title: "Yachting - STCW Basic Training (Blended) & Interior Crew Training Discounted Package Orlando (MARTSA-104)",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 8422 International Drive, Orlando FL 32819",
    price: 1600,
    status: "available",
    category: "yacht",
    details: `STCW Basic Training (Blended) & Interior Crew Training Package at Orlando.

USCG-approved training combined with yacht interior crew skills.`,
    month: "October, 2026",
    ticketLabel: "Yachting - STCW & Interior Crew Training Package",
  },
  {
    id: "ev-yacht-interior-oct22",
    date: "22",
    day: "Thu",
    duration: "3 days",
    title: "Yachting - Interior Crew Training Orlando (MARTSA-103)",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 8422 International Drive, Orlando FL 32819",
    price: 895,
    status: "available",
    category: "yacht",
    details: `Yacht Interior Crew Training at Orlando in October.

Our Yacht Interior Course covers stewardess essentials—bartending, food service, networking, and securing your first yacht job.`,
    month: "October, 2026",
    ticketLabel: "Yachting - Interior Crew Training Orlando",
  },

  // === STCW ONLINE COURSES (Always available, 365 days) ===
  {
    id: "ev-online-aff",
    date: "1",
    day: "Thu",
    duration: "365 days",
    title: "STCW Advanced Fire Fighting (MARTSA-15)",
    location: "Online",
    address: "Online",
    price: 175,
    status: "available",
    category: "stcw-online",
    details: `STCW Advanced Fire Fighting (MARTSA-15)

The USCG approved course satisfies the STCW Advanced Fire Fighting training requirements of Section A-VI/3 and Table A-VI/3 of the STCW Code, as amended 2010 and USCG 46 CFR 11.201(h), and 11.303(a). The online course is delivered on our Maritime Learning System.

Course Completion:
• Online Course
• Self Study Fire Investigation
• Oral assessment based on a fire scenario (by zoom video)
• Final test 25 multiple choice questions (by zoom video)

The online course covers the following topics:
• Control firefighting operations aboard ships
• Organize and train fire parties
• Inspect and service fire detection and extinguishing systems and equipment
• Investigate and compile reports on incidents involving fire

Pre-Requisites: STCW Basic Training

* If the schedule test dates for the test do not fit your schedule you will contact the school to schedule alternate dates/availability. *

Please note that all online courses are non-refundable.`,
    month: "January, 2026",
    ticketLabel: "STCW Advanced Fire Fighting (MARTSA-15)",
  },
  {
    id: "ev-online-crisis",
    date: "1",
    day: "Thu",
    duration: "365 days",
    title: "STCW Crisis Management and Human Behavior (MARTSA-981)",
    location: "Online",
    address: "Online",
    price: 195,
    status: "available",
    category: "stcw-online",
    details: `STCW Crisis Management and Human Behavior (MARTSA-981)

USCG approved online course covering crisis management and human behavior training requirements. Delivered on our Maritime Learning System.

Please note that all online courses are non-refundable.`,
    month: "January, 2026",
    ticketLabel: "STCW Crisis Management and Human Behavior",
  },
  {
    id: "ev-online-crowd",
    date: "1",
    day: "Thu",
    duration: "365 days",
    title: "STCW Crowd Management Course USCG Approved (MARTSA-142)",
    location: "Online",
    address: "Online",
    price: 195,
    status: "available",
    category: "stcw-online",
    details: `STCW Crowd Management Course USCG Approved (MARTSA-142)

Online course covering crowd management training requirements. Delivered on our Maritime Learning System.

Please note that all online courses are non-refundable.`,
    month: "January, 2026",
    ticketLabel: "STCW Crowd Management Course",
  },
  {
    id: "ev-online-retest",
    date: "1",
    day: "Thu",
    duration: "365 days",
    title: "STCW Online courses re-test fee",
    location: "Online",
    address: "Online",
    price: 75,
    status: "available",
    category: "stcw-online",
    details: `Re-test fee for STCW Online courses.

If you need to retake an assessment for any of our STCW online courses, this fee covers the re-test.`,
    month: "January, 2026",
    ticketLabel: "STCW Online Re-test Fee",
  },
  {
    id: "ev-online-security",
    date: "1",
    day: "Thu",
    duration: "365 days",
    title: "STCW Security Awareness Course USCG Approved (MARTSA-561)",
    location: "Online",
    address: "Online",
    price: 95,
    status: "available",
    category: "stcw-online",
    details: `STCW Security Awareness Course USCG Approved (MARTSA-561)

Online course covering security awareness training requirements. Delivered on our Maritime Learning System.

Please note that all online courses are non-refundable.`,
    month: "January, 2026",
    ticketLabel: "STCW Security Awareness Course",
  },
  {
    id: "ev-online-vpdsd",
    date: "1",
    day: "Thu",
    duration: "365 days",
    title: "STCW VPDSD Course Online - Vessel Personnel with Designated Security Duties USCG Approved (MARTSA-747)",
    location: "Online",
    address: "Online",
    price: 195,
    status: "available",
    category: "stcw-online",
    details: `STCW VPDSD Course Online - Vessel Personnel with Designated Security Duties USCG Approved (MARTSA-747)

Online course covering VPDSD training requirements. Delivered on our Maritime Learning System.

Please note that all online courses are non-refundable.`,
    month: "January, 2026",
    ticketLabel: "STCW VPDSD Course Online",
  },

  // === STCW PST AND BASIC FIRE FIGHTING ===
  {
    id: "ev-online-pst-fire",
    date: "13",
    day: "Mon",
    duration: "2 days",
    title: "STCW PST and Basic Fire Fighting Only",
    location: "Fort Lauderdale, FL",
    address: "4200 South Congress Avenue, Lake Worth FL 33461",
    price: 795,
    status: "fully-booked",
    category: "stcw-online",
    details: `STCW PST and Basic Fire Fighting Only

This course covers Personal Survival Techniques (PST) and Basic Fire Fighting components of the STCW Basic Training.

Day 1: Personal Survival Techniques
Day 2: Basic Fire Fighting at Lake Worth Fire Academy

Pre-Requisites: None

(Candidates should note that the fire fighting curriculum is physically demanding and may expose you to high temperatures while conducting the required course exercises in the fire training simulator. Personal survival techniques will expose you to normal hazards associated with a water training facility while conducting the required course exercises in the pool.)`,
    month: "April, 2026",
    ticketLabel: "STCW PST and Basic Fire Fighting Only",
  },

  // === ENTERTAINMENT ===
  {
    id: "ev-ent-private-mar24",
    date: "24",
    day: "Tue",
    duration: "5pm EDT",
    title: "Private Lessons/ Mentoring with Laura Karklina",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 85,
    status: "available",
    category: "entertainment",
    spotsAvailable: 1,
    details: `Whether you are looking to improve on technique, audition prep, or looking for choreography, Laura will help you develop an individual plan for your dancing needs.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "March, 2026",
    ticketLabel: "Private Lessons/Mentoring",
  },
  {
    id: "ev-ent-ballet-mar24",
    date: "24",
    day: "Tue",
    duration: "7pm EDT",
    title: "Pop Up Ballet (Open Adult)",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 25,
    status: "available",
    category: "entertainment",
    details: `Open adult ballet class. All levels welcome.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "March, 2026",
    ticketLabel: "Pop Up Ballet (Open Adult)",
  },
  {
    id: "ev-ent-private-mar25",
    date: "25",
    day: "Wed",
    duration: "10:30am EDT",
    title: "Private Lessons/ Mentoring with Laura Karklina",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 85,
    status: "available",
    category: "entertainment",
    spotsAvailable: 1,
    details: `Whether you are looking to improve on technique, audition prep, or looking for choreography, Laura will help you develop an individual plan for your dancing needs.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "March, 2026",
    ticketLabel: "Private Lessons/Mentoring",
  },
  {
    id: "ev-ent-stylized-mar26",
    date: "26",
    day: "Thu",
    duration: "7pm EDT",
    title: "Stylized Dance Class (Open Adult)",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 25,
    status: "available",
    category: "entertainment",
    details: `Open adult stylized dance class. All levels welcome.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "March, 2026",
    ticketLabel: "Stylized Dance Class (Open Adult)",
  },
  {
    id: "ev-ent-studio-mar28",
    date: "28",
    day: "Sat",
    duration: "3pm EDT",
    title: "Studio Rental",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 50,
    status: "available",
    category: "entertainment",
    details: `Studio rental available for rehearsals, private lessons, or events.`,
    month: "March, 2026",
    ticketLabel: "Studio Rental",
  },
  {
    id: "ev-ent-private-mar30",
    date: "30",
    day: "Mon",
    duration: "2pm EDT",
    title: "Private Lessons/ Mentoring with Laura Karklina",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 85,
    status: "available",
    category: "entertainment",
    spotsAvailable: 1,
    details: `Whether you are looking to improve on technique, audition prep, or looking for choreography, Laura will help you develop an individual plan for your dancing needs.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "March, 2026",
    ticketLabel: "Private Lessons/Mentoring",
  },
  {
    id: "ev-ent-private-mar31",
    date: "31",
    day: "Tue",
    duration: "5pm EDT",
    title: "Private Lessons/ Mentoring with Laura Karklina",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 85,
    status: "available",
    category: "entertainment",
    spotsAvailable: 1,
    details: `Whether you are looking to improve on technique, audition prep, or looking for choreography, Laura will help you develop an individual plan for your dancing needs.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "March, 2026",
    ticketLabel: "Private Lessons/Mentoring",
  },
  {
    id: "ev-ent-ballet-mar31",
    date: "31",
    day: "Tue",
    duration: "7pm EDT",
    title: "Pop Up Ballet (Open Adult)",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 25,
    status: "available",
    category: "entertainment",
    details: `Open adult ballet class. All levels welcome.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "March, 2026",
    ticketLabel: "Pop Up Ballet (Open Adult)",
  },
  // April Entertainment
  {
    id: "ev-ent-private-apr1",
    date: "1",
    day: "Wed",
    duration: "10:30am EDT",
    title: "Private Lessons/ Mentoring with Laura Karklina",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 85,
    status: "available",
    category: "entertainment",
    spotsAvailable: 1,
    details: `Whether you are looking to improve on technique, audition prep, or looking for choreography, Laura will help you develop an individual plan for your dancing needs.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "April, 2026",
    ticketLabel: "Private Lessons/Mentoring",
  },
  {
    id: "ev-ent-stylized-apr2",
    date: "2",
    day: "Thu",
    duration: "7pm EDT",
    title: "Stylized Dance Class (Open Adult)",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 25,
    status: "available",
    category: "entertainment",
    details: `Open adult stylized dance class. All levels welcome.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "April, 2026",
    ticketLabel: "Stylized Dance Class (Open Adult)",
  },
  {
    id: "ev-ent-studio-apr4",
    date: "4",
    day: "Sat",
    duration: "3pm EDT",
    title: "Studio Rental",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 50,
    status: "available",
    category: "entertainment",
    details: `Studio rental available for rehearsals, private lessons, or events.`,
    month: "April, 2026",
    ticketLabel: "Studio Rental",
  },
  {
    id: "ev-ent-private-apr6",
    date: "6",
    day: "Mon",
    duration: "2pm EDT",
    title: "Private Lessons/ Mentoring with Laura Karklina",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 85,
    status: "available",
    category: "entertainment",
    spotsAvailable: 1,
    details: `Whether you are looking to improve on technique, audition prep, or looking for choreography, Laura will help you develop an individual plan for your dancing needs.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "April, 2026",
    ticketLabel: "Private Lessons/Mentoring",
  },
  {
    id: "ev-ent-private-apr7",
    date: "7",
    day: "Tue",
    duration: "5pm EDT",
    title: "Private Lessons/ Mentoring with Laura Karklina",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 85,
    status: "available",
    category: "entertainment",
    spotsAvailable: 1,
    details: `Whether you are looking to improve on technique, audition prep, or looking for choreography, Laura will help you develop an individual plan for your dancing needs.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "April, 2026",
    ticketLabel: "Private Lessons/Mentoring",
  },
  {
    id: "ev-ent-ballet-apr7",
    date: "7",
    day: "Tue",
    duration: "7pm EDT",
    title: "Pop Up Ballet (Open Adult)",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 25,
    status: "available",
    category: "entertainment",
    details: `Open adult ballet class. All levels welcome.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "April, 2026",
    ticketLabel: "Pop Up Ballet (Open Adult)",
  },
  {
    id: "ev-ent-private-apr8",
    date: "8",
    day: "Wed",
    duration: "10:30am EDT",
    title: "Private Lessons/ Mentoring with Laura Karklina",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 85,
    status: "available",
    category: "entertainment",
    spotsAvailable: 1,
    details: `Whether you are looking to improve on technique, audition prep, or looking for choreography, Laura will help you develop an individual plan for your dancing needs.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "April, 2026",
    ticketLabel: "Private Lessons/Mentoring",
  },
  {
    id: "ev-ent-stylized-apr9",
    date: "9",
    day: "Thu",
    duration: "7pm EDT",
    title: "Stylized Dance Class (Open Adult)",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 25,
    status: "available",
    category: "entertainment",
    details: `Open adult stylized dance class. All levels welcome.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "April, 2026",
    ticketLabel: "Stylized Dance Class (Open Adult)",
  },
  {
    id: "ev-ent-studio-apr11",
    date: "11",
    day: "Sat",
    duration: "3pm EDT",
    title: "Studio Rental",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 50,
    status: "available",
    category: "entertainment",
    details: `Studio rental available for rehearsals, private lessons, or events.`,
    month: "April, 2026",
    ticketLabel: "Studio Rental",
  },
  {
    id: "ev-ent-private-apr13",
    date: "13",
    day: "Mon",
    duration: "2pm EDT",
    title: "Private Lessons/ Mentoring with Laura Karklina",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 85,
    status: "available",
    category: "entertainment",
    spotsAvailable: 1,
    details: `Whether you are looking to improve on technique, audition prep, or looking for choreography, Laura will help you develop an individual plan for your dancing needs.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "April, 2026",
    ticketLabel: "Private Lessons/Mentoring",
  },
  {
    id: "ev-ent-private-apr14",
    date: "14",
    day: "Tue",
    duration: "5pm EDT",
    title: "Private Lessons/ Mentoring with Laura Karklina",
    location: "Orlando, FL",
    address: "Seven Seas Preparatory Academy, 6236 Kingspointe Pkwy, Unit 1, Orlando FL 32819-6530",
    price: 85,
    status: "available",
    category: "entertainment",
    spotsAvailable: 1,
    details: `Whether you are looking to improve on technique, audition prep, or looking for choreography, Laura will help you develop an individual plan for your dancing needs.

Instructions: Please wear appropriate dance attire and shoes.`,
    month: "April, 2026",
    ticketLabel: "Private Lessons/Mentoring",
  },
];
