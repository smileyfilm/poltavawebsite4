import igor from "./images/IgorFacebook1.jpg";
import jonas from "./images/JonasFacebook1.jpg";
import matt from "./images/MattFacebook1.jpeg";
import mattHighlighted from "./images/poltavamatthighlighted.jpg";
import jonasHighlighted from "./images/poltavajonashighlighted.jpg";
import igorHighlighted from "./images/poltavaigorhighlighted.jpg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Igor Samoilenko",
      slug: "igor-samoilenko",
      heritage: "Russian",
      musicalTalentRating: 8,
      age: 31,
      instrument: "Guitar",
      university: false,
      goodlooking: false,
      onHome: true,
      description:
        "Originally from Russia, Samoilenko joined the Royal New Zealand Navy in his twenties, where he met Poltava's drummer, Jonas Cole. He currently works and resides on the North Shore of Auckland.",
      additionaltalents: [
        "Impressive beard",
        "Deep historical knowledge",
        "Head songwriter",
      ],
      images: [
        {
          fields: {
            file: {
              url: igor
            }
          }
        },
        {
          fields: {
            file: {
              url: igorHighlighted
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Jonas Cole",
      slug: "jonas-cole",
      heritage: "NZ",
      musicalTalentRating: 8,
      age: 25,
      instrument: "Drums",
      university: true,
      goodlooking: false,
      onHome: true,
      description:
        "Originally from Whangarei, Cole moved to Auckland in his teens. He joined the Royal New Zealand Navy straight after high school, where he met Igor Samoilenko. He eventually left the Navy to study computer science at the University of Auckland, where he met Matthew Armstrong. He currently works and resides on the North Shore of Auckland.",
      additionaltalents: [
        "Interesting time signatures",
        "Occasional vocals",
        "Resident FIFA Champion"
        
      ],
      images: [
        {
          fields: {
            file: {
              url: jonas
            }
          }
        },
        {
          fields: {
            file: {
              url: jonasHighlighted
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "Matthew Armstrong",
      slug: "matthew-armstrong",
      heritage: "German",
      musicalTalentRating: 10,
      age: 27,
      instrument: "Bass",
      university: true,
      goodlooking: true,
      onHome: true,
      description:
        "Born and raised in Auckland, Armstrong has always considered himself a creative. Originally pursuing a career in film, Armstrong eventually decided to go to university to study Computer Science, where he met the Poltava's drummer, Jonas Cole. He is now pursuing a programming career and resides in central Auckland.",
      additionaltalents: [
        "Upgraded to head singer along with Samoilenko",
        "Resident Table Tennis Champion",
        "Programmer"
      ],
      images: [
        {
          fields: {
            file: {
              url: matt
            }
          }
        },
        {
          fields: {
            file: {
              url: mattHighlighted
            }
          }
        }
      ]
    }
  }
];

