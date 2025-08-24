@echo off

git reset HEAD~
git add .
git commit -m "sync"
git push -f


git reflog expire --expire-unreachable=now --all
git gc --prune=now

pause
