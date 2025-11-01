---
sidebar_position: 6
title: Troubleshooting
---

# Troubleshooting Guide

Solutions to common problems with V-Clean Enterprise.

---

## Installation Issues

### Windows SmartScreen Blocks Download

**Problem:** Browser or Windows blocks the download

**Solutions:**

1. **In Browser:**
   - Click "Keep" or "Keep anyway"
   - Verify URL is `github.com/laughing-loop/vClean-Utility`

2. **Windows SmartScreen:**
   - Click "More info"
   - Click "Run anyway"

3. **Verify File:**
   ```powershell
   Get-FileHash -Path "VClean-Launcher.exe" -Algorithm SHA256
   ```
   Compare with official hash on releases page

### Antivirus Flags as Malware

**Problem:** Antivirus software quarantines or blocks the file

**Cause:** PS2EXE compiled executables sometimes trigger false positives

**Solutions:**

1. **Add Exception:**
   - Open your antivirus settings
   - Add `VClean-Launcher.exe` to exclusions
   - Restore from quarantine if needed

2. **Verify Authenticity:**
   - Download only from official GitHub
   - Check file hash
   - Scan with multiple antivirus engines

3. **Report False Positive:**
   - Submit to your antivirus vendor
   - Helps improve detection accuracy

### MSI Installer Fails

**Problem:** MSI installation fails or rolls back

**Solutions:**

1. **Run as Administrator:**
   ```cmd
   Right-click MSI → "Run as administrator"
   ```

2. **Check Event Viewer:**
   ```
   Windows Logs → Application
   Look for MsiInstaller errors
   ```

3. **Clean Previous Installation:**
   ```cmd
   msiexec /x {ProductCode} /quiet
   ```

4. **Repair Windows Installer:**
   ```cmd
   msiexec /unregister
   msiexec /regserver
   ```

---

## Launch Issues

### Application Won't Start

**Problem:** Double-clicking does nothing or shows error

**Solutions:**

1. **Run as Administrator:**
   - Right-click executable
   - Select "Run as administrator"

2. **Check System Requirements:**
   - Windows 10/11 (64-bit)
   - 2 GB RAM minimum
   - .NET Framework 4.7.2+

3. **Check PowerShell:**
   ```powershell
   $PSVersionTable.PSVersion
   # Should be 5.1 or higher
   ```

4. **Reinstall .NET Framework:**
   - Download from Microsoft
   - Restart computer

### "Access Denied" on Startup

**Problem:** Error message about access denied

**Cause:** Insufficient permissions

**Solution:**
```
Always run as Administrator
```

### Crashes on Launch

**Problem:** Application starts then immediately closes

**Solutions:**

1. **Check Event Viewer:**
   ```
   Windows Logs → Application
   Look for .NET Runtime errors
   ```

2. **Run in Compatibility Mode:**
   - Right-click executable
   - Properties → Compatibility
   - Try Windows 8 compatibility

3. **Clean Temp Folders:**
   ```powershell
   Remove-Item $env:TEMP\* -Recurse -Force -ErrorAction SilentlyContinue
   ```

---

## Operation Issues

### Cleaning Operations Fail

**Problem:** Cleaning starts but fails with errors

**Solutions:**

1. **Close All Applications:**
   - Browsers
   - Office apps
   - File explorers

2. **Check Disk Errors:**
   ```cmd
   chkdsk C: /f
   # Restart required
   ```

3. **Run as Administrator:**
   - Ensure elevated permissions

4. **Check Disk Space:**
   - Need at least 1 GB free
   - For temp file operations

### "File in Use" Errors

**Problem:** Cannot delete files because they're in use

**Solutions:**

1. **Close Applications:**
   - Close all browsers
   - Close Office apps
   - Close file explorers

2. **Restart Computer:**
   - Clears file locks
   - Releases resources

3. **Use Safe Mode:**
   - Boot to Safe Mode
   - Run cleaning
   - Restart normally

### Cleaning Very Slow

**Problem:** Operations take much longer than expected

**Causes & Solutions:**

1. **Large Number of Files:**
   - Use Quick Clean instead
   - Clean in stages

2. **Slow Drive:**
   - HDD is slower than SSD
   - Expected behavior

3. **Antivirus Scanning:**
   - Temporarily disable antivirus
   - Add V-Clean to exclusions

4. **Background Processes:**
   - Close unnecessary apps
   - Check Task Manager for CPU usage

### Progress Bar Stuck

**Problem:** Progress bar doesn't move

**Solutions:**

1. **Wait Longer:**
   - Some operations take time
   - Check console for activity

2. **Check Task Manager:**
   - Is V-Clean using CPU?
   - If yes, it's working

3. **Force Stop:**
   - Click "Stop" button
   - Wait 30 seconds
   - Close application

---

## Virus Scanner Issues

### Scanner Finds No Threats

**Problem:** Scanner completes but finds nothing

**Possible Reasons:**

1. **No Threats Present:**
   - Drive is clean
   - Expected behavior

2. **Threats Not Detected:**
   - V-Clean detects common threats
   - Use full antivirus for comprehensive scan

3. **Wrong Drive Selected:**
   - Verify correct drive in dropdown

### False Positives

**Problem:** Scanner flags legitimate files

**Solutions:**

1. **Review Detections:**
   - Check file names
   - Verify if actually malicious

2. **Exclude False Positives:**
   - Don't delete if unsure
   - Research file online

3. **Report Issue:**
   - Open GitHub issue
   - Provide file details

### Cannot Remove Detected Threats

**Problem:** Removal fails for some threats

**Solutions:**

1. **Boot to Safe Mode:**
   - Malware may be running
   - Safe Mode prevents execution

2. **Use Specialized Tools:**
   - V-Clean for common threats
   - Use dedicated antivirus for advanced malware

3. **Manual Removal:**
   - Note file locations
   - Delete manually in Safe Mode

---

## UI Issues

### Theme Not Switching

**Problem:** Dark/Light theme doesn't change

**Cause:** Theme changes require restart

**Solution:**
1. Close V-Clean Enterprise
2. Reopen application
3. Theme will match Windows setting

### Console Text Unreadable

**Problem:** Console text is hard to read

**Solutions:**

1. **Switch Theme:**
   - View → Toggle Theme
   - Restart application

2. **Change Font Size:**
   - Currently fixed
   - Feature request for future

3. **Export Log:**
   - File → Export Log
   - Read in text editor

### Window Too Small/Large

**Problem:** Window size is incorrect

**Solutions:**

1. **Resize Window:**
   - Drag window edges
   - Settings saved automatically

2. **Reset Window:**
   - Close application
   - Delete settings file
   - Restart application

### Missing Icons/Images

**Problem:** Icons or logo don't display

**Cause:** Embedded resources not loading

**Solutions:**

1. **Redownload:**
   - Get fresh copy from GitHub
   - Verify file integrity

2. **Check File Size:**
   - Should be ~117 KB
   - Smaller = corrupted

---

## Update Issues

### Update Checker Fails

**Problem:** "Cannot check for updates" error

**Solutions:**

1. **Check Internet:**
   ```powershell
   Test-Connection github.com -Count 2
   ```

2. **Check Firewall:**
   - Allow V-Clean through firewall
   - Check corporate proxy settings

3. **Manual Check:**
   - Visit: https://github.com/laughing-loop/vClean-Utility/releases
   - Compare versions manually

### Update Available But Won't Download

**Problem:** Update prompt appears but download fails

**Solutions:**

1. **Manual Download:**
   - Click link opens GitHub
   - Download manually

2. **Check Browser:**
   - Ensure default browser works
   - Try different browser

---

## Performance Issues

### High CPU Usage

**Problem:** V-Clean uses excessive CPU

**Causes:**

1. **During Cleaning:**
   - Expected behavior
   - File operations are CPU-intensive

2. **Idle High Usage:**
   - Not expected
   - Report as bug

**Solutions:**

1. **Wait for Completion:**
   - CPU usage drops after cleaning

2. **Close Other Apps:**
   - Free up CPU resources

3. **Use Quick Clean:**
   - Less intensive operations

### High Memory Usage

**Problem:** V-Clean uses too much RAM

**Expected Usage:**
- Idle: ~50 MB
- Cleaning: ~100-200 MB
- Peak: ~300 MB

**If Higher:**

1. **Restart Application:**
   - Clears memory leaks

2. **Check System RAM:**
   - Need 2 GB minimum

3. **Close Other Apps:**
   - Free up memory

---

## Error Messages

### "Insufficient Permissions"

**Cause:** Not running as Administrator

**Solution:**
```
Run as Administrator
```

### "Drive Not Found"

**Cause:** Selected drive disconnected or invalid

**Solutions:**

1. **Reconnect Drive:**
   - Plug in USB drive
   - Refresh drive list

2. **Select Different Drive:**
   - Use dropdown to reselect

### "Cannot Access System Files"

**Cause:** Windows protection or permissions

**Solutions:**

1. **Disable UAC Temporarily:**
   - Control Panel → User Accounts
   - Change UAC settings
   - Restart

2. **Take Ownership:**
   ```cmd
   takeown /f "C:\Path\To\File" /r
   icacls "C:\Path\To\File" /grant administrators:F /t
   ```

### "Operation Cancelled"

**Cause:** User cancelled or timeout

**Solutions:**

1. **Try Again:**
   - Restart operation

2. **Check Logs:**
   - See what was cancelled

---

## Advanced Troubleshooting

### Enable Debug Logging

Currently not available. Feature planned for future release.

### Collect Diagnostic Information

When reporting issues, include:

1. **System Information:**
   ```powershell
   systeminfo > system-info.txt
   ```

2. **V-Clean Version:**
   - Help → About
   - Note version number

3. **Error Messages:**
   - Screenshot or copy text
   - Include full error

4. **Operation Log:**
   - File → Export Log
   - Attach to issue report

### Safe Mode Cleaning

For stubborn issues:

1. **Boot to Safe Mode:**
   - Hold Shift + Restart
   - Troubleshoot → Advanced → Safe Mode

2. **Run V-Clean:**
   - Navigate to executable
   - Run as Administrator

3. **Perform Cleaning:**
   - Malware can't run in Safe Mode
   - Better success rate

---

## Getting Help

### Before Asking for Help

✅ **Check Documentation:**
- [FAQ](/faq)
- [User Guide](/user-guide)
- This troubleshooting guide

✅ **Search Existing Issues:**
- [GitHub Issues](https://github.com/laughing-loop/vClean-Utility/issues)
- Someone may have same problem

✅ **Gather Information:**
- Windows version
- V-Clean version
- Error messages
- Steps to reproduce

### Report a Bug

1. **Go to GitHub:**
   https://github.com/laughing-loop/vClean-Utility/issues

2. **Click "New Issue"**

3. **Provide Details:**
   ```
   **Windows Version:** Windows 11 22H2
   **V-Clean Version:** 3.0.0
   **Problem:** [Describe issue]
   **Steps to Reproduce:**
   1. Step one
   2. Step two
   3. Error occurs
   
   **Error Message:** [Copy exact error]
   **Screenshots:** [Attach if relevant]
   ```

4. **Wait for Response:**
   - Maintainers will investigate
   - May ask for more information

---

## Still Having Issues?

If this guide didn't solve your problem:

1. **Search GitHub Issues:**
   - https://github.com/laughing-loop/vClean-Utility/issues

2. **Create New Issue:**
   - Provide detailed information
   - Include error messages
   - Attach logs

3. **Check for Updates:**
   - Bug may be fixed in newer version
   - Help → Check for Updates

---

[Back to FAQ](/faq) | [User Guide](/user-guide) | [Report Issue](https://github.com/laughing-loop/vClean-Utility/issues)
