## Debugging

For frontend development run:

```
make frontdev
```

Run "Launch Sky View" to debug both frontend and backend in vscode.



## Release

Recommended automated flow:

```
make release VERSION=v0.2.2 MESSAGE="Release v0.2.2"
```

Build and tag Docker image for that release:

```
make release-docker VERSION=v0.2.2 MESSAGE="Release v0.2.2"
```

Push the image:

```
make docker-push
```

