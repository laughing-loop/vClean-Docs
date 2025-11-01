---
sidebar_position: 2
title: Download
---

# Download V-Clean Enterprise

Get the latest version of V-Clean Enterprise for Windows.

---

## Latest Release - v3.0.0

Released: November 1, 2025

---

## Standalone Executable (Recommended)

**VClean-Launcher.exe** - 117 KB

No installation required. Just download and run.

[**Download VClean-Launcher.exe**](https://github.com/laughing-loop/vClean-Utility/releases/latest/download/VClean-Launcher.exe)

:::info How to Use

1. Download the file
2. Right-click and select "Run as administrator"
3. If Windows SmartScreen appears, click "More info" → "Run anyway"
4. The application will launch

:::

---

## MSI Installer

**VClean-Enterprise-Setup.msi** - 344 KB

Professional installer with Start Menu shortcuts and Add/Remove Programs integration.

[**Download MSI Installer**](https://github.com/laughing-loop/vClean-Utility/releases/latest)

### Installation

**Interactive:**
```cmd
VClean-Enterprise-Setup.msi
```

**Silent:**
```cmd
msiexec /i VClean-Enterprise-Setup.msi /quiet
```

**Silent with Log:**
```cmd
msiexec /i VClean-Enterprise-Setup.msi /quiet /l*v install.log
```

---

## All Releases

View all versions and release notes:

[**GitHub Releases Page**](https://github.com/laughing-loop/vClean-Utility/releases)

---

## Verify Download

### File Hashes

You can verify the integrity of your download using these hashes:

**VClean-Launcher.exe (v3.0.0)**
```
SHA256: [Will be added with release]
```

### Verify in PowerShell

```powershell
Get-FileHash -Path "VClean-Launcher.exe" -Algorithm SHA256
```

---

## System Requirements

- **Operating System**: Windows 10/11 (64-bit)
- **RAM**: 2 GB minimum
- **Disk Space**: 10 MB free space
- **Permissions**: Administrator rights required

---

## Installation Locations

### Standalone Executable
- Run from any location
- No installation required
- Portable - can run from USB drive

### MSI Installer
- Installed to: `C:\Program Files\V-Clean Enterprise\`
- Start Menu: `Start Menu\Programs\V-Clean Enterprise\`
- Desktop shortcut: Optional during installation

---

## Update Checking

V-Clean Enterprise includes a built-in update checker:

1. Open V-Clean Enterprise
2. Go to **Help** → **Check for Updates**
3. The app will check GitHub for new releases
4. If an update is available, you'll be prompted to download

---

## Troubleshooting Downloads

### Windows SmartScreen Warning

**Issue**: Windows shows "Windows protected your PC"

**Solution**:
1. Click "More info"
2. Click "Run anyway"
3. This is expected for unsigned executables

We're working on code signing through SignPath Foundation to eliminate this warning.

### Antivirus False Positive

**Issue**: Antivirus software flags the executable

**Solution**:
1. This is a false positive common with PS2EXE compiled executables
2. Add an exception in your antivirus software
3. Verify the file hash matches the official release
4. Download only from our official GitHub repository

### Download Blocked by Browser

**Issue**: Browser blocks the download

**Solution**:
1. Click "Keep" or "Keep anyway" in your browser
2. Verify you're downloading from: `github.com/laughing-loop/vClean-Utility`

---

## Source Code

Want to build from source?

```bash
git clone https://github.com/laughing-loop/vClean-Utility.git
cd vClean-Utility
# See README.md for build instructions
```

---

## Need Help?

- [FAQ](/faq)
- [Troubleshooting Guide](/troubleshooting)
- [GitHub Issues](https://github.com/laughing-loop/vClean-Utility/issues)
