#!/bin/bash
echo -e "Podaj nazwę nowo utworzonego repozytorium na bitbuckecie: \c "
read repoName
git init $repoName
cd $repoName
echo -e "Podaj swój login na bitbuckecie: \c "
read $userLogin
git remote add origin https://${userLogin}@Your.Bitbucket.Address.Here/scm/bpms/${repoName}.git
mkdir modules
cd modules
mkdir IS BPM
cd IS
touch .gitignore
cd ..
cd BPM
touch .gitignore
cd ..
cd ..
git add .
git checkout -b sandbox
git commit -m "Initial structure and created sandbox branch"
git push -u origin sandbox
git checkout -b sprint
git commit --allow-empty -m "Creted empty sprint branch"
git push origin sprint
git checkout -b test
git commit --allow-empty -m "Creted empty test branch"
git push origin test
git checkout -b rc
git commit --allow-empty -m "Creted empty rc branch"
git push origin rc
git checkout -b prod
git commit --allow-empty -m "Creted empty prod branch"
git push origin prod
git checkout sandbox
mv -i .git/refs/sandbox .git/refs/master
git commit --allow-empty -m "Change master to sandbox and delete master"
git push -u origin sandbox