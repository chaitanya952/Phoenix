# Check for missing Standard Neck image files
$content = Get-Content "c:\Users\Admin\OneDrive\Apps\baohui-baby-website\src\data\catalogData.ts" -Raw

# Extract all RN products with their model numbers
$pattern = "modelNo: '(RN\d+-\d+ml)'"
$matches = [regex]::Matches($content, $pattern)

$imageFiles = Get-ChildItem "c:\Users\Admin\OneDrive\Apps\baohui-baby-website\public\images\Standard Neck Bottles JPEG" | ForEach-Object { $_.BaseName }

Write-Host "Checking for missing Standard Neck image files..."
Write-Host "================================================="

$missingImages = @()
foreach ($match in $matches) {
    $modelNo = $match.Groups[1].Value
    $expectedImageName = $modelNo.Replace('-', ' - ')
    
    if ($imageFiles -notcontains $expectedImageName) {
        $missingImages += $modelNo
        Write-Host "MISSING: $modelNo -> Expected: $expectedImageName.jpg"
    }
}

if ($missingImages.Count -eq 0) {
    Write-Host "✓ All Standard Neck products have corresponding image files!"
} else {
    Write-Host ""
    Write-Host "Total missing images: $($missingImages.Count)"
}