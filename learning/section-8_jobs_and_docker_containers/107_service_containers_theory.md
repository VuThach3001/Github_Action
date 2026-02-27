# Sections Jobs and Docker Containers

## Topic: Service Containers - Theory

## Date: 26/02/2026

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Using Service Containers ("Services")**
- When you have a Job that needs to interact with another service (e.g., a database), you can use "services" in GitHub Actions.
- E.g: You need to run tests, and the problem is that Tests should not manipulate production database
- Solution: Use a testing database, and you can use a service container to run a database in the background while your tests are running. E.g: Hosts a testing database
- One scenario that you still need to pay for the database server even you don't perform any test.
- Job steps can communicate with the service container using localhost and the port that you specify in the workflow file.


### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
