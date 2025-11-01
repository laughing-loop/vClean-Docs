---
sidebar_position: 4
title: FAQ
---

# Frequently Asked Questions

Common questions about V-Clean Enterprise.

---

## General Questions

### What is V-Clean Enterprise?

V-Clean Enterprise is a free, open-source cleaning utility for Windows that helps you:
- Clean temporary files and cache
- Remove USB viruses
- Restore files hidden by malware
- Monitor system health
- Optimize drive performance

### Is V-Clean Enterprise free?

Yes, completely free. It's open source under the MIT License with no premium versions or hidden costs.

### Is it safe to use?

Yes. V-Clean Enterprise is:
- **Open source** - All code is publicly available for review
- **No telemetry** - Zero data collection
- **Local operations** - Everything runs on your PC
- **Confirmation dialogs** - Asks before dangerous operations

### Does it work on Windows 11?

Yes, V-Clean Enterprise supports:
- Windows 11 (64-bit)
- Windows 10 (64-bit)

### How big is the download?

The standalone executable is only **117 KB**. The MSI installer is **344 KB**.

---

## Installation & Setup

### Do I need to install it?

No. The standalone executable (`VClean-Launcher.exe`) requires no installation. Just download and run.

Alternatively, use the MSI installer for:
- Start Menu shortcuts
- Add/Remove Programs integration
- Desktop shortcut

### Why does Windows SmartScreen block it?

Windows SmartScreen shows warnings for unsigned executables. This is expected behavior.

**To run:**
1. Click "More info"
2. Click "Run anyway"

We're working on code signing through SignPath Foundation to eliminate this warning.

### Why does my antivirus flag it?

Some antivirus software flags PS2EXE compiled executables as false positives.

**Solutions:**
- Add an exception in your antivirus
- Verify the file hash matches our official release
- Download only from our official GitHub repository

### Do I need Administrator rights?

Yes. V-Clean Enterprise requires Administrator rights to:
- Access system folders
- Clean Windows Update cache
- Modify file attributes
- Remove malware

---

## Usage Questions

### How do I clean my USB drive?

1. Insert your USB drive
2. Launch V-Clean Enterprise
3. Select your USB drive from the dropdown
4. Choose a cleaning profile (Quick/Standard/Deep)
5. Click "Start Cleaning"

### What's the difference between cleaning profiles?

| Profile | Duration | What It Cleans |
|:--------|:---------|:---------------|
| **Quick** | 30 sec | Basic temp files |
| **Standard** | 2-3 min | Temp files + browser cache |
| **Deep** | 5-10 min | Full system cleaning |
| **Custom** | Varies | Choose specific operations |

### Will it delete my personal files?

No. V-Clean Enterprise only removes:
- Temporary files
- Cache files
- System junk
- Known malware

Your documents, photos, and personal files are safe.

### Can I undo a cleaning operation?

No. Deleted files cannot be recovered. However:
- Confirmation dialogs appear before dangerous operations
- Only temporary/cache files are removed
- Personal files are never touched

**Recommendation:** Create a backup before deep cleaning if you're unsure.

### How do I remove shortcut viruses?

1. Launch V-Clean Enterprise
2. Go to **Tools** → **Shortcut Virus Cleaner**
3. Select the infected drive
4. Click "Scan and Clean"
5. The tool will:
   - Remove malicious shortcuts
   - Restore hidden files
   - Repair file attributes

---

## Features

### Does it have a virus scanner?

Yes. V-Clean Enterprise includes a built-in scanner that detects:
- Autorun viruses
- USB malware
- Suspicious executables
- Malicious shortcuts

**Note:** It's not a replacement for full antivirus software, but effective for common USB threats.

### Can it clean browser cache?

Yes. Supported browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Internet Explorer

### Does it work offline?

Yes. All cleaning operations work offline. Internet is only needed for:
- Update checking (optional)
- Downloading the application

### Can I schedule automatic cleaning?

Currently, scheduled cleaning requires manual setup:

1. Open Task Scheduler
2. Create a new task
3. Set trigger (daily/weekly)
4. Action: Run `VClean-Launcher.exe` with command-line arguments

**Coming soon:** Built-in scheduled cleaning feature.

---

## Technical Questions

### What technology is it built with?

- **Language:** PowerShell
- **UI Framework:** Windows Forms
- **Compiler:** PS2EXE
- **Installer:** WiX Toolset

### Is the source code available?

Yes. Full source code is available at:
https://github.com/laughing-loop/vClean-Utility

### Can I contribute?

Absolutely! See our [Contribution Guide](/contribute) for details.

### Does it collect any data?

No. V-Clean Enterprise:
- **No telemetry** - Zero data collection
- **No analytics** - No usage tracking
- **No internet calls** - Except update checking (optional)
- **No accounts** - No registration required

### How does the update checker work?

The update checker:
1. Connects to GitHub API
2. Checks latest release version
3. Compares with current version
4. Prompts to download if newer version exists

**Privacy:** Only checks version numbers, no personal data sent.

---

## Troubleshooting

### The application won't start

**Solutions:**
1. Run as Administrator (right-click → "Run as administrator")
2. Check Windows version (requires Windows 10/11 64-bit)
3. Verify you have 2GB+ RAM
4. Check antivirus isn't blocking it

### Cleaning is very slow

**Causes:**
- Large number of files to clean
- Slow drive (HDD vs SSD)
- Antivirus scanning files during deletion

**Solutions:**
- Use Quick Clean instead of Deep Clean
- Temporarily disable antivirus during cleaning
- Close other applications

### "Access Denied" errors

**Cause:** Insufficient permissions

**Solution:** Run as Administrator

### Theme not switching

**Cause:** Theme changes require restart

**Solution:** Close and reopen V-Clean Enterprise

### Update checker says "No internet connection"

**Solutions:**
1. Check your internet connection
2. Check if firewall is blocking the app
3. Verify DNS is working
4. Try again later (GitHub API may be down)

---

## Comparison

### How is it different from CCleaner?

| Feature | V-Clean | CCleaner |
|:--------|:--------|:---------|
| **Price** | Free | Freemium |
| **Open Source** | Yes | No |
| **Size** | 117 KB | ~50 MB |
| **Telemetry** | None | Yes (in free version) |
| **USB Focus** | Yes | Limited |
| **Virus Removal** | Yes | No |

### How is it different from Windows Disk Cleanup?

V-Clean Enterprise offers:
- More cleaning options
- USB virus removal
- Shortcut virus cleaner
- Modern UI with themes
- Real-time system monitoring
- Portable execution

---

## Enterprise Questions

### Can I deploy it in my organization?

Yes. V-Clean Enterprise supports:
- MSI installer for Group Policy deployment
- Silent installation
- Centralized configuration
- Command-line automation

See [Enterprise Deployment](/enterprise-deployment) for details.

### Is there a commercial license?

No. V-Clean Enterprise is MIT Licensed and free for:
- Personal use
- Commercial use
- Enterprise deployment
- Modification and redistribution

### Can I customize it for my organization?

Yes. As open-source software, you can:
- Modify the source code
- Add your branding
- Create custom builds
- Redistribute (with attribution)

---

## Support

### Where can I get help?

- **Documentation:** https://laughing-loop.github.io/vClean-Docs/
- **GitHub Issues:** https://github.com/laughing-loop/vClean-Utility/issues
- **Troubleshooting Guide:** [/troubleshooting](/troubleshooting)

### How do I report a bug?

1. Go to [GitHub Issues](https://github.com/laughing-loop/vClean-Utility/issues)
2. Click "New Issue"
3. Provide:
   - Windows version
   - V-Clean version
   - Steps to reproduce
   - Error messages
   - Screenshots (if applicable)

### How do I request a feature?

Same process as bug reports:
1. Check existing issues first
2. Create new issue with "Feature Request" label
3. Describe the feature and use case

---

## Updates & Releases

### How often are updates released?

Updates are released as needed for:
- Bug fixes
- New features
- Security patches
- Performance improvements

### How do I update?

**Method 1:** Built-in update checker
1. Help → Check for Updates
2. Download new version if available

**Method 2:** Manual download
1. Visit [GitHub Releases](https://github.com/laughing-loop/vClean-Utility/releases)
2. Download latest version

### Will my settings be preserved?

- **Standalone:** Settings are not preserved between versions
- **MSI Installer:** Settings in `%APPDATA%` are preserved

---

## License & Legal

### What license is it under?

MIT License - Free for personal and commercial use.

### Can I redistribute it?

Yes, with attribution. See [LICENSE](/license) for details.

### Is there a warranty?

No. Software is provided "as is" without warranty. See MIT License for full terms.

---

Still have questions? [Open an issue on GitHub](https://github.com/laughing-loop/vClean-Utility/issues)
