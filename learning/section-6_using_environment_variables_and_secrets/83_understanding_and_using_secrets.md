# Sections 6: Using Environment Variables and Secrets

## Topic: Understanding and Using Secrets

## Date: 29/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. GitHub Repository Environments**
- GitHub offers this environments feature for action workflows. The idea behind these GitHub environments is to be attached to repositories and workflow jobs can then refer to these environments to get access to the secrets defined for them: [About Environments](https://docs.github.com/en/actions/deployment/targeting-different-environments/about-environments)
- If a job targets such an environment, you can, for example, provide extra configuration to that job.
- To be precise, extra secrets that are only available in a certain environment.
- You can add some special protection rules to make sure that no matter what the job and the workflow defines only pushes to certain branches can lead a certain job to be executed.

**2. Environment in YAML**
- In your workflow YAML file, you can specify the environment for a job using the `environment` keyword. This allows you to associate the job with a specific environment and its secrets.
- Example:
```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: testing
    steps:
      - name: Deploy to Production
        run: |
          echo "Deploying to production..."
```

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
