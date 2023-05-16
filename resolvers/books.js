const books = [
        {
            id: 3111.1,
            name: "Microwave Engineering",
            quantity: 10,
            author: "Sanjeeva Gupta",
            category: "Microwave Communication and Rader",
            image: "3111.1.png"
        },
        {
            id: 3111.2,
            name: "Introduction to Radar System",
            quantity: 10,
            author: "M.I.Skolnik",
            category: "Microwave Communication and Rader",
            image: "3111.2.png"
        },
        {
            id: 3111.3,
            name: "Principal of Carriers Communication",
            quantity: 10,
            author: "N.Biswas",
            category: "Microwave Communication and Rader",
            image: "3111.3.png"
        },
        {
            id: 3111.4,
            name: "Electronic Communications Systems",
            quantity: 10,
            author: "Sanjeeva Gupta",
            category: "Microwave Communication and Rader",
            image: "3111.4.png"
        },
        {
            id: 3111.5,
            name: "Principles of Communication Engineering",
            quantity: 10,
            author: "A.K. Chhabra   ",
            category: "Microwave Communication and Rader",
            image: "3111.5.png"
        },
        {
            id: 3111.6,
            name: "Microwave communication system",
            quantity: 10,
            author: "V.K. Mourya",
            category: "Microwave Communication and Rader",
            image: "3111.6.png"
        },
        {
            id: 3121.1,
            name: "Digital Signal Processing- Principles and Application",
            quantity: 10,
            author: "J G Proakis & D G Manolakis",
            category: "Digital Signal Processing",
            image: "3121.1.png"
        },
        {
            id: 3121.2,
            name: "Statistical Digital Signal Processing",
            quantity: 10,
            author: "M H Hayes",
            category: "Digital Signal Processing",
            image: "3121.2.png"
        },
        {
            id: 3121.3,
            name: "Theory and Application of Digital Speech Processing",
            quantity: 10,
            author: "R Rabiner and R W Schafer",
            category: "Digital Signal Processing",
            image: "3121.3.png"
        },
        {
            id: 3131.1,
            name: "Fundamentals of Digital Image Processing",
            quantity: 10,
            author: "Anil K. Jain  ",
            category: "Digital Image Processing",
            image: "3131.1.png"
        },
        {
            id: 3131.2,
            name: "Digital Image Processing",
            quantity: 10,
            author: "Rafael C. Gonzalez",
            category: "Digital Image Processing",
            image: "3131.2.png"
        },
        {
            id: 3131.3,
            name: "Mathematics for Computer Graphics Application",
            quantity: 10,
            author: "Michael E. Mortson",
            category: "Digital Image Processing",
            image: "3131.3.png"
        },
        {
            id: 3141.1,
            name: "Antenna Theory – Analysis and Design, 2nd Edition",
            quantity: 10,
            author: "C. A. Balanis",
            category: "Antenna Engineering",
            image: "3141.4.png"
        },
        {
            id: 3141.2,
            name: "Antennas: from Theory to Practice, 1st Edition",
            quantity: 10,
            author: "Yi Huang and Kevin Boyle",
            category: "Antenna Engineering",
            image: "3141.2.png"
        },
        {
            id: 3141.3,
            name: "Antennas for All Applications, 3rd Edition",
            quantity: 10,
            author: "J. D. Kraus, R. J. Marhefka, and A. S. Khan",
            category: "Antenna Engineering",
            image: "3141.3.png"
        },
        {
            id: 3141.4,
            name: "Antenna and Wave Propagation, 3rd Edition",
            quantity: 10,
            author: "K. D. Prasad",
            category: "Antenna Engineering",
            image: "3141.4.png"
        },
        {
            id: 3151.1,
            name: "Satellite Communications",
            quantity: 10,
            author: "Dennis Roddy",
            category: "Satellite Communication",
            image: "3151.1.png"
        },
        {
            id: 3151.2,
            name: "Digital Satellite Communication ",
            quantity: 10,
            author: "Tri T. Ha",
            category: "Satellite Communication",
            image: "3151.2.png"
        },
        {
            id: 3151.3,
            name: "Handbook of Satellite Communication",
            quantity: 10,
            author: "Sudhir K Pand ",
            category: "Satellite Communication",
            image: "3151.3.png"
        },
        {
            id: 3151.4,
            name: "Satellite Communication System Engineering ",
            quantity: 10,
            author: "Robert A. Nelson",
            category: "Satellite Communication",
            image: "3151.4.png"
        },
        {
            id: 3211.1,
            name: "Mastering Java 2",
            quantity: 10,
            author: "John Murkowski ",
            category: "JAVA and Network Programming",
            image: "3211.1.png"
        },
        {
            id: 3211.2,
            name: "The Complete Reference of Java 2",
            quantity: 10,
            author: "Herbert Schildt",
            category: "JAVA and Network Programming",
            image: "3211.2.png"
        },
        {
            id: 3211.3,
            name: "Java: How to Program",
            quantity: 10,
            author: "H.M. Deitel and P.J. Deitle  ",
            category: "JAVA and Network Programming",
            image: "3211.3.png"
        },
        {
            id: 3211.4,
            name: "Programming with Java",
            quantity: 10,
            author: "E. Balagurusamy",
            category: "JAVA and Network Programming",
            image: "3211.4.png"
        },
        {
            id: 3211.5,
            name: "Teach Yourself Java",
            quantity: 10,
            author: "H. Schildt, McGraw-Hill",
            category: "JAVA and Network Programming",
            image: "3211.5.png"
        },
        {
            id: 3211.6,
            name: "Learning Java",
            quantity: 10,
            author: "Patrick Niemeyer, Jonathan Knudsen",
            category: "JAVA and Network Programming",
            image: "3211.6.png"
        },
        {
            id: 3211.7,
            name: "Java Programming Language",
            quantity: 10,
            author: "John Murkowski ",
            category: "Ken Arnold, James Gosling, David Holmes",
            image: "3211.7.png"
        },
        {
            id: 3221.1,
            name: "Digital Communication Systems",
            quantity: 10,
            author: "S Haykin",
            category: "Digital Communication",
            image: "3221.1.png"
        },
        {
            id: 3221.2,
            name: "Electronic Communication Syatems",
            quantity: 10,
            author: "Kennedy-Davice",
            category: "Digital Communication",
            image: "3221.2.png"
        },
        {
            id: 3221.3,
            name: "Wireless Communications: Principles & Practice",
            quantity: 10,
            author: "Theodore S. Rappaport",
            category: "Digital Communication",
            image: "3221.3.png"
        }, 
         {
            id: 3231.1,
            name: "Telecommunication Switching Systems and Networks.",
            quantity: 10,
            author: "ThiagrajanViswanathan",
            category: "Telecommunication Engineering ",
            image: "3231.1.png"
        },
        {
            id: 3231.2,
            name: "Telecommunication Switching and Networks.",
            quantity: 10,
            author: "P. Gnanasivam",
            category: "Telecommunication Engineering ",
            image: "3231.2.png"
        },
        {
            id: 3231.3,
            name: "Telecommunication Switching and Networks.",
            quantity: 10,
            author: "M. T. Hills",
            category: "Telecommunication Engineering ",
            image: "3231.3.png"
        },
        {
            id: 3231.4,
            name: "Digital Telephony.",
            quantity: 10,
            author: "J.C. Bellamy",
            category: "Telecommunication Engineering ",
            image: "3231.4.png"
        },
        {
            id: 3241.1,
            name: "Optical Fiber Communications, Pearson Education. 3rd Impression, 2007",
            quantity: 10,
            author: "J. M.  Senior",
            category: "Optical Fiber Communication",
            image: "3241.1.png"
        },
        {
            id: 3241.2,
            name: "Fiber Optic Communication, 4th edition",
            quantity: 10,
            author: "Palaise",
            category: "Optical Fiber Communication",
            image: "3241.2.png"
        },
        {
            id: 3241.3,
            name: "Optical Fiber Communication, 4th Ed., MGH, 2008",
            quantity: 10,
            author: "Gerd Keiser",
            category: "Optical Fiber Communication",
            image: "3241.3.png"
        },
        {
            id: 3241.4,
            name: "Optical Fiber Sensors",
            quantity: 10,
            author: "Arthur N. Chester, S. Martellucci, A.M. Verga Scheggi",
            category: "Optical Fiber Communication",
            image: "3241.4.png"
        },
        {
            id: 3241.5,
            name: "Optical fiber communication",
            quantity: 10,
            author: "V.S. Bagad.",
            category: "Optical Fiber Communication",
            image: "3241.5.png"
        },
        {
            id: 3241.6,
            name: "Fiber-Optic Communication Systems",
            quantity: 10,
            author: "Govind P. Agrawal",
            category: "Optical Fiber Communication",
            image: "3241.6.png"
        },
        {
            id: 3241.7,
            name: "Electronic Communications",
            quantity: 10,
            author: "D. Roddy and Coolen  ",
            category: "Optical Fiber Communication",
            image: "3241.7.png"
        },
        {
            id: 3251.1,
            name: "Software Engineering-A Practitioner's Approach",
            quantity: 10,
            author: "R. S. Pressman",
            category: "Software Engineering",
            image: "3251.1.png"
        },
        {
            id: 3251.2,
            name: "Software Engineering",
            quantity: 10,
            author: "K. K. Aggarwal & Yogesh Singh",
            category: "Software Engineering",
            image: "3251.2.png"
        },
        {
            id: 3251.3,
            name: "Beginning Software Engineering",
            quantity: 10,
            author: "Rod Stephens",
            category: "Software Engineering",
            image: "3251.1.png"
        },
        {
            id: 4111.1,
            name: "Neural Networks A Comprehensive Foundation",
            quantity: 10,
            author: "Simon Haykin  ",
            category: "Artificial Intelligence and Neural Computing",
            image: "4111.1.png"
        },
        {
            id: 4111.2,
            name: "Introduction to Artificial Intelligence and Expert System",
            quantity: 10,
            author: "Dan W. Patterson ",
            category: "Artificial Intelligence and Neural Computing",
            image: "4111.2.png"
        },
        {
            id: 4111.3,
            name: "Artificial Intelligence A Modern Approach ",
            quantity: 10,
            author: "S. Russel and P. Norving  ",
            category: "Artificial Intelligence and Neural Computing",
            image: "4111.3.png"
        },
        {
            id: 4111.4,
            name: "Introduction to Turbo Prolog",
            quantity: 10,
            author: "Carl Townsend",
            category: "Artificial Intelligence and Neural Computing",
            image: "4111.4.png"
        },
        {
            id: 4111.5,
            name: "Logical Fundamentals of AI.",
            quantity: 10,
            author: "Generserth, Michael R, and Nilsson Nills",
            category: "Artificial Intelligence and Neural Computing",
            image: "4111.5.png"
        },
        {
            id: 4111.6,
            name: "Prolog Programming for AI. ",
            quantity: 10,
            author: "Ivan Bratko ",
            category: "Artificial Intelligence and Neural Computing",
            image: "4111.6.png"
        },
        {
            id: 4121.1,
            name: "",
            quantity: 10,
            author: "",
            category: "Computer Architecture and Microprocessor",
            image: "4121.1.png"
        },
        {
            id: 4121.1,
            name: "Computer Architecture and Organization",
            quantity: 10,
            author: "John P. Hayes",
            category: "Computer Architecture and Microprocessor",
            image: "4121.1.png"
        },
        {
            id: 4121.2,
            name: "Digital Logic and Computer Design",
            quantity: 10,
            author: "Morris Manno",
            category: "Computer Architecture and Microprocessor",
            image: "4121.2.png"
        },
        {
            id: 4121.3,
            name: "Microprocessor Hardware Interfacing and Application",
            quantity: 10,
            author: "Barry B. Brey ",
            category: "Computer Architecture and Microprocessor",
            image: "4121.3.png"
        },
        {
            id: 4121.4,
            name: "Computer Organization and Design.",
            quantity: 10,
            author: "P. Pal Choudhury",
            category: "Computer Architecture and Microprocessor",
            image: "4121.4.png"
        },
        {
            id: 4121.5,
            name: "Computer System and Architecture",
            quantity: 10,
            author: "M. Morris Manno",
            category: "Computer Architecture and Microprocessor",
            image: "4121.5.png"
        },
        {
            id: 4131.1,
            name: "Wireless Communication",
            quantity: 10,
            author: "AJ Goldsmith",
            category: "Wireless Communication",
            image: "4131.1.png"
        },
        {
            id: 4131.2,
            name: "Wireless Communication: Principles and Practices",
            quantity: 10,
            author: "T.S Rappaport",
            category: "Wireless Communication",
            image: "4131.2.png"
        },
        {
            id: 4131.3,
            name: "Wireless Communication",
            quantity: 10,
            author: "A Molisch",
            category: "Wireless Communication",
            image: "4131.3.png"
        },
        {
            id: 4131.4,
            name: "Principles of Wireless Network",
            quantity: 10,
            author: "Pahlavan and Krishnamurty",
            category: "Wireless Communication",
            image: "4131.4.png"
        },
        {
            id: 4141.1,
            name: "Database Systems Concept, Fifth Edition",
            quantity: 10,
            author: "A. Silberschatz, H. F. Korth and  S.Sudarshan",
            category: "Database Management System",
            image: "4141.1.png"
        },
        {
            id: 4141.2,
            name: "Understanding Database Management Systems.",
            quantity: 10,
            author: "Joseph A. Vasta",
            category: "Database Management System",
            image: "4141.2.png"
        },
        {
            id: 4141.3,
            name: "Principles of Database Management.",
            quantity: 10,
            author: "James Martin",
            category: "Database Management System",
            image: "4141.3.png"
        },
        {
            id: 4141.4,
            name: "Principles of Database Management.",
            quantity: 10,
            author: "James Martin",
            category: "Database Management System",
            image: "4141.4.png"
        },
        {
            id: 4141.5,
            name: " Principles of Database Management",
            quantity: 10,
            author: "James Martin",
            category: "Database Management System",
            image: "4141.5.png"
        },
        {
            id:1101.1,
            name:"Introduction to information technology ",
            quantity: 7,
            author:"John Wiley & Sons",
            "catagory":": Introduction to Information and Communication Engineering",
            image:"1101.1.png"
           },
                
               {
            id:1102.2,
            name:"Introduction to Computer ",
            quantity:4,
            author:"P. Norton",
            "catagory": "Introduction to Information and Communication Engineering",
            image:"1102.2.png"
           },
                
               {
            id:1103.3,
            name:"Fundamentals of ICT",
            quantity:3,
            author:"Abdullah Zin",
            "catagory": "Introduction to Information and Communication Engineering",
            image:"1103.3.png"
           },
                
               {
            id:1104.4,
            name:"Computer and Their Application",
            quantity:2,
            author:"Charles S. Parker",
            "catagory": "Introduction to Information and Communication Engineering",
            image:"1104.4.png"
           },
                
               {
            id:1105.5,
            name:"Principles of Data Processing",
            quantity:3,
            author:"R. M. Stair",
            "catagory": "Introduction to Information and Communication Engineering",
            image:"1105.5.png"
           },
                
               {
            id:1106.6,
            name:"Fundamentals of Computers",
            quantity:2,
            author:"V.Rajaraman",
            "catagory": "Introduction to Information and Communication Engineering",
            image:"1106.6.png"
           },
                
               {
            id:1107.7,
            name:"Information Technology- The Breaking Wave ",
            quantity:1,
            author:"Dennis P. Curtin ",
            "catagory": "Introduction to Information and Communication Engineering",
            image:"1107.7.png"
           },
                
               {
            id:1111.1,
            name:"Digital Logic and Computer Design",
            quantity:3,
            author:"M. Morris Mano",
            "catagory": "Digital Electronics",
            image:"1111.1.png"
           },
                
               {
            id:1112.2,
            name:"Digital and Computer Design",
            quantity:5,
            author:"M. Morris Mano",
            "catagory": "Digital Electronics",
            image:"1112.2.png"
           },
                
               {
            id:1113.3,
            name:"Switching Theory and Digital Electronics",
            quantity:3,
            author:"V.K. Jain",
            "catagory":"Digital Electronics",
            image:"1113.3.png"
           },
                
               {
            id:1114.4,
            name:"Digital Circuit and Logic Design",
            quantity:3,
            author:"S.C. Lee",
            "catagory":"Digital Electronics",
            image:"1114.4.png"
           },
                
               {
            id:1115.5,
            name:"Digital Systems",
            quantity:2,
            author:"Tocci & Widmer",
            "catagory":"Digital Electronics",
            image:"1115.5.png"
           },
                
               {
            id:1121.1,
            name:"Introductory Circuit Analysis",
            quantity:5,
            author:"R L Boylestad",
            "catagory":"Electronics",
            image:"1121.1.png"
           },
                
               {
            id:1122.2,
            name:"Electronic Devices and Circuits Theory",
            quantity:5,
            author:"R L Boylestad",
            "catagory":"Electronics",
            image:"1122.2.png"
           },
                
               {
            id:1123.3,
            name:"Principle of electronics",
            quantity:5,
            author:"Millman and Halkias ",
            "catagory":"Electronics",
            image:"1123.3.png"
           },
                
               {
            id:1124.4,
            name:"Electronic Devices and Circuits",
            quantity:4,
            author:"Millman and Halkias ",
            "catagory":"Electronics",
            image:"1124.4.png"
           },
                
               {
            id:1125.5,
            name:"Handbook of Electronics",
            quantity:2,
            author:"Gupta & Kumar",
            "catagory":"Electronics",
            image:"1125.5.png"
           },
                
               {
            id:1126.6,
            name:"Principle of Electronics",
            quantity:1,
            author:"A. P. Malvino",
            "catagory":"Electronics",
            image:"1126.6.png"
           },
           {
            id:1131.1,
            name:"Higher Algebra",
            quantity:5,
            author:"H. S. Hall and S. R. Knight",
            "catagory":"Mathematics",
            image:"1131.1.png"
           },
           {
            id:1132.2,
            name:"Higher Trigonometry",
            quantity:4,
            author:"B. C. Das and B. N. Mukherjee",
            "catagory":"Mathematics",
            image:"1132.2.png"
           },
           {
            id:1133.3,
            name:"Vector Analysis",
            quantity:3,
            author:"M.R Spiezel",
            "catagory":"Mathematics",
            image:"1133.3.png"
        },
        {
           id:9000.1,
           name:"জোসিচন্দের ছড়া",
           quantity:4,
           author:"নজরুল সমাদ্দার ",
           category:"Magazine",
           image:"9000.1.png"
         },
         {
           id:9000.2,
           name:"লাশ গলা মাটি",
           quantity:4,
           author:"কে.এম. নজরুল ইসলাম",
           category:"Magazine",
           image:"9000.2.png"
         },
         {
           id:9100.1,
           name:"Voice communication between humans and machines",
           quantity:3,
           author:"David B.Roe and Jay G.Wilpon",
           category:"Thesis Paper",
           image:"9100.1.png"
         },
         {
         id:9200.1,
         name:"Inside TCP/IP",
         quantity:2,
         author:"Karanjit S.Siyan",
          category:"Network communication",
          image:"9200.1.png"
}
	]
export default books
