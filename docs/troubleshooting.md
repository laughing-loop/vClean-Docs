---
sidebar_position: 6
title: Troubleshooting
---

# Troubleshooting

## The UI does not open

Run it from PowerShell to capture errors:

```powershell
cd "$env:LOCALAPPDATA\Programs\V-Clean Security Console\app"
.\Vclean.UI.exe
```

If nothing appears, check Event Viewer:

```text
Windows Logs -> Application
```

Look for `.NET Runtime`, `Application Error`, or `Vclean.UI` entries.

## The UI opens but shows in-memory fallback

The app could not connect to the bundled agent.

Check whether the agent exists:

```powershell
Test-Path "$env:LOCALAPPDATA\Programs\V-Clean Security Console\agent\Vclean.Agent.Service.exe"
```

Start the agent manually for diagnosis:

```powershell
cd "$env:LOCALAPPDATA\Programs\V-Clean Security Console\agent"
.\Vclean.Agent.Service.exe
```

Then reopen the UI. If the badge changes to `Transport: Named Pipes (Live Agent)`, the IPC path is working.

## Named pipe says all instances are busy

This can happen if an older agent process is still holding the pipe.

Stop old agent processes:

```powershell
Get-Process Vclean.Agent.Service -ErrorAction SilentlyContinue | Stop-Process
```

Then start the UI again.

## Windows SmartScreen blocks setup

This is expected for the unsigned preview build.

1. Confirm you downloaded from the official GitHub release.
2. Verify the ZIP hash.
3. Click **More info**.
4. Click **Run anyway** only if the hash matches.

## Verify the ZIP hash

```powershell
Get-FileHash -Path ".\VClean-Security-Console-win-x64.zip" -Algorithm SHA256
```

Expected SHA256:

<p className="vc-hash">5ba2cb1912b3fa537bd95b39deba410ee762c64d2a14824f6421763486641d63</p>

## Setup says access denied

For current-user install, run from a folder you can write to, such as Downloads.

For all-users install, run PowerShell as Administrator:

```powershell
.\VClean-Security-Console-Setup.exe --all-users --launch
```

## The setup executable will not run from the ZIP

Extract the package first. Windows can block or partially virtualize execution when a program is launched from inside a compressed folder.

Correct flow:

1. Right-click ZIP.
2. Select **Extract All**.
3. Open the extracted folder.
4. Run `VClean-Security-Console-Setup.exe`.

## The agent window appears briefly

The UI starts the agent in the background when needed. If you start the agent manually, it is a console process and will keep a terminal open. That is expected for the current preview. A proper Windows service registration path is planned.

## Clean reinstall

Uninstall:

```powershell
"%LOCALAPPDATA%\Programs\V-Clean Security Console\VClean-Security-Console-Setup.exe" --uninstall
```

If needed, remove leftover processes:

```powershell
Get-Process Vclean.UI,Vclean.Agent.Service -ErrorAction SilentlyContinue | Stop-Process
```

Then reinstall from the extracted package:

```powershell
.\VClean-Security-Console-Setup.exe --launch
```

## Build troubleshooting

If building from source:

```powershell
dotnet --version
dotnet restore Vclean.sln
dotnet build Vclean.sln -c Release -p:UseSharedCompilation=false
```

Build the package:

```powershell
powershell -ExecutionPolicy Bypass -File installer\dotnet\Build-Distribution.ps1 -Clean
```

## What to include in bug reports

Include:

- Windows edition and version
- Release tag: `v3.1.0`
- Install scope: current user or all users
- Transport badge shown in the UI
- Event Viewer error text if the UI crashes
- Agent console output if the agent fails

[Open a GitHub issue](https://github.com/laughing-loop/vClean-Utility/issues)
