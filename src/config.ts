import fieldServiceImage from './assets/images/WilmsFieldService.png';
import customerPortalImage from './assets/images/WilmsCustomerPortal.jpg';
import portfolioLightImage from './assets/images/PortfolioLight.jpg';
import portfolioDarkImage from './assets/images/PortfolioDark.jpg';

const name = 'Laurens Sauvillers';

const currentYear = new Date().getFullYear();

const yearInterestStarted = 2008;
const yearCareerStarted = 2016;

const yearsOfInterest = currentYear - yearInterestStarted - ((currentYear - yearInterestStarted) % 5);
const yearsOfExperience = currentYear - yearCareerStarted;

export const ANIMATIONS = {
    attributeName: 'data-animate',
    duration: 0.5,
    stagger: 0.1,
    easing: 'ease',
    transformFrom: 'translateY(50px)',
    transformTo: 'translateY(0)',
}

export const SITE = 'https://sauvillers.dev';

export const DEFAULT_THEME = 'system';

const head = {
    title: name,
    description: 'Laurens Sauvillers is a Software Engineer based in Belgium who builds and architects scalable enterprise applications consistent with industry standards using .NET, Angular, and other technologies. He thrives on turning ideas into seamless, functional realities.',
    image: '/BurgEltz.jpg',
    googleAnalyticsId: 'G-KS1EG98KGE',
}

const navItems = [
    { label: 'Home', icon: 'material-symbols:home-outline', activeIcon: 'material-symbols:home', link: '/#' },
    { label: 'About', icon: 'material-symbols:person-outline', activeIcon: 'material-symbols:person', link: '/#about' },
    { label: 'Expertise', icon: 'material-symbols:psychology-outline', activeIcon: 'material-symbols:psychology', link: '/#expertise' },
    { label: 'Technologies', icon: 'material-symbols:satellite-alt-outline', activeIcon: 'material-symbols:satellite-alt', link: '/#technologies' },
    { label: 'Projects', icon: 'material-symbols:rocket-launch-outline', activeIcon: 'material-symbols:rocket-launch', link: '/#projects' },
    { label: 'Contact', icon: 'material-symbols:contact-support-outline', activeIcon: 'material-symbols:contact-support', link: '/#contact' },
];

const socials = [
    { label: 'Email', description: 'contact@sauvillers.dev', icon: 'mdi:email-outline', activeIcon: 'mdi:email', link:'mailto:contact@sauvillers.dev', color: 'primary' },
    { label: 'GitHub', description: 'GitHub.com/Loewie', icon: 'mdi:github', link:'https://github.com/Loewie', color: 'secondary' },
    { label: 'LinkedIn', description: 'LinkedIn.com/in/Laurens-Sauvillers', icon: 'mdi:linkedin', link:'https://www.linkedin.com/in/laurens-sauvillers/', color: 'tertiary' },
];

const hero = {
    id: 'hero',
    highlight: 'Hi, my name is',
    title: name,
    subtitle: 'Software Engineer based in Belgium',
    paragraphs: [
      'I build and architect scalable enterprise applications consistent with industry standards using .NET, Angular, and other technologies. I thrive on turning ideas into seamless, functional realities.'
    ],
    footer: {
        icon: 'hello',
    },
};

const about = {
    id: 'about',
    header: {
        icon: 'material-symbols:person',
        title: 'About',
    },
    paragraphs: [
        `I am a Software Engineer with currently ${yearsOfExperience} years of professional experience in (Full-Stack) Software Development. My interest in coding started about ${yearsOfInterest} years ago, first I started modding games, then I started building websites. I loved that I could bring my own ideas to life with my own coding.`,
        'Now that I made software development my professional career, I have had the privilege of working on many projects that involved: building web applications, building desktop applications, creating integrations between systems,...',
        'My main focus these days is writing clean code, by applying the SOLID principles. I love to challenge myself by designing, and providing future proof, well written, and well tested solutions, by practicing Domain-Driven Design for example. My mission is to architect solutions that not only meet but exceed expectations.',
        'Outside software development I also like game development. My latest game dev project was an UI mod for the game Valheim that I made during my free time in 2021, it currently has more than 10000 unique downloads.',
        'Besides coding, I am really fascinated by our history. I love to travel around Europe to learn more about our history.',
    ],
    footer: {
        icon: 'programming',
    },
};

const expertise = {
    id: 'expertise',
    header: {
        icon: 'material-symbols:psychology',
        title: 'Expertise',
    },
    items: [
        {
            header: {
                icon: 'flat-color-icons:template',
                title: 'Web applications',
            },
            paragraphs: [
                'Creating high-quality,  user-friendly, and scalable web applications using .NET as the backend / server solution and Angular (or Svelte) as the frontend client solution.',
            ],
            skills: [
                { label: '.NET', icon: 'logos:dotnet' },
                { label: 'C#', icon: 'logos:c-sharp' },
                { label: 'Angular', icon: 'logos:angular-icon' },
                { label: 'Svelte', icon: 'logos:svelte-icon' },
                { label: 'TypeScript', icon: 'logos:typescript-icon' },
                { label: 'Material Design', icon: 'mdi:material-design' },
                { label: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
            ],
        },
        {
            header: {
                icon: 'flat-color-icons:services',
                title: 'Software architecture',
            },
            paragraphs: [ 
            'Designing enterprise applications using well-known, and proven software architecture guidelines like Clean Architecture and Domain-Driven Design. Also creating integrations with other systems by using an event-driven approach.',
            ],
            skills: [
            { label: '.NET', icon: 'logos:dotnet' },
            { label: 'C#', icon: 'logos:c-sharp' },
            { label: 'RabbitMQ',icon: 'logos:rabbitmq-icon' },
            ],
        },
        {
            header: {
                icon: 'flat-color-icons:view-details',
                title: 'Static websites',
            },
            paragraphs: [ 
            'Creating beautiful static websites optimized for performance and accessibility using Astro.',
            '(This website has been built with Astro)'
            ],
            skills: [
            { label: 'Astro', icon: 'astro' },
            { label: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
            ],
        },
        {
            header: {
                icon: 'flat-color-icons:support',
                title: 'Desktop applications',
            },
            paragraphs: [
            'Creating desktop applications using WPF with the MVVM pattern, or converting web applications into desktop applications using Electron.',
            ],
            skills: [
            { label: '.NET', icon: 'logos:dotnet' },
            { label: 'C#', icon: 'logos:c-sharp' },
            { label: 'Electron', icon: 'logos:electron' },
            ],
        },
    ],
    footer: {
        icon: 'web_devices',
    },
};

const technologies = {
    id:'technologies',
    header: {
        icon: 'material-symbols:satellite-alt',
        title: 'Technologies',
    },
    items: [
        {
            header: {
                icon: 'mdi:code-braces',
                title: 'Languages',
            },
            skills: [
                { label: 'C#', icon: 'logos:c-sharp', url: 'https://learn.microsoft.com/dotnet/csharp/' },
                { label: 'TypeScript', icon: 'logos:typescript-icon', url: 'https://www.typescriptlang.org/' },
                { label: 'JavaScript', icon: 'logos:javascript', url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
                { label: 'HTML', icon: 'logos:html-5', url: 'https://developer.mozilla.org/docs/Web/HTML' },
                { label: 'CSS', icon: 'logos:css-3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                { label: 'SASS', icon: 'logos:sass', url: 'https://sass-lang.com/' },
                // { label: 'Java', icon: 'logos:java', url: 'https://www.java.com/' },
            ]
        },
        {
            header: {
                icon: 'mdi:application-braces',
                title: 'Frameworks',
            },
            skills: [
                { label: '.NET', icon: 'logos:dotnet', url: 'https://dotnet.microsoft.com/' },
                { label: 'Node.js', icon: 'logos:nodejs-icon', url: 'https://nodejs.org/' },
                { label: 'Angular', icon: 'logos:angular-icon', url: 'https://angular.io/' },
                { label: 'Vue', icon: 'logos:vue', url: 'https://vuejs.org/' },
                { label: 'Svelte', icon: 'logos:svelte-icon', url: 'https://svelte.dev/' },
                { label: 'Lit', icon: 'logos:lit-icon', url: 'https://lit.dev/' },
                { label: 'Astro', icon: 'astro', url: 'https://astro.build/' },
                { label: 'Material Design', icon: 'mdi:material-design', url: 'https://material.io/' },
                { label: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', url: 'https://tailwindcss.com/' },
                { label: 'Electron', icon: 'logos:electron', url: 'https://www.electronjs.org/' },
                // { label: 'Android', icon: 'logos:android-icon', url: 'https://www.android.com/' },
            ]
        },
        {
            header: {
                icon: 'mdi:tools',
                title: 'Tools',
            },
            skills: [
                { label: 'Rider', icon: 'logos:rider', url: 'https://www.jetbrains.com/rider/' },
                { label: 'Visual Studio', icon: 'logos:visual-studio', url: 'https://visualstudio.microsoft.com/' },
                { label: 'Visual Studio Code', icon: 'logos:visual-studio-code', url: 'https://code.visualstudio.com/' },
                { label: 'Vite', icon: 'logos:vitejs', url: 'https://vitejs.dev/' },      
                { label: 'SQL Server', icon: 'devicon:microsoftsqlserver', url: 'https://www.microsoft.com/sql-server/' },
                { label: 'PostgreSQL', icon: 'logos:postgresql', url: 'https://www.postgresql.org/' },
                { label: 'MongoDB', icon: 'logos:mongodb-icon', url: 'https://www.mongodb.com/' },
                { label: 'RabbitMQ', icon: 'logos:rabbitmq-icon', url: 'https://www.rabbitmq.com/' },
                { label: 'Docker', icon: 'logos:docker-icon', url: 'https://www.docker.com/' },
                { label: 'Azure DevOps', icon: 'devicon:azuredevops', url: 'https://azure.microsoft.com/products/devops' },
                { label: 'GIT', icon: 'logos:git-icon', url: 'https://git-scm.com/' },
                { label: 'Firebase', icon: 'logos:firebase', url: 'https://firebase.google.com/' },
                { label: 'GCP', icon: 'logos:google-cloud', url: 'https://cloud.google.com/' },
                { label: 'Azure', icon: 'logos:azure-icon', url: 'https://azure.microsoft.com/' },
                { label: 'AWS', icon: 'logos:aws', url: 'https://aws.amazon.com/' },
                { label: 'Figma', icon: 'logos:figma', url: 'https://www.figma.com/' },
                // { label: 'Android Studio    ', icon: 'devicon:androidstudio', url: 'https://developer.android.com/studio' },
            ]
        },
    ],
    footer: {
        icon: 'software_engineer',
    },
}

const projects = {
    id: 'projects',
    header: {
        icon: 'material-symbols:rocket-launch',
        title: 'Projects',
    },
    items: [
        {
            header: {
                title: 'Field Service',
            },
            paragraphs: [
                'Web application built for the field service team at <a class="link" href="https://www.wilms.be/" target="_blank">Wilms</a> to enter and follow up service orders, which contains repairs and installations for B2C customers.',
                'It is built using .NET and Angular, the backend is based on Clean Architecture and Domain-Driven Design. Integrates with the ERP system through RabbitMQ, Azure AD as identity platform, and with the planningstool through REST.',
            ],
            image: {
                src: fieldServiceImage,
                alt: 'Field Service',
                aspectRatio: '16:9',
                width: 768,
                widths: [400, 768],
                sizes: '(max-width: 768px) 100vw, 432px',
            },
            skills: [
                { label: '.NET', icon: 'logos:dotnet' },
                { label: 'C#', icon: 'logos:c-sharp' },
                { label: 'Angular', icon: 'logos:angular-icon' },
                { label: 'TypeScript', icon: 'logos:typescript-icon' },
                { label: 'Material Design', icon: 'mdi:material-design' },
                { label: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
                { label: 'SQL Server', icon: 'devicon:microsoftsqlserver' },
                { label: 'RabbitMQ', icon: 'logos:rabbitmq-icon' },
            ]
        },
        {
            header: {
                title: 'Customer Portal',
            },
            paragraphs: [
                'Web application / portal built for the B2B customers of <a class="link" href="https://www.wilms.be/" target="_blank">Wilms</a>, they use it to enter quotes and orders for their end customer. It launched in 2021, and now <b>most of the orders flow through the customer portal</b>.',
                'It is built using .NET and Angular, the backend is based on Clean Architecture and Domain-Driven Design. Integrates with the ERP system through SOAP, and with the configurator through REST.',
            ],
            image: {
                src: customerPortalImage,
                alt: 'Customer Portal',
                aspectRatio: '16:9',
                width: 768,
                widths: [400, 768],
                sizes: '(max-width: 768px) 100vw, 432px',
            },
            skills: [
                { label: '.NET', icon: 'logos:dotnet' },
                { label: 'C#', icon: 'logos:c-sharp' },
                { label: 'Angular', icon: 'logos:angular-icon' },
                { label: 'TypeScript', icon: 'logos:typescript-icon' },
                { label: 'Material Design', icon: 'mdi:material-design' },
                { label: 'SQL Server', icon: 'devicon:microsoftsqlserver' },
            ]
        },
        {
            header: {
                title: 'Portfolio',
            },
            paragraphs: [
                'I have built this portfolio website completely from scratch during my free time.',
                'It is built with <a class="link" href="https://astro.build/" target="_blank">Astro</a> (web framework), it is a great fit for a static website like this. I have also used <a class="link" href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> for easy styling, and <a class="link" href="https://motion.dev/" target="_blank">Motion One</a> for easy animations.',
                'Automatically built and published to <a class="link" href="https://pages.github.com/" target="_blank">GitHub Pages</a> with a <a class="link" href="https://github.com/features/actions" target="_blank">GitHub Actions</a> workflow.',
                'The source code is available on <a class="link" href="https://github.com/Loewie/portfolio" target="_blank">GitHub</a>, any aspiring developer can use it as a reference or template for their portfolio / personal website <b>with attribution</b>.  I have made the content of the website easy configurable through a config file, as well as the website theme and colors.',
                'More features will be added over time.',
            ],
            image: {
                src: portfolioLightImage,
                alt: 'Portfolio',
                aspectRatio: '16:9',
                width: 768,
                widths: [400, 768],
                sizes: '(max-width: 768px) 100vw, 432px',
            },
            darkImage: {
                src: portfolioDarkImage,
                alt: 'Portfolio',
                aspectRatio: '16:9',
                width: 768,
                widths: [400, 768],
                sizes: '(max-width: 768px) 100vw, 432px',
            },
            skills: [
                { label: 'Astro', icon: 'astro' },
                { label: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
                { label: 'TypeScript', icon: 'logos:typescript-icon' },
            ],
            links: {
                page: SITE,
                sourceCode: 'https://github.com/Loewie/portfolio',
            },
        },
        {
            header: {
                title: 'Valheim UI mod',
            },
            paragraphs: [
                'UI mod for the game <a class="link" href="https://www.valheimgame.com/" target="_blank">Valheim</a>, it displays the current day and / or time in the HUD of the game. It has a lot of customization settings on how you want to display the day / time.',
                'It is built using .NET during my free time in 2021, and it currently has <b>more than 10000 unique downloads</b>.'
            ],
            image: {
                src: 'https://staticdelivery.nexusmods.com/mods/3667/images/861/861-1617645321-1646169241.jpeg',
                alt: 'Valheim UI mod',
                aspectRatio: '16:9',
                width: 768,
                widths: [400, 768],
                height: 356,
                sizes: '(max-width: 768px) 100vw, 432px',
            },
            skills: [
                { label: 'Unity', icon: 'logos:unity' },
                { label: '.NET', icon: 'logos:dotnet' },
                { label: 'C#', icon: 'logos:c-sharp' },
            ],
            links: {
                page: 'https://www.nexusmods.com/valheim/mods/861',
                sourceCode: 'https://github.com/OryxenMods/Oryxen.Valheim.UI.DisplayDayTime',
            },
        } 
    ],
    footer: {
        icon: 'web_development',
    },
};

const contact = {
    id: 'contact',
    header: {
        icon: 'material-symbols:contact-support',
        title: 'Contact',
    },
    socials,
    footer: {
        icon: 'dreamer',
        iconClass: 'transform -scale-x-100',
    },
};

const footer = {
    paragraphs: [
        'Created by Laurens Sauvillers. Built with <a class="link" href="https://astro.build/" target="_blank">Astro 🚀</a>, <a class="link" href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> (for easy styling), and <a class="link" href="https://motion.dev/" target="_blank">Motion One</a> (for easy animations). Illustrations by <a class="link" href="https://undraw.co/" target="_blank">unDraw</a>, and icons by <a class="link" href="https://fonts.google.com/icons" target="_blank">Google</a>. The font is Inter by <a class="link" href="https://rsms.me/inter/" target="_blank">Rasmus</a>. Source code is available on <a class="link" href="https://github.com/Loewie/portfolio" target="_blank">GitHub</a>, give it a star if you like it!',
    ],
}

const layout = {
    head,
    header: {
        navItems,
        socials,
    },
    sidenav: {
        navItems,
    },
    sidebar: {
        socials,
    },
    footer,
};

export const INDEX = {
    layout,
    hero,
    about,
    expertise,
    technologies,
    projects,
    contact,
};

export const NOT_FOUND = {
    layout: {
        ...layout,
        head: {
            ...layout.head,
            title: 'Page not found - ' + name,
        },
    },
    id: 'not-found',
    title: '404',
    subtitle: 'Page not found',
    footer: {
        icon: 'dreamer',
        iconClass: 'transform -scale-x-100',
    },
    arrowLeftIcon: 'material-symbols:arrow-back',
    arrowBottomIcon: 'material-symbols:arrow-downward',
    navTitle: 'Are you looking for any of these?',
    navItems,
};
