export default {
  prompt: {
    types: [
      {
        value: "feat",
        name: "feat:     ✨ A new feature",
      },
      {
        value: "fix",
        name: "fix:      🐛 A bug fix",
      },
      {
        value: "refactor",
        name: "refactor: 🔨 Code restructuring",
      },
      {
        value: "perf",
        name: "perf:     ⚡ Performance improvement",
      },
      {
        value: "test",
        name: "test:     🧪 Add or update tests",
      },
      {
        value: "docs",
        name: "docs:     📚 Documentation",
      },
      {
        value: "build",
        name: "build:    📦 Build/dependency changes",
      },
      {
        value: "ci",
        name: "ci:       👷 CI/CD changes",
      },
      {
        value: "chore",
        name: "chore:    🔧 Other maintenance",
      },
    ],
    scopes: ["api", "web", "deps", "config", "ci"],
    useEmoji: true,
    markBreakingChangeMode: true,
  },
};
