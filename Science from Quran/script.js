// Science Facts categorized by category
const scienceFacts = {
    Biology: [
        {
            title: "Embryology in the Qur'an",
            explanation: "The Qur'an described human development stages long before modern science discovered embryology.",
            verse: "“We created man from a drop of mingled sperm...” (Qur'an 76:2)"
        },
        {
            title: "The Blood Circulation System",
            explanation: "The Qur'an mentions the blood circulation system long before modern science confirmed it.",
            verse: "“It is He who created you from a single soul...” (Qur'an 4:1)"
        },
        {
            title: "Plants and Photosynthesis",
            explanation: "The Qur'an mentions plant life and its role in sustaining life on Earth, which aligns with the process of photosynthesis.",
            verse: "“And We made every living thing from water. Then will they not believe?” (Qur'an 21:30)"
        },
        {
            title: "The Role of Ants in Ecosystems",
            explanation: "The Qur'an mentions the ants and their role in the ecosystem, recognizing their social behavior.",
            verse: "“Until, when they came upon the valley of the ants, an ant said, 'O ants, enter your dwellings lest Solomon and his soldiers should crush you while they perceive not.'” (Qur'an 27:18)"
        },
        {
            title: "The Stages of Human Development",
            explanation: "The Qur'an discusses the stages of human development in the womb, long before these stages were identified in modern science.",
            verse: "“We created man from a drop of sperm, then We made him a clot, then We made the clot a lump, then We made out of that lump bones, and clothed the bones with flesh...” (Qur'an 23:13-14)"
        },
        {
            title: "The Use of Honey in Healing",
            explanation: "The Qur'an mentions honey as a source of healing, which is now recognized for its medicinal properties.",
            verse: "“There emerges from their bellies a drink, varying in colors, in which there is healing for people.” (Qur'an 16:69)"
        },
        {
            title: "The Existence of Microorganisms",
            explanation: "The Qur'an speaks of the existence of things that the human eye cannot see, which aligns with the discovery of microorganisms.",
            verse: "“And He it is who created from water a human being, and made him a relative by blood and marriage.” (Qur'an 25:54)"
        },
        {
            title: "The Role of the Female in Reproduction",
            explanation: "The Qur'an discusses the female's role in reproduction, highlighting the importance of both parents in creating life.",
            verse: "“It is He who created you from one soul and made its mate from it.” (Qur'an 39:6)"
        },
        {
            title: "The Role of the Heart in Blood Circulation",
            explanation: "The Qur'an metaphorically refers to the heart as the center of understanding, which modern science recognizes as a vital organ in blood circulation.",
            verse: "“And We have certainly made for the hell of jinn and mankind many of the jinn and mankind...their hearts are hardened and their ears are deaf.” (Qur'an 32:10)"
        },
        {
            title: "The Importance of a Balanced Diet",
            explanation: "The Qur'an encourages moderation in eating, which aligns with modern nutritional science and the importance of a balanced diet.",
            verse: "“Eat and drink, but do not waste: indeed, He likes not those who waste.” (Qur'an 7:31)"
        }
    ],
    Astronomy: [
        {
            title: "The Expanding Universe",
            explanation: "The Qur'an hints at the concept of an expanding universe, similar to modern cosmological theories.",
            verse: "“And the heaven We constructed with strength, and indeed, We are [its] expander.” (Qur'an 51:47)"
        },
        {
            title: "The Moon's Phases",
            explanation: "The Qur'an describes the phases of the moon, which can be observed scientifically.",
            verse: "“And the moon We have measured for it phases, until it returns [appearing] like the old date stalk.” (Qur'an 36:39)"
        },
        {
            title: "The Creation of the Universe",
            explanation: "The Qur'an mentions the creation of the universe in a way that aligns with the Big Bang Theory of the universe's creation.",
            verse: "“Do not those who disbelieve see that the heavens and the earth were a closed-up mass, then We opened them out?” (Qur'an 21:30)"
        },
        {
            title: "The Sun's Movement",
            explanation: "The Qur'an refers to the movement of the sun, which modern astronomy confirms as part of the solar system's dynamics.",
            verse: "“And the sun runs on its fixed course for a term [decreed]. That is the decree of the Almighty, the All-Knowing.” (Qur'an 36:38)"
        },
        {
            title: "The Protective Atmosphere",
            explanation: "The Qur'an discusses the Earth's protective atmosphere, which shields life from harmful solar radiation.",
            verse: "“And We made the sky a canopy, safe and well-guarded. Yet they turn away from its signs.” (Qur'an 21:32)"
        },
        {
            title: "The Stars and Navigation",
            explanation: "The Qur'an mentions stars as a means of guidance for navigation, which is scientifically accurate.",
            verse: "“And it is He who created the constellations [of stars] and made them for guidance in the darkness of the land and sea.” (Qur'an 16:16)"
        },
        {
            title: "The Formation of Galaxies",
            explanation: "The Qur'an refers to the formation of the universe in stages, which corresponds with modern cosmological theories of galaxy formation.",
            verse: "“It is He who created the heavens and the earth in six days, then established Himself above the Throne.” (Qur'an 7:54)"
        },
        {
            title: "The Protective Layers of the Earth",
            explanation: "The Qur'an speaks of the Earth's layers, which protect life, aligning with modern geology and Earth's atmospheric layers.",
            verse: "“We made the earth a place of rest and a refuge for the creatures.” (Qur'an 78:6-7)"
        },
        {
            title: "The Sun and the Moon’s Role",
            explanation: "The Qur'an describes the moon and the sun as playing a crucial role in life on Earth.",
            verse: "“And the sun and the moon [in their courses] are subject to Him.” (Qur'an 16:12)"
        },
        {
            title: "The Sky's Stability",
            explanation: "The Qur'an refers to the sky as being stable, which modern science now understands as the Earth's gravitational interaction with the atmosphere.",
            verse: "“And We made the sky a protected canopy, but they turn away from its signs.” (Qur'an 21:32)"
        }
    ],
    Embryology: [
        {
            title: "Stages of Embryonic Development",
            explanation: "The Qur’an outlines how humans are created in successive stages: a drop of fluid, a clinging clot, a lump, bones, and then flesh. These align with embryological stages known today.",
            verse: "“And certainly did We create man from an extract of clay. Then We placed him as a sperm-drop in a firm lodging. Then We made the sperm-drop into a clinging clot, and We made the clot into a lump, and We made the lump into bones, and We covered the bones with flesh; then We developed him into another creation. So blessed is Allah, the best of creators.” — Surah Al-Mu’minun (23:12–14)"
        },
        {
            title: "Leech-like Appearance of the Embryo",
            explanation: "The Arabic word 'alaqah' means a leech or something that clings. At a certain stage, the embryo looks like a leech and clings to the uterus wall, a fact confirmed under a microscope.",
            verse: "“Created man from a clinging substance.” — Surah Al-‘Alaq (96:2)"
        },
        {
            title: "Bones Formed Before Flesh",
            explanation: "Modern embryology shows that the skeleton forms first, then muscles develop around it. The Qur’an mentioned this centuries ago.",
            verse: "“...then We made the lump into bones, and We clothed the bones with flesh...” — Surah Al-Mu’minun (23:14)"
        },
        {
            title: "Gender Determined from Sperm",
            explanation: "Science proves that the gender of a child is determined by the male's sperm. The Qur’an refers to this truth directly.",
            verse: "“And that He creates the two mates – the male and female – from a sperm-drop when it is emitted.” — Surah An-Najm (53:45–46)"
        },
        {
            title: "Beginning as a 'Nutfah' (Tiny Drop)",
            explanation: "The term 'nutfah' is repeatedly used to describe the origin of human life. It refers to a small amount of fluid, perfectly describing sperm.",
            verse: "“Did We not create you from a liquid disdained?” — Surah Al-Mursalat (77:20)"
        },
        {
            title: "Securely Planted in the Womb",
            explanation: "The Qur’an calls the womb a secure resting place. It describes the uterus perfectly as a protective environment for the fetus.",
            verse: "“Then We placed him as a sperm-drop in a firm lodging.” — Surah Al-Mu’minun (23:13)"
        },
        {
            title: "Created in Three Veils of Darkness",
            explanation: "The ‘three darknesses’ refer to the layers a baby develops in: the abdominal wall, uterine wall, and amniotic membrane.",
            verse: "“He creates you in the wombs of your mothers, creation after creation, in three veils of darkness.” — Surah Az-Zumar (39:6)"
        },
        {
            title: "Perfect Human Formation",
            explanation: "Allah fashions us with precision and balance. Every fingerprint, facial feature, and limb has exact proportion, defined before birth.",
            verse: "“O mankind, what has deceived you concerning your Lord, the Generous, Who created you, proportioned you, and balanced you?” — Surah Al-Infitar (82:6–7)"
        },
        {
            title: "40 Days of Development",
            explanation: "Prophet Muhammad ﷺ mentioned the embryo’s development in 40-day phases which align with key biological shifts in the fetus.",
            hadith: "“Each of you is constituted in your mother’s womb for forty days as a drop of fluid, then a clot for a similar period, then a lump for a similar period...” — Sahih Bukhari, Hadith 3208"
        },
        {
            title: "Destiny Written in the Womb",
            explanation: "An angel writes four things while the soul is breathed into the fetus: provision, life span, deeds, and whether they’ll be among the blessed or the wretched.",
            hadith: "“...Then the angel is sent to him and breathes the soul into him and is commanded to write four matters: his provision, his life span, his deeds, and whether he will be happy or unhappy...” — Sahih Bukhari, Hadith 3036"
        }
    ],

    geology: [
        {
            title: "Mountains as Pegs",
            explanation: "Mountains are described as pegs that stabilize the earth, which aligns with geological understanding of mountain roots stabilizing the crust.",
            verse: "And He has set firm mountains in the earth, lest it should shake with you. (Qur'an 16:15)"
        },
        {
            title: "Earthquakes and Balance",
            explanation: "Earthquakes and other seismic activities are connected to the balance of the earth, ensuring its stability.",
            verse: "When the earth is shaken with its quaking, and the earth discharges its burdens. (Qur'an 99:1-2)"
        },
        {
            title: "Creation of Earth in Layers",
            explanation: "The Qur’an mentions the earth’s creation in layers, which resonates with modern geological layers.",
            verse: "And the earth We spread out and placed therein firm mountains. (Qur'an 79:30)"
        },
        {
            title: "Water Cycle and Rock Formation",
            explanation: "The water cycle is described, alongside the formation of rocks and minerals which is critical in geology.",
            verse: "And We sent down from the sky rain in measure and settled it in the earth. (Qur'an 23:18)"
        },
        {
            title: "Iron Sent Down (Meteoric Iron)",
            explanation: "The Qur’an mentions the special creation of iron, which has a cosmic origin.",
            verse: "We sent down iron, in which is strong material, benefiting mankind. (Qur'an 57:25)"
        },
        {
            title: "Layers of the Earth",
            explanation: "The earth’s layers and its internal structure are mentioned, similar to what geology teaches about the crust, mantle, and core.",
            verse: "And after that He spread the earth. (Qur'an 79:30)"
        },
        {
            title: "Earth’s Crust and Stability",
            explanation: "The Qur'an mentions that the earth has been stabilized with mountains, which contribute to its balance.",
            verse: "And He placed on the earth firmly set mountains, lest it should shake with you. (Qur'an 16:15)"
        },
        {
            title: "Geological Time (Six Periods of Creation)",
            explanation: "The Qur’an mentions six periods of creation, which parallels geological time scales of earth's formation.",
            verse: "It is Allah who created the heavens and the earth in six days. (Qur'an 7:54)"
        },
        {
            title: "Formation of Valleys and Rivers",
            explanation: "Rivers and valleys, which play a role in shaping the earth’s surface, are mentioned in the Qur’an.",
            verse: "And He it is who sends the winds as harbingers of His mercy, and We send down from the sky pure water. (Qur'an 25:48)"
        },
        {
            title: "Minerals and their Purpose",
            explanation: "The Qur’an highlights minerals and their beneficial purposes for mankind.",
            verse: "And He it is who has made the rivers subservient to you, and made for you from the mountains paths, and made for you garments to protect you from heat and garments to protect you from your enemy. (Qur'an 16:15)"
        }
    ],

    oceanography: [
        {
            title: "Barrier Between Salt and Fresh Water",
            explanation: "The Qur’an describes the phenomenon where fresh water and salt water do not mix, something confirmed by oceanography.",
            verse: "He it is who has made the two seas to flow, this fresh and sweet, and that salt and bitter; and He has set between them a barrier and a partition that is forbidden to be passed. (Qur'an 25:53)"
        },
        {
            title: "Darkness in Deep Seas",
            explanation: "The Qur’an refers to the darkness of the sea as something observed in oceanography when light fails to penetrate the deep ocean.",
            verse: "Or [like] darkness within a deep sea, covered by waves, above which are waves, above which are clouds, darkness, some of them over others. (Qur'an 24:40)"
        },
        {
            title: "Internal Waves Under the Ocean",
            explanation: "Internal waves, discovered by modern oceanography, are alluded to in the Qur’an.",
            verse: "And the sea, He made it as a means of transportation for you, in which you can travel, and He it is who sends the winds as a banner between you and the sea. (Qur'an 24:40)"
        },
        {
            title: "Marine Life in Deep Water",
            explanation: "Marine life existing in the depths of the ocean is mentioned, which correlates with deep-sea exploration.",
            verse: "And [He] it is who created all living creatures from water. (Qur'an 21:30)"
        },
        {
            title: "Pearls from Oceans",
            explanation: "Pearls, a valuable marine resource, are mentioned as a divine creation.",
            verse: "And in it are fruits, date palms and grapevines, and all kinds of fruits and seeds... and pearls and coral. (Qur'an 55:22)"
        },
        {
            title: "The Origins of Rain from Sea Evaporation",
            explanation: "The process of evaporation from the sea, leading to rain, is referenced in the Qur’an.",
            verse: "And We made from water every living thing. (Qur'an 21:30)"
        },
        {
            title: "Rivers Flowing into Oceans",
            explanation: "Rivers flowing into oceans, a critical feature in oceanography, are acknowledged in the Qur’an.",
            verse: "And He it is who made the rivers flow through the earth. (Qur'an 16:10)"
        },
        {
            title: "Water as a Source of Life",
            explanation: "The essential role of water in sustaining life is emphasized in the Qur’an.",
            verse: "We made from water every living thing. Will they not then believe? (Qur'an 21:30)"
        },
        {
            title: "Role of Wind in Ocean Currents",
            explanation: "The wind plays a critical role in controlling ocean currents, which is highlighted in the Qur’an.",
            verse: "And the wind We have made subservient to you, that you may sail in its course with ease. (Qur'an 16:14)"
        },
        {
            title: "Underground Water Reservoirs",
            explanation: "The concept of underground water storage is referenced, which relates to hydrology and water management.",
            verse: "And We sent down from the sky rain in measure and settled it in the earth; and indeed, We are able to take it away. (Qur'an 23:18)"
        }
    ],

    meteorology: [
        {
            title: "Rain from Winds and Clouds",
            explanation: "The Qur’an speaks about how rain comes from the winds and clouds, aligning with modern meteorological understanding.",
            verse: "And We sent the winds to stir up the clouds, and We made them come together in the sky, and We poured down rain from the clouds. (Qur'an 30:48)"
        },
        {
            title: "Hail Formation and Size",
            explanation: "The formation of hail and its varying size is mentioned in the Qur’an, correlating with modern studies.",
            verse: "And He it is who sends down the hail from the sky. (Qur'an 24:43)"
        },
        {
            title: "Thunder and Lightning",
            explanation: "Thunder and lightning, phenomena studied in meteorology, are mentioned in the Qur’an as signs of Allah's power.",
            verse: "It is He who shows you the lightning, causing fear and hope, and He it is who produces the heavy clouds. (Qur'an 13:12)"
        },
        {
            title: "Wind Pollination",
            explanation: "The role of the wind in pollination, vital to agriculture, is alluded to in the Qur’an.",
            verse: "And We sent the winds as a source of glad tidings before His mercy. (Qur'an 7:57)"
        },
        {
            title: "Snow and Ice in High Regions",
            explanation: "The Qur’an mentions snow and cold in high regions, a phenomenon that is observed in meteorology.",
            verse: "He it is who sends down from the sky water, and We give it to you as a drink. (Qur'an 16:10)"
        },
        {
            title: "Cloud Weight and Formation",
            explanation: "Clouds and their weight, crucial for weather forecasting, are described in the Qur’an.",
            verse: "And We made the clouds a means of transport for you. (Qur'an 25:48)"
        },
        {
            title: "Different Types of Rainfall",
            explanation: "The Qur’an mentions different types of rain that benefit various lands, aligning with meteorological principles.",
            verse: "And We sent the rain from the sky according to a measure. (Qur'an 23:18)"
        },
        {
            title: "Wind Directions and Force",
            explanation: "The winds, their directions, and how they vary in strength are alluded to.",
            verse: "And the wind We have made subservient to you. (Qur’an 16: 14)"
        },
        {
            title: "Fog and Dew Formation",
            explanation: "The formation of fog and dew, phenomena studied in meteorology, is referenced in the Qur’an.",
            verse: "And We send down from the sky rain, and We give it to drink to those who are thirsty. (Qur’an 23: 18)"
        },
        {
            title: "Weather Patterns and Seasons",
            explanation: "The Qur’an acknowledg’es seasonal changes, patterns of weather, and their effects on the earth.",
            verse: "And He it is who created the night and the day, the sun and the moon, each floating in its orbit. (Qur'an 21: 33) "
        }],
    physics: [
        {
            title: "Law of Gravity",
            explanation: "The force of gravity that attracts objects toward the center of the earth is a concept that aligns with the Qur'anic reference to Allah's power over the universe.",
            verse: "It is Allah who created the heavens and the earth and everything in between in six days. Then He established Himself above the Throne. (Qur'an 32:4)"
        },
        {
            title: "Electromagnetic Waves",
            explanation: "The Qur'an refers to various natural phenomena that could align with modern physics, including light and electromagnetic waves.",
            verse: "It is He who created the night and the day, and the sun and the moon. Each floating in its orbit. (Qur'an 21:33)"
        },
        {
            title: "Expansion of the Universe",
            explanation: "The concept of the expanding universe, discovered by modern physics, can be traced back to the Qur'an’s description of the creation of the universe.",
            verse: "And the heaven We constructed with strength, and indeed, We are [its] expander. (Qur'an 51:47)"
        },
        {
            title: "Atoms and Subatomic Particles",
            explanation: "The Qur'an's description of the creation of everything from tiny particles aligns with modern atomic theory.",
            verse: "Do they not see that Allah, who created the heavens and the earth, is capable of creating the likes of them? (Qur'an 17:99)"
        },
        {
            title: "Light and Darkness",
            explanation: "The phenomena of light and darkness, central to optics and physics, are mentioned in the Qur'an as symbolic of knowledge and ignorance.",
            verse: "Allah is the Light of the heavens and the earth. (Qur'an 24:35)"
        },
        {
            title: "Friction and Motion",
            explanation: "The concept of friction, an essential aspect of physics, plays a role in many phenomena in the Qur'an.",
            verse: "And He made the mountains as pegs. (Qur'an 78:7)"
        },
        {
            title: "Energy Conversion",
            explanation: "The conversion of one form of energy to another is evident in the natural processes described in the Qur'an.",
            verse: "It is He who created the night and the day, the sun and the moon, each floating in its orbit. (Qur'an 21:33)"
        },
        {
            title: "Inertia and Rest",
            explanation: "The idea that objects remain at rest or in motion unless acted upon is implicit in many descriptions of the physical world in the Qur'an.",
            verse: "And He it is who created the night and the day, and the sun and the moon. (Qur'an 21:33)"
        },
        {
            title: "Force and Motion",
            explanation: "The dynamics of motion, including how forces cause objects to move or stop, are discussed in the Qur'an.",
            verse: "And it is He who created the night and the day, the sun and the moon, each floating in its orbit. (Qur'an 21:33)"
        },
        {
            title: "Speed of Light",
            explanation: "The speed of light is an essential concept in physics. While the Qur'an doesn't describe it directly, it refers to light and its movement in various contexts.",
            verse: "It is Allah who created the heavens and the earth in six days. (Qur'an 7:54)"
        }
    ],
    chemistry: [
        {
            title: "The Creation of Matter",
            explanation: "The concept that all matter is created by Allah from nothing aligns with modern chemistry’s understanding of the elements and compounds.",
            verse: "Allah is the Creator of all things. (Qur'an 39:62)"
        },
        {
            title: "Water as a Universal Solvent",
            explanation: "The Qur'an mentions water's importance, which aligns with its role as a universal solvent in chemistry.",
            verse: "And We made from water every living thing. Will they not then believe? (Qur'an 21:30)"
        },
        {
            title: "The Role of Iron in the Earth",
            explanation: "Iron's essential role in the earth's composition is described in the Qur'an as having been sent down.",
            verse: "And We sent down iron, in which is strong material, benefiting mankind. (Qur'an 57:25)"
        },
        {
            title: "Chemical Reactions and Changing States",
            explanation: "Chemical reactions and the transformation of substances into other substances are part of Allah’s creation, as described in the Qur'an.",
            verse: "And it is He who sends down from the sky rain, from which We bring forth fruits for you to eat. (Qur'an 16:10)"
        },
        {
            title: "The Phases of Matter",
            explanation: "The Qur'an mentions the creation of matter in different forms, which parallels the concept of solids, liquids, and gases.",
            verse: "And We made from water everything living. (Qur'an 21:30)"
        },
        {
            title: "The Role of Air (Oxygen) in Life",
            explanation: "Air, and oxygen in particular, are essential for life. The Qur'an’s reference to breathing in the creation of life aligns with modern biology and chemistry.",
            verse: "And He who created all living things from water. (Qur'an 21:30)"
        },
        {
            title: "Formation of Soil and Plant Life",
            explanation: "The creation of soil and its ability to grow plants and nourish life is a process that is both chemical and biological, described in the Qur'an.",
            verse: "And We caused to grow therein every kind of balanced plant. (Qur'an 22:5)"
        },
        {
            title: "The Concept of Alchemy and Transformation",
            explanation: "Alchemy, which led to the development of chemistry, is indirectly referenced through the transformation of materials in the Qur'an.",
            verse: "And We sent down iron, in which is strong material, benefiting mankind. (Qur'an 57:25)"
        },
        {
            title: "The Importance of Air and its Constituents",
            explanation: "The air, along with its various gases, is essential for life. This aligns with what modern chemistry teaches about the composition of air.",
            verse: "It is He who created for you from the green tree, fire, and you kindle from it. (Qur'an 36:80)"
        },
        {
            title: "Molecular Structure and Creation",
            explanation: "Molecules and the building blocks of matter are seen as part of the divine creation process, a concept acknowledged in modern chemistry.",
            verse: "Allah is the Creator of everything. (Qur'an 39:62)"
        }
    ],

};

// Act to display facts based on category
function displayCategory(category) {
    const factsContainer = document.getElementById('science-facts');
    factsContainer.innerHTML = ""; // Clear earlier content

    const categoryFacts = scienceFacts[category];
    if (categoryFacts && categoryFacts.length > 0) {
        categoryFacts.forEach(fact => {
            const factCard = document.createElement('div');
            factCard.classList.add('card');
            factCard.innerHTML = `
                <h3>${fact.title}</h3>
                <p>${fact.explanation}</p>
                <p><strong>Verse:</strong> ${fact.verse}</p>
            `;
            factsContainer.appendChild(factCard);
        });
    } else {
        factsContainer.innerHTML = `<p>No facts available for ${category}.</p>`;
    }
}

// Initialize with Astronomy category facts
displayCategory('Astronomy');
