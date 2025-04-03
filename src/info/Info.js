import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(103, 151, 151)", "rgb(147, 87, 208)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "YOGENDRA",
    lastName: "MISHRA",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the INDIA'
        },
        {
            emoji: "💼",
            text: "Software Developer at HOMENETICS"
        },
        {
            emoji: "📧",
            text: "yogendramishrabetu@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://www.instagram.com/solelyfiend/?api=%E6%89%8B%E6%B8%B8%E8%AF%95%E7%8E%A9%E8%B5%9A%E4%BD%A3%E9%87%91%E7%9A%84%E5%B9%B3%E5%8F%B0%E3%80%90%E9%97%AE%EF%BC%9ABet0009.NET%E3%80%91.nstu&hl=zh-cn",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/gamerhub7",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/yogendra-mishra-/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Yogendra. I'm a Software Developer at Homemetics. I studied B.tech(Computer Science and Engineering) at Chandighar Group of Colleges, I enjoy long rides , and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'Tailwindcss', 'typescript'],
            exposedTo: ['nodejs', 'python', 'nextjs','expressjs','mysql','gsap']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'football',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://myphone-nine.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/gamerhub7", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "",
            source: "https://github.com/gamerhub7",
            image: mock2
        },
        {
            title: "Project 3",
            live: "",
            source: "https://github.com/gamerhub7",
            image: mock3
        },
        {
            title: "Project 4",
            live: "",
            source: "https://github.com/gamerhub7",
            image: mock4
        },
        {
            title: "Project 5",
            live: "",
            source: "https://github.com/gamerhub7",
            image: mock5
        }
    ]
}