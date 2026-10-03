# Control runtime diagnosis — 3 October 2026

The live node_repl tool fails even for `1+1`, before importing the computer-control package: `failed to write kernel assets: The system cannot find the path specified. (os error 3)`.

The configured Node executable, node_repl executable and Windows temporary directories exist. A separate standard MCP startup of the same node_repl executable successfully evaluated JavaScript and returned 2. No browser or desktop automation was performed by that diagnostic process. This isolates the observed failure to the existing MCP session's startup/asset-writing state; it does not establish which missing path caused it.

Resetting the JavaScript kernel did not repair it. Existing long-running server processes were observed; they were not terminated because doing so could affect other connected sessions. No configuration, permissions, security settings or browser data were changed.

Required next step: fully quit and reopen the Codex application so it starts fresh MCP servers, then test the connected tool and browser inventory. Application restart has not been performed or verified. Host shutdown/restart is unnecessary. Social publication remains pending. A missing Node installation was not found.
