# Sections 5: Job Artifacts and Outputs

## Topic: Job Outputs

## Date: 26/01/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Understanding Job Outputs**

- Job outputs are used to pass data between jobs in a GitHub Actions workflow.
- They allow you to reference the output of one job in a subsequent job.
- Job outputs are defined using the `outputs` keyword in a job and can be set using the `echo` command to write to the `$GITHUB_OUTPUT` environment variable.

**Assigning the environment variable**
```yml
outputs:
  script-file: ${{ steps.publish.outputs.script-file }}
```

**Setting the output in a step**
```yml
- name: Publish JS filename
  id: publish
  run: find dist/assets/*.js -type f -execdir echo 'script-file={}' >> $GITHUB_OUTPUT ';' # Relative path since we're in example/section-5
```

**2. Using Job Outputs in Subsequent Jobs**
- Once a job output is defined, it can be accessed in subsequent jobs using the syntax `${{ needs.<job_id>.outputs.<output_name> }}`.
```yml
- name: Output filename
  run: echo "${{ needs.build.outputs.script-file }}"
```


---
### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
