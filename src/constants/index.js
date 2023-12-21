import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Webmaster Grade 6-8",
        company_name: "Holy Rosary CSS",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "1997-1999",
        points: [
            "Started learning HTML code to build websites",
            "Practiced building webpages with free hosting sites such as Geocities for artist fan pages and favourite tv shows",
            "Started learning graphic design to edit pictures and layout for the sites",
            "Built an online yearbook for my grade 8 class for graduation",
        ],
    },
    {
        title: "Graphic and Web Design",
        company_name: "Marshall MccLuhan",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "2000-2004",
        points: [
            "Learned more about graphic design and technology at highschool",
            "Created projects for digital and print for art classes",
            "Maintained an Asian Avenue website where I learned more HTML coding",
        ],
    },
    {
        title: "Advertising Technology Student",
        company_name: "Int'l Academy of Design and Technology",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Metaversus',
        description: 'A modern website about the metaverse utilizing tailwind and making most elements move while scrolling down.',
        link: 'https://katesgo.github.io/meta/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Ramesushi',
        description: 'A sushi restaurant online e-commerce website with lots of motion effects while scrolling down.',
        link: 'https://katesgo.github.io/ramesushi/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Flower Store',
        description: 'Web-based e-commerce storefront of a flower shop. Sections includes latest products, review and contact section.',
        link: 'https://katesgo.github.io/flowerstore/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Green Tara',
        description: 'Responsive landing page using CSS and javascript to add motion on different elements of the page.',
        link: 'https://katesgo.github.io/responsive/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'High Park',
        description: 'A landing page for my dads video from  HighPark, uncluding resposive elements and highlighting a beautifully shot video of a yellow bird.',
        link: 'https://katesgo.github.io/highpark/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Login Page',
        description: 'An example of a login page with moving elements using CSS and a beautifully designed transparent effect giving a dreamy feel.',
        link: 'https://katesgo.github.io/login/',
    }
];