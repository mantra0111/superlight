module.exports = {
    ci: {
      collect: {
        startServerCommand: "npm run serve",
        numberOfRuns: 3,
        url: [
          "http://localhost:9000",
        ],
      },
      assert: {
        assertions: {
          "categories:performance": ["error", { minScore: .8 }],
          "categories:accessibility": ["error", { minScore: .8 }],
          "categories:best-practices": ["error", { minScore: .8 }],
          "categories:seo": ["error", { minScore: .8 }],
          "categories.pwa": "off",
        },
      },
      upload: {
        target: "temporary-public-storage",
      },
    },
  };