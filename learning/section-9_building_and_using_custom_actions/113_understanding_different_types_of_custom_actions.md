# Sections 9: Building and Using custom actions

## Topic: Understanding different types of custom action

## Date: 26/02/2026

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Different types of custom action**
- JavaScript Actions:
  - Execute a JavaScript file
  - Use JavaScript (NodeJS) + any packages of your choice
  - Pretty straightforward (if you know JavaScript)
- Docker Container Actions:
  - Create a Dockerfile with your required configuration
  - Execute a command in a Docker container
  - Use any language or tools you want (as long as they can run in a Docker container)
  - More complex to set up, but more flexible and powerful (e.g., you can use languages other than JavaScript, or include complex dependencies that are easier to manage in a container)
- Composite Actions:
  - Combine multiple workflow steps into a single action
  - Combine run (commands) and uses (other actions) in a single action
  - Allows for reusing shared steps (without extra skills).

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
