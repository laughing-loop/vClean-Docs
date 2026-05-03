---
sidebar_position: 2
title: Download
---

# Download

Install the current V-Clean Security Console preview for Windows.

<div className="vc-release-card">
  <div>
    <h2>v3.1.0-security-console</h2>
    <p>Self-contained Windows x64 ZIP with a setup executable, WPF app, and bundled agent.</p>
    <div className="vc-pill-row">
      <span className="vc-pill">Preview release</span>
      <span className="vc-pill">125 MB ZIP</span>
      <span className="vc-pill">Windows 10/11 x64</span>
    </div>
  </div>
  <a className="vc-button vc-button--primary" href="https://github.com/laughing-loop/vClean-BundlePack/releases/download/v3.1.0-security-console/VClean-Security-Console-win-x64.zip">Download ZIP</a>
</div>

:::warning Unsigned preview build

The setup executable is currently unsigned. Windows SmartScreen can warn on first launch. Use the hash below to verify the file and download only from the official GitHub release.

:::

## Install

<div className="vc-step" data-step="1">
  <h3>Download the ZIP</h3>
  <p>Use the release asset named <code>VClean-Security-Console-win-x64.zip</code>.</p>
</div>

<div className="vc-step" data-step="2">
  <h3>Extract the package</h3>
  <p>Right-click the ZIP, select <strong>Extract All</strong>, then open the extracted folder.</p>
</div>

<div className="vc-step" data-step="3">
  <h3>Run setup</h3>
  <p>Double-click <code>VClean-Security-Console-Setup.exe</code>, or run the command below from PowerShell.</p>
</div>

```powershell
.\VClean-Security-Console-Setup.exe --launch
```

Default install location:

```text
%LOCALAPPDATA%\Programs\V-Clean Security Console
```

For an all-users install, run PowerShell as Administrator:

```powershell
.\VClean-Security-Console-Setup.exe --all-users --launch
```

## Verify the download

Official release asset:

[VClean-Security-Console-win-x64.zip](https://github.com/laughing-loop/vClean-BundlePack/releases/download/v3.1.0-security-console/VClean-Security-Console-win-x64.zip)

SHA256:

<p className="vc-hash">5ba2cb1912b3fa537bd95b39deba410ee762c64d2a14824f6421763486641d63</p>

Verify in PowerShell:

```powershell
Get-FileHash -Path ".\VClean-Security-Console-win-x64.zip" -Algorithm SHA256
```

## What is inside the package

| Item | Purpose |
|:--|:--|
| `VClean-Security-Console-Setup.exe` | User-facing installer and uninstaller |
| `app\Vclean.UI.exe` | WPF security console |
| `agent\Vclean.Agent.Service.exe` | Bundled local agent process |
| `README-INSTALL.txt` | Offline install notes |

## Connection behavior

The installed UI is designed to stay connected without making users manually start a service:

1. The UI probes the named-pipe agent.
2. If unavailable, the UI starts the bundled agent from the installed package.
3. The UI reconnects over `vclean-agent-pipe`.
4. If startup fails, the UI falls back to in-memory demo data so the shell still opens.

## Uninstall

Use the Start Menu shortcut named **Uninstall V-Clean Security Console**, or run:

```powershell
"%LOCALAPPDATA%\Programs\V-Clean Security Console\VClean-Security-Console-Setup.exe" --uninstall
```

## Release links

- [Release page](https://github.com/laughing-loop/vClean-BundlePack/releases/tag/v3.1.0-security-console)
- [Source repository](https://github.com/laughing-loop/vClean-BundlePack)
- [Report a release issue](https://github.com/laughing-loop/vClean-BundlePack/issues)
