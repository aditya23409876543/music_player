@echo off
echo Starting Music Player Server...
echo.
echo Open your browser and go to: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
cd web
python -m http.server 8000
