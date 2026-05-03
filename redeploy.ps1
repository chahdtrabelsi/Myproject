# Variables
$imageName = "tabelsichahd/mon-image:latest"
$deploymentName = "mon-appli"

Write-Host "Construction de l'image Docker..."

docker build -t $imageName ./backend

if ($LASTEXITCODE -ne 0) {
    Write-Host "Erreur build Docker"
    exit 1
}

Write-Host "Redémarrage du déploiement Kubernetes..."
kubectl rollout restart deployment $deploymentName

Start-Sleep -Seconds 5

Write-Host "Pods en cours..."
kubectl get pods