# This script is neccesary due to the fact that the package.json file is failing due to regex expression
sed -i 's/dist\///g' dist/package.json