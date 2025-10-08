@echo off

cmd /c robocopy /e /r:0 docs i18n/fa/docusaurus-plugin-content-docs/current

cmd /c npm run write-translations -- --locale fa
