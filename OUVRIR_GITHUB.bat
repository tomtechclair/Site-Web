@echo off
echo ===================================
echo   OUVERTURE GITHUB DESKTOP
echo ===================================
echo.

REM Dossiers - Chemins relatifs
set SCRIPT_DIR=%~dp0
start "" "%SCRIPT_DIR%"
start "" "%SCRIPT_DIR%\.."

echo.
echo Ouverture GitHub Desktop...
REM Essaie de trouver GitHub Desktop dans le chemin standard
if exist "%LOCALAPPDATA%\GitHubDesktop\GitHubDesktop.exe" (
    start "" "%LOCALAPPDATA%\GitHubDesktop\GitHubDesktop.exe"
) else (
    echo GitHub Desktop non trouvé dans le chemin standard
    echo Veuillez ouvrir GitHub Desktop manuellement
)

echo.
echo ===================================
echo   FAIT ! 
echo   1. GitHub Desktop est ouvert
echo   2. Coche les fichiers a commiter
echo   3. Clique "Commit to main"
echo   4. Clique "Push origin"
echo ===================================
echo.
pause
