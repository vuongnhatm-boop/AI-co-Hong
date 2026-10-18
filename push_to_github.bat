@echo off
cd /d "%~dp0"
echo ========================================================
echo   DANG DAY CODE LEN GITHUB: vuongnhatm-boop/AI-co-Hong
echo ========================================================
echo.
git remote remove origin 2>nul
git remote add origin https://github.com/vuongnhatm-boop/AI-co-Hong.git
git branch -M main
echo Dang day len GitHub, vui long cho trong giay lat...
git push -u origin main --force
echo.
echo ========================================================
echo   HOAN TAT! HAY KIEM TRA THONG BAO O TREN.
echo ========================================================
pause
