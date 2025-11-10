import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar.jsx';
import { Footer } from './components/Footer.jsx';
import { ScrollTopButton } from './components/ScrollTopButton.jsx';
import { AnimationSettingsProvider } from './context/AnimationSettings.jsx';

// Pages
import Home from './app/page.jsx';
import AboutPage from './app/about/page.jsx';
import ContactPage from './app/contact/page.jsx';
import ProjectsPage from './app/projects/page.jsx';
import ResumePage from './app/resume/page.jsx';
import BlogPage from './app/blog/page.jsx';
import SingleBlogPage from './app/blog/[slug]/page.jsx';
import SingleProjectPage from './app/projects/[slug]/page.jsx';

function Layout({ children }) {
  return (
    <AnimationSettingsProvider>
      <div className="flex antialiased h-screen overflow-hidden">
        <Sidebar />
        <div className="lg:pl-2 flex-1 overflow-y-auto relative">
          <div aria-hidden className="pointer-events-none fixed inset-0 z-0 grid-bg" />
          <div className="flex max-w-6xl mx-auto h-full">
            <div className="flex-1 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:pl-8 lg:pr-4 md:pr-8">
              {children}
              <Footer />
            </div>
          </div>
          <ScrollTopButton />
        </div>
      </div>
    </AnimationSettingsProvider>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<SingleProjectPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<SingleBlogPage />} />
      </Routes>
    </Layout>
  );
}