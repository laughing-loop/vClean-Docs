---
sidebar_position: 5
title: FAQ
---

# FAQ

## Is this the same as the old V-Clean launcher?

No. The new V-Clean Security Console is the .NET 8 Windows direction. It uses a WPF desktop shell, shared core contracts, a named-pipe agent, and an installable setup executable.

The older utility pages referenced a standalone launcher; the current preview release is:

[VClean-Security-Console-win-x64.zip](https://github.com/laughing-loop/vClean-BundlePack/releases/download/v3.1.0-security-console/VClean-Security-Console-win-x64.zip)

## Is it production-ready antivirus software?

No. Treat v3.1.0 as a preview. It validates the app shell, install flow, service communication, scan workflow, and quarantine UX. Real detection engines, service registration, code signing, and broader validation are still required.

## Do users need to install .NET?

No. The Windows package is published self-contained for `win-x64`, so the required .NET runtime is bundled.

## Why is the ZIP around 125 MB?

The package includes self-contained .NET runtime files for the WPF app, the agent process, and setup executable. That is larger than a script launcher but more reliable for users who do not have the correct SDK/runtime installed.

## Why is there a SmartScreen warning?

The preview executable is unsigned. Windows SmartScreen commonly warns on unsigned executables, especially new downloads. Verify the SHA256 hash and download only from the official GitHub release.

## What should the hash be?

`7dde2f39e02b487e99705a404f34013e04690c26cf5235f31d05272c1d14e764`

Verify it:

```powershell
Get-FileHash -Path ".\VClean-Security-Console-win-x64.zip" -Algorithm SHA256
```

## Does the UI connect to the agent automatically?

Yes, it tries to. The startup flow is:

1. Probe the named-pipe agent.
2. Start the bundled agent if the pipe is unavailable.
3. Retry named-pipe connection.
4. Fall back to in-memory demo data only if the agent cannot start or connect.

## What does in-memory fallback mean?

It means the UI still opens even if the agent is unreachable. The scan/quarantine values are safe demo data, not live agent data. The left rail shows this with `Transport: In-memory Fallback`.

## Where does it install?

Current-user default:

```text
%LOCALAPPDATA%\Programs\V-Clean Security Console
```

All-users install:

```text
%ProgramFiles%\V-Clean Security Console
```

Run all-users setup from an elevated PowerShell session.

## Can it be installed silently?

Yes:

```powershell
.\VClean-Security-Console-Setup.exe --quiet
```

## Can it be uninstalled?

Yes. Use the Start Menu uninstall shortcut or run:

```powershell
"%LOCALAPPDATA%\Programs\V-Clean Security Console\VClean-Security-Console-Setup.exe" --uninstall
```

## Is there an MSI?

Not yet. The current release is ZIP plus setup executable. MSI/MSIX packaging is the right next step before stable public distribution because it improves enterprise deployment, repair, uninstall metadata, and trust workflow.

## Where is the source code?

The app source is here:

[https://github.com/laughing-loop/vClean-BundlePack](https://github.com/laughing-loop/vClean-BundlePack)

## How do I report a problem?

Open an issue and include:

- Windows version
- V-Clean release tag
- Whether the UI shows named-pipe transport or fallback transport
- Exact error message or screenshot
- Steps to reproduce

[Report an issue](https://github.com/laughing-loop/vClean-BundlePack/issues)
