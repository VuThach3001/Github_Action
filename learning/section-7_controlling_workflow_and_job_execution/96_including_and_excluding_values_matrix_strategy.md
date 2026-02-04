# Sections 7: Controlling Workflow and Job Execution

## Topic: Including and Excluding Values Matrix Strategy

## Date: 04/02/2026

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Including and Excluding Values**
- In a matrix strategy, you can include or exclude specific combinations of values to control which jobs are run.
- This is useful when certain combinations are not relevant or would lead to redundant testing.
```yml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12, 14, 16, 18]
        os: [ubuntu-latest, windows-latest, macos-latest]
      include:
        - node-version: 18
          os: ubuntu-latest
      exclude:
        - node-version: 12
          os: windows-latest
        - node-version: 16
          os: macos-latest
    steps:
      - name: Set up Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}
      - name: Run tests on ${{ matrix.os }} with Node.js ${{ matrix.node-version }}
        run: npm test
```

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
