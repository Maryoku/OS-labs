@echo off
echo Все файлы MS Word: >doc.txt
dir /b *.doc* >>doc.txt
echo Только чтение: >>doc.txt
dir /b /a:r *.doc* >>doc.txt