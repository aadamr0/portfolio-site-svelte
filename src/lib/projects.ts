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
        title: 'NC News API',
        mediaType: 'img',
        mediaUrl: '/',
        description: 'Description of project the api',
        links: {
                GitHub: 'https://github.com/aadamr0/nc-news-api',
                Demo: 'https://nc-news-api-ffu7.onrender.com/api'
            },
        techStack: "Tech stack, goes, here",
        slug: 'nc-news-api',
    },
]

export default projects