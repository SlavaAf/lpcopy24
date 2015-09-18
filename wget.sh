#!/bin/bash

APP=$1
NAME=$2
LINK=$3

wget -r -l10 -k -p -E -nc $LINK --directory-prefix=static/sites
ls static/sites