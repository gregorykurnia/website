@AGENTS.md

# Auto-push instructions

After completing any task or making any changes, always run:

```bash
npm run build
```

If the build passes with no errors, immediately run:

```bash
git add .
git commit -m "<brief description of what changed>"
git push origin main
```

Do this automatically after every completed task without being asked.
If the build fails, fix the errors first before pushing.
