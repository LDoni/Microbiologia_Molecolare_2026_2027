/* Reusable client-side controls for future practical investigations. */
document.addEventListener("DOMContentLoaded", () => {
  const pageKey = `mm-2026-progress:${location.pathname}`;
  const items = [...document.querySelectorAll("[data-lab-step]")];
  const stepIds = [...new Set(items.map((item) => item.dataset.labStep))];

  function updateProgress() {
    if (!items.length) return;
    const completed = stepIds.filter((id) => items.some((item) => item.dataset.labStep === id && item.classList.contains("is-complete"))).length;
    const percent = Math.round((completed / stepIds.length) * 100);
    document.querySelectorAll("[data-lab-progress]").forEach((progress) => {
      progress.value = percent;
      progress.setAttribute("aria-valuetext", `${percent}%`);
    });
    document.querySelectorAll("[data-lab-progress-label]").forEach((label) => { label.textContent = `${completed}/${stepIds.length}`; });
    localStorage.setItem(pageKey, JSON.stringify(stepIds.filter((id) => items.some((item) => item.dataset.labStep === id && item.classList.contains("is-complete")))));
  }

  try {
    const saved = JSON.parse(localStorage.getItem(pageKey));
    if (Array.isArray(saved)) items.forEach((item) => item.classList.toggle("is-complete", saved.includes(item.dataset.labStep)));
  } catch (_) { /* A malformed saved value should not affect the page. */ }

  items.forEach((item) => {
    item.querySelector("[data-complete-step]")?.setAttribute("aria-pressed", String(item.classList.contains("is-complete")));
  });

  items.forEach((item) => {
    const control = item.querySelector("[data-complete-step]");
    if (!control) return;
    control.addEventListener("click", () => {
      const complete = !item.classList.contains("is-complete");
      items.filter((peer) => peer.dataset.labStep === item.dataset.labStep).forEach((peer) => {
        peer.classList.toggle("is-complete", complete);
        peer.querySelector("[data-complete-step]")?.setAttribute("aria-pressed", String(complete));
      });
      updateProgress();
    });
  });

  document.querySelectorAll("[data-quiz]").forEach((quiz) => {
    quiz.addEventListener("change", (event) => {
      const choice = event.target.closest("[data-feedback]");
      const feedback = quiz.querySelector("[data-quiz-feedback]");
      if (choice && feedback) feedback.textContent = choice.dataset.feedback;
    });
  });

  document.querySelectorAll("[data-check-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const quiz = button.closest("[data-quiz]");
      const checked = quiz?.querySelector("input:checked");
      const feedback = quiz?.querySelector("[data-quiz-feedback]");
      if (!feedback) return;
      if (!checked) {
        feedback.textContent = document.documentElement.classList.contains("lang-en") ? "Select an answer first." : "Seleziona prima una risposta.";
        return;
      }
      const correct = checked.dataset.correct === "true";
      const locale = document.documentElement.classList.contains("lang-en") ? "En" : "It";
      feedback.textContent = checked.dataset[`feedback${locale}`] || (correct ? "Correct." : "Review the evidence and try again.");
      feedback.classList.toggle("is-correct", correct);
      feedback.classList.toggle("is-incorrect", !correct);
    });
  });

  document.querySelectorAll("[data-lab-notes]").forEach((notes) => {
    const key = `${pageKey}:notes:${notes.dataset.labNotes}`;
    notes.value = localStorage.getItem(key) || "";
    notes.addEventListener("input", () => localStorage.setItem(key, notes.value));
  });

  document.querySelectorAll("[data-reset-lab]").forEach((button) => button.addEventListener("click", () => {
    localStorage.removeItem(pageKey);
    document.querySelectorAll("[data-lab-notes]").forEach((notes) => localStorage.removeItem(`${pageKey}:notes:${notes.dataset.labNotes}`));
    location.reload();
  }));

  const terminalFiles = {
    "/": ["data/", "reports/", "README.txt"],
    "/data": ["sample_A_R1.fastq.gz", "sample_A_R2.fastq.gz", "sample_B_R1.fastq.gz", "sample_B_R2.fastq.gz"],
    "/reports": ["fastqc_summary.html", "multiqc_report.html"]
  };
  document.querySelectorAll("[data-virtual-terminal]").forEach((terminal) => {
    let cwd = "/";
    const input = terminal.querySelector("input");
    const output = terminal.querySelector("[data-terminal-output]");
    const print = (line) => { output.textContent += `${line}\n`; output.scrollTop = output.scrollHeight; };
    input?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      const command = input.value.trim(); input.value = ""; print(`student@virtual:${cwd}$ ${command}`);
      const [program, arg] = command.split(/\s+/, 2);
      if (program === "pwd") print(cwd);
      else if (program === "ls") print((terminalFiles[cwd] || []).join("  "));
      else if (program === "cd") {
        const target = arg === ".." ? (cwd === "/" ? "/" : "/") : arg?.startsWith("/") ? arg : `${cwd === "/" ? "" : cwd}/${arg || ""}`;
        if (terminalFiles[target]) { cwd = target; } else print(`cd: ${arg || ""}: No such virtual directory`);
      } else if (program === "head" && arg?.includes("fastq")) print("@SIMULATED_READ_001\nACGTNACGTNACGT\n+\nFFFFFFFFFFFFFFFF");
      else if (program === "cat" && arg === "README.txt") print("Teaching simulation: filenames illustrate paired FASTQ inspection; they are not a study dataset.");
      else print("This browser terminal is a teaching simulation. Supported commands: pwd, ls, cd, head <FASTQ>, cat README.txt.");
    });
  });
  updateProgress();
});
