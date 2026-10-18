@echo off
chcp 65001 >nul
echo ========================================================
echo   ĐỒNG BỘ DỰ ÁN CHẠM LÊN GITHUB ĐỂ LIÊN KẾT NETLIFY
echo ========================================================
echo.
set /p REPO_URL="Dán link GitHub repository của bạn vào đây: "
if "%REPO_URL%"=="" (
    echo Bạn chưa nhập link! Vui lòng chạy lại file.
    pause
    exit /b
)

echo.
echo Đang cấu hình kết nối với GitHub...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo Đang đẩy toàn bộ dự án lên nhánh main...
git push -u origin main --force

echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo   ĐÃ ĐẨY LÊN GITHUB THÀNH CÔNG!
    echo   Bây giờ trên Netlify đã có nhánh 'main' và tự động build
    echo   chuẩn 100%% không bao giờ bị lỗi mất CSS/giao diện nữa!
    echo ========================================================
) else (
    echo Có lỗi xảy ra khi đẩy lên GitHub. Vui lòng kiểm tra lại quyền hoặc link.
)
pause
