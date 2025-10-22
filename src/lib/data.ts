// TEMPORARY DATA

export let role = "admin";

export const organizationsData = [
  {
    id: 1,
    name: "Greenwood High School",
    type: ["Public", "Secondary"],
    agent: ["Alice Johnson", "Bob Smith"],
  },
  {
    id: 2,
    name: "Sunrise Elementary",
    type: ["Private", "Primary"],
    agent: ["Catherine Lee"],
  },
  {
    id: 3,
    name: "Hillside Academy",
    type: ["Charter", "K-12"],
    agent: ["David Brown", "Eva Green"],
  },
  {
    id: 4,
    name: "Riverside Middle School",
    type: ["Public", "Middle"],
    agent: ["Frank White"],
  },
]

export const contactsData = [
  {
    id: 1,
    name: "Alice Johnson",
    organizations: ["Greenwood High School"],
    agent: ["Bob Smith"],
  },
  {
    id: 2,
    name: "Catherine Lee",
    organizations: ["Sunrise Elementary", "Hillside Academy"],
    agent: [],
  },
  {
    id: 3,
    name: "David Brown",
    organizations: ["Hillside Academy"],
    agent: ["Eva Green"],
  },
  {
    id: 4,
    name: "Frank White",
    organizations: ["Riverside Middle School"],
    agent: [],
  },
]

export const productsData = [
  {
    id: 1,
    name: "Textbook A",
    type: ["Educational", "Printed"],
    category: ["Books", "Learning Materials"],
  },
  {
    id: 2,
    name: "E-Learning Platform",
    type: ["Digital", "Software"],
    category: ["Online Resources", "Software"],
  },
  {
    id: 3,
    name: "Lab Equipment Set",
    type: ["Physical", "Equipment"],
    category: ["Science Supplies", "Laboratory"],
  },
  {
    id: 4,
    name: "Art Supplies Kit",
    type: ["Physical", "Supplies"],
    category: ["Art Materials", "Craft Supplies"],
  },
]

export const reportsData = [
  {
    id: 1,
    name: "Accounts Receivable",
    type: "General",
  },
  {
    id: 2,
    name: "Agent Booking Report",
    type: "General",
  },
  {
    id: 3,
    name: "Artist Booking Report",
    type: "General",
  },
  {
    id: 4,
    name: "Artist Payable Report",
    type: "General",
  },
  {
    id: 5,
    name: "Commission Report",
    type: "General",
  },
  {
    id: 6,
    name: "Contracts Sent Report",
    type: "General",
  },
  {
    id: 7,
    name: "Data Dump",
    type: "General",
  },
  {
    id: 8,
    name: "Dynamic List Report",
    type: "General",
  },
  {
    id: 9,
    name: "Event List (keys off event products)",
    type: "General",
  },
  {
    id: 10,
    name: "Payment Search",
    type: "General",
  },
  {
    id: 11,
    name: "Task List",
    type: "General",
  },
]

export const eventsData = [
  {
    id: 1,
    title: "Lake Trip",
    contact: "John Doe",
    agent:  "Alice Johnson",
    class: "1A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 2,
    title: "Picnic",
    contact: "Jane Doe",
    agent:  "Alice Johnson",
    class: "2A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 3,
    title: "Beach Trip",
    contact: "Mike Geller",
    agent:  "Alice Johnson",
    class: "3A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 4,
    title: "Museum Trip",
    contact: "Jay French",
    agent:  "Alice Johnson",
    class: "4A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 5,
    title: "Music Concert",
    class: "5A",
    contact: "Jane Smith",
    agent:  "Alice Johnson",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 6,
    title: "Magician Show",
    class: "1B",
    date: "2025-01-01",
    contact: "Anna Santiago",
    agent:  "Alice Johnson",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 7,
    title: "Lake Trip",
    class: "2B",
    contact: "Allen Black",
    agent:  "Alice Johnson",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 8,
    title: "Cycling Race",
    class: "3B",
    date: "2025-01-01",
    contact: "Ophelia Castro",
    agent:  "Alice Johnson",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 9,
    title: "Art Exhibition",
    class: "4B",
    date: "2025-01-01",
    agent:  "Alice Johnson",
    startTime: "10:00",
    contact: "Derek Briggs",
    endTime: "11:00",
  },
  {
    id: 10,
    title: "Sports Tournament",
    class: "5B",
    agent:  "Alice Johnson",
    date: "2025-01-01",
    contact: "John Glover",
    startTime: "10:00",
    endTime: "11:00",
  },
];