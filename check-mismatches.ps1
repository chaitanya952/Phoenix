# PowerShell script to check for capacity mismatches
$imageFiles = Get-ChildItem "c:\Users\Admin\OneDrive\Apps\baohui-baby-website\public\images\Sippy Cups JPEG" | Where-Object { $_.Name -match "SP\d+" }

Write-Host "Checking for capacity mismatches..."
Write-Host "=================================="

foreach ($file in $imageFiles) {
    if ($file.Name -match "(SP\d+) - (\d+ml)") {
        $modelNo = $matches[1]
        $imageCapacity = $matches[2]
        Write-Host "$modelNo -> Image: $imageCapacity"
    }
}