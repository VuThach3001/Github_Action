# Sections 8: Jobs and Docker Containers

## Topic: Why Might you want to use Containers with GitHub Actions?

## Date: 25/02/2026

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Why use container?**
- GitHub Actions provides a powerful platform for automating workflows, and using containers can enhance the flexibility and consistency of your CI/CD pipelines.
- Containers allow you to create isolated environments that can run your applications and dependencies consistently across different stages of development and deployment.
- By using containers, you can ensure that your workflows run in the same environment, regardless of where they are executed, which can help to eliminate issues related to environment differences and improve the reliability of your CI/CD processes.
- You could create such a predefined environment by using a Docker image, which can be specified in your GitHub Actions workflow file. This allows you to define the exact dependencies and configurations needed for your workflow, ensuring that it runs smoothly and consistently every time.
- Using containers can also help to speed up your workflows by allowing you to reuse pre-built images

**2. Containers & GitHub Actions**
- Docker Container still runs on GitHub Actions Runners.
- Your containerized Job is hosted by the Runner
- Steps execute inside the container.
- You can also create **Services**: Utility containers used by your Steps (Example: Testing database, caching server, etc.)

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
