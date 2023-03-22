#!/bin/sh
for dir in `ls .`
  do
    path=$(pwd)
    echo $path $dir
    # if [ -d $dir ]
    if [[ $dir == "example"* ]]
      then
        echo $dir
        cd $dir
        echo "======================= '$dir' yarn start========================"
        yarn start &
        echo "======================= '$dir' start end========================"
        cd "${path}"
    fi
done