remove-item "./weather.db" -ErrorAction SilentlyContinue
$init = Get-Content "./init.sql"
.\sqlite3.exe weather.db  "$init"