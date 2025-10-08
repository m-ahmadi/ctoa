@echo off

git reset a0a9104

git add .
git reset docs
git reset i18n/fa/docusaurus-plugin-content-docs/current
git commit -m "repo: set up"

call z\translate.cmd
git add .
git reset docs
git commit -m "docs: translate"

git add .
git commit -m "sync"

git push -f

call z\xc.cmd

pause
