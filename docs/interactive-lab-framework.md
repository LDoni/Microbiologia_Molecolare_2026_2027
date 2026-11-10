# Interactive laboratory framework

The Quarto site includes a small reusable, browser-only interaction layer for future laboratory pages. It deliberately contains no scientific content, data, results, or answer keys.

## Available building blocks

- `data-lab-step="unique-step-id"` on a Quarto div creates a completion-tracked step when it contains a `data-complete-step` button.
- `data-lab-progress` and `data-lab-progress-label` display the completion count. Completion state is stored locally per page in the browser.
- Native `<details class="lab-hint">` provides accessible expandable hints or explanations without JavaScript.
- A `data-quiz` container with choice inputs carrying `data-feedback="…"` writes selection feedback into a `data-quiz-feedback` element.
- `data-check-answer` can validate a selected choice whose `data-correct="true"` and `data-feedback-it` / `data-feedback-en` attributes contain formative feedback.
- `data-virtual-terminal` provides a deliberately narrow, clearly labelled browser simulation. It accepts only `pwd`, `ls`, `cd`, `head <FASTQ>`, and `cat README.txt`; it never evaluates shell input.
- `data-lab-notes="name"` stores a student note locally. `data-reset-lab` clears the page's locally stored progress and notes.
- Quarto's existing `code-copy: true` setting supplies copy controls for terminal and R code blocks; ordinary Quarto figures support images and experimental-result panels.

## Minimal structural template

```markdown
::: {.lab-progress}
**Progress:** <span data-lab-progress-label>0/1</span>
<progress data-lab-progress value="0" max="100">0%</progress>
:::

::: {.lab-step data-lab-step="example-step"}
## Activity title

Future activity content goes here.

<button class="btn btn-outline-primary btn-sm" type="button" data-complete-step aria-pressed="false">Mark complete</button>
:::

<details class="lab-hint">
<summary>Hint</summary>
Future explanatory content goes here.
</details>
```

Keep the scientific questions, feedback text, figures, and results in the authored laboratory page once they have been approved. No backend or external JavaScript package is required.
