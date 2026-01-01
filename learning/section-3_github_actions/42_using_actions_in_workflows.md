# Cornell Notes

## Topic: Using Actions in Workflows

## Date: 31/12/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. What are Actions?**
- Actions are reusable units of code that can be combined to create jobs in a GitHub Actions workflow.
- They can be created by anyone and shared on the **GitHub Marketplace**.
- There are mainly two types of **Actions**:
  - **Action**:
    - It is a custom or a third-party applications that performs a (typically complex) frequently repeated task inside a workflow.
    - **Ex**: Fetching code from a repository, setting up a programming environment, running tests, deploying code to a server, etc.
    - You can build your own Actions but you can also use official or community-contributed Actions from the GitHub Marketplace.
    - **Command:**
      - A command that's defined with the help of a script file.
        - **Ex**: A shell script that prints "Hello, World!" to the console
      - It can be defined by us.

**2. Checkout Actions**
- One of the most commonly used Actions is the `actions/checkout` Action.
- It checks out your repository under `$GITHUB_WORKSPACE`, so your workflow can access it
- For other Actions on the marketplace, you can visit: [GitHub Marketplace](https://github.com/marketplace?type=actions)

---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
