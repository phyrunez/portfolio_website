import { Calendar, GraduationCap, HomeIcon, MailIcon, PhoneCall, User2 } from "lucide-react"

export const projectData = [
    {
        image: '/work/6.PNG',
        category: 'fullstack',
        name: 'Recipe Website',
        description: 'This typically serves as a platform where users can find, explore, and share a variety of recipes. A comprehensive collection of recipes, organized into categories such as cuisine type, or meal type.',
        link: 'https://recipe-blog-rmo0.onrender.com',
        github: 'https://github.com/phyrunez/recipe-blog'
    },
    {
        image: '/work/12.PNG',
        category: 'react js',
        name: 'Travel Forest Website',
        description: 'Provides a platform for users to explore, plan, and book various travel services. User-generated reviews and ratings for tours, helping travelers make informed decisions.',
        link: 'https://travel-forest.vercel.app/',
        github: 'https://github.com/phyrunez/travel-forest'
    },
    {
        image: '/work/11.PNG',
        category: 'next js',
        name: 'Farmplexus Website',
        description: 'A comprehensive online investment platform designed to help individuals and businesses manage their financial assets. The platform offers a wide range of tools and services.',
        link: 'https://investovilla.amstevehouse.com/projects/farmplexus',
        github: '/'
    },
    {
        image: '/work/9.PNG',
        category: 'react js',
        name: 'Myxeila Panel',
        description: 'Controlled interface used by administrators to manage, configure, and oversee various aspects of a property, whether it is related to real estate, or any other resource that requires management',
        link: 'https://myxeilla.netlify.app',
        github: 'https://github.com/phyrunez/myxeilla_dashboard'
    },
    {
        image: '/work/5.PNG',
        category: 'fullstack',
        name: 'Lagos Digital Onboarders Blog Website',
        description: 'The platform covers a wide range of topic. The blog offers insightful articles and tips written by blog authors or contributors, the content is designed to educate, inspire, and engage readers.',
        link: 'https://lagos-digital-onboarders-blog-app-clientt.vercel.app',
        github: 'https://github.com/phyrunez/Dodeel_Blog_App-Client'
    },
    {
        image: '/work/7.PNG',
        category: 'react js',
        name: 'LinkUs stores Website',
        description: 'This offers a comprehensive online shopping experience, carries a wide range of products supporting secure and streamlined online shopping, allowing users to add products to their cart.',
        link: 'https://linkus-market-assessment.onrender.com/shop',
        github: 'https://github.com/phyrunez/linkus-market_assessment'
    },
    {
        image: '/work/10.PNG',
        category: 'vue js',
        name: 'Scelloo Services',
        description: 'A static Vue.js financial dashboard designed to track payment statuses. This dashboard gives users a quick, visual overview of financial statuses without the need for dynamic backend processing.',
        link: 'https://scelloo-services.netlify.app/all_services',
        github: 'https://github.com/phyrunez/Scelloo_services'
    },
    {
        image: '/work/8.PNG',
        category: 'react js',
        name: 'Contact Website',
        description: 'This typically serves as a simple yet efficient platform to display contact information or allow users from anywhere in the world to reach out via a contact form.',
        link: 'https://contact-form-xvof.onrender.com',
        github: 'https://github.com/phyrunez/Contact-Form'
    },
]

export const infoData = [
    { icon: <User2 size={20} />, text: "Eze Ebuka Jude" },
    { icon: <PhoneCall size={20} />, text: "+2347051417492" },
    { icon: <MailIcon size={20} />, text: "ebukajudee302@gmail.com" },
    { icon: <Calendar size={20} />, text: "3rd August, 1998" },
    { icon: <GraduationCap size={20} />, text: "Bsc. Computer Science/Statistics" },
    { icon: <HomeIcon size={20} />, text: "8 Goloba Street Isolo, Lagos Nigeria" }
]

export const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'University Of Nigeria, Nsukka Nigeria',
                qualification: 'Bachelor of Science',
                years: '2017 - 2022'
            }
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Am-Steve inc.',
                role: 'Frontend Developer',
                years: 'May 2024'
            },
            {
                company: 'Smartflow Technologies Limited',
                role: 'Frontend Developer',
                years: 'May 2023 - August 2023'
            },
            {
                company: 'Afiari inc.',
                role: 'Frontend Developer',
                years: 'June 2022 - November 2022'
            },
        ]
    }
]

export const skillData = [
    {
        title: 'skills',
        data: [
            { 
                name: 'HTML , CSS',
                percent: '90%' 
            },
            { 
                name: 'JavaScript, ReactJs',
                percent: '80%' 
            },
            { 
                name: 'Git, GitHub' ,
                percent: '80%'
            },
            { 
                name: 'REST API, JSON',
                percent: '85%' 
            },
            { 
                name: 'TailwindCSS, Redux',
                percent: '78%'
            },
            { 
                name: 'NodeJs, Express',
                percent: '55%'
            },
            { 
                name: 'Database, MongoDB',
                percent: '50%' 
            },
            {
                name: 'Azure Devops, Jira, Slack',
                percent: '70%'
            }
        ]
    },
    {
        title: 'tools',
        data: [
            { 
                imgPath: '/about/vscode.svg' 
            },
            { 
                imgPath: '/about/figma.svg'
            },
        ]
    }
]

export const reviewData = [
    {
        avatar: '/reviews/face_man_1.png',
        name: 'Onuoha Chiemezie',
        job: "Software Engineer",
        review: '"He offered insightful recommendations, fixed issues quickly, and provided great support even after the project was completed. I look forward to working together again".'
    },
    {
        avatar: '/reviews/face_woman.png',
        name: 'Ezichi Gift',
        job: "UI/UX Designer",
        review: '"worked closely with us at Afiari Inc., understanding our needs and providing web solutions that was not only user-friendly but also scalable for future growth"'
    },
    {
        avatar: '/reviews/face_man_2.png',
        name: 'Ameachi Slyvester',
        job: "Devops Engineer",
        review: '"A self taught and motivated Developer always open to learning, paying attention to details in the course of development".'
    },
]