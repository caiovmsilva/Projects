#!/bin/bash

echo "Implemente aqui o script para executar a sua solução"

#Use Node >v20.11.1 

#Install Vue.js

npm install -g @vue/cli

#Install Vuestic

npm install vuestic-ui

#Install Axios

npm install axios

#Install FastAPI 

pip install fastapi

#Install ASGI server

pip install "uvicorn[standard]"


#Script used to run vue serve
#Run this command-line in app/desafioVue

npm run serve

#Script used to run FastAPI application in port 3000
#Run this command-line in app/src/scripts directory

uvicor main:app --reload --port 3000
