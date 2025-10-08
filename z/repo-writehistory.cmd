@echo off

git reset a0a9104

git add .
git reset docs
git commit -m "repo: set up"

git add .
git commit -m "sync"

git push -f

call z\xc.cmd

pause
