import React from 'react';

const MondayComPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 py-8 md:px-6 lg:px-8 bg-card shadow-sm mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3 font-playfair leading-tight">
            The Ultimate Guide to monday.com — Features, Use Cases & Best Practices
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Work smart, not hard — how monday.com can transform the way your team collaborates.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Introduction</h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            In today’s fast-paced world, teams often struggle with scattered tools, unclear workflows, and shifting priorities.
            Having a <strong className="text-primary">single platform</strong> to manage everything makes a big difference. That’s what
            <strong className="text-primary">monday.com</strong> provides — a flexible, visual, and powerful <strong className="text-primary">Work OS</strong>
            (Work Operating System) that helps teams plan, collaborate, and execute projects with clarity.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">This blog will cover:</p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>What monday.com is</li>
            <li>Key features and benefits</li>
            <li>Use cases and real-world examples</li>
            <li>Pros and cons</li>
            <li>Best practices and tips</li>
            <li>Latest updates and future roadmap</li>
            <li>Comparisons with alternatives</li>
            <li>How to get started</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">What Is monday.com?</h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            monday.com is a <strong className="text-primary">cloud-based work management platform</strong> that allows teams to design
            custom workflows without coding. It’s not just a project management tool — it’s a platform where you can
            build processes for <strong className="text-primary">marketing, sales, HR, operations, and more</strong>.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">Highlights:</p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>Originated in 2012 (initially called <em>dapulse</em>).</li>
            <li>Rebranded to monday.com, now publicly traded.</li>
            <li>Offers multiple views (Kanban, calendar, timeline, Gantt, dashboards).</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Key Features of monday.com</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">Here’s why monday.com stands out among project management tools:</p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li><strong className="text-primary">Boards & Items</strong>: Create boards for projects, with customizable columns like status, deadlines, people, and more.</li>
            <li><strong className="text-primary">Multiple Views</strong>: Visualize your data in Kanban, timeline, Gantt chart, or calendar formats.</li>
            <li><strong className="text-primary">Dashboards & Reporting</strong>: Combine multiple boards to track KPIs with widgets, charts, and reports.</li>
            <li><strong className="text-primary">Templates</strong>: Start faster with pre-built templates for project management, marketing, HR, and more.</li>
            <li><strong className="text-primary">Integrations</strong>: Connect seamlessly with tools like Slack, Google Drive, Outlook, and Zoom.</li>
            <li><strong className="text-primary">Automations</strong>: Eliminate repetitive work with simple “if this, then that” automation rules.</li>
            <li><strong className="text-primary">Scalability</strong>: Designed for both small teams and large enterprises with governance and permissions.</li>
            <li><strong className="text-primary">Community & Support</strong>: Access forums, tutorials, and monday Academy courses.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">monday.com Use Cases</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">monday.com adapts to almost any workflow. Popular use cases include:</p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li><strong className="text-primary">Marketing</strong>: Content calendars, campaign tracking, and creative workflows.</li>
            <li><strong className="text-primary">Project Management</strong>: Sprint planning, task management, and progress visualization.</li>
            <li><strong className="text-primary">Sales & CRM</strong>: Track leads, pipelines, and follow-ups in one board.</li>
            <li><strong className="text-primary">HR & Recruiting</strong>: Onboarding checklists, hiring pipelines, and employee training.</li>
            <li><strong className="text-primary">Operations</strong>: Procurement, approvals, and vendor management.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Pros & Cons of monday.com</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-3">Pros:</h3>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>Extremely flexible and customizable.</li>
            <li>Clean, user-friendly interface.</li>
            <li>Large template and integration library.</li>
            <li>Scales well for teams and enterprises.</li>
          </ul>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-3">Cons:</h3>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>Advanced customization may have a learning curve.</li>
            <li>Pricing can be high for larger teams.</li>
            <li>Overly complex workflows can become hard to maintain.</li>
            <li>Some integrations and automations have limitations.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Best Practices for Using monday.com</h2>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>Start with a template and expand gradually.</li>
            <li>Use clear naming conventions for boards and tasks.</li>
            <li>Avoid dashboard clutter — track only key KPIs.</li>
            <li>Test automations before rolling them out.</li>
            <li>Archive outdated boards regularly.</li>
            <li>Provide training and set clear permissions for teams.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Future of monday.com</h2>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li><strong className="text-primary">AI-powered workflows</strong>: monday.com is adding automation and AI-driven suggestions.</li>
            <li><strong className="text-primary">Partner program expansion</strong>: With AI and service-focused specializations.</li>
            <li><strong className="text-primary">Multi-product vision</strong>: Evolving from project management into a full Work OS.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">monday.com vs Alternatives</h2>
          <div className="overflow-x-auto rounded-lg shadow-md border border-border">
            <table className="w-full text-left table-auto border-collapse">
              <thead>
                <tr className="bg-muted/40 border-b border-border">
                  <th className="p-4 text-sm font-semibold text-foreground">Tool</th>
                  <th className="p-4 text-sm font-semibold text-foreground">Strengths</th>
                  <th className="p-4 text-sm font-semibold text-foreground">Weakness vs monday.com</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-200">
                  <td className="p-4 text-base">Asana</td>
                  <td className="p-4 text-base">Excellent task management</td>
                  <td className="p-4 text-base text-muted-foreground">Less customizable workflows</td>
                </tr>
                <tr className="border-b border-border-200">
                  <td className="p-4 text-base">Trello</td>
                  <td className="p-4 text-base">Easy, visual Kanban boards</td>
                  <td className="p-4 text-base text-muted-foreground">Limited reporting and scaling</td>
                </tr>
                <tr className="border-b border-border-200">
                  <td className="p-4 text-base">ClickUp</td>
                  <td className="p-4 text-base">Feature-rich and flexible</td>
                  <td className="p-4 text-base text-muted-foreground">Overwhelming for beginners</td>
                </tr>
                <tr className="border-b border-border-200">
                  <td className="p-4 text-base">Jira</td>
                  <td className="p-4 text-base">Great for software development teams</td>
                  <td className="p-4 text-base text-muted-foreground">Less user-friendly for business</td>
                </tr>
                <tr>
                  <td className="p-4 text-base">Airtable</td>
                  <td className="p-4 text-base">Strong in data management (spreadsheet)</td>
                  <td className="p-4 text-base text-muted-foreground">Less of a full Work OS</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">How to Get Started with monday.com</h2>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>Sign up for a free trial at <a href="https://monday.com/" className="text-blue-500 hover:underline">monday.com</a>.</li>
            <li>Pick a template based on your workflow.</li>
            <li>Create your first board with tasks and deadlines.</li>
            <li>Explore different views (Kanban, timeline, Gantt).</li>
            <li>Add simple automations and integrations.</li>
            <li>Build a dashboard for team visibility.</li>
            <li>Invite your team and start collaborating.</li>
          </ul>
        </section>
      </main>

      <footer className="mt-12 py-8 text-center bg-card text-muted-foreground shadow-inner">
        <p className="text-sm">&copy; {new Date().getFullYear()} Axious Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MondayComPage;
