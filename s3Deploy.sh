#!/bin/sh
# wait script

set -e

# if you want to use this, you need to install awscli, then in your home directory, uncomment the following cred info and put it in
# ~/.aws/credentials file - works in linux, not sure where awscli keeps it's info in macOS and Windows

export AWS_PROFILE="blkwtkns"
if [ -n "$(ls -A ./public 2>/dev/null)" ]
then
  echo "contains files (or is a file)"
  # test s3 output
  # aws s3 ls s3://blkmwtkns.co

  # s3 sub-directory routine (uncomment below if you want to sync build files to bucket)
  aws s3 rm s3://blkmwtkns.co --recursive
  aws s3 sync ./public s3://blkmwtkns.co --delete
  aws s3 ls s3://blkmwtkns.co
  exit 0
else
  echo "empty (or does not exist)"
  exit 1
fi
