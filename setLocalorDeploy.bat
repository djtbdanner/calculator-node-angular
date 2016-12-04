@echo off
echo The json has to be set up for local running or deployable (the deployable server will run locally, but there
echo are compile and run benefits to running the local lite-server)
echo.
set /p x="Enter L for local, otherwise enter for deployable: "

if "%x%"=="l" set x=L

del package.json
if "%x%" == "L" (
  echo doing local
  copy testlocal_package.json package.json
) else (
  echo doing deploy
  copy deploy_package.json package.json
)
type package.json

echo.
echo. 
echo Above it the package.json contents
echo.
echo.

CHOICE /M "Exiting in 7 seconds" /C EXIT /D E /T 7


