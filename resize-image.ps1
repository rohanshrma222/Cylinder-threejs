Add-Type -AssemblyName System.Drawing

$inputPath = "E:\project\portfolio_website\public\images\slider-image.png"
$outputPath = "E:\project\portfolio_website\public\images\slider-image-resized.png"

$img = [System.Drawing.Image]::FromFile($inputPath)

$newWidth = 2048
$newHeight = [int]($img.Height * ($newWidth / $img.Width))

$newImg = New-Object System.Drawing.Bitmap $newWidth, $newHeight
$graphics = [System.Drawing.Graphics]::FromImage($newImg)
$graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)

$img.Dispose()
$newImg.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$newImg.Dispose()
$graphics.Dispose()

Remove-Item $inputPath
Rename-Item $outputPath "slider-image.png"

Write-Host "Image successfully resized to $newWidth x $newHeight"
