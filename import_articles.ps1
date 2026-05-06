# Script para importar todos los Informes de Lectura a la carpeta de contexto de PEPA
# Ejecutar desde la raiz del proyecto
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$sourcePath = [System.IO.Path]::GetFullPath("..\..\..\..\ART?CULOS\TRANSMEDIA_OUTPUT\ART?CULOS ACTUALIZADOS")

# Si no funciona con comodines, intentar con la ruta literal
if (-not (Test-Path $sourcePath)) {
    # Buscar la carpeta real navegando
    $baseDir = [System.IO.Path]::GetFullPath("..\..\..\..") 
    $artDir = Get-ChildItem -Path $baseDir -Directory | Where-Object { $_.Name -like "ART*CULOS" } | Select-Object -First 1
    if ($artDir) {
        $transmediaDir = Join-Path $artDir.FullName "TRANSMEDIA_OUTPUT"
        $sourcePath = Get-ChildItem -Path $transmediaDir -Directory | Where-Object { $_.Name -like "ART*CULOS ACTUALIZADOS" } | Select-Object -First 1
        if ($sourcePath) {
            $sourcePath = $sourcePath.FullName
        }
    }
}

Write-Host "Buscando en: $sourcePath" -ForegroundColor Yellow

if (-not (Test-Path $sourcePath)) {
    Write-Host "ERROR: No se encontro la carpeta fuente." -ForegroundColor Red
    Write-Host "Por favor, arrastra la carpeta aqui y presiona Enter:" -ForegroundColor Yellow
    $sourcePath = Read-Host
    $sourcePath = $sourcePath.Trim('"')
}

$destPath = ".\public\content\articles"

# Crear la carpeta destino si no existe
if (-not (Test-Path $destPath)) {
    New-Item -ItemType Directory -Path $destPath -Force | Out-Null
    Write-Host "Carpeta creada: $destPath" -ForegroundColor Green
}

# Contadores
$imported = 0
$skipped = 0

# Recorrer todas las carpetas de articulos
Get-ChildItem -Path $sourcePath -Directory | ForEach-Object {
    $folderName = $_.Name
    # Extraer el ID numerico del nombre de la carpeta
    $articleId = ($folderName -split '_')[0]
    
    # Buscar el informe de lectura
    $informePath = Join-Path $_.FullName "09_INFORME_LECTURA\INFORME_LECTURA.md"
    
    if (Test-Path $informePath) {
        $destFile = Join-Path $destPath "$articleId.md"
        Copy-Item -Path $informePath -Destination $destFile -Force
        $sizeKB = [math]::Round((Get-Item $informePath).Length / 1KB, 1)
        Write-Host "[OK] Importado: $articleId ($sizeKB KB) - $folderName" -ForegroundColor Cyan
        $imported++
    } else {
        Write-Host "[SKIP] Sin informe: $folderName" -ForegroundColor Yellow
        $skipped++
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host " IMPORTACION COMPLETADA" -ForegroundColor Green
Write-Host " Importados: $imported" -ForegroundColor Cyan
Write-Host " Sin informe: $skipped" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Green

# Listar archivos resultantes
Write-Host ""
Write-Host "Archivos en carpeta de contexto de PEPA:" -ForegroundColor White
Get-ChildItem -Path $destPath -File | ForEach-Object {
    $sizeKB = [math]::Round($_.Length / 1KB, 1)
    Write-Host "  - $($_.Name) ($sizeKB KB)" -ForegroundColor Gray
}
