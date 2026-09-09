import { createFileRoute, Link } from "@tanstack/react-router";
import { qaTopics } from "../data/qa-topics";

export const Route = createFileRoute("/syllabus")({
  head: () => ({
    meta: [
      { title: "QA Syllabus — QA Learning Hub" },
      {
        name: "description",
        content:
          "Browse the complete QA syllabus. Learn software testing topics from manual testing to API testing with simple explanations.",
      },
      { property: "og:title", content: "QA Syllabus — QA Learning Hub" },
      {
        property: "og:description",
        content:
          "Browse the complete QA syllabus. Learn software testing topics from manual testing to API testing with simple explanations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SyllabusPage,
});

function SyllabusPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            QA Learning Syllabus
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Choose a topic to start learning. Each lesson is written in simple English with a practical example.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {qaTopics.map((topic, index) => (
            <Link
              key={topic.id}
              to="/topic/$topicId"
              params={{ topicId: topic.id }}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:border-primary/50 hover:bg-accent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary">
                  {index + 1}
                </span>
                <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
              <h2 className="mt-4 text-lg font-semibold leading-tight">{topic.title}</h2>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{topic.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
