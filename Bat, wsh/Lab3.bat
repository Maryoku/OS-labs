@echo off
rem --1-- Написать сценарий, который снимет атрибут "скрытый" со всех папок и файлов в заданной папке (но не будет менять атрибуты во вложенных файлах и папках).
for /f "delims=" %%i in ('dir %1 /b /a:h') do attrib -h "%%i"
rem --2-- Написать сценарий, который снимет атрибут "скрытый" со всех папок и файлов в заданной папке, включая все вложенные файлы и папки
for /f "delims=" %%i in ('dir %1 /b /s /a:h') do attrib -h "%%i"
rem --3-- Написать сценарий, который который подсчитает количество файлов в заданной папке, включая файлы во вложенных папках 
set sum=0
for /f %%i in ('dir %1 /b /s') do (set /a sum+=1)
echo %sum% files in this folder

rem start like: Lab3 "path"
