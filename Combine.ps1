# Concatenate every file in the src folder in their specific order
$CookieMonster = Get-Content -Path @( `
                './src/Header.js', './src/Cache.js', './src/Config.js', './src/Data.js', `
                './src/Disp.js', './src/Main.js', './src/Sim.js', './src/Footer.js' `
)

# Output it to our file
[IO.File]::WriteAllLines(".\CookieMonster.js", $CookieMonster)
