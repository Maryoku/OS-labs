#!/bin/bash

#��������� � ������ �������
cd /home/ivt-6/testlab

#���������� �����������
find ./ -mindepth 1 -maxdepth 1 -type d -exec tar -czf {}.tar {} \;

#������� �����������
find ./ -mindepth 1 -maxdepth 1 -type d | xargs rm -rf '{}'

#������� �� ����� 5 ����� ����� ������
cd /home/ivt-6/testlab && ls -t | tail -n+6 | xargs -i rm '{}'