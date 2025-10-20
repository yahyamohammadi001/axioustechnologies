import React from 'react';

const NotionPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 py-8 md:px-6 lg:px-8 bg-card shadow-sm mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3 font-playfair leading-tight">
            Notion for Project Managers: Advanced Tips and Tricks
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Unlock the full potential of Notion for your projects with advanced tips, database setups, and automation workflows.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Introduction</h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Notion has emerged as an incredibly versatile workspace for individuals and teams, particularly for project managers.
            Beyond basic note-taking, Notion's powerful database functionalities, customizable pages, and robust linking capabilities
            make it an ideal tool for managing complex projects, tracking tasks, and fostering seamless team collaboration.
            This guide dives into advanced tips and tricks to help project managers leverage Notion to its fullest potential.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">This guide will cover:</p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>Why Notion is great for project management</li>
            <li>Advanced database setups for projects</li>
            <li>Automation and integration workflows</li>
            <li>Tips for team collaboration</li>
            <li>Pros and cons for project managers</li>
            <li>Best practices for organization</li>
            <li>How to maximize your Notion workspace</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Why Notion for Project Management?</h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Notion stands out due to its flexible, block-based editor, allowing users to build highly customized pages
            that can serve as wikis, task lists, databases, and more. For project managers, this means the ability
            to create a single source of truth for all project-related information, from requirements and documentation
            to task tracking and team communication.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">Key advantages:</p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li><strong className="text-primary">All-in-one Workspace</strong>: Consolidate documents, tasks, wikis, and databases.</li>
            <li><strong className="text-primary">Highly Customizable</strong>: Tailor workflows to specific project needs without coding.</li>
            <li><strong className="text-primary">Flexible Databases</strong>: Manage tasks, sprints, and resources with various views (Table, Board, Calendar, Gallery).</li>
            <li><strong className="text-primary">Collaboration Features</strong>: Real-time editing, comments, and mentions for team communication.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Advanced Database Setups</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Notion's databases are the backbone of effective project management. Here are advanced setups:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li><strong className="text-primary">Linked Databases & Relations</strong>: Connect task databases to project databases, client databases, or team members to create a holistic view.</li>
            <li><strong className="text-primary">Rollups for Progress Tracking</strong>: Use rollups to display summarized data from related databases, such as showing the percentage of tasks completed for a project.</li>
            <li><strong className="text-primary">Formulas for Conditional Logic</strong>: Create complex formulas to automate status updates, calculate deadlines, or trigger reminders.</li>
            <li><strong className="text-primary">Templates within Databases</strong>: Set up card templates for recurring tasks or project types to standardize processes.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Automation and Integration Workflows</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Automate repetitive tasks and integrate Notion with other tools to enhance efficiency:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li><strong className="text-primary">Notion Automations</strong>: Set up rules to automatically change statuses, assign tasks, or send notifications based on triggers.</li>
            <li><strong className="text-primary">Zapier/Make.com Integrations</strong>: Connect Notion with tools like Slack, Google Calendar, or GitHub to sync data and automate cross-platform workflows.</li>
            <li><strong className="text-primary">API & Custom Integrations</strong>: For advanced users, Notion's API allows for highly customized integrations with internal systems.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Pros & Cons of Notion for PMs</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-3">Pros:</h3>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>Unparalleled flexibility and customization.</li>
            <li>Consolidates many tools into one workspace.</li>
            <li>Strong database capabilities for complex data management.</li>
            <li>Constantly evolving with new features and improvements.</li>
          </ul>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-3">Cons:</h3>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>Steep learning curve for advanced features.</li>
            <li>Can become overwhelming without clear organizational strategies.</li>
            <li>Offline mode is not fully robust.</li>
            <li>Performance can sometimes be slow with very large workspaces.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Best Practices for Organization</h2>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>Start with a clear hierarchy for pages and databases.</li>
            <li>Utilize templates to standardize recurring projects and tasks.</li>
            <li>Regularly review and archive old projects and tasks.</li>
            <li>Establish clear naming conventions for consistency.</li>
            <li>Leverage linked databases and relations to connect relevant information.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">How to Maximize Your Notion Workspace</h2>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>Explore Notion's official templates and community templates for inspiration.</li>
            <li>Experiment with different database views to find what works best for your project.</li>
            <li>Continuously refine your workflows as your projects evolve.</li>
            <li>Join Notion communities and forums to learn new tips and share ideas.</li>
            <li>Utilize Notion's API for advanced custom integrations if needed.</li>
          </ul>
        </section>
      </main>

      <footer className="mt-12 py-8 text-center bg-card text-muted-foreground shadow-inner">
        <p className="text-sm">&copy; {new Date().getFullYear()} Axious Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NotionPage;
