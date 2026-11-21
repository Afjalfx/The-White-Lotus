export const venueData = {
  venue: {
    name: "The White Lotus",
    brandTitle: "The White Lotus — Royal Banquet Hotel & Rooms",
    subtitle: "Royal Banquet Hotel & Rooms",
    tagline: "For every Royal Celebration",
    contactPerson: "Dharmveer Kumar",
    address: "Akhilesh Nagar Chauraha, Patna City, Bihar - 800008",
    phone: "+91 98521 62592",
    phoneTel: "+919852162592",
    whatsappNumber: "919852162592",
    alternatePhones: [
      { label: "Alternate", number: "+91 88048 31569", tel: "+918804831569" },
      { label: "Landline", number: "0612-4087341", tel: "06124087341" },
    ],
    email: "white.lotus.royalcelebration@gmail.com",
    website: "www.thewhitelotusroyalcelebration.in",
    websiteUrl: "https://www.thewhitelotusroyalcelebration.in",
    mapEmbedUrl:
      "https://www.google.com/maps?q=The+White+Lotus,+Akhilesh+Nagar+Chauraha,+Patna+City,+800008&output=embed",
  },
  navLinks: [
    { label: "Rooms", href: "/rooms" },
    { label: "Banquet", href: "/banquet" },
    { label: "Dining & Facilities", href: "/facilities" },
    { label: "Contact", href: "/contact" },
  ],
  rooms: {
    title: "Rooms",
    subtitle: "Comfortable Stay at The White Lotus",
    description:
      "Choose from our well-maintained rooms designed for a pleasant and convenient stay in Patna City.",
    totalRooms: 16,
    timings: {
      checkIn: "12:00 PM (Noon)",
      checkOut: "11:00 AM",
    },
    amenities: ["Free Wi-Fi", "Power Backup", "In-house Room Service"],
    types: [
      {
        id: "non-ac",
        name: "Non-AC Room",
        count: 11,
        pricePerNight: 800,
        videoUrl: "/Non-AC%20Room.mp4",
        highlights: ["Free Wi-Fi", "Power Backup", "In-house Room Service"],
      },
      {
        id: "ac",
        name: "AC Room",
        count: 3,
        pricePerNight: 1200,
        videoUrl: "/AC%20ROOM.mp4",
        highlights: ["Air Conditioning", "Free Wi-Fi", "Power Backup", "In-house Room Service"],
      },
      {
        id: "deluxe",
        name: "Deluxe Room",
        count: 2,
        pricePerNight: 1500,
        videoUrl: "/Deluxe%20Room.mp4",
        highlights: [
          "Deluxe Comfort",
          "Free Wi-Fi",
          "Power Backup",
          "In-house Room Service",
        ],
      },
    ],
  },
  events: {
    title: "Banquet Hall & Event Space",
    subtitle: "For Every Royal Celebration",
    description:
      "Host weddings, receptions, and special occasions in our spacious banquet hall with dedicated event services and support.",
    hallName: "The White Lotus Banquet Hall",
    totalCapacity: "400 – 500 Guests",
    seatingCapacity: "70 – 80 Guests",
    hallRent: "₹50,000",
    idealFor: [
      "Wedding & Reception",
      "Engagement & Tilak",
      "Haldi, Mehendi & Sangeet",
      "Birthday & Anniversary",
      "Corporate & Family Events",
    ],
    services: ["Decoration", "DJ", "Catering Services"],
    ownerInquiry: {
      title: "Connect with the Owner",
      detail:
        "Share your event details to connect directly with the owner on WhatsApp.",
      ctaLabel: "Connect with Owner on WhatsApp",
      eventTypes: [
        "Wedding",
        "Reception",
        "Engagement/Tilak",
        "Birthday/Anniversary",
        "Corporate Event",
        "Other",
      ],
    },
  },
  facilities: {
    title: "Dining & Facilities",
    subtitle: "In-house Dining & Essential Amenities",
    highlight: "In-house Restaurant & Room Service available.",
    description:
      "Enjoy convenient dining and essential facilities to make your stay and celebrations comfortable at The White Lotus.",
    keyAmenities: [
      "Free Wi-Fi",
      "Power Backup",
      "In-house Restaurant",
      "Room Service",
      "Decoration & DJ Support",
    ],
  },
  inquiry: {
    serviceTypes: [
      "Room Booking",
      "Banquet Hall Inquiry",
      "Custom Menu & Catering Quote",
      "General Inquiry",
    ],
  },
  footer: {
    quickLinks: [
      { label: "Rooms", href: "/rooms" },
      { label: "Banquet", href: "/banquet" },
      { label: "Dining & Facilities", href: "/facilities" },
      { label: "Contact", href: "/contact" },
    ],
    note: "Royal Banquet Hotel & Rooms in Patna City",
  },
};
