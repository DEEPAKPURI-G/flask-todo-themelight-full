\
        @echo off
        REM Activate venv (Windows)
        if exist venv\Scripts\activate.bat (
          call venv\Scripts\activate.bat
        )
        pip install -r requirements.txt
        python -c "from app import db, app; with app.app_context(): db.create_all()"
        python app.py
