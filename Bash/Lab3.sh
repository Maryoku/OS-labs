#!/bin/bash

echo "Enter a"
read a

echo "Enter b"
read b

echo "Enter c"
read c

echo "$a*x^2+$b*x+$c=0"

echo | awk '{
discr=b^2-4*a*c

if (discr > 0){
print "x1="(-b+sqrt(b^2-4*a*c))/(2*a)
print "x2="(-b-sqrt(b^2-4*a*c))/(2*a)
}
else if (discr == 0){
print "x = " + (-b/(2*a))
}
else{
print "No roots"
}
exit}' a=$a b=$b c=$c