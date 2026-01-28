# Sections 6: Using Environment Variables and Secrets

## Topic: Understanding Environment Variables

## Date: 28/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Environment Variables**
- In your code, you may have certain variables or values that are dynamic.
- For example, the password that's used for logging into the database and the password is not always the same, perhaps it changes based on the environment (development, staging, production).
  - You may have password for testing database, and a different password for production database.
```js
const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
const dbUser = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DB_NAME;
```

---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
