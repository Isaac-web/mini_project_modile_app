export default {
  tickets: [
    { id: 1, title: "DJ Ososcity", iconColor: "tomato" },
    { id: 2, title: "Live band", iconColor: "tomato" },
  ],
  ticketsPurchased: [
    { id: 1, title: "Football Match", iconColor: "lightgreen" },
    { id: 2, title: "Dinner", iconColor: "lightgreen" },
  ],
  notification: [
    { id: 1, title: "Welcome", iconColor: "gold" },
    { id: 2, title: "Email Verification", iconColor: "gold" },
    { id: 3, title: "Email Verificatoin", iconColor: "gold" },
  ],

  events: [
    {
      title: "DJ Osocity",
      category: "Music",
      location: "Accra, Spintex",
      image: require("./assets/images/expore-image.jpg"),
    },
    {
      title: "DJ Osocity",
      category: "Music",
      location: "Accra, Spintex",
      image: require("./assets/images/calendar-image.jpg"),
    },
    {
      title: "DJ Osocity",
      category: "Music",
      location: "Accra, Spintex",
      image: require("./assets/images/location-image.jpg"),
    },
  ],
  eventDetails: {
    title: "DJ Osocity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt libero eum natus, saepe unde eligendi excepturi? Ratione natus nihil id quam porro itaque eligendi possimus nam, odio delectus, ipsam cumque maiores. Esse alias repudiandae, fugiat magnam odit optio expedita neque assumenda ipsum tempora illo minus similique perspiciatis! Sequi, impedit expedita.",
    backgroundImage: require("./assets/images/expore-image.jpg"),
    organizer: {
      name: "Nunike Lampte",
      email: "nuni@gmail.com",
    },
    location: {
      city: "Accra",
      suburb: "Spintext",
    },
  },
};
