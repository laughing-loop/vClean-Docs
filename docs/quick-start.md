---
sidebar_position: 4
title: Quick Start
---

# Quick Start

This guide gets the current Windows preview installed and running.

## 1. Download

Download the release ZIP:

[VClean-Security-Console-win-x64.zip](https://github.com/laughing-loop/vClean-Utility/releases/download/v3.1.0/VClean-Security-Console-win-x64.zip)

## 2. Extract

Extract the ZIP before running setup. Do not run the setup executable from inside the compressed folder.

Expected folder contents:

```text
VClean-Security-Console
  VClean-Security-Console-Setup.exe
  README-INSTALL.txt
  app\
  agent\
```

## 3. Install and launch

From the extracted folder:

```powershell
.\VClean-Security-Console-Setup.exe --launch
```

The setup executable installs to your user profile by default:

```text
%LOCALAPPDATA%\Programs\V-Clean Security Console
```

It also creates Start Menu entries for launching and uninstalling.

## 4. Confirm the UI is connected

Open the V-Clean Security Console and check the workspace badge in the left rail.

| Badge | Meaning |
|:--|:--|
| `Transport: Named Pipes (Live Agent)` | The UI is talking to the bundled agent |
| `Transport: In-memory Fallback` | The agent could not start or connect, so safe demo data is being used |

If the UI falls back, restart the app once. If it still falls back, see [Troubleshooting](/troubleshooting).

## 5. Run a scan workflow

1. Open **Scan Center**.
2. Choose **Quick Scan**, **Full Scan**, or **Custom Scan**.
3. Watch the progress indicator.
4. Review the completion state.

:::info

The scan flow is currently a scaffold. It validates UI-to-agent control flow and progress updates. Real detection engines are a roadmap item.

:::

## 6. Review quarantine

1. Open **Quarantine**.
2. Click **Refresh**.
3. Review isolated items.
4. Use **Restore** or **Delete** on a selected item.

## 7. Change theme

Use the dark/light selector in the app header. The current WPF theme system uses dynamic resources so dark and light mode update without restarting.

## Useful commands

Current-user install:

```powershell
.\VClean-Security-Console-Setup.exe --launch
```

All-users install:

```powershell
.\VClean-Security-Console-Setup.exe --all-users --launch
```

Silent install:

```powershell
.\VClean-Security-Console-Setup.exe --quiet
```

Uninstall:

```powershell
"%LOCALAPPDATA%\Programs\V-Clean Security Console\VClean-Security-Console-Setup.exe" --uninstall
```

## Build from source

Source builds are a maintainer workflow during the preview. Public users should use the signed release channel when it is available; for now, use the ZIP package above.

```powershell
git clone https://github.com/laughing-loop/vClean-BundlePack.git
cd vClean-BundlePack
dotnet build Vclean.sln -c Release
powershell -ExecutionPolicy Bypass -File installer\dotnet\Build-Distribution.ps1 -Clean
```
