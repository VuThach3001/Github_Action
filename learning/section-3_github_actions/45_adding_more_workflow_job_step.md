# Cornell Notes

## Topic: Adding More Workflow Job Step

## Date: 01/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Checkout Actions**
- One of the most commonly used Actions is the `actions/checkout` Action.
- It checks out your repository under `$GITHUB_WORKSPACE`, so your workflow can access it
- For other Actions on the marketplace, you can visit: [GitHub Marketplace](https://github.com/marketplace?type=actions)

**2. How to Use Checkout Action**
- To use the `actions/checkout` Action, you need to include it in your workflow YAML file.
- Here is a simple example:
```yaml
name: Test Project
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
```
- The `uses` keyword specifies the Action to be used, and `actions/checkout@v3` indicates that we are using version 3 of the `actions/checkout` Action.
- The `with` keyword allows you to pass parameters to the Action. There are varius parameters you can use, such as:
  - `fetch-depth`: Specifies how many commits to fetch. Setting it to `0` fetches all history for all branches and tags.
  - `ref`: Specifies the branch, tag, or SHA to checkout. By default, it checks out the commit that triggered the workflow.
  - `submodules`: If set to `true`, it will also checkout submodules.
- You can solely use the `uses` keyword without the `with` keyword if you don't need to pass any parameters.

**3. Check preinstalled packages for Ubuntu**
- On `ubuntu-latest` runners, many common packages and tools are preinstalled.
- You can check the list of preinstalled packages and their versions in the official documentation: https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md
- Ex: If you would need to install Node.js, you can add a separate step in your workflow to install it using `actions/setup-node` Action.
```yaml
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
```

**4. Add more workflow job steps**
- You can add more steps to your workflow jobs by simply appending them to the `steps` array.
- Each step can use different Actions or run shell commands.
- Here is an example of adding a step to run a shell command:
```yaml
      - name: Install dependencies
        run: npm ci
```
*Note: `npm` is the `Node Package Manager` for JavaScript and is used to manage project dependencies (third-party libraries and packages) for Node.js projects.*
- After that, you can test your code by adding another step:
```yaml
      - name: Run tests
        run: npm test
```
---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
