# Sections 9: Building and Using custom actions

## Topic: Creating composite actions

## Date: 17/03/2026

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Composite Actions**
- Composite Actions:
  - Combine multiple workflow steps into a single action
  - Combine run (commands) and uses (other actions) in a single action
  - Allows for reusing shared steps (without extra skills).

**2. How to create a composite action**
- Create a new directory for your action
- Add an `action.yml` file in the directory call `actions`
- Define the inputs, outputs, and steps
- Use `runs` to specify the steps (either `run` or `uses`)
- Example of `action.yml` for a composite action:
```yaml
name: My Composite Action
description: A composite action that combines multiple steps
inputs:
  input1:
    description: 'An input for the action'
    required: true
    default: 'default value'
outputs:
  output1:
    description: 'An output from the action'
runs:
  using: 'composite'
  steps:
    - name: Step 1
      run: echo "This is step 1"
    - name: Load and use composite actions
      uses: ./.github/actions/my-composite-action
```

### Summary Section (Summary of Notes)

GitHub is a cloud-based platform that provides Git repository hosting and various services to facilitate version control and collaboration among developers. Key features include cloud storage for Git repositories, enabling backup and teamwork across different machines, as well as tools for code management and collaboration, such as issues, projects, and pull requests.
