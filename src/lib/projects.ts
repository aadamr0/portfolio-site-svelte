interface Project {
    title: string;
    mediaType: 'video' | 'img';
    mediaUrl: string;
    description: string;
    links: {};
    techStack: string;
    slug: string;
}

const projects: Project[] = [
    {
        title: 'Template',
        mediaType: 'img',
        mediaUrl: '/',
        description: 'Description of project 1',
        links:{
                
            },
        techStack: "Tech stack, goes, here",
        slug: 'template',
    },
    {
        title: 'API - NC News',
        mediaType: 'img',
        mediaUrl: '/API-scrnprnt.png',
        description: 'A REST API build with Node.js, Express.js, and PSQL. Serves news articles and other data from different endpoints. Follow the links below to take a look - note that the hosting provider is a little slow, so the demo might take a moment to load.',
        links: {
                GitHub: 'https://github.com/aadamr0/nc-news-api',
                Demo: 'https://nc-news-api-ffu7.onrender.com/api'
            },
        techStack: "Node.js, JavaScript, PSQL, Express.js, Axios, ElephantSQL, Render",
        slug: 'nc-news-api',
    },
    {
        title: 'Web App - NC News',
        mediaType: 'video',
        mediaUrl: '/App-rcrdng.mov',
        description: 'A front-end web app build with React.js. Allows for user-friendly interaction with the NC News API. You can like and filter articles, and add & delete comments. Follow the links below to take a look - note that the hosting provider is a little slow, so the demo might take a moment to load.',
        links: {
                GitHub: 'https://github.com/aadamr0/nc_news_fe?tab=readme-ov-file',
                Demo: 'https://nc-news-adam.netlify.app/'
            },
        techStack: "React.js, Vite, JavaScript, HTML, CSS",
        slug: 'nc-news-app',
    },
    {
        title: 'Mobile App - Travelog',
        mediaType: 'video',
        mediaUrl: '/travelog-video.mov',
        description: 'A travel journal app built in 8 days, in a team of 6, using React Native and Expo (frontend), and Firebase (backend). Take a look at the GitHub below.',
        links: {
                GitHub: 'https://github.com/Koalaphant/TravelJournal?tab=readme-ov-file',
                Demo: ''
            },
        techStack: "React Native, Expo, Firebase",
        slug: 'travelog',
    },
    {
        title: 'Portfolio Website',
        mediaType: 'video',
        mediaUrl: '/portfolio-video.mov',
        description: 'You\'re on my portfolio site! Drop me a message and let me know what you think. Find my contact details at the bottom of the sidebar and on the homepage. Feedback is always appreciated.',
        links: {
                GitHub: '',
                Demo: ''
            },
        techStack: "SvelteKit, HTML, CSS, JavaScript",
        slug: 'portfolio-site',
    },
]

export default projects