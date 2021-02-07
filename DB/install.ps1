remove-item "./weather.db" -ErrorAction SilentlyContinue
$init = Get-Content "./init.sql"
sqlite3 weather.db  "$init"cd 