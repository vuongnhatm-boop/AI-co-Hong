@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================================
echo   ĐANG ĐẨY TOÀN BỘ DỰ ÁN LÊN GITHUB: AI-co-Hong
echo ========================================================
echo.
git remote remove origin 2>nul
git remote add origin https://github.com/vuongnhatm-boop/AI-co-Hong.git
git branch -M main

echo Đang kết nối và đẩy lên nhánh main của GitHub...
echo (Nếu có cửa sổ đăng nhập GitHub hiện lên, bạn chỉ cần chọn 'Sign in with your browser')
echo.
git push -u origin main --force

echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo   ĐÃ ĐẨY LÊN GITHUB THÀNH CÔNG 100%!
    echo   Bây giờ trên Netlify:
    echo   1. Nhánh 'main' đã xuất hiện sẵn sàng.
    echo   2. Netlify sẽ tự động nhận file netlify.toml và hiển thị
    echo      giao diện CHẠM đầy đủ đẹp mắt, không bao giờ bị lỗi!
    echo ========================================================
) else (
    echo Có lỗi xảy ra hoặc chưa hoàn tất đăng nhập GitHub.
)
echo.
pause
