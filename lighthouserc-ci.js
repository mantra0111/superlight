module.exports = {
    ci: {
      collect: {
        startServerCommand: "npm run serve",
        numberOfRuns: 10,
        url: [
          "http://localhost:9000",
          "http://localhost:9000/849c0e8c-f7eb-5c00-bd05-e6d2c6e82725"
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