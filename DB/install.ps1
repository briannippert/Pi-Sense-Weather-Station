remove-item "./weather.db"
$init = Get-Content "./init.sql"
sqlite3 weather.db  "$init"