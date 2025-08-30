@echo off

git reset HEAD~2
git add .
git reset docs
git commit -m "repo: translate"

call .\translate.cmd

git add .
git commit -m "sync"
git push -f

call .\xc.cmd

pause
