import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <Container>
    <Row className="mt-5">
      <Col>
        <h1>Über uns</h1>
        <p>Willkommen bei <strong>LächelnMacher</strong>!</p>
        <p>
          Wir sind ein engagiertes Team, das sich der Mission verschrieben hat,
          durch Kleiderspenden Freude und Hoffnung zu verbreiten. Unser Ziel ist es,
          bedürftigen Menschen in unserer Gemeinschaft zu helfen und ihnen durch
          Ihre großzügigen Spenden ein Lächeln ins Gesicht zu zaubern.
        </p>

        <h2>Unsere Geschichte</h2>
        <p>
          <strong>LächelnMacher</strong> wurde im Jahr 2024 gegründet. Die Idee entstand aus
          der Überzeugung, dass jede kleine Geste einen großen Unterschied machen kann.
          Unsere Gründer, Personin Musterfrau  und Person Mustermann, waren schon immer von der Idee
          fasziniert, wie einfache Taten der Freundlichkeit das Leben anderer Menschen
          positiv beeinflussen können.
        </p>

        <h2>Unsere Mission</h2>
        <p>
          Unsere Mission ist es, durch die Sammlung und Verteilung von Kleiderspenden
          bedürftige Menschen zu unterstützen. Wir arbeiten eng mit lokalen Gemeinschaften
          und Wohltätigkeitsorganisationen zusammen, um sicherzustellen, dass Ihre Spenden
          dort ankommen, wo sie am meisten benötigt werden.
        </p>

        <h2>Kontakt</h2>
        <p>Sie finden uns unter folgender Adresse:</p>
        <address>
          <strong>LächelnMacher</strong><br />
          Musterstraße 123<br />
          44644 Herne<br />
        </address>
        <p>Falls Sie Fragen haben oder mehr über unsere Arbeit erfahren möchten, zögern Sie nicht, uns zu kontaktieren. Wir sind stets bemüht, Ihre Anliegen so schnell wie möglich zu bearbeiten.</p>
        <p>
          Telefon: 01234-567890<br />
          E-Mail: <a href="mailto:info@laechelnmacher.de">info@laechelnmacher.de</a>
        </p>

        <h2>Mitmachen</h2>
        <p>
          Möchten Sie mehr über uns erfahren oder selbst Teil unserer Mission werden? Besuchen Sie uns vorort und erfahren Sie, wie Sie mithelfen können, Freude zu verbreiten. Jeder Beitrag zählt und gemeinsam können wir die Welt ein kleines bisschen besser machen.
        </p>

        <p>Wir freuen uns darauf, gemeinsam mit Ihnen Lächeln zu zaubern!</p>
        <p>Ihr <strong>LächelnMacher</strong>-Team</p>
      </Col>
    </Row>
  </Container>
);
  
}