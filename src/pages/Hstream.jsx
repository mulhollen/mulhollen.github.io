import ProjectPage from '../components/ProjectPage';


const project = {
  title: "hStream Store:",
  subtitle: "React update enabling B2B and B2C transactions of courses in continuing healthcare education. Utilizing headless CMS Znode, I worked as one of two React developers architecting and building the site over a four-month zero-to-release period.",
  vidimg: "video",
  video: "https://firebasestorage.googleapis.com/v0/b/lm-personal-site.appspot.com/o/StoreWalkThrough_sm.mp4?alt=media&token=1df0bdfe-cada-4f82-a491-29955843c86c",
  infosection: [
    {
      style: "half",
      title: "meet hStream Store 1.0",
      p: `<p>
        We had the opportunity to give users an up-to-date, intuitive, and responsive way to look for continuing healthcare education. Healthstream is a major provider for training for healthcare organizations throughout the United States. Our challenge was to build a product that would be instinctual for a group of existing users who do not often find themselves at the computer.
        <br /><br />
        Much like trying to find something to watch, switching between streaming service and streaming service, finding healthcare continuing education courses can be cumbersome and overwhelming when trying to make the right choice. We wanted to make sure our update made users feel empowered that they made a good choice.
      </p>`,
      img: "../../assets/hstream/OldStore.png"
    },
    {
      style: "half",
      title: "The Code:",
      p: `<p>
        The Project is a React App utilizing the React Context API and React Hooks. The base of the app is built to be a boilerplate for future React projects; including the Airbnb style guide, Eslint, and Prettier, Enzyme and Jest testing, and OAuth through an in-company service. 
        <br /><br />
        The app itself was built to focus on a desktop view, but allow a tablet or mobile experience; features not available in the previous version of the store. The components were designed to be reused throughout a component library and documented through Storybook.
        <br /><br />
        Collaborating with a senior contractor and back-end staff, we were able to rapidly build out an app that includes a variable shopping experience based on API held offerings, search with robust filtering, space for marketing to highlight content, and an authenticated in-app checkout experience.
        <br /><br />
        The app was launched March of 2020 with a condensed added sprint to allot for free courses so we could offer Covid-19 training content on launch.
      </p>`,
      img: "../../assets/hstream/CourseTabsLaptop.png"
    },
    {
      style: "list",
      title: "Lessons Learned:",
      p:`<ul style="list-style-type:disc">
        <li class="text-base">Creating streamlined components for reuse can only save you time to a point. Don’t sink your costs when it would be quicker to rewrite.</li>
        <br />
        <li class="text-base">Sometimes no one knows the answer to the ticket you’re assigned and not knowing how to solve something from the start is okay and happens to everyone.</li>
        <br />
        <li class="text-base">It’s really fun to make a product that makes things better for the user.</li>
        <br />
        <li class="text-base">Every "out of the box" CMS has a downside.</li>
        <br />
        <li class="text-base">React Context takes a tiny fraction of the time to learn in comparison to Redux - or maybe it was just much easier once you’ve used Redux. </li>   
      </ul>`,
      img: "../../assets/hstream/CovidBannerDesktop.png"
    },
    {
      style: "img",
      img: "/assets/hstream/CovidBannerDesktop.png"
    }
    // {
    // title: "The Tech Stack:",
    //  p:`<ul>
    //     <li>React</li>
    //     <li>React Context API</li>
    //     <li>React Hooks</li>
    //     <li>Sass</li>
    //     <li>Airbnb Styleguide</li>
    //     <li>Prettier</li>
    //     <li>ESLint</li>
    //     <li>Enzyme</li>
    //     <li>Jest</li>
    //     <li>Reactstrap</li>
    //     <li>Bootstrap</li>
    //     <li>Znode</li>
    //   </ul>`,
    //   img: "../../assets/hstream/CovidBannerDesktop.png"
    // },
  ]
}

export default function Hstream() {

  return (
   <ProjectPage project={project} />
  )
}
