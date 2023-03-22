#!/bin/bash
# pid_name="pruforce-portal"
# pid_name="yarn"
pid_name="webpack"
echo "Name of process killed: " $pid_name

pid=$(ps -ef|grep $pid_name|grep -v grep|awk '{print $2}')

echo "pid list: " $pid

for item in $pid
do
  echo "Kill process PID = " $item
  kill -9 $item
done