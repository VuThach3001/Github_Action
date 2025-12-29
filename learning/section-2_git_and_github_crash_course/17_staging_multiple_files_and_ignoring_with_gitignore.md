# Cornell Notes

## Topic: Reverting Changes with "git revert"

## Date: 30/10/2025

---

### Cue Column (Questions, Keywords, or Prompts)

---

### Notes Section (Main Notes)

**1. Git add**
- You can include all files in a folder by specifying the folder name:
```cmd
git add <folder_name>
```
- Or you can use the `*` or `.` wildcard to include multiple files:
```cmd
git add *
```
```cmd
git add .
```

**2. .gitignore**
- Sometimes I want to exclude certain files or directories from being tracked by Git. I can do this by creating a `.gitignore` file in the root of my repository and specifying the files or directories to ignore.
- For example, to ignore all `.log` files and the `tmp` directory, I would add the following lines to my `.gitignore` file:
```
*.log
tmp/
```

---

### Summary Section (Summary of Notes)

[Insert a brief summary of the key ideas and takeaways]
