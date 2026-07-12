"use client";

import { useEffect, useState } from "react";

const BROKER = "https://vigco.co/la-com-inv/tJvkn8SJ";
const TELEGRAM = "https://t.me/Leon_Schuessler";

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const onScroll = () => document.documentElement.style.setProperty("--scroll", `${window.scrollY * .05}px`);
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  const start = () => document.getElementById("start")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top"><span>SS</span> SIGNAL SOCIETY</a>
        <div className={menu ? "links open" : "links"}>
          <a href="#system" onClick={() => setMenu(false)}>Das System</a>
          <a href="#about" onClick={() => setMenu(false)}>Über mich</a>
          <a href="#faq" onClick={() => setMenu(false)}>FAQ</a>
        </div>
        <button className="navCta" onClick={start}>Kostenlos starten <Arrow /></button>
        <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menü">{menu ? "×" : "☰"}</button>
      </nav>

      <section className="hero" id="top">
        <div className="heroPhoto" />
        <div className="heroShade" />
        <div className="orb orb1" /><div className="orb orb2" />
        <div className="heroContent">
          <div className="eyebrow"><i /> Meine Trades · Kostenlos in der Gruppe</div>
          <h1>Ich trade. Ich teile.<br/><em>Du entscheidest.</em></h1>
          <p>Ich teile meine eigenen Gold-Trades kostenlos in der Gruppe. Du siehst meine Einstiege, Absicherung und Ziele und entscheidest selbst, ob du einen Trade kopieren möchtest.</p>
          <div className="heroActions">
            <button className="primary" onClick={start}>Jetzt kostenlos starten <Arrow /></button>
            <a className="textLink" href="#system">So läuft es ab <span>↓</span></a>
          </div>
          <div className="proof"><div className="avatars"><b>L</b><b>+</b></div><span><strong>Meine Trades kostenlos mitverfolgen</strong><small>Du behältst bei jedem Trade die Kontrolle</small></span></div>
        </div>
        <div className="marketCard">
          <div><span>XAU / USD</span><small>GOLD · MEINE TRADES</small></div><b>LIVE<small> in der Gruppe</small></b>
          <svg viewBox="0 0 420 90" preserveAspectRatio="none"><path d="M0,72 C45,68 62,28 104,44 S169,70 205,47 S255,14 288,34 S348,66 420,8"/></svg>
        </div>
      </section>

      <section className="ticker"><span>XAU/USD</span><i/> <span>MEINE TRADES</span><i/> <span>KLARE ANGABEN</span><i/> <span>DEINE ENTSCHEIDUNG</span><i/> <span>100 % KOSTENLOSER ZUGANG</span></section>

      <section className="section intro" id="system">
        <div className="sectionTag">01 · DAS SYSTEM</div>
        <h2>Meine Trades.<br/><em>Direkt auf dein Handy.</em></h2>
        <p className="lead">Ich analysiere den Markt, eröffne meine eigenen Trades und teile sie transparent in der Gruppe. Du kannst alles in Ruhe ansehen und selbst entscheiden, ob du einen Trade kopierst.</p>
        <div className="steps">
          {[
            ["01", "Konto eröffnen", "Erstelle über unseren Partnerlink dein persönliches Handelskonto beim Broker."],
            ["02", "Konto aktivieren", "Zahle den gewünschten Betrag beim Broker ein. Wähle deine Höhe immer passend zu deinem persönlichen Risiko."],
            ["03", "Nachweis senden", "Schick mir über Telegram ein Bild, auf dem Kontoeröffnung und Einzahlung erkennbar sind."],
            ["04", "Onboarding & Zugang", "Nach meiner Prüfung erhältst du das Onboarding-Video und anschließend den Zugang zur Trading-Gruppe."],
          ].map(([n,t,d]) => <article className="step" key={n}><span>{n}</span><div className="stepIcon">{n === "01" ? "⌁" : n === "02" ? "▶" : n === "03" ? "✦" : "↗"}</div><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>

      <section className="split">
        <div className="splitImage trading" />
        <div className="splitCopy">
          <div className="sectionTag">02 · DEIN VORTEIL</div>
          <h2>Ich trade Gold.<br/><em>Du kannst zuschauen.</em></h2>
          <p>Mein Fokus liegt hauptsächlich auf XAU/USD. Wenn ich selbst einen Trade eröffne, teile ich ihn in der Gruppe – klar, direkt und ohne unnötig komplizierte Erklärungen.</p>
          <ul><li><b>Keine bezahlten Signale</b><span>Der Zugang zu meinen geteilten Trades ist kostenlos</span></li><li><b>Alle wichtigen Angaben auf einen Blick</b><span>Einstieg, Stop-Loss und mögliche Zielbereiche</span></li><li><b>Du entscheidest bei jedem Trade selbst</b><span>Kein Kopierzwang und ausdrücklich keine Gewinngarantie</span></li></ul>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="aboutCopy"><div className="sectionTag">03 · ÜBER MICH</div><h2>Ich bin Leon.<br/><em>Ich nehme dich mit.</em></h2><p>Ich trade selbst und teile meine Trades mit meiner Community. Nicht als schnelles Reichwerden-Versprechen, sondern transparent: Du siehst, was ich mache, und entscheidest komplett eigenständig, ob du einen Trade kopieren möchtest.</p><p>Mir ist wichtig, dass der Ablauf verständlich bleibt und Risiken nicht kleingeredet werden. Gewinne sind nie garantiert – Verluste gehören beim Trading dazu.</p><div className="signature">Leon Schüssler</div></div>
        <div className="photoStack"><img src="/images/leon-lounge.webp" alt="Leon Schüssler arbeitet am Laptop"/><img src="/images/leon-r8.webp" alt="Leon Schüssler"/></div>
      </section>

      <section className="gallery"><img src="/images/frankfurt-view.webp" alt="Frankfurter Skyline"/><img src="/images/leon-pool.webp" alt="Leon am Wasser"/><img src="/images/leon-r8-night.webp" alt="Mobiles Arbeiten"/><img src="/images/pool-night.webp" alt="Abendliche Aussicht"/></section>

      <section className="start" id="start">
        <div className="startBg"/><div className="startInner">
          <div className="sectionTag">DEIN START</div><h2>Drei Schritte.<br/><em>Dann bist du dabei.</em></h2>
          <div className="flowTabs"><button className={step===1?"active":""} onClick={()=>setStep(1)}>1 · Konto eröffnen</button><button className={step===2?"active":""} onClick={()=>setStep(2)}>2 · Nachweis senden</button><button className={step===3?"active":""} onClick={()=>setStep(3)}>3 · Zugang erhalten</button></div>
          {step === 1 && <div className="flowPanel simple"><div><span className="mini">SCHRITT 01</span><h3>Eröffne dein Handelskonto</h3><p>Über den Button kommst du direkt zu Vantage. Erstelle dort dein Konto und zahle den Betrag ein, den du für dich persönlich verantworten kannst. Prüfe vorher alle Konditionen und Risikohinweise des Brokers.</p><a className="primary buttonLink" href={BROKER} target="_blank" rel="noopener noreferrer" onClick={()=>setStep(2)}>Konto bei Vantage eröffnen <Arrow /></a></div><img src="/images/trading-desk.webp" alt="Trading Arbeitsplatz"/></div>}
          {step === 2 && <div className="flowPanel simple verification"><div><span className="mini">SCHRITT 02</span><h3>Konto erstellt und eingezahlt?</h3><p>Dann schick mir auf Telegram ein Bild als Nachweis, auf dem die erfolgreiche Kontoeröffnung und Einzahlung erkennbar sind. Schwärze vorher sensible Daten wie Ausweis-, Konto- oder Kartennummern.</p><a className="primary buttonLink" href={TELEGRAM} target="_blank" rel="noopener noreferrer" onClick={()=>setStep(3)}>Nachweis auf Telegram senden <Arrow /></a></div><div className="lock">➤<span>@LEON_SCHUESSLER</span><small>Persönliche Prüfung durch Leon</small></div></div>}
          {step === 3 && <div className="flowPanel simple verification"><div><span className="mini">SCHRITT 03</span><h3>Onboarding und Gruppenzugang erhalten</h3><p>Sobald ich deinen Nachweis geprüft habe, schicke ich dir das Onboarding-Video persönlich über Telegram. Danach erhältst du den privaten Zugang zur Trading-Gruppe und kannst meine Trades mitverfolgen.</p><a className="primary buttonLink" href={TELEGRAM} target="_blank" rel="noopener noreferrer">Leon auf Telegram schreiben <Arrow /></a></div><div className="lock">✦<span>PRIVATE TRADING-GRUPPE</span><small>Zugang nach persönlicher Verifizierung</small></div></div>}
        </div>
      </section>

      <section className="section faq" id="faq"><div><div className="sectionTag">04 · FAQ</div><h2>Noch Fragen?</h2></div><div className="faqList">{[
        ["Ist der Zugang wirklich kostenlos?", "Ja. Ich teile meine Trades kostenlos in der Gruppe. Beim Trading selbst können jedoch Brokerkosten, Spreads und natürlich auch Verluste entstehen."],
        ["Brauche ich Trading-Erfahrung?", "Nein. Das Onboarding erklärt die Grundlagen. Du triffst trotzdem jede Handelsentscheidung selbst."],
        ["Kopiere ich deine Trades automatisch?", "Nein. Du erhältst die Angaben in der Gruppe und entscheidest bei jedem Trade selbst, ob und mit welchem Einsatz du ihn kopieren möchtest."],
        ["Sind Gewinne garantiert?", "Nein. Auch meine Trades können im Verlust enden. Trading ist mit erheblichem Risiko verbunden und vergangene Ergebnisse erlauben keine Aussage über zukünftige Ergebnisse."],
        ["Wie bekomme ich den Telegram-Zugang?", "Eröffne über den Partnerlink dein Konto und zahle den gewünschten Betrag ein. Schick Leon danach auf Telegram einen geschwärzten Bildnachweis. Nach persönlicher Prüfung erhältst du das Onboarding-Video und anschließend den privaten Gruppenzugang."],
      ].map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

      <footer><div className="brand"><span>SS</span> SIGNAL SOCIETY</div><p>Meine Trades · Deine Entscheidung</p><div><a href="#">Impressum</a><a href="#">Datenschutz</a><a href="#">Risikohinweis</a></div><small>Die von Leon geteilten Trades dienen ausschließlich Informations- und Lernzwecken. Sie stellen keine persönliche Anlageberatung, Finanzberatung, Aufforderung oder Gewinngarantie dar. Das Kopieren erfolgt vollständig eigenverantwortlich. Trading mit CFDs/Forex ist hochriskant und kann zum vollständigen Verlust des eingesetzten Kapitals führen.</small></footer>
    </main>
  );
}
