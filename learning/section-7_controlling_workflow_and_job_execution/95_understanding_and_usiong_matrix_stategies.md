# Sections 7: Controlling Workflow and Job Execution

## Topic: Ignoring errors and Failures with continue-on-error

## Date: 04/02/2026

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Matrix Strategy**
- A matrix strategy allows you to run a job multiple times with different configurations.
- This is useful for testing code across multiple environments, such as different versions of a programming language or operating systems.
- You define a matrix in the job configuration, specifying the variables and their possible values.
```yml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12, 14, 16]
        os: [ubuntu-latest, windows-latest, macos-latest]
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
