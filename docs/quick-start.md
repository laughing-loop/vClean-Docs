---
sidebar_position: 5
title: Quick Start Guide
---

# Quick Start Guide

Get started with V-Clean Enterprise in minutes.

---

## Step 1: Download

Download the latest version from our [Download page](/download).

**Recommended:** Standalone executable (117 KB)
- No installation required
- Portable
- Run from anywhere

[**Download VClean-Launcher.exe**](https://github.com/laughing-loop/vClean-Utility/releases/latest/download/VClean-Launcher.exe)

---

## Step 2: Run the Application

### First Time Launch

1. **Locate the downloaded file**
   - Usually in your `Downloads` folder

2. **Run as Administrator**
   - Right-click `VClean-Launcher.exe`
   - Select "Run as administrator"

3. **Handle Windows SmartScreen** (if appears)
   - Click "More info"
   - Click "Run anyway"

:::tip Why Administrator Rights?

V-Clean Enterprise needs Administrator rights to:
- Access system folders
- Clean Windows Update cache
- Remove malware
- Modify file attributes

:::

---

## Step 3: Interface Overview

When V-Clean Enterprise launches, you'll see:

### Main Window

![V-Clean Main Interface](/img/screenshot-main.png)

**Key Components:**

1. **Menu Bar** (Top)
   - File, Tools, View, Help menus
   - Keyboard shortcuts available

2. **Drive Selector** (Left side)
   - Dropdown to select target drive
   - Shows free space and total capacity

3. **Cleaning Options** (Center)
   - Quick, Standard, Deep, Custom profiles
   - Individual cleanup checkboxes

4. **System Health** (Right side)
   - Disk space monitor
   - Memory usage
   - Refresh button

5. **Console Log** (Bottom)
   - Real-time operation log
   - Shows progress and results

6. **Control Buttons** (Bottom)
   - Start Cleaning
   - Stop
   - Exit

---

## Step 4: Choose Your Cleaning Profile

V-Clean Enterprise offers 4 cleaning profiles:

### 🟢 Quick Clean (Recommended for beginners)

**Duration:** ~30 seconds  
**What it cleans:**
- Temporary files
- Windows Temp folder
- User Temp folder

**Best for:**
- Regular maintenance
- Quick cleanup
- First-time users

### 🟡 Standard Clean

**Duration:** 2-3 minutes  
**What it cleans:**
- Everything in Quick Clean
- Browser cache (Chrome, Firefox, Edge)
- Prefetch files
- Thumbnail cache

**Best for:**
- Weekly maintenance
- Moderate cleanup needs
- Freeing up space

### 🔴 Deep Clean

**Duration:** 5-10 minutes  
**What it cleans:**
- Everything in Standard Clean
- Windows Update cache
- Font cache
- System logs
- Recycle Bin

**Best for:**
- Monthly maintenance
- Maximum space recovery
- System optimization

### ⚙️ Custom Clean

**Duration:** Varies  
**What it cleans:**
- Choose specific operations
- Full control over what gets cleaned

**Best for:**
- Advanced users
- Specific cleaning needs
- Targeted operations

---

## Step 5: Start Cleaning

### For USB Drive Cleaning

1. **Insert your USB drive**

2. **Select the drive**
   - Click the drive dropdown
   - Choose your USB drive (e.g., "E:\ USB Drive")

3. **Choose profile**
   - Click "Quick Clean" for basic cleaning
   - Or "Standard Clean" for thorough cleaning

4. **Start**
   - Click "Start Cleaning" button
   - Watch progress in console log

5. **Wait for completion**
   - Progress bar shows status
   - Console shows what's being cleaned

6. **Done!**
   - Message appears when complete
   - Check results in console log

### For System Drive Cleaning

:::warning Caution

Cleaning your system drive (C:) requires extra care. Always ensure you have backups.

:::

1. **Select C: drive** from dropdown

2. **Choose "Standard Clean"** (recommended)
   - Avoid "Deep Clean" unless you know what you're doing

3. **Review what will be cleaned**
   - Check the console for details

4. **Start cleaning**

5. **Restart if prompted**
   - Some operations may require restart

---

## Step 6: Remove Viruses (Optional)

### Scan for USB Viruses

1. **Go to Tools menu**
   - Click "Tools" → "Virus Scanner"

2. **Select drive to scan**
   - Choose your USB drive

3. **Click "Scan"**
   - Wait for scan to complete

4. **Review results**
   - Threats found will be listed

5. **Remove threats**
   - Click "Remove Selected"
   - Confirm deletion

### Clean Shortcut Viruses

1. **Go to Tools menu**
   - Click "Tools" → "Shortcut Virus Cleaner"

2. **Select infected drive**

3. **Click "Scan and Clean"**

4. **Wait for process**
   - Removes malicious shortcuts
   - Restores hidden files
   - Repairs file attributes

5. **Check results**
   - Console shows restored files

---

## Step 7: Monitor System Health

### View System Information

The System Health panel (right side) shows:

**Disk Space:**
- Free space
- Used space
- Total capacity
- Visual progress bar

**Memory Usage:**
- Total RAM
- Available RAM
- Used percentage

**Refresh:**
- Click "Refresh" button to update
- Auto-updates every 5 seconds

### Export System Report

1. **Click View menu**
2. **Select "System Health Report"**
3. **Choose save location**
4. **Report saved as text file**

---

## Step 8: Export Logs (Optional)

Save operation logs for troubleshooting or records:

1. **Click File menu**
2. **Select "Export Log"** (or press `Ctrl+E`)
3. **Choose save location**
4. **Select file format:**
   - `.txt` - Plain text
   - `.log` - Log file

---

## Common Tasks

### Clean Multiple Drives

1. Clean first drive
2. Wait for completion
3. Select next drive from dropdown
4. Repeat cleaning process

### Schedule Regular Cleaning

**Manual Method:**

1. Open Windows Task Scheduler
2. Create new task
3. Set trigger (e.g., weekly)
4. Action: Run `VClean-Launcher.exe`
5. Add arguments: `/silent /profile:quick`

**Coming soon:** Built-in scheduler

### Check for Updates

1. **Click Help menu**
2. **Select "Check for Updates"**
3. **If update available:**
   - Click "Yes" to download
   - Opens GitHub releases page
4. **Download new version**
5. **Replace old executable**

---

## Keyboard Shortcuts

Speed up your workflow with these shortcuts:

| Shortcut | Action |
|:---------|:-------|
| `Ctrl+E` | Export log |
| `F5` | Refresh system health |
| `Alt+F4` | Exit application |
| `F1` | Open help |

---

## Tips for Best Results

### Before Cleaning

✅ **Close all applications**
- Browsers, Office apps, etc.
- Ensures files aren't in use

✅ **Backup important data**
- Especially before Deep Clean
- Better safe than sorry

✅ **Check free space**
- Note current free space
- Compare after cleaning

### During Cleaning

✅ **Don't interrupt**
- Let the process complete
- Interrupting may leave partial cleanup

✅ **Watch the console**
- Monitor progress
- Check for errors

### After Cleaning

✅ **Restart if needed**
- Some operations benefit from restart
- Clears memory cache

✅ **Check results**
- Compare free space before/after
- Review console log

✅ **Empty Recycle Bin**
- If not done automatically
- Frees up additional space

---

## Troubleshooting Quick Fixes

### Application Won't Start

**Solution:** Run as Administrator

### "Access Denied" Errors

**Solution:** Ensure running as Administrator

### Cleaning Very Slow

**Solutions:**
- Use Quick Clean instead
- Close other applications
- Check if antivirus is scanning

### Theme Not Changing

**Solution:** Restart application

---

## Next Steps

Now that you're familiar with the basics:

📖 **Learn More:**
- [Features](/features) - Detailed feature documentation
- [User Guide](/user-guide) - Advanced usage
- [Command Line](/command-line) - Automation options

🛠️ **Advanced:**
- [MSI Installer](/msi-installer) - Professional installation
- [Enterprise Deployment](/enterprise-deployment) - Organization-wide deployment

❓ **Need Help:**
- [FAQ](/faq) - Common questions
- [Troubleshooting](/troubleshooting) - Problem solving

---

**Congratulations!** You're now ready to use V-Clean Enterprise effectively. 🎉

[Download Now](/download) | [View Features](/features) | [Get Help](/faq)
