import ProjectPage from '../components/ProjectPage';

const project = {
  title: "DreamCube:",
  subtitle: "Extended reality platform for immersive storytelling. An immersive Spectacle that’s like walking into a video game.",
  vidimg: "video",
  video: "https://firebasestorage.googleapis.com/v0/b/lm-personal-site.appspot.com/o/introducing_dreamcube%20(720p).mp4?alt=media&token=89c00cd5-8608-4b40-a90b-95e22286b6cf",
  infosection: [
    {
      style: "half",
      title: "What if you could train with Manchester United?",
      p: `<p>
        Collaborating with Harves Entertainment and Manchester United Football Club, the Dream Cube offers an extended reality, physical-digital platform for unprecedented immersive experiences. With seamless interactivity and shared engagement, the DreamCube delivers a new communal virtual reality.
        </p>`,
      img: "/assets/dreamcube/DreamCubeFull.jpeg"
    },
    {
      style: "half",
      title: "The Challenge:",
      p: `<p>
        Art, especially gallery art and museum art, can be hard to digest and alienating for children. The goal of Art Investigator is to make museum art understandable, relatable, and fun for children at an early reading age (7-11 years old). The challenge was creating a learning based app that grows emotional intelligence, relates children to the artist, and creates interaction points for parents and their children without overwhelming the exhibit itself.<br/><br/>Working with Early Childhood Education Teacher, Rebecca Sacramone, and K-12 Education Technology Professional of The Cleveland Institute of Music, Heather Young Mandujano, a lesson plan focusing on Nick Cave, his wide range of artistic mediums, and the related emotional intelligence of vulnerability was developed. Working with Adventure Science Center designer Jim Savelyev, interaction points for parents and their children were constructed.
      </p>`,
      img: "/assets/dreamcube/DreamCubePeople.jpeg"
    },
    {
      style: "half",
      title: "What I Contributed:",
      p: `<p>
        The Dream Cube experience lives at the intersection of extraordinary visual immersion and shared group fun. In current implementation, Manchester United FC&apos;s “Theatre of Dreams” experience center in Beijing offers 16 DreamCubes where guests dribble and shoot like pros. The center opened to around-the-block lines and rave reviews.
        <br /><br />
        In collaboration with Unity game engineers, I developed a React.js app to begin, progress, and engage with game play in the cube. This touch screen board connected with the Game Center to assign players to one of several Dream Cubes. Once players engage with the board to begin their game, they are able to choose from multiple drills and activities at various difficulties to play in the cube. During play, other players are able to watch the live stats of active game play. When the game timer comes to a close, players are able to see a session scoreboard and experience closing media. 
      </p>`,
      img: "/assets/dreamcube/DreamCubePlaying.jpeg"
    },
    {
      style: "img",
      img: "/assets/dreamcube/hitme_dreamcube.gif"
    },
    {
      style: "list",
      title: "The Tech Stack:",
      p:`<ul style="list-style-type:disc">
        <li class="text-base">React.js</li>
        <br />
        <li class="text-base">React Context API</li>
        <br />
        <li class="text-base">React Hooks</li>
        <br />
        <li class="text-base">React Testing Library</li>
        <br />
        <li class="text-base">Sass</li>
        <br />
        <li class="text-base">Prettier</li>
        <br />
        <li class="text-base">ESLint</li>
        <br />
        <li class="text-base">Reactstrap/Bootstrap</li>
        </ul>`,
      img: "/assets/dreamcube/DreamCubeCloserScreen.jpeg"
    },
    {
      style: "img",
      img: "/assets/dreamcube/DreamCubeCameron.png"
    }
  ]
}

export default function DreamCube() {
  return <ProjectPage project={project} />
}