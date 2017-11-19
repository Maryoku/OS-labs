#!/bin/bash

address="www.google.com"
logfile="./check.log"

ping -c 1 $address
echo -n `date +'%Y/%m/%d %H:%M:%S'` >> ${logfile}
echo " " `nmap -sP $address | grep Host` >> ${logfile}

#crontab -e
#*/5 * * * *
#crontab -l >> file.txt
#crontab -r