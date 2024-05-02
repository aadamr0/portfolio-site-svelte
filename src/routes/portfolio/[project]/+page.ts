import projects from '$lib/projects.js'

export async function load({ params }) {
    const { project } = params
    const projectData = projects.find(p => p.slug === project)
    return projectData ? { project: projectData } : 
    {
        project: {
            title: 'Nothing to see there, sorry',
            mediaUrl: '/',
            description: 'Go back home to view my portfolio',
            links: [
                {label: 'GitHub', url: '/'},
                {label: 'Demo', url: '/'}
            ],
            techStack: "Tech stack, goes, here",
            slug: 'template',
        }
    }
}