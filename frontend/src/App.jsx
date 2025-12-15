import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'
import ResumePage from './pages/ResumePage'
import TimelinePage from './pages/TimelinePage'
import ExperiencePage from './pages/ExperiencePage'
import AchievementsPage from './pages/AchievementsPage'
import CertificationsPage from './pages/CertificationsPage'
import TestimonialsPage from './pages/TestimonialsPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import FeaturedProjectsPage from './pages/FeaturedProjectsPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import WebProjectsPage from './pages/WebProjectsPage'
import MobileProjectsPage from './pages/MobileProjectsPage'
import AIMLProjectsPage from './pages/AIMLProjectsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="timeline" element={<TimelinePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/featured" element={<FeaturedProjectsPage />} />
        <Route path="projects/case-studies" element={<CaseStudiesPage />} />
        <Route path="projects/web" element={<WebProjectsPage />} />
        <Route path="projects/mobile" element={<MobileProjectsPage />} />
        <Route path="projects/ai-ml" element={<AIMLProjectsPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="achievements" element={<AchievementsPage />} />
        <Route path="certifications" element={<CertificationsPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
