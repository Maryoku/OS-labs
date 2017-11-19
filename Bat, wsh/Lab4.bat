@echo off
if "%~1"=="" goto NOTPARAM
if not exist %~1 goto NOTFOUND
attrib +h +r %~1
goto EXIT
:NOTFOUND
echo File not found!
goto EXIT
:NOTPARAM
echo Use in form: set_param file.
:EXIT