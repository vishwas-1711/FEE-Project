@echo off
echo ========================================
echo Copying Images and Video from Original Project
echo ========================================
echo.

echo Creating public folders if they don't exist...
if not exist "public" mkdir "public"
if not exist "public\images" mkdir "public\images"
if not exist "public\video" mkdir "public\video"

echo.
echo Copying images folder...
xcopy /E /I /Y "..\Nerflix-website-main\images" "public\images"

echo.
echo Copying video folder...
xcopy /E /I /Y "..\Nerflix-website-main\video" "public\video"

echo.
echo ========================================
echo Done! Images and video have been copied.
echo ========================================
echo.
echo You can now run: npm install
echo Then run: npm start
echo.
pause
