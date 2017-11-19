#!/bin/bash
if [ -n "$1" ] && [ -n "$2" ]; then
if [ -e $1 ]; then
chmod $2 $1
else
echo "File doesn't exists"
fi
else
echo "Use in form: set_param file access"
fi