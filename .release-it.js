module.exports = {
    hooks: {
      "before:init": ["npm test"],
      "after:bump": ["npx auto-changelog -p"],
      "after:git:release": ["git checkout develop", "git merge master", "git push origin develop"]
    },
    git: {
      requireBranch: "master",
      commit: true,
      commitMessage: "chore(release): ${version}",
      commitArgs: "",
      tag: true,
      tagName: "${version}",
      tagAnnotation: "${version}",
      push: true,
      requireCommits: true,
      changelog: "npx auto-changelog --stdout --commit-limit false -u --template https://raw.githubusercontent.com/release-it/release-it/master/templates/changelog-compact.hbs"
    },
    github: {
      release: true,
      releaseName: "${version}",
      tokenRef: "GITHUB_TOKEN"
    },
    npm: {
      publish: true
    }
  };