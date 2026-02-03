# Sections 7: Controlling Workflow and Job Execution

## Topic: More "if" examples

## Date: 03/02/2026

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Optimize cache**
- It would be even faster though if it would cache the entire node modules folder.
- We would not even run the npm ci step if we restore that folder
```yml
      - name: Cache node_modules
        uses: actions/cache@v4
        with:
          path: node_modules
          key: deps-node-modules-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            deps-node-modules-
      - name: Install dependencies
        if: steps.cache.outputs.cache-hit != 'true'
        run: npm ci
```
- In the above example, we only run the npm ci step if the cache was not hit.

**2. cache-hit**

```yml
      - name: Cache node_modules
        uses: actions/cache@v4
        with:
          path: node_modules
          key: deps-node-modules-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            deps-node-modules-
      - name: Install dependencies
        if: steps.cache.outputs.cache-hit != 'true'
        run: npm ci
```
- The cache action provides an output variable called cache-hit.
- It is set to true if the cache was found and restored, false otherwise.
- You can find more information about this in the action's documentation.

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
