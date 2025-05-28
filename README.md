docker build -t pablomc28 .

docker tag pablomc28:latest ghcr.io/pablomc20/pablomc20/pablomc28:latest

echo <secrets.GITHUB_TOKEN> | docker login ghcr.io -u pablomc20 --password-stdin

docker push ghcr.io/pablomc20/pablomc20/pablomc28:latest