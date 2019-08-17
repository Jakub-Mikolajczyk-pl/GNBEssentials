Upgrade git komendy dla flowów

Konfiguracja:
Wchodzicie w ~/Tam Gdzie Macie gita zainstalowanego/git/mingw64/etc/.gitconfig
 
edytujecie ten pliczek i dodajecie komendy w ten sposób:
 
[alias]
    newb = "!f() { ticketnum=$1; git checkout -f sandbox; git pull; git checkout -b \"iss_${ticketnum}\"; }; f"
    bclean = "!f() { git branch --merged ${1-sandbox} | grep -v " ${1-sandbox}$" | xargs -r git branch -d; }; f"
    ffp = "!f() { currentBranch=$(git rev-parse --abbrev-ref HEAD); git checkout -f sandbox; git pull; git checkout ${currentBranch}; git merge sandbox; }; f"
    addflow = "!f() { for var in "$@"; do flow=$(find -name $var); git add \"$flow\"; done; }; f"
    addjs = "!f() { for var in "$@"; do js=$(find -name $var); jsDirname=$(dirname ${js}); jsCodeFile=$(basename ${jsDirname}); jsCodeFilePath=$(find -name ${jsCodeFile}.java); git add \"$jsCodeFilePath\"; git add \"$js\"; done; }; f"
    addman = "!f() { manifest=$(find -name manifest.v3 -print -quit); git add ${manifest}; }; f"
    pushnew = "!f() { currentBranch=$(git rev-parse --abbrev-ref HEAD); git push origin ${currentBranch}; }; f"
    
    
Komendy:
  
git newb - przykład użycia: git newb 1123123
komenda ta przechodzi na główny branch projektowy (standardowo sandbox) pulluje najnowsze zmiany i odbija nowego brancha z przedrostkiem iss_
kod:     newb = "!f() { ticketnum=$1; git checkout -f sandbox; git pull; git checkout -b \"iss_${ticketnum}\"; }; f"
 
git bclean
komenda ta na bazie wyniku z komendy git branch --merged, usuwa wszystkie juz zmergowane gałęzie lokalne 
kod:     bclean = "!f() { git branch --merged ${1-sandbox} | grep -v " ${1-sandbox}$" | xargs -r git branch -d; }; f"
 
git ffp
komenda ta merguje najnowsze zmiany z brancha sandbox do aktualnego brancha (Stosować tylko wtedy gdy zmiany które chcemy zmergować do glownego brancha sa juz zacomitowanie - przydatne przy pracy na branchu packages
kod:     ffp = "!f() { currentBranch=$(git rev-parse --abbrev-ref HEAD); git checkout -f sandbox; git pull; git checkout ${currentBranch}; git merge sandbox; }; f"
 
git addflow - git addflow addDocument putDocument ...
komenda ta staguje flowy do commita - wyszukuje scieżkę do folderu i dodaje folder do commita
kod:    addflow = "!f() { for var in "$@"; do flow=$(find -name $var); git add \"$flow\"; done; }; f"
 
git addjs - przykład użycia: git addjs getProperty loadErrorCodes...
komenda ta wyszukuje skompilowany kod Java servicu, java.frag i node.ndf tego servicu i staguje to do commita
kod: addjs = "!f() { for var in "$@"; do js=$(find -name $var); jsDirname=$(dirname ${js}); jsCodeFile=$(basename ${jsDirname}); jsCodeFilePath=$(find -name ${jsCodeFile}.java); git add \"$jsCodeFilePath\"; git add \"$js\"; done; }; f"
 
git addman
komenda ta staguje do commita plik manifestu danego pakietu ISowego (przydatne w przypadku konfiguracji startup service, lub zależności pakietowych)
kod: addman = "!f() { manifest=$(find -name manifest.v3 -print -quit); git add ${manifest}; }; f"
 
git pushnew
komenda ta pushuje comitty do nowo utworzonego brancha
kod: pushnew = "!f() { currentBranch=$(git rev-parse --abbrev-ref HEAD); git push origin ${currentBranch}; }; f"
