@echo off
chcp 65001 >nul
echo ===================================
echo   JARVIS - DEMARRAGE
echo ===================================
echo.

REM Chemin relatif au dossier où se trouve ce fichier
set JARVIS_DIR=%~dp0
echo Dossier Jarvis : %JARVIS_DIR%

REM Vérification de Python
python --version >nul 2>&1
if errorlevel 1 (
    echo ERREUR : Python n'est pas installé !
    echo Téléchargez Python 3.12.9 depuis https://www.python.org/
    pause
    exit /b 1
)

REM Lancement de l'assistant
echo Lancement de Jarvis...
cd /d "%JARVIS_DIR%"
if exist "jarvis_agent.py" (
    python "jarvis_agent.py"
) else (
    echo ERREUR : jarvis_agent.py introuvable dans %JARVIS_DIR%
    pause
)
