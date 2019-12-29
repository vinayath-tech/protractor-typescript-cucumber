#!/usr/bin/env bash
# Environment Variables
# HUB_HOST
# BROWSER
# MODULE
# URL

echo "Checking if hub is ready - $HUB_HOST"

while [ "$( curl -s http://$HUB_HOST:4444/wd/hub/status | jq -r .value.ready )" != "true" ]
do
	sleep 1
done

# To run the tests
npm run e2e
