@echo off

git reset HEAD~1
git add .
git commit -m "sync"
git push -f

call z\xc.cmd

pause
