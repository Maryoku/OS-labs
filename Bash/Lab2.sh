#!/bin/bash

#переходим в нужный каталог
cd /home/ivt-6/testlab

#архивируем подкаталоги
find ./ -mindepth 1 -maxdepth 1 -type d -exec tar -czf {}.tar {} \;

#удаляем подкаталоги
find ./ -mindepth 1 -maxdepth 1 -type d | xargs rm -rf '{}'

#удаляем всё кроме 5 самых новых файлов
cd /home/ivt-6/testlab && ls -t | tail -n+6 | xargs -i rm '{}'