import React from 'react';

const TrelloPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 py-8 md:px-6 lg:px-8 bg-card shadow-sm mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3 font-playfair leading-tight">
            Trello: Streamline Your Workflow with Visual Project Management
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Organize projects, boost team collaboration, and track progress effortlessly.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Introduction</h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Trello is a highly visual and intuitive project management tool that helps teams organize tasks,
            track progress, and collaborate effectively. Built around the Kanban methodology, Trello uses boards,
            lists, and cards to give you a clear overview of your work, whether it's a simple personal to-do list
            or a complex team project.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">This guide will cover:</p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>What Trello is and how it works</li>
            <li>Key features for effective project management</li>
            <li>Popular use cases and examples</li>
            <li>Pros and cons of using Trello</li>
            <li>Best practices for maximizing productivity</li>
            <li>Comparisons with other tools</li>
            <li>How to get started with Trello</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">What Is Trello?</h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            At its core, Trello is a web-based, Kanban-style list-making application. It’s designed to be simple
            yet powerful, allowing individuals and teams to create a visual representation of their workflow.
            Each project is a <strong className="text-primary">Board</strong>, which contains <strong className="text-primary">Lists</strong> (e.g., "To Do", "Doing", "Done"),
            and within each list are <strong className="text-primary">Cards</strong> representing individual tasks or items.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">Key Concepts:</p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li><strong className="text-primary">Boards</strong>: Represent projects or larger workflows.</li>
            <li><strong className="text-primary">Lists</strong>: Stages or categories within a board.</li>
            <li><strong className="text-primary">Cards</strong>: Individual tasks, ideas, or items with details, checklists, and attachments.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Key Features of Trello</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">Trello offers a range of features to support visual project management:</p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li><strong className="text-primary">Intuitive Drag-and-Drop Interface</strong>: Easily move cards between lists to update status.</li>
            <li><strong className="text-primary">Customizable Cards</strong>: Add descriptions, checklists, due dates, attachments, and custom fields.</li>
            <li><strong className="text-primary">Power-Ups</strong>: Extend functionality with integrations for Calendar, Google Drive, Slack, and more.</li>
            <li><strong className="text-primary">Automations (Butler)</strong>: Automate repetitive tasks and set up rule-based actions.</li>
            <li><strong className="text-primary">Templates</strong>: Start quickly with pre-built board templates for various workflows.</li>
            <li><strong className="text-primary">Mobile Apps</strong>: Manage your projects on the go with robust mobile applications.</li>
            <li><strong className="text-primary">Notifications</strong>: Stay updated on card activity, mentions, and due dates.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Trello Use Cases</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">Trello's flexibility makes it suitable for diverse applications:</p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li><strong className="text-primary">Content Calendars</strong>: Plan, manage, and track content creation from idea to publication.</li>
            <li><strong className="text-primary">Software Development</strong>: Agile sprint planning, bug tracking, and feature roadmapping.</li>
            <li><strong className="text-primary">Event Planning</strong>: Organize tasks, venues, vendors, and schedules for events.</li>
            <li><strong className="text-primary">Sales Pipelines</strong>: Track leads, manage follow-ups, and visualize sales stages.</li>
            <li><strong className="text-primary">Personal Productivity</strong>: Manage personal tasks, goals, and daily routines.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Pros & Cons of Trello</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-3">Pros:</h3>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>Highly visual and easy to understand.</li>
            <li>Quick to set up and get started.</li>
            <li>Excellent for small to medium-sized teams.</li>
            <li>Free tier offers substantial functionality.</li>
            <li>Extensive library of Power-Ups and integrations.</li>
          </ul>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-3">Cons:</h3>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>Can become cluttered with too many cards/lists on a single board.</li>
            <li>Limited advanced reporting features compared to more robust PM tools.</li>
            <li>Not ideal for highly complex projects requiring intricate dependencies.</li>
            <li>Can be less effective for large enterprise-level project portfolios.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Best Practices for Using Trello</h2>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>Keep boards focused on a single project or workflow.</li>
            <li>Use clear and concise names for boards, lists, and cards.</li>
            <li>Implement Butler automations to reduce manual effort.</li>
            <li>Regularly archive or delete completed cards and boards.</li>
            <li>Utilize labels and due dates for better organization and tracking.</li>
          </ul>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">Trello vs Alternatives</h2>
          <div className="overflow-x-auto rounded-lg shadow-md border border-border">
            <table className="w-full text-left table-auto border-collapse">
              <thead>
                <tr className="bg-muted/40 border-b border-border">
                  <th className="p-4 text-sm font-semibold text-foreground">Tool</th>
                  <th className="p-4 text-sm font-semibold text-foreground">Strengths</th>
                  <th className="p-4 text-sm font-semibold text-foreground">Weakness vs Trello</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-200">
                  <td className="p-4 text-base">Asana</td>
                  <td className="p-4 text-base">Robust task and project management, complex workflows</td>
                  <td className="p-4 text-base text-muted-foreground">Can be less visual, steeper learning curve</td>
                </tr>
                <tr className="border-b border-border-200">
                  <td className="p-4 text-base">Jira</td>
                  <td className="p-4 text-base">Powerful for software development, bug tracking</td>
                  <td className="p-4 text-base text-muted-foreground">Overly complex for non-dev teams, less intuitive UI</td>
                </tr>
                <tr className="border-b border-border-200">
                  <td className="p-4 text-base">monday.com</td>
                  <td className="p-4 text-base">Highly customizable Work OS, diverse use cases</td>
                  <td className="p-4 text-base text-muted-foreground">Can be more expensive, more setup required</td>
                </tr>
                <tr className="border-b border-border-200">
                  <td className="p-4 text-base">ClickUp</td>
                  <td className="p-4 text-base">All-in-one productivity tool, many features</td>
                  <td className="p-4 text-base text-muted-foreground">Feature overload, can feel overwhelming</td>
                </tr>
                <tr>
                  <td className="p-4 text-base">Airtable</td>
                  <td className="p-4 text-base">Database-spreadsheet hybrid, flexible data organization</td>
                  <td className="p-4 text-base text-muted-foreground">Less focused on traditional project workflows</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="my-8 border-t border-border" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 font-playfair">How to Get Started with Trello</h2>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
            <li>Sign up for a free account at <a href="https://trello.com/" className="text-blue-500 hover:underline">trello.com</a>.</li>
            <li>Create your first board and add a few lists (e.g., "To Do", "Doing", "Done").</li>
            <li>Add cards for your tasks and populate them with details.</li>
            <li>Invite your team members to collaborate on a board.</li>
            <li>Explore Power-Ups and Butler automations to enhance your workflow.</li>
          </ul>
        </section>
      </main>

      <footer className="mt-12 py-8 text-center bg-card text-muted-foreground shadow-inner">
        <p className="text-sm">&copy; {new Date().getFullYear()} Axious Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TrelloPage;
