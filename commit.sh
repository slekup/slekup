#!/bin/bash
# Basic while loop

counter=1
while [ $counter -le 10 ]
do
  git commit --allow-empty --date="Sun Oct 15 14:00 2022 +0100" -m 'u'
  echo $counter
  ((counter++))
done

echo Done

# git commit --allow-empty --date="Sun Oct 15 14:00 2022 +0100" -m 'u'
