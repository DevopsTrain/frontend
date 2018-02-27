#!/bin/bash
# call with build number (image tag for ci built docker image) as single argument
sed -e "s/\${BUILD_NUMBER}/$1/" deploy-CI.template.yaml  > deploy-CI.yaml
sed -e "s/\${BUILD_NUMBER}/$1/" deploy-canary-CI.template.yaml  > deploy-canary-CI.yaml
nl deploy-CI.yaml
nl deploy-canary-CI.yaml
