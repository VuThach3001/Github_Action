# Sections 6: Using Environment Variables and Secrets

## Topic: Module Summary

## Date: 29/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Module Summary**
- **Environment Variables:** 
  - Dynamic values used in code (e.g., database name)
  - May differ from workflow to workflow
  - Can be defined on Workflow-, Job- or Step-level
  - Can be used in code and in the GitHub Actions Workflow
  - Accessible via interpolation and the **env** context object.
- **Secrets:**
  - Some dynamic values should not be exposed anywhere
  - Examples: Database credentials, API keys, etc.
  - Secrets can be stored on Repository-level, Environment-level, or Organization-level.
  - Secrets can be referenced via the **secrets** context object.
- **GitHub Actions Environments:**
  - Jobs can reference different GitHub Actions Environments.
  - Environments allow you to set up extra protection rules.
  - You can also store Secrets on Environment-level.

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
