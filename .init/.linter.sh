#!/bin/bash
cd /home/kavia/workspace/code-generation/career-connect-224156-224165/find_my_job_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

