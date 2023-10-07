#!/bin/sh

# Check if the argument is provided
if [ "$#" -ne 1 ]; then
    echo "#Usage: $0 <task number>"
    exit 1
fi

# Check if the argument is a valid number between 1 and 100
if ! echo "$1" | grep -qE '^[1-9][0-9]{0,1}$|^100$'; then
    echo "Please provide a valid task number between 1 and 100."
    exit 1
fi

# Run the npm task
npm test task$1_TDD
