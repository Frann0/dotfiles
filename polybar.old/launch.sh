#!/bin/bash

killall -q polybar

while pgrep -u $UID -> polybar >/dev/null; do sleep1; done

polybar mybar &

echo "Polybar Launched..."
