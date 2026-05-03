---
sidebar_position: 3
title: Platform
---

# Platform

V-Clean Security Console is being rebuilt as a maintainable Windows endpoint utility instead of a script-first launcher. The current release focuses on the shell, contracts, packaging, and operator flow.

## Product layers

<div className="vc-grid vc-grid--four">
  <div className="vc-card">
    <div className="vc-card__head"><span className="vc-mini-icon">UI</span></div>
    <span className="vc-card__meta">UI</span>
    <h3>WPF console</h3>
    <p>Native Windows shell with overview, scan center, quarantine control, logs, settings, about, and dark/light modes.</p>
  </div>
  <div className="vc-card">
    <div className="vc-card__head"><span className="vc-mini-icon">CT</span></div>
    <span className="vc-card__meta">Core</span>
    <h3>Shared contracts</h3>
    <p><code>Vclean.Core</code> owns scan requests, service health, quarantine records, pipe request/response DTOs, and the <code>IAgentClient</code> abstraction.</p>
  </div>
  <div className="vc-card">
    <div className="vc-card__head"><span className="vc-mini-icon">AG</span></div>
    <span className="vc-card__meta">Agent</span>
    <h3>Local service process</h3>
    <p><code>Vclean.Agent.Service</code> hosts the named-pipe server and exposes health, scan, progress, and quarantine operations.</p>
  </div>
  <div className="vc-card">
    <div className="vc-card__head"><span className="vc-mini-icon">OS</span></div>
    <span className="vc-card__meta">Utilities</span>
    <h3>Operations Suite</h3>
    <p>The previous enterprise utility workflows are preserved as structured cleanup, USB repair, optimization, reporting, and safety actions.</p>
  </div>
</div>

## Operator experience

| Area | Current capability |
|:--|:--|
| Overview | Realtime status, heartbeat timestamp, quarantine count, recommended actions |
| Scan Center | Quick, full, and custom scan actions with progress polling |
| Operations Suite | Temporary cleanup, Recycle Bin, thumbnail cache, prefetch review, shortcut-virus cleaning, hidden USB file restore, restore point, health report |
| Quarantine | Live list, refresh, restore, and delete actions |
| Logs | Placeholder timeline ready for agent-backed events |
| Settings | Protection, cloud check, and update policy controls |
| About | Cleaner product identity, project details, and publisher information |

## Communication model

The UI does not bind directly to mock data. It talks through one interface:

```csharp
public interface IAgentClient
{
    Task<ServiceHealth> GetHealthAsync(CancellationToken cancellationToken = default);
    Task<IReadOnlyList<QuarantineItem>> GetQuarantineAsync(CancellationToken cancellationToken = default);
    Task<Guid> StartScanAsync(ScanRequest request, CancellationToken cancellationToken = default);
    Task<ScanProgress?> GetScanProgressAsync(Guid scanId, CancellationToken cancellationToken = default);
    Task<bool> RestoreQuarantineItemAsync(string quarantineId, CancellationToken cancellationToken = default);
    Task<bool> DeleteQuarantineItemAsync(string quarantineId, CancellationToken cancellationToken = default);
}
```

That contract lets the UI use named pipes in installed builds while keeping an in-memory fallback for development and safe startup.

## Distribution

<div className="vc-grid vc-grid--two">
  <div className="vc-card">
    <span className="vc-card__meta">Today</span>
    <h3>ZIP plus setup executable</h3>
    <p>The current package is self-contained for Windows x64. Users extract the ZIP and run <code>VClean-Security-Console-Setup.exe</code>.</p>
  </div>
  <div className="vc-card">
    <span className="vc-card__meta">Next</span>
    <h3>Signed MSI or MSIX</h3>
    <p>Production distribution should add code signing, a proper Windows service install path, and enterprise deployment metadata.</p>
  </div>
</div>

## Security posture

This preview is honest about scope:

- It is a foundation for a security console, not a certified antivirus engine.
- The agent IPC and quarantine flows are scaffolded for real implementations.
- Code signing is still required before broad public distribution.
- Clean Windows 10 and Windows 11 validation should happen before a stable release.

## Roadmap

1. Replace simulated scan outcomes with real scanner implementations.
2. Add persistent event logs backed by the agent.
3. Register the agent as a Windows service for admin installs.
4. Add code signing and installer trust hardening.
5. Add release-channel update checks inside the UI.
6. Package MSI/MSIX for enterprise deployment.
