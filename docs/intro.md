---
slug: /
sidebar_position: 1
sidebar_label: Overview
title: V-Clean Security Console
---

<section className="vc-hero">
  <div className="vc-hero__grid">
    <div>
      <div className="vc-eyebrow"><span className="vc-dot"></span>Security console preview</div>
      <h1>Clean endpoint operations, packaged for Windows.</h1>
      <p className="vc-lede">V-Clean Security Console is the next .NET 8 direction for V-Clean: a corporate Windows desktop shell with scan workflows, quarantine controls, live agent IPC, dark and light UX, and a self-contained setup executable.</p>
      <div className="vc-actions">
        <a className="vc-button vc-button--primary" href="https://github.com/laughing-loop/vClean-BundlePack/releases/download/v3.1.0-security-console/VClean-Security-Console-win-x64.zip">Download Windows package</a>
        <a className="vc-button vc-button--secondary" href="/vClean-Docs/quick-start">Read quick start</a>
      </div>
    </div>
    <div className="vc-console">
      <div className="vc-console__bar"><span className="vc-console__light"></span>vclean-agent-pipe</div>
      <div className="vc-console__body">
        <div className="vc-console__row"><span className="vc-console__key">Runtime</span><span className="vc-console__value">.NET 8 self-contained</span></div>
        <div className="vc-console__row"><span className="vc-console__key">Transport</span><span className="vc-console__value">Named pipes with fallback</span></div>
        <div className="vc-console__row"><span className="vc-console__key">Installer</span><span className="vc-console__value">Setup.exe, current-user default</span></div>
        <div className="vc-console__row"><span className="vc-console__key">Release</span><span className="vc-console__value">v3.1.0 preview</span></div>
      </div>
    </div>
  </div>
</section>

:::warning Preview status

This release is a security-console preview. It validates the installable .NET direction, UI shell, named-pipe agent communication, scan workflow, and quarantine UX. It is not a production antivirus replacement yet.

:::

## What changed

<div className="vc-grid">
  <div className="vc-card">
    <span className="vc-card__meta">Console</span>
    <h3>Corporate desktop UX</h3>
    <p>A cleaner WPF shell with dashboard, scan center, quarantine, logs, settings, about page, and dark/light mode support.</p>
  </div>
  <div className="vc-card">
    <span className="vc-card__meta">Agent</span>
    <h3>Live communication layer</h3>
    <p>The UI talks to the agent through a shared <code>IAgentClient</code> contract and named-pipe protocol. If the agent is not running, the UI starts the bundled agent automatically.</p>
  </div>
  <div className="vc-card">
    <span className="vc-card__meta">Distribution</span>
    <h3>Setup executable package</h3>
    <p>Users download a ZIP, extract it, run <code>VClean-Security-Console-Setup.exe</code>, and launch from the Start Menu.</p>
  </div>
</div>

## Current release

<div className="vc-release-card">
  <div>
    <h2>V-Clean Security Console v3.1.0 preview</h2>
    <p>Self-contained Windows x64 package with UI, agent, setup executable, and install notes.</p>
    <div className="vc-pill-row">
      <span className="vc-pill">Windows 10/11</span>
      <span className="vc-pill">win-x64</span>
      <span className="vc-pill">No .NET install required</span>
      <span className="vc-pill">Unsigned preview</span>
    </div>
  </div>
  <a className="vc-button vc-button--primary" href="https://github.com/laughing-loop/vClean-BundlePack/releases/tag/v3.1.0-security-console">Open release</a>
</div>

## Platform direction

<div className="vc-status-strip">
  <div className="vc-status"><strong>WPF</strong><span>Native Windows UI shell</span></div>
  <div className="vc-status"><strong>IPC</strong><span>Named-pipe service contract</span></div>
  <div className="vc-status"><strong>Setup</strong><span>Current-user install flow</span></div>
  <div className="vc-status"><strong>Open</strong><span>Source and releases on GitHub</span></div>
</div>

## Screenshots

![V-Clean Security Console main interface](/img/screenshot-main.png)

![V-Clean Enterprise about dialog](/img/screenshot-about.png)

## Source and ownership

V-Clean is built by LaughingLoop and maintained in the open. The new security-console package lives in the BundlePack repository:

- [Source repository](https://github.com/laughing-loop/vClean-BundlePack)
- [Latest preview release](https://github.com/laughing-loop/vClean-BundlePack/releases/tag/v3.1.0-security-console)
- [Report an issue](https://github.com/laughing-loop/vClean-BundlePack/issues)
