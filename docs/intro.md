---
slug: /
sidebar_position: 1
sidebar_label: Overview
title: V-Clean Security Console
---

<section className="vc-hero">
  <div className="vc-hero__grid">
    <div>
      <div className="vc-eyebrow"><img className="vc-eyebrow__mark" src="/vClean-Docs/img/logo.png" alt="V-Clean" /><span className="vc-dot"></span>Security console preview</div>
      <h1>Clean endpoint operations, packaged for Windows.</h1>
      <p className="vc-lede">V-Clean Security Console is the next .NET 8 direction for V-Clean: a corporate Windows desktop shell with scan workflows, quarantine controls, live agent IPC, dark and light UX, and a self-contained setup executable.</p>
      <div className="vc-actions">
        <a className="vc-button vc-button--primary" href="https://github.com/laughing-loop/vClean-Utility/releases/download/v3.1.0/VClean-Security-Console-win-x64.zip">Download Windows package</a>
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

<div className="vc-grid vc-grid--four">
  <div className="vc-card">
    <div className="vc-card__head"><span className="vc-mini-icon">UX</span></div>
    <span className="vc-card__meta">Console</span>
    <h3>Corporate desktop UX</h3>
    <p>A cleaner WPF shell with dashboard, scan center, quarantine, logs, settings, about page, and dark/light mode support.</p>
  </div>
  <div className="vc-card">
    <div className="vc-card__head"><span className="vc-mini-icon">AG</span></div>
    <span className="vc-card__meta">Agent</span>
    <h3>Live communication layer</h3>
    <p>The UI talks to the agent through a shared <code>IAgentClient</code> contract and named-pipe protocol. If the agent is not running, the UI starts the bundled agent automatically.</p>
  </div>
  <div className="vc-card">
    <div className="vc-card__head"><span className="vc-mini-icon">OP</span></div>
    <span className="vc-card__meta">Utilities</span>
    <h3>Operations Suite</h3>
    <p>Enterprise cleanup, USB repair, shortcut-virus remediation, restore-point, and reporting workflows now live inside the security console.</p>
  </div>
  <div className="vc-card">
    <div className="vc-card__head"><span className="vc-mini-icon">EXE</span></div>
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
      <span className="vc-pill">Public migration release</span>
      <span className="vc-pill">Unsigned preview</span>
    </div>
  </div>
  <a className="vc-button vc-button--primary" href="https://github.com/laughing-loop/vClean-Utility/releases/tag/v3.1.0">Open release</a>
</div>

## Platform direction

<div className="vc-status-strip">
  <div className="vc-status"><strong>WPF</strong><span>Native Windows UI shell</span></div>
  <div className="vc-status"><strong>IPC</strong><span>Named-pipe service contract</span></div>
  <div className="vc-status"><strong>Setup</strong><span>Current-user install flow</span></div>
  <div className="vc-status"><strong>Open</strong><span>Source and releases on GitHub</span></div>
</div>

## Screenshots

<div className="vc-swiper" aria-label="V-Clean screenshots">
  <figure className="vc-slide">
    <img src="/vClean-Docs/img/screenshot-main.png" alt="V-Clean Enterprise main interface" />
    <figcaption>Main workspace from the enterprise utility generation.</figcaption>
  </figure>
  <figure className="vc-slide">
    <img src="/vClean-Docs/img/screenshot-about.png" alt="V-Clean Enterprise about dialog" />
    <figcaption>Publisher and product identity dialog.</figcaption>
  </figure>
</div>

<div className="vc-swiper-hint">Scroll horizontally to review screenshots. Add new images as additional <code>vc-slide</code> items.</div>

## Source and ownership

V-Clean is built by LaughingLoop. Public downloads and the v3.0 updater migration path are published through the public V-Clean Utility release channel:

- [Public release repository](https://github.com/laughing-loop/vClean-Utility)
- [Latest preview release](https://github.com/laughing-loop/vClean-Utility/releases/tag/v3.1.0)
- [Report an issue](https://github.com/laughing-loop/vClean-Utility/issues)
