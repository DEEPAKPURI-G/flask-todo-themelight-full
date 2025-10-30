# Flask Todo (Light theme + Auth)

A polished todo-list app built with Flask, featuring user accounts and a clean light UI. Ready for your resume or GitHub portfolio.

## Features
- Register / Login / Logout
- Create / Edit / Delete tasks
- Mark tasks complete
- Clean light theme UI, confirmation dialogs, and simple animations

## Run locally (Windows)
1. Create virtualenv and activate:
   ```powershell
   python -m venv venv
   venv\Scripts\activate
   ```
2. Install dependencies:
   ```powershell
   pip install -r requirements.txt
   ```
3. Initialize DB and run:
   ```powershell
   python -c "from app import db, app; with app.app_context(): db.create_all()"
   python app.py
   ```
4. Open http://127.0.0.1:5000

## Run locally (Linux / macOS)
   source venv/bin/activate
   pip install -r requirements.txt
   python -c "from app import db, app; with app.app_context(): db.create_all()"
   python app.py

## Notes
- For production use Postgres and set SECRET_KEY in environment.
- A `run_windows.bat` is included for one-click start on Windows.
