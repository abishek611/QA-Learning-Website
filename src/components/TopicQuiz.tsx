import { useState } from "react";
import type { QuizQuestion } from "../data/qa-quizzes";

type TopicQuizProps = {
  topicId: string;
  questions: QuizQuestion[];
};

export function TopicQuiz({ topicId, questions }: TopicQuizProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (questions.length === 0) return null;

  const answeredCount = Object.keys(answers).length;
  const score = questions.reduce(
    (total, question, index) => (answers[index] === question.correctIndex ? total + 1 : total),
    0,
  );

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <section
      key={topicId}
      aria-labelledby="quiz-heading"
      className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="quiz-heading" className="text-xl font-bold text-card-foreground">
          Quick Quiz
        </h2>
        <span className="text-sm text-muted-foreground">
          {answeredCount} of {questions.length} answered
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Test what you just read. Choose one answer for each question.
      </p>

      <ol className="mt-6 space-y-7">
        {questions.map((question, qIndex) => {
          const selected = answers[qIndex];
          return (
            <li key={qIndex}>
              <fieldset>
                <legend className="text-base font-semibold text-card-foreground">
                  {qIndex + 1}. {question.question}
                </legend>
                <div className="mt-3 space-y-2">
                  {question.options.map((option, oIndex) => {
                    const isSelected = selected === oIndex;
                    const isCorrect = question.correctIndex === oIndex;
                    let stateClass =
                      "border-border bg-background hover:bg-muted";
                    if (submitted && isCorrect) {
                      stateClass = "border-primary bg-primary/10";
                    } else if (submitted && isSelected && !isCorrect) {
                      stateClass = "border-destructive bg-destructive/10";
                    } else if (isSelected) {
                      stateClass = "border-primary bg-accent";
                    }
                    return (
                      <label
                        key={oIndex}
                        className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm transition-colors ${stateClass}`}
                      >
                        <input
                          type="radio"
                          name={`${topicId}-q${qIndex}`}
                          checked={isSelected ?? false}
                          disabled={submitted}
                          onChange={() =>
                            setAnswers((prev) => ({ ...prev, [qIndex]: oIndex }))
                          }
                          className="mt-0.5 h-4 w-4 accent-primary"
                        />
                        <span className="leading-relaxed text-foreground">{option}</span>
                      </label>
                    );
                  })}
                </div>
                {submitted && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span
                      className={
                        selected === question.correctIndex
                          ? "font-semibold text-primary"
                          : "font-semibold text-destructive"
                      }
                    >
                      {selected === question.correctIndex ? "Correct. " : "Not quite. "}
                    </span>
                    {question.explanation}
                  </p>
                )}
              </fieldset>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {submitted ? (
          <>
            <p className="text-base font-semibold text-foreground">
              You scored {score} out of {questions.length}
              {score === questions.length ? " — perfect!" : ""}
            </p>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Try again
            </button>
          </>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">
              {answeredCount < questions.length
                ? "Answer every question to see your score."
                : "All set — check your answers."}
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              disabled={answeredCount < questions.length}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Check answers
            </button>
          </>
        )}
      </div>
    </section>
  );
}
