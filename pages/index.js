import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';




export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hello Folks, I’m Nathaniel Louis Tisuela
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a developer, writer, and creator. I work as the Head of Developer
          Relations at Vercel. You’ve found my personal slice of the internet
          –&nbsp;
          <Link href="/guestbook">
            <a>sign my guestbook</a>
          </Link>
          {" while you're here or "}
          <Link href="/about">
            <a>learn more about me.</a>
          </Link>
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>
        <BlogPost
          title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
          summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
          slug="style-guides-component-libraries-design-systems"
        />
        <BlogPost
          title="How Stripe Designs Beautiful Websites"
          summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
          slug="how-stripe-designs-beautiful-websites"
        />
        <BlogPost
          title="Creating a Monorepo with Lerna & Yarn Workspaces"
          summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
          slug="monorepo-lerna-yarn-workspaces"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Courses
        </h3>
        <ProjectCard
          title="React 2025"
          description="Build and deploy a modern Jamstack application using the most popular open-source software."
          href="https://react2025.com/"
          icon="react2025"
        />
        <ProjectCard
          title="Learn Next.js"
          description="A free video course for building static and server-side rendered applications with Next.js and React."
          href="https://masteringnextjs.com/"
          icon="nextjs"
        />
        <Timeline />
        <Subscribe />
      </div>
    </Container>
  );
}
