import AboutHero from '../components/about/AboutHero'
import MyStory from '../components/about/MyStory'
import EducationTimeline from '../components/about/EducationTimeline'
import TechnicalSkills from '../components/about/TechnicalSkills'
import FeaturedProjects from '../components/about/FeaturedProjects'
import Achievements from '../components/about/Achievements'
import BeyondCode from '../components/about/BeyondCode'
import ValuesPhilosophy from '../components/about/ValuesPhilosophy'

function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <MyStory />
      <EducationTimeline />
      <TechnicalSkills />
      <FeaturedProjects />
      <Achievements />
      <BeyondCode />
      <ValuesPhilosophy />
    </div>
  )
}

export default AboutPage
