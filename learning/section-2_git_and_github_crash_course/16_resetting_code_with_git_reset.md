# Cornell Notes

## Topic: Reverting Changes with "git revert"

## Date: 30/10/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Working with Commits (Code Snapshots)**
- **Undo Commits**:
  - Revert the changes of commit `<id>` (by creating a new commit)
```cmd
git revert <id>
```
  - **Undo changes** by deleting all commits since `<id>` (does not create a new commit)
```cmd
git reset --hard <id>
```
---

### Summary Section (Summary of Notes)

[Insert a brief summary of the key ideas and takeaways]
