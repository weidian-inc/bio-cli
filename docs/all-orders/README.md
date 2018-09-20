# Init Project

```bash
bio init <scaffoldName in npm registry | scaffold short name>
```

+   description

    It will:
    
    +   init project files in current directory.
    +   run `npm install` automatically.

+   params
    +   `scaffoldName in npm registry`

        bio will search for scaffoldName from npm registry

    +   `scaffold short name`

        By default, bio provides shortName for scaffolds in npm as list:

        +   `vue` for `bio-scaffold-vue`
        +   `react` for `bio-scaffold-react`
        +   `pure` for `bio-scaffold-pure`

+   examples

    init a vue project: `bio init bio-scaffold-vue` or `bio init vue`

    init a react project: `bio init bio-scaffold-react` or `bio init react`

    init a pure project: `bio init bio-scaffold-pure` or `bio init pure`

# Compile Project

```bash
bio run <taskName that scaffold supports> [-n, --no-watch]
```

+   description

    It will run task that is only supported by scaffold, which was defined in `bio init <scaffoldName>`.

+   param
    +   `<taskName that scaffold supports>`

        By default, these tasks are supported in bio inside scaffolds as list:

        +   `dev-daily`: develop in daily envioronment.
        +   `dev-pre`: develop in re envioronment.
        +   `dev-prod`: develop in prod envioronment.
        +   `build-daily`: build in daily envioronment.
        +   `build-pre`: build in pre envioronment.
        +   `build-prod`: build in prod envioronment.

    +   `-n, --no-watch`

        `bio` will lanch a local server to watch file changes by default.

        `-n, --no-watch` will close this server.

+   examples

    +   run task `dev-daily` and watch file changes: `bio run dev-daily`
    +   run task `dev-daily` and don't watch file changes: `bio run dev-daily -n`
    +   run task `build-daily` and don't watch file changes: `bio run build-daily -n`
    
# Mock

```bash
bio mock [port]
```

`bio` will lanch a local mock server and create a test file named as `./mock/test.json`.

`7000` is the default server port, and it can be changed by offering port.

example:

```bash
bio mock 8000
```

# Lint

+   init lint config

    ```bash
    bio lint init
    ```

+   run lint

    ```bash
    bio lint [--fix] [-w, --watch]
    ```

    examples:

    +   auto fixing and only run once: `bio lint --fix`
    +   not auto fixing and only run once: `bio lint`
    +   auto fixing and watching file changes: `bio lint --fix -w`
    +   not auto fixing and watching file changes: `bio lint -w`

# Help

```bash
bio help
```

It will show helps.