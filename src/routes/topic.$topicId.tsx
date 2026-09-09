import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getTopicById, getTopicIndexById, qaTopics } from "../data/qa-topics";
import { getQuizByTopicId } from "../data/qa-quizzes";
import { TopicQuiz } from "../components/TopicQuiz";

export const Route = createFileRoute("/topic/$topicId")({
  loader: async ({ params }) => {
    const topic = getTopicById(params.topicId);
    if (!topic) {
      throw notFound();
    }
    return { topic };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.topic?.title ?? "Topic"} — QA Learning Hub` },
      {
        name: "description",
        content: `Learn ${loaderData?.topic?.title ?? "QA topic"} with simple explanations and a real-world example.`,
      },
      { property: "og:title", content: `${loaderData?.topic?.title ?? "Topic"} — QA Learning Hub` },
      {
        property: "og:description",
        content: `Learn ${loaderData?.topic?.title ?? "QA topic"} with simple explanations and a real-world example.`,
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  notFoundComponent: TopicNotFound,
  component: TopicPage,
});

function TopicPage() {
  const { topic } = Route.useLoaderData();
  const currentIndex = getTopicIndexById(topic.id);
  const previousTopic = currentIndex > 0 ? qaTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < qaTopics.length - 1 ? qaTopics[currentIndex + 1] : null;

  return (
    <div className="min-h-[calc(100vh-8rem)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/syllabus"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          Back to Syllabus
        </Link>

        <article className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10">
          <header className="border-b border-border pb-6">
            <span className="text-sm font-medium text-primary">Topic {currentIndex + 1} of {qaTopics.length}</span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
              {topic.title}
            </h1>
          </header>

          <div className="mt-8 space-y-6">
            {topic.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-card-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-muted/40 p-6">
            <h2 className="text-lg font-semibold text-foreground">{topic.example.title}</h2>
            <ul className="mt-4 space-y-3">
              {topic.example.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <TopicQuiz key={topic.id} topicId={topic.id} questions={getQuizByTopicId(topic.id)} />


        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {previousTopic ? (
            <Link
              to="/topic/$topicId"
              params={{ topicId: previousTopic.id }}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              {previousTopic.title}
            </Link>
          ) : (
            <span />
          )}
          {nextTopic ? (
            <Link
              to="/topic/$topicId"
              params={{ topicId: nextTopic.id }}
              className="inline-flex items-center justify-end gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {nextTopic.title}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
}

function TopicNotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold text-foreground">Topic not found</h1>
      <p className="mt-2 text-muted-foreground">The topic you are looking for does not exist.</p>
      <Link
        to="/syllabus"
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Back to Syllabus
      </Link>
    </div>
  );
}
