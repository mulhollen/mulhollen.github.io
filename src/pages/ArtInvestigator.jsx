import ProjectPage from '../components/ProjectPage';

const project = {
  title: "Art Investigator:",
  subtitle: "Art Investigator is an accompaninment app for The Frist Museum's <i>Feat.</i> exhibit by Nick Cave. Focusing on building emotional intelligence, interest in art, and creating points of interaction for children ages 7 to 11 and their grown-up.",
  vidimg: "video",
  video: "https://firebasestorage.googleapis.com/v0/b/lm-personal-site.appspot.com/o/Art-Investigator-Vid.mp4?alt=media&token=c75b8964-e397-4c69-b8b8-862549f8b109",
  infosection: [
    {
      style: "half",
      title: "Meet Olivia and Michelle.",
      p: `<p>
        Olivia is a curious, intelligent, and outgoing second grader with a strong love of the arts. She learns best when she can relate to content. Olivia responds well to the addition of technology in static activities; to her, the added tech element makes the experience fun and engaging.<br/><br/>Michelle is a busy mother of two that likes to invest time into cultural activities with her kids on the weekend. She wants her kids to love to learn and strives to make education fun. It’s important for Michelle to create memorable experiences with her kids.
      </p>`,
      img: "/assets/ai/challenge.jpg"
    },
    {
      style: "half",
      title: "The Challenge:",
      p: `<p>
        Art, especially gallery art and museum art, can be hard to digest and alienating for children. The goal of Art Investigator is to make museum art understandable, relatable, and fun for children at an early reading age (7-11 years old). The challenge was creating a learning based app that grows emotional intelligence, relates children to the artist, and creates interaction points for parents and their children without overwhelming the exhibit itself.<br/><br/>Working with Early Childhood Education Teacher, Rebecca Sacramone, and K-12 Education Technology Professional of The Cleveland Institute of Music, Heather Young Mandujano, a lesson plan focusing on Nick Cave, his wide range of artistic mediums, and the related emotional intelligence of vulnerability was developed. Working with Adventure Science Center designer Jim Savelyev, interaction points for parents and their children were constructed.
      </p>`,
      img: "/assets/ai/soundsuit.jpg"
    },
    {
      style: "list",
      title: "User Focused Goals:",
      p:`<ul style="list-style-type:disc">
        <li class="text-base">Create an engaging and interactive way for the user to experience and understand art.</li>
        <br />
        <li class="text-base">Design a storybook style app that allows the user to be engaged in a linear way and not to feel like they are just reading the museum placards.</li>
        <br />
        <li class="text-base">Foster realitibly and interactibility for the user to feel like they are a part of the process using relatibility as a way to create solid foundations for learning and emotional intelligence.</li>
        <br />
        <li class="text-base">Build activities to engage users and eliminate monotony fatigue, allowing the user to focus on and digest the exhibit</li>
        <br />
        <li class="text-base">Produce genuine interaction points between primary users and their guardians that teach vocabulary, emotional intelligence, and art</li>
        </ul>`,
      img: "/assets/ai/search.jpg"
    }
    ,
    {
      style: "quote",
      title: "Olivia CANNOT stop talking about [Art Investigator]. She came into my bed last night and said she was so happy that she saw how someone else faced their fears. We got to have a great conversation about fears and power!",
      p: [

      ]
    },
    {
      style: "img",
      img: "/assets/ai/liv_buttonwall.jpg"
    }
  ]
}

export default function ArtInvestigator() {
  return <ProjectPage project={project} />
}