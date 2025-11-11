import { IMAGES } from "./images";
import type { LocationSpots, Place } from "./types";

export const SPOTS: LocationSpots = {
  tagaytay: {
    context: "Perched on a ridge high above the verdant Cavite countryside, Tagaytay offers a breathtaking, cool vantage point of the serene Taal Volcano nestled within its lake. This city is the tranquil garden escape for Manileños, famous for its crisp mountain air, panoramic views, and cozy restaurants serving local delicacies like bulalo",
    spot: [
      {
        label: "TAAL VOLCANO VIEWPOINT",
        name: "taal_volcano",
        content:
          "Taal Volcano Viewpoint offers the postcard-perfect view that defines Tagaytay.",
        image: IMAGES['tagaytay'].images.taal_volcano[0],
        subheader: "Tagaytay Ridge",
      },
      {
        label: "SKY RANCH",
        name: "sky_ranch",
        content:
          "Sky Ranch is where fun and thrills meet breathtaking views.",
        image: IMAGES['tagaytay'].images.sky_ranch[0],
        subheader: "Tagaytay City",
      },
      {
        label: "PICNIC GROVE ",
        name: "picnic_grove",
        content:
          "Picnic Grove is Tagaytay’s timeless spot for family fun.",
        image: IMAGES['tagaytay'].images.picnic_grove[0],
        subheader: "Tagaytay City",
      },
      {
        label: "MUSEO ORLINA",
        name: "museo_orlina",
        content:
          "Museo Orlina is where art and glass meet elegance. It showcases the stunning glass sculptures of renowned artist Ramon Orlina, set against the beautiful backdrop of Taal Lake.",
        image: IMAGES['tagaytay'].images.museo_orlina[0],
        subheader: "Tagaytay City",
      },
      {
        label: "MAHOGANY MARKET",
        name: "mahogany_market",
        content:
          "Famous for its savory bulalo and fresh produce, it’s a must-visit for food lovers wanting to experience the local flavors.",
        image: IMAGES['tagaytay'].images.mahogany_market[0],
        subheader: "Tagaytay City",
      },
    ]
  },
  vigan: {
    context: "Step back in time as you walk along the cobblestone streets of Vigan’s Mestizo District, a UNESCO World Heritage site where centuries-old Spanish colonial architecture stands preserved. The clip-clop of horse-drawn calesas and the scent of empanadas frying in ancient houses make this a living museum of Ilocano culture and history.",
    spot: [
      {
        label: "CALLE CRISOLOGO",
        name: "calle_crisologo",
        content:
          "Calle Crisologo is a famed cobblestone street in Vigan that transports you back to Spanish colonial times.",
        image: IMAGES['vigan'].images.calle_crisologo[0],
        subheader: "Vigan",
      },
      {
        label: "PLAZA SALCEDO",
        name: "plaza_salcedo",
        content:
          "Plaza Salcedo is a central public square in Vigan, located in front of the cathedral.",
        image: IMAGES['vigan'].images.plaza_salcedo[0],
        subheader: "Vigan",
      },
      {
        label: "SAINT PAUL METROPOLITAN CATHEDRAL  ",
        name: "saint_paul",
        content:
          "Commonly known as Vigan Cathedral, this church is a historic religious landmark in Vigan.",
        image: IMAGES['vigan'].images.saint_paul[0],
        subheader: "Tagaytay Cathedral",
      },
      {
        label: "BANTAY BELL TOWER",
        name: "bell_tower",
        content:
          "The Bantay Bell Tower is a historic watchtower located on a hill near Vigan (in Bantay).",
        image: IMAGES['vigan'].images.bell_tower[0],
        subheader: "Bantay Church Bell Tower",
      },
      {
        label: "PAGBURNAYAN JAR FACTORY",
        name: "jar_factory",
        content:
          "Pagburnayan refers to the traditional jar-making industry in Vigan (“burnay” = jars).",
        image: IMAGES['vigan'].images.jar_factory[0],
        subheader: "Burnay Pottery Experiance",
      },
      {
        label: "BALUARTE ZOO",
        name: "baluarte_zoo",
        content:
          "Baluarte Zoo is a wildlife park in Vigan, established by local businessman and politician.",
        image: IMAGES['vigan'].images.baluarte_zoo[0],
        subheader: "Vigan City",
      },
      {
        label: "ACTIVITY – RIDE A KALESA ALONG HERITAGE STREETS",
        name: "kalesa",
        content:
          "One of the signature experiences in Vigan is riding the traditional kalesa (horse-drawn carriage) through the cobblestone streets of the heritage district—especially around Calle Crisologo, giving a feel of old times.",
        image: IMAGES['vigan'].images.kalesa[0],
        subheader: "Vigan",
      },
      {
        label: "ACTIVITY – FOOD / LOCAL CUISINE EXPERIENCE",
        name: "local_cuisine",
        content:
          "Exploring Vigan isn't complete without tasting the local cuisine.",
        image: IMAGES['vigan'].images.local_cuisine[0],
        subheader: "Vigan",
      },
    ]
  },
  aklan: {
    context: "The province of Aklan lies northwest on Panay Island and includes renowned tourist spots like Boracay and various nature/ecotourism sites. The culture, history, and natural environments are diverse — from beaches to waterfalls to mangrove forests and cold springs. Aklan is also known for its vibrant Ati-Atihan Festival, often called the “Mother of All Philippine Festivals.” Its welcoming locals and rich traditions make it a destination that blends relaxation, adventure, and cultural immersion.",
    spot: [
      {
        label: "BORACAY ISLAND",
        name: "boracay",
        content:
          "Boracay is a small island off the coast of Aklan (in the municipality of Malay) and is internationally famous for its white-sand beaches (especially the 4 km “White Beach”).",
        image: IMAGES['aklan'].images.boracay[0],
        subheader: "In Malay, Aklan",
      },
      {
        label: "BAKHAWAN ECO-PARK",
        name: "bakhawan_park",
        content:
          "This is a 220-hectare mangrove forest reforestation project which is now an eco-tourism site.",
        image: IMAGES['aklan'].images.bakhawan_park[0],
        subheader: "Kalibo, Aklan",
      },
      {
        label: "JAWILI FALLS",
        name: "jawili_falls",
        content:
          "Located in Barangay Jawili, municipality of Tangalan, Aklan.",
        image: IMAGES['aklan'].images.jawili_falls[0],
        subheader: "Tangalan, Aklan",
      },
      {
        label: "HUROM-HUROM COLD SPRING",
        name: "hurom_hurom",
        content:
          "Situated in Barangay Laserna, Nabas, Aklan. A natural cold spring resort where you can enjoy very cold fresh spring water.",
        image: IMAGES['aklan'].images.hurom_hurom[0],
        subheader: "Nabas, Aklan",
      },
      {
        label: "LIKITINON WHITE ROCKS",
        name: "likitinon_rocks",
        content:
          "Located in Barangay Maria Cristina, Madalag, Aklan, this spot features a “labyrinth of bone-white boulders, grottoes and stone bathtubs” formed by the river cutting through the gorge.",
        image: IMAGES['aklan'].images.likitinon_rocks[0],
        subheader: "Madalag, Aklan",
      },
      {
        label: "PAGATPAT MANGROVE PARK",
        name: "pagatpat_park",
        content:
          "In Barangay Panilongan, Buruanga – a mangrove park by the sea with elevated boardwalks/trails through mangrove trees, nipa-huts and serene coastal jungle vibes.",
        image: IMAGES['aklan'].images.pagatpat_park[0],
        subheader: "Buruanga, Aklan",
      },
      {
        label: "Hacienda Maria",
        name: "hacienda_maria",
        content:
          "A 14-hectare eco-tourism estate in Tigum, Buruanga with caves (stalactites & stalagmites), waterfalls, and a special “hot pot” or open fire jacuzzi experience.",
        image: IMAGES['aklan'].images.hacienda_maria[0],
        subheader: "Brgy. Tigum, Buruanga",
      },
      {
        label: "HINUGTAN BEACH",
        name: "hinugtan_beach",
        content:
          "A secluded white-sand beach in Buruanga with cliffs on both ends, turquoise water, less crowd than major tourist beaches.",
        image: IMAGES['aklan'].images.hinugtan_beach[0],
        subheader: "Buruanga, Aklan",
      },
      {
        label: "NORTHWEST PANAY PENINSULA NATURAL PARK",
        name: "northwest_panay",
        content:
          "A protected natural park of over 12,000 hectares on Panay Island (covering parts of Aklan and Antique) established to conserve biodiversity, forest, coast and watershed.",
        image: IMAGES['aklan'].images.northwest_panay[0],
        subheader: "Nabas/Buruanga/Bordering Provinces",
      },
    ]
  },
  ilocos_norte: {
    context: "Ilocos Norte, including Ilocos Sur, these neighboring provinces are a dramatic tapestry of wind-swept coastlines, rugged mountains, and vast tobacco fields, guarding the northwestern edge of Luzon. They are the heartland of resilient Ilocano culture, famed for its robust flavors, historic churches, and unique landscapes from the sand dunes of Laoag to the heritage streets of Vigan.",
    spot: [
      {
        label: "PAOAY CHURCH",
        name: "paoay_church",
        content:
          "This historic church is a UNESCO World Heritage Site located in Paoay, Ilocos Norte.",
        image: IMAGES['ilocos_norte'].images.paoay_church[0],
        subheader: "San Agustin Church",
      },
      {
        label: "BANGUI WINDMILLS",
        name: "windmills",
        content:
          "A major landmark in Ilocos Norte: a series of towering wind turbines along the coast of Bangui Bay, combining renewable energy infrastructure with scenic views.",
        image: IMAGES['ilocos_norte'].images.windmills[0],
        subheader: "Ilocos Norte",
      },
      {
        label: "KAPURPURAWAN ROCK FORMATION",
        name: "kapurpurawan_formation",
        content:
          "These are unique white limestone rock formations sculpted by wind and sea, located in Burgos, Ilocos Norte.",
        image: IMAGES['ilocos_norte'].images.kapurpurawan_formation[0],
        subheader: "Burgos",
      },
      {
        label: "PAOAY SAND DUNES",
        name: "sand_dunes",
        content:
          "A vast expanse of sandy terrain near Paoay, Ilocos Norte, which offers an adventurous terrain of sand dunes along a coastal area.",
        image: IMAGES['ilocos_norte'].images.sand_dunes[0],
        subheader: "Ilocos Norte",
      },
      {
        label: "CAPE BOJEADOR LIGHTHOUSE",
        name: "bojeador_lighthouse",
        content:
          "A historic lighthouse built during the Spanish colonial period, located at the northwestern tip of Luzon in Burgos, Ilocos Norte.",
        image: IMAGES['ilocos_norte'].images.bojeador_lighthouse[0],
        subheader: "Burgos",
      },
      {
        label: "PATAPAT VIADUCT",
        name: "patpat_viaduct",
        content:
          "A scenic coastal bridge in Pagudpud, Ilocos Norte, that winds along the mountain and sea, offering spectacular views and photo-worthy vantage points.",
        image: IMAGES['ilocos_norte'].images.patpat_viaduct[0],
        subheader: "Iloscos Norte",
      },
    ]
  },
  ilocos_sur: {
    context: "Ilocos Sur, including Ilocos Norte,hese neighboring provinces are a dramatic tapestry of wind-swept coastlines, rugged mountains, and vast tobacco fields, guarding the northwestern edge of Luzon. They are the heartland of resilient Ilocano culture, famed for its robust flavors, historic churches, and unique landscapes from the sand dunes of Laoag to the heritage streets of Vigan.",
    spot: [
      {
        label: "SANTA MARIA CHURCH",
        name: "sta_maria_church",
        content:
          "Santa Maria Church (also known as Nuestra Señora de la Asunción Church) in Santa Maria, Ilocos Sur is a UNESCO World Heritage Site as part of the “Baroque Churches of the Philippines”.",
        image: IMAGES['ilocos_sur'].images.sta_maria_church[0],
        subheader: "Our Lady of the Assumption Church, Santa Maria",
      },
      {
        label: "PINSALL FALLS",
        name: "pinsall_falls",
        content:
          "Pinsal Falls is a natural waterfall and tourist spot located in Santa Maria, Ilocos Sur.",
        image: IMAGES['ilocos_sur'].images.pinsall_falls[0],
        subheader: "Santa Maria, Ilocos Sur",
      },
      {
        label: "ILOCOS SUR PROVINCIAL CAPITOL & HERITAGE DISTRICT",
        name: "provincial_capitol",
        content:
          "The Provincial Capitol of Ilocos Sur is located in Vigan, near the heritage district.",
        image: IMAGES['ilocos_sur'].images.provincial_capitol[0],
        subheader: "Vigan",
      },
    ]
  },
  cebu: {
    context: "The vibrant Queen City of the South is a dynamic hub where urban energy meets pristine island life, all set between a mountainous spine and the deep blue Camotes Sea. As the birthplace of Christianity in the Philippines, Cebu pulses with a rich history visible in its Magellan's Cross and the fervent devotion of the Sinulog Festival, alongside world-class diving and bustling cityscapes.",
    spot: [
      {
        label: "MAGELLAN’S CROSS",
        name: "magellan_cross",
        content:
          "Magellan’s Cross, where faith first took root in the Philippines, stands as one of Cebu’s most iconic landmarks.",
        image: IMAGES['cebu'].images.magellan_cross[0],
        subheader: "Cebu City",
      },
      {
        label: "KAWASAN FALLS",
        name: "kawasan_falls",
        content:
          "Kawasan Falls invites you to dive into paradise’s turquoise heart — a three-tiered waterfall famous for its clear, blue waters surrounded by lush tropical greenery.",
        image: IMAGES['cebu'].images.kawasan_falls[0],
        subheader: "Badian, Cebu",
      },
      {
        label: "OSLOB WHALE SHARK WATCHING",
        name: "oslob_whale",
        content:
          "It’s a once-in-a-lifetime experience that highlights both Cebu’s marine biodiversity and the locals’ hospitality.",
        image: IMAGES['cebu'].images.oslob_whale[0],
        subheader: "Oslob, Cebu",
      },
      {
        label: "FORT SAN PEDRO",
        name: "fort_san_pedro",
        content:
          "Fort San Pedro, a fortress of history and resilience, stands proudly as the oldest and smallest triangular fort in the Philippines.",
        image: IMAGES['cebu'].images.fort_san_pedro[0],
        subheader: "Cebu City",
      },
      {
        label: "SIMALA SHRINE",
        name: "simala_shrine",
        content:
          "Simala Shrine, where faith meets architectural wonder, rises like a majestic castle on the hills of Sibonga.",
        image: IMAGES['cebu'].images.simala_shrine[2],
        subheader: "Sibonga, Cebu",
      },
      {
        label: "Temple of Leah",
        name: "temple_leah",
        content:
          "Built by Teodorico Adarna in honor of his late wife Leah, this Roman-inspired temple boasts marble statues, towering pillars, and sweeping views of the city.",
        image: IMAGES['cebu'].images.temple_leah[0],
        subheader: "Busay, Cebu",
      },
      {
        label: "Sirao Flower Garden",
        name: "sirao_garden",
        content:
          "Known as the “Little Amsterdam of Cebu,” Sirao Flower Garden bursts with vibrant celosia blooms and other colorful flowers year-round.",
        image: IMAGES['cebu'].images.sirao_garden[0],
        subheader: "Busay, Cebu",
      },
    ]
  },
  la_union: {
    context: "Known as the surfing capital of the north, La Union boasts a legendary stretch of coastline where consistent waves crash against golden-sand beaches framed by rocky headlands. 'Elyu' has evolved into a vibrant creative and gastronomic hub, where a laid-back surf culture blends seamlessly with art galleries, coffee shops, and spectacular sunsets.",
    spot: [
      {
        label: "BAHAY NA BATO",
        name: "bahay_bato",
        content:
          "Bahay na Bato in La Union is an open-air art gallery located in Luna, built using stones from the town’s pebble beach.",
        image: IMAGES['la_union'].images.bahay_bato[0],
        subheader: "Luna, La Union",
      },
      {
        label: "BULALAKAW FALLS",
        name: "bulalakaw_falls",
        content:
          "Known for its impressive height of around 30 to 50 meters, it features a crystal-clear pool at its base surrounded by lush greenery, making it a peaceful natural attraction for nature lovers and adventure seekers.",
        image: IMAGES['la_union'].images.bulalakaw_falls[0],
        subheader: "Bangulin and Santol",
      },
      {
        label: "LOTUS VALLEY FARM",
        name: "lotus_valley",
        content:
          "It serves as a model for sustainable agriculture and a sanctuary for nature lovers, promoting harmony between people and the environment through organic farming and wellness practices.",
        image: IMAGES['la_union'].images.lotus_valley[0],
        subheader: "San Juan",
      },
      {
        label: "PORO POINT LIGHTHOUSE",
        name: "poro_lighthouse",
        content:
          "Poro Point Lighthouse is a 27-foot-high concrete tower built in 1905 during the American colonial period.",
        image: IMAGES['la_union'].images.poro_lighthouse[0],
        subheader: "San Fernando",
      },
      {
        label: "URBIZTONDO BEACH",
        name: "urbiztondo_beach",
        content:
          "Urbiztondo Beach in San Juan, La Union, is famously known as the “Surfing Capital of the North.”",
        image: IMAGES['la_union'].images.urbiztondo_beach[0],
        subheader: "San Juan",
      },
      {
        label: "BALLUARTE WATCH TOWER",
        name: "watch_tower",
        content:
          "The Baluarte Watch Tower in Luna, La Union, is a 400-year-old Spanish-era structure built from reddish bricks and coral stones.",
        image: IMAGES['la_union'].images.watch_tower[0],
        subheader: "Luna, La Union",
      },
      {
        label: "IMMUKI ISLAND",
        name: "immuki_island",
        content:
          "It is known for its three crystal-clear lagoons surrounded by limestone formations and a lush mangrove forest.",
        image: IMAGES['la_union'].images.immuki_island[0],
        subheader: "Balaoan, La Union",
      },
      {
        label: "MA-CHO TEMPLE",
        name: "macho_temple",
        content:
          "The Ma-Cho Temple is a vibrant Taoist temple located in San Fernando City, La Union.",
        image: IMAGES['la_union'].images.macho_temple[0],
        subheader: "Fernando City",
      },
      {
        label: "TANGADAN FALLS",
        name: "tangadan_falls",
        content:
          "Tangadan Falls in San Gabriel, La Union, is a beautiful two-tiered waterfall with a deep natural pool surrounded by limestone cliffs and lush greenery.",
        image: IMAGES['la_union'].images.tangadan_falls[0],
        subheader: "San Gabriel",
      },
      {
        label: "PEBBLE BEACH",
        name: "pebble_beach",
        content:
          "Pebble Beach in Luna, La Union, is a distinctive coastline known for its smooth, multicolored pebbles instead of sand.",
        image: IMAGES['la_union'].images.pebble_beach[0],
        subheader: "Luna, La Union",
      },
    ]
  },
  davao: {
    context: "Nestled at the foot of the majestic Mount Apo, the Philippines' highest peak, Davao is a sprawling metropolis that masterfully balances urban development with breathtaking natural wonders. This gateway city is a melting pot of cultures and the proud home of the majestic Philippine Eagle, offering access to rare wildlife, the fertile slopes of durian orchards, and the untouched islands of the Samal archipelago.",
    spot: [
      {
        label: "EDEN NATURE PARK & RESORT",
        name: "eden_park",
        content:
          "Eden Nature Park is nature’s playground above the city, offering breathtaking mountain views, colorful gardens, and outdoor adventures.",
        image: IMAGES['davao'].images.eden_park[0],
        subheader: "Toril, Davao City",
      },
      {
        label: "PHILIPPINE EAGLE CENTER",
        name: "eagle_center",
        content:
          "The Philippine Eagle Center is home to the king of the Philippine skies, the critically endangered Philippine Eagle.",
        image: IMAGES['davao'].images.eagle_center[0],
        subheader: "Malagos",
      },
      {
        label: "PEOPLE'S PARK",
        name: "people_park",
        content:
          "Known for its colorful sculptures and tropical gardens, it’s a refreshing urban escape where locals gather to relax, jog, or simply enjoy the city vibe.",
        image: IMAGES['davao'].images.people_park[0],
        subheader: "DAvao City",
      },
      {
        label: "JACK'S RIDGE",
        name: "jack_ridge",
        content:
          "Once a Japanese Army headquarters during World War II, it now offers restaurants, scenic overlooks, and cultural displays that tell stories of Davao’s past.",
        image: IMAGES['davao'].images.jack_ridge[0],
        subheader: "Davao City",
      },
      {
        label: "DAVAO CROCODILE PARK",
        name: "crocodile_park",
        content:
          "This wildlife facility houses crocodiles, birds, and exotic animals while promoting environmental education and awareness.",
        image: IMAGES['davao'].images.crocodile_park[0],
        subheader: "Riverside, Davao City",
      },
    ]
  },
  palawan: {
    context: "An archipelago of sublime beauty, Palawan is an emerald chain of limestone karsts rising from jewel-toned waters, often hailed as the country's last ecological frontier. From the UNESCO-listed Underground River to the idyllic lagoons of El Nido and Coron, it’s a paradise for adventurers and a sanctuary for diverse marine life, offering a truly pristine escape.",
    spot: [
      {
        label: "PUERTO PRINCESA UNDERGROUND RIVER",
        name: "puerto_princesa",
        content:
          "Recognized as a UNESCO World Heritage Site, this 8-kilometer river flows through a spectacular limestone cave system adorned with stalactites and stalagmites.",
        image: IMAGES['palawan'].images.puerto_princesa[0],
        subheader: "Puerto Princesa",
      },
      {
        label: "EL NIDO ISLAND HOPPING",
        name: "island_hopping",
        content:
          "Known for its towering limestone cliffs, hidden lagoons, and white-sand beaches, it’s one of the most breathtaking destinations in the Philippines.",
        image: IMAGES['palawan'].images.island_hopping[0],
        subheader: "El Nido",
      },
      {
        label: "CORON SHIPWRECK",
        name: "coron_shipwreck",
        content:
          "Beneath its calm turquoise waters lie Japanese shipwrecks from World War II, now teeming with coral and marine life.",
        image: IMAGES['palawan'].images.coron_shipwreck[0],
        subheader: "Coron Palawan",
      },
      {
        label: "HONDA BAY",
        name: "honda_bay",
        content:
          "Dotted with small islands and sandbars, this coastal paradise invites visitors to swim, snorkel, and enjoy the simple pleasures of island life.",
        image: IMAGES['palawan'].images.honda_bay[0],
        subheader: "Puerto Princesa",
      },
      {
        label: "NACPAN BEACH",
        name: "nacpan_beach",
        content:
          "Stretching for four kilometers, it’s one of El Nido’s most serene and scenic spots — perfect for relaxation, sunset watching, and beach walks away from the crowds.",
        image: IMAGES['palawan'].images.nacpan_beach[0],
        subheader: "El Nido",
      },
    ]
  },
  bukidnon: {
    context: "Known as the highland paradise of Mindanao, Bukidnon is a cool, rolling expanse of vast pineapple and sugarcane plantations set against a backdrop of misty mountains and deep valleys. This landlocked province offers a serene escape into its lush landscapes, home to the vibrant cultures of indigenous tribes and adventurous ecotourism sites like the soaring Dahilayan Adventure Park.",
    spot: [
      {
        label: "ALALUM FALLS",
        name: "alalumm_falls",
        content:
          "Alalum Falls in Sumilao, Bukidnon, is a stunning 148-foot waterfall surrounded by lush greenery.",
        image: IMAGES['bukidnon'].images.alalumm_falls[0],
        subheader: "Sumilao",
      },
      {
        label: "CEDAR WATERFALLS",
        name: "cedar_falls",
        content:
          "Located in Impalutao, Manolo Fortich, CEDAR offers an eco-park experience with nature trails leading to beautiful waterfalls hidden in the forest.",
        image: IMAGES['bukidnon'].images.cedar_falls[0],
        subheader: "Center for Ecological Development and Recreation",
      },
      {
        label: "COMMUNAL RANCH",
        name: "communal_ranch",
        content:
          "The Communal Ranch in Impasugong offers wide grasslands with panoramic views of Bukidnon’s mountain ranges.",
        image: IMAGES['bukidnon'].images.communal_ranch[0],
        subheader: "Impasugong",
      },
      {
        label: "DAHILAYAN ADVENTURE PARK",
        name: "dahilayan_park",
        content:
          "Located in Manolo Fortich, Dahilayan Adventure Park is one of Mindanao’s premier adventure destinations, offering thrilling rides and beautiful mountain scenery.",
        image: IMAGES['bukidnon'].images.dahilayan_park[0],
        subheader: "Manolo Fortich",
      },
      {
        label: "KAAMULAN PARK",
        name: "kaamulan_park",
        content:
          "Kaamulan Park in Malaybalay City is a cultural and nature park that celebrates Bukidnon’s rich heritage.",
        image: IMAGES['bukidnon'].images.kaamulan_park[0],
        subheader: "Malaybalay City",
      },
      {
        label: "LAKE APO",
        name: "lake_apo",
        content:
          "one of Bukidnon’s cleanest inland bodies of water, perfect for relaxation and recreation.",
        image: IMAGES['bukidnon'].images.lake_apo[0],
        subheader: "Valencia City",
      },
      {
        label: "MONASTERY OF TRANSFIGURATION",
        name: "monastery_transfiguration",
        content:
          "The Monastery of Transfiguration in Malaybalay City is a peaceful retreat center known for its pyramid-shaped church designed by National Artist Leandro Locsin.",
        image: IMAGES['bukidnon'].images.monastery_transfiguration[0],
        subheader: "Malaybalay",
      },
      {
        label: "MT. ANAHAWON",
        name: "mt_anahawon",
        content:
          "Mt. Anahawon, also known as Skypark Valencia, offers breathtaking panoramic views of Valencia City and nearby mountains.",
        image: IMAGES['bukidnon'].images.mt_anahawon[0],
        subheader: "Skypark Valencia",
      },
      {
        label: "NASULI SPRING",
        name: "nasuli_spring",
        content:
          "Nasuli Spring in Malaybalay City is a natural cold spring with deep blue waters surrounded by lush trees.",
        image: IMAGES['bukidnon'].images.nasuli_spring[0],
        subheader: "Malaybalay",
      },
    ]
  },
  boracay: {
    context: "Famed for its powdery, white-sand shores that feel like talc underfoot and its stunningly clear, turquoise waters, Boracay is a world-renowned island of pure leisure and vibrant energy. While by day it's a haven for water sports and relaxation, by night it transforms into a lively strip of dining and entertainment, perfectly blending tropical bliss with modern comforts.",
    spot: [
      {
        label: "ARIEL'S POINT",
        name: "ariel_point",
        content:
          "Ariel's Point, near Buruanga, is an eco-adventure destination that offers a variety of activities and sports. It is known for its cliff diving, with platforms ranging from 3 to 15 meters.",
        image: IMAGES['boracay'].images.ariel_point[0],
        subheader: "Boracay",
      },
      {
        label: "BULABOG BEACH",
        name: "bulabog_beach",
        content:
          "Bulabog Beach, located on the eastern side of Boracay, is known as the adventure sports capital and a prime spot for kiteboarding and windsurfing.",
        image: IMAGES['boracay'].images.bulabog_beach[0],
        subheader: "Boracay",
      },
      {
        label: "CRYSTAL COVE ISLANDS",
        name: "crystal_cove",
        content:
          "Crystal Cove Island, near Boracay, provides a scenic experience with landscapes, clear waters, and rock formations.",
        image: IMAGES['boracay'].images.crystal_cove[0],
        subheader: "Boracay",
      },
      {
        label: "D'MALL BORACAY",
        name: "dmall_boracay",
        content:
          "D'Mall Boracay is a shopping plaza located between Station 1 and Station 2, featuring a mix of beach essentials, souvenirs, and dining options.",
        image: IMAGES['boracay'].images.dmall_boracay[0],
        subheader: "Boracay",
      },
      {
        label: "PARAW SAILING",
        name: "paraw_sailing",
        content:
          "Paraw sailing in Boracay involves sailing around the island on a traditional outrigger boat, especially during sunset.",
        image: IMAGES['boracay'].images.paraw_sailing[0],
        subheader: "Boracay",
      },
      {
        label: "WHITE BEACH",
        name: "white_beach",
        content:
          "White Beach is the heart of Boracay, featuring a 2.5-mile strip of soft sand and clear water. It is a vibrant tourist center with hotels, nightlife, and water sports.",
        image: IMAGES['boracay'].images.white_beach[0],
        subheader: "Boracay",
      },
      {
        label: "WILLY'S ROCK",
        name: "willys_rock",
        content:
          "Willy's Rock is an iconic volcanic rock formation located just off-White Beach in Station 1.",
        image: IMAGES['boracay'].images.willys_rock[0],
        subheader: "White Beach, Boracay",
      },
    ]
  },
  camiguin: {
    context: "Born of fire, the 'Island Born of Fire' is a lush, pear-shaped gem rising from the sea, dotted with seven volcanoes and numerous volcanic springs and waterfalls. This peaceful island offers a unique blend of natural wonders—from the sunken cemetery and hot springs to its sweet lanzones fruit—creating an atmosphere of serene, unspoiled beauty and resilience.",
    spot: [
      {
        label: "WHITE ISLAND",
        name: "white_island",
        content:
          "This is a pristine sandbar off the coast of Camiguin, often described as the island’s crown jewel.",
        image: IMAGES['camiguin'].images.white_island[0],
        subheader: "Camiguin",
      },
      {
        label: "KATIBAWASAN FALLS",
        name: "katibawasan_falls",
        content:
          "A majestic waterfall in Camiguin that drops from a high height into a clear basin, surrounded by lush tropical vegetation.",
        image: IMAGES['camiguin'].images.katibawasan_falls[0],
        subheader: "Camiguin",
      },
      {
        label: "SUNKEN CEMETERY",
        name: "sunken_cemetery",
        content:
          "A hauntingly beautiful historical-natural site where an entire cemetery was submerged by volcanic eruption in the 1870s.",
        image: IMAGES['camiguin'].images.sunken_cemetery[0],
        subheader: "Camiguin",
      },
      {
        label: "MANTIGUE ISLAND",
        name: "mantigue_island",
        content:
          "A small island (about 4 hectares) off Camiguin’s coast, protected as a marine sanctuary with white coral sand beach, forest trail and rich underwater life.",
        image: IMAGES['camiguin'].images.mantigue_island[0],
        subheader: "“MAGSAYSAY ISLAND”",
      },
      {
        label: "BURA SODA WATER PARK",
        name: "bura_water_park",
        content:
          "These spots highlight Camiguin’s volcanic and geothermal nature. Bura is a “soda-water” pool (naturally carbonated spring).",
        image: IMAGES['camiguin'].images.bura_water_park[0],
        subheader: "Camiguin",
      },
      {
        label: "TANGUINES LAGOON",
        name: "tanguines_lagoon",
        content:
          "A large calm lagoon originally created for fish propagation. A change of pace from typical beach/sea settings — quieter, more relaxed.",
        image: IMAGES['camiguin'].images.tanguines_lagoon[0],
        subheader: "Mahinog, Camiguin",
      },
    ]
  },
  panabo: {
    context: "Panabo City is known as the “Banana Capital of the Philippines” because of its huge banana plantations, export production and agro-industry. It spans fertile lowlands, coastal areas and has a mix of agriculture + city amenities. Tourism in Panabo is growing: besides the plantations, there are mariculture/coastal parks, boardwalks and plazas. For trip planning: it’s accessible by land from Davao City (~30-45 minutes depending on route) and sits along major highway. ",
    spot: [
      {
        label: "SEAWALL & BAY WALK",
        name: "seawall",
        content:
          "Along Panabo’s coast you’ll find a seawall promenade and bay walk area where locals stroll, relax and enjoy seaside views.",
        image: IMAGES['panabo'].images.seawall[0],
        subheader: "Panabo City",
      },
      {
        label: "JAPANESE TUNNEL",
        name: "japanese_tunnel",
        content:
          "Historical and nature spots in Panabo: the Japanese Tunnel (WWII-era) being developed for tourism.",
        image: IMAGES['panabo'].images.japanese_tunnel[0],
        subheader: "San Nicolas & Buenavista",
      },
      {
        label: "MANGROVE FOREST BOARDWALK",
        name: "mangrove_forest",
        content:
          "A large‐scale mangrove forest reserve (~94.1 ha) with a 585-meter walkway/boardwalk in Brgy. JP Laurel.",
        image: IMAGES['panabo'].images.mangrove_forest[0],
        subheader: "Brgy. JP Laurel",
      },
    ]
  },
  tagum: {
    context: "Tagum City is the capital of Davao del Norte province in the Philippines, known for being the 'Palm City of the Philippines' and a vibrant economic and cultural hub. Located at an important intersection of major roads, it serves as a key crossroads for the Davao Region and is a growing center for business, education, and festivals. It is also recognized for its bustling commercial districts, vibrant cultural scene, and warm community spirit.",
    spot: [
      {
        label: "SAN AGUSTIN BOTANICAL PARK",
        name: "botanical_park",
        content:
          "A large botanical park in Tagum, boasting thousands of tree species from around the world.",
        image: IMAGES['tagum'].images.botanical_park[0],
        subheader: "Tagum City",
      },
      {
        label: "BANANA BEACH",
        name: "banana_beach",
        content:
          "A unique beach resort in Tagum’s Madaum area, within a banana plantation – offering beach + resort + nature in one.",
        image: IMAGES['tagum'].images.banana_beach[0],
        subheader: "Hijo Resorts Davao",
      },
      {
        label: "NABINTAD RIVER CRUISE",
        name: "nabintad_cruise",
        content:
          "Tagum City offers a river cruise (around mangroves and along the river bank) which is a less obvious but rewarding activity.",
        image: IMAGES['tagum'].images.nabintad_cruise[0],
        subheader: "Tagum City",
      },
    ]
  },
  bangkok: {
    context: "Bangkok pulses with life, color, and culture — a city where golden temples rise beside bustling night markets and serene riverside communities. Beyond its lively streets, Bangkok celebrates Thai artistry through handwoven textiles, floating markets, and time-honored crafts. Visitors are invited to explore responsibly, connecting with the people and traditions that give this vibrant city its soul.",
    spot: []
  },
  china: {
    context: "China is a land where ancient traditions meet modern marvels. From the timeless majesty of the Great Wall to the tranquil gardens of Suzhou and the vibrant markets of Xi’an, every corner tells a story of heritage and harmony. Travelers can discover handcrafted art, regional cuisine, and centuries-old craftsmanship that continue to inspire the world.",
    spot: []
  },
};

export const PLACES: Place[] = [
  {
    title: "TAGAYTAY",
    name: "tagaytay",
    image: IMAGES['tagaytay'].images.taal_volcano[0],
    video: "",
    vidDescription: "",
    description: "Tagaytay is a popular holiday town south of Manila on the Philippine island Luzon. Known for its mild climate, it sits on a ridge above Taal Volcano Island, an active volcano surrounded by Taal Lake. Picnic Grove is a recreation area with trails and a zip line.",
  },
  {
    title: "VIGAN",
    name: "vigan",
    image: IMAGES['vigan'].images.calle_crisologo[0],
    video: "https://drive.google.com/file/d/1gOV7AVFMnaOjxGB-3XqbVLzGLal5pD7u/preview",
    vidDescription: "Vigan is a timeless city where the past gently walks beside the present. Its cobblestone streets, old Spanish houses, and horse-drawn kalesas bring to life the stories of centuries that have passed. Here, every balcony, every lantern, every echoed footstep carries memory and meaning. Vigan is a place you don’t just see — you feel.",
    description: "Vigan is a city in the Philippines, on the west coast of Luzon island. It's known for its preserved Spanish colonial and Asian architecture. Calle Crisologo dominates the Mestizo district, with its cobblestone streets, malecón, horse-drawn carriages and rustic mansions.",
  },
  {
    title: "AKLAN",
    name: "aklan",
    image: IMAGES['aklan'].images.boracay[0],
    video: "",
    vidDescription: "",
    description: "The province of Aklan lies northwest on Panay Island and includes renowned tourist spots like Boracay and various nature/ecotourism sites. The culture, history, and natural environments are diverse — from beaches to waterfalls to mangrove forests and cold springs.",
  },
  {
    title: "ILOCOS NORTE",
    name: "ilocos_norte",
    image: IMAGES['ilocos_norte'].images.paoay_church[0],
    video: "",
    vidDescription: "",
    description: "Ilocos Norte is a province in the northern Philippines. In the capital Laoag City, grand Paoay Church is a fusion of local and baroque architecture. Farther north, Cape Bojeador Lighthouse and the dramatic Kapurpurwan Rock Formation offer panoramic ocean views.",
  },
  {
    title: "ILOCOS SUR",
    name: "ilocos_sur",
    image: IMAGES['ilocos_sur'].images.sta_maria_church[0],
    video: "",
    vidDescription: "",
    description: "Ilocos Sur, officially the Province of Ilocos Sur, is a province in the Philippines located in the Ilocos Region in Luzon. Located on the mouth of the Mestizo River is the capital of Vigan, while Candon is the most-populous city.",
  },
  {
    title: "LA UNION",
    name: "la_union",
    image: IMAGES['la_union'].images.bahay_bato[0],
    video: "",
    vidDescription: "",
    description: "La Union, officially the Province of La Union, is a coastal province in the Philippines situated in the Ilocos Region on the island of Luzon. The province's capital, the City of San Fernando, is the most populous city in La Union and serves as the regional center of the Ilocos Region.",
  },
  {
    title: "CEBU",
    name: "cebu",
    image: IMAGES['cebu'].images.magellan_cross[0],
    video: "https://drive.google.com/file/d/18miy1qqJ-T92dDd7bFG0ca-SBdwlv3Ex/preview",
    vidDescription: "Cebu is a lively island where history, culture, and adventure come together. From peaceful beaches and crystal-blue waters to sacred churches and bustling city streets, Cebu offers moments that stay with you. It is a place of warm smiles, flavorful food, and stories proudly carried through generations. In Cebu, every corner has a memory waiting to be cherished.",
    description: "Cebu is a province of the Philippines, in the country’s Central Visayas region, comprising Cebu Island and more than 150 smaller surrounding islands and islets. Its prosperous port capital, Cebu City, retains landmarks from its 16th-century Spanish colonial past, including the Basilica Minore del Santo Niño church and triangular Fort San Pedro.",
  },
  {
    title: "PALAWAN",
    name: "palawan",
    image: IMAGES['palawan'].images.puerto_princesa[0],
    video: "",
    vidDescription: "",
    description: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
  },
  {
    title: "DAVAO",
    name: "davao",
    image: IMAGES['davao'].images.eden_park[0],
    video: "",
    vidDescription: "",
    description: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
  },
  {
    title: "BORACAY",
    name: "boracay",
    image: IMAGES['boracay'].images.ariel_point[0],
    video: "",
    vidDescription: "",
    description: "Boracay is a small island in the central Philippines. It's known for its resorts and beaches. Along the west coast, White Beach is backed by palm trees, bars and restaurants. On the east coast, strong winds make Bulabog Beach a hub for water sports.",
  },
  {
    title: "BUKIDNON",
    name: "bukidnon",
    image: IMAGES['bukidnon'].images.alalumm_falls[0],
    video: "https://drive.google.com/file/d/13oglOehIQ7tFBl3PEGryzZa_WdQElFY3/preview",
    vidDescription: "Dahilayan is a peaceful mountain adventure park in Bukidnon, surrounded by cool pine-scented air and endless green landscapes. It’s a place where laughter echoes from zip lines and giant swings, and where friends and families come together to enjoy the beauty of nature. Whether it’s the thrill of flying through the mountains or simply sitting under the trees, Dahilayan is a destination that stays in your heart long after you leave.",
    description: "Bukidnon, officially the Province of Bukidnon, is a landlocked province in the Philippines located in the Northern Mindanao region. Its capital is the city of Malaybalay while Valencia is the largest city.",
  },
  {
    title: "CAMIGUIN",
    name: "camiguin",
    image: IMAGES['camiguin'].images.white_island[0],
    video: "",
    vidDescription: "",
    description: "Camiguin is a relatively small island province, nicknamed the “Island Born of Fire” due to its volcanic history. It offers a mix of beach, sandbar, island-hopping, waterfall hikes, volcano treks, springs and historical/underwater sites. Many of the attractions are close enough together that you could cover several in one day if you plan well.",
  },
  {
    title: "PANABO",
    name: "panabo",
    image: IMAGES['panabo'].images.seawall[0],
    video: "",
    vidDescription: "",
    description: "Panabo City is known as the “Banana Capital of the Philippines” because of its huge banana plantations, export production and agro-industry. It spans fertile lowlands, coastal areas and has a mix of agriculture + city amenities.",
  },
  {
    title: "TAGUM",
    name: "tagum",
    image: IMAGES['tagum'].images.nabintad_cruise[0],
    video: "",
    vidDescription: "",
    description: "The capital of Davao del Norte province in the Philippines, known for being the 'Palm City of the Philippines' and a vibrant economic and cultural hub. It is also recognized for its bustling commercial districts, vibrant cultural scene, and warm community spirit.",
  },
  {
    title: "BANGKOK",
    name: "bangkok",
    image: IMAGES['bangkok'].images.bangkok[0],
    video: "https://drive.google.com/file/d/1JGZsebnI1PksPj021-edV96vTTSYPu8m/preview",
    vidDescription: "Bangkok is a city of stunning contrasts — where golden temples shine beside lively markets, and ancient traditions blend with modern life. The air is filled with the aroma of spices, the sound of busy streets, and the warmth of smiles from people you meet along the way. Every corner holds something vibrant, colorful, and alive. In Bangkok, every moment feels like a story unfolding.",
    description: "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple. Nearby is Wat Pho Temple with an enormous reclining Buddha.",
  },
  {
    title: "LIJANG OLD TOWN",
    name: "china",
    image: IMAGES['china'].images.china[0],
    video: "https://drive.google.com/file/d/1zgLDuLkFl_9VnuKYaQeaqKwOU0DrXm_-/preview",
    vidDescription: "Lijiang Old Town is a place where time seems to slow down. Stone pathways, flowing canals, wooden houses, and lantern-lit streets create a scene that feels like a dream preserved for centuries. The melodies of traditional music blend with the soft sound of water running through the canals, making every step feel peaceful and meaningful. Here, the past is alive — gently guiding every moment.",
    description: "China's diverse geography includes vast mountains, deserts, and fertile lowlands, with most of the population concentrated in the east near rivers like the Yangtze and Yellow River. Culturally, China is characterized by its rich history, the influence of philosophies like Confucianism, and a wide array of ethnic groups and traditions, although it is often perceived as homogeneous.",
  },
];