# example-react-with-deno

This repository is an example [React](https://reactjs.org/) apps and bundled
with [packup](https://packup.deno.dev/) on [Deno](https://deno.land/).

## Install deno

See https://deno.land/#installation

## Install packup

```shell
$ deno run -A https://deno.land/x/packup@v0.1.12/install.ts
```

## Development

```shell
$ packup serve ./index.html
```

## Build React by packup

```shell
$ packup build ./index.html
```

## Start HTTP Server

```shell
$ deno run --allow-net --allow-read serve.ts
```

## References

- https://packup.deno.dev/
