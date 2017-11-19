@echo off
rem create folders
mkdir sorted 
mkdir sorted\noext
rem filename, without folders, all directory
for /f %%i in ('dir /b /a:-d /s') do (
rem if exists exp
if not "%%~xi" == "" (
rem write to txt
echo %%~fi -- %%~ti >> sorted\%%~xi.txt
rem if not exists "exp" folder - create folder
if not exist "sorted\%%~xi" (
mkdir sorted\%%~xi
)
copy "%%i" sorted\%%~xi
) else (
copy "%%i" sorted\noext
echo %%~fi -- %%~ti >> sorted\noext.txt
)
)