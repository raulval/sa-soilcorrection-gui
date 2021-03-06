import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import "../../styles/dados.css";

export function Dados() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [produtor, setProdutor] = useState();
  const [data, setData] = useState();
  const [municipio, setMunicipio] = useState();
  const [lote, setLote] = useState();
  const [areaTotal, setAreaTotal] = useState();
  const [talhao, setTalhao] = useState();
  const [areaTalhao, setAreaTalhao] = useState();
  const [matriculaLote, setMatriculaLote] = useState();
  const [textura, setTextura] = useState();
  const [cultivo, setCultivo] = useState();
  const [responsavel, setResponsavel] = useState();
  const [profundidade, setProfundidade] = useState();
  const [resultado, setResultado] = useState();

  function handleSubmit() {
    dispatch({
      type: "DADOS",
      produtor: produtor,
      data: data,
      municipio: municipio,
      lote: lote,
      areaTotal: areaTotal,
      talhao: talhao,
      areaTalhao: areaTalhao,
      matriculaLote: matriculaLote,
      textura: textura,
      cultivo: cultivo,
      responsavel: responsavel,
      profundidade: profundidade,
      resultado: resultado,
    });
    history.push("/teores");
  }

  return (
    <div id="page-dados">
      <Header />
      <div>
        <h2>Dados Gerais</h2>
      </div>

      <Container className="container-dados">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-4" controlId="formBasicText">
                <Form.Label>Produtor</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nome do Produtor"
                  value={produtor}
                  onChange={(e) => setProdutor(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-4" controlId="formBasicDate">
                <Form.Label>Data</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Data"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-4" controlId="formBasicText">
                <Form.Label>Munic??pio</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nome do Munic??pio"
                  value={municipio}
                  onChange={(e) => setMunicipio(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-4" controlId="formBasicText">
                <Form.Label>Lote</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Lote"
                  value={lote}
                  onChange={(e) => setLote(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-4" controlId="formBasicText">
                <Form.Label>??rea Total (ha)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="??rea total"
                  value={areaTotal}
                  onChange={(e) => setAreaTotal(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-4" controlId="formBasicText">
                <Form.Label>Talh??o</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Talh??o"
                  value={talhao}
                  onChange={(e) => setTalhao(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-4" controlId="formBasicText">
                <Form.Label>??rea do Talh??o (ha)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="??rea do Talh??o"
                  value={areaTalhao}
                  onChange={(e) => setAreaTalhao(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-4" controlId="formBasicText">
                <Form.Label>Matr??cula do Lote</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Matr??cula do Lote"
                  value={matriculaLote}
                  onChange={(e) => setMatriculaLote(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-4" controlId="formBasicSelect">
                <Form.Label>Textura do Solo</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setTextura(e.target.value)}
                  required
                >
                  <option>Selecione a textura do solo</option>
                  <option value="1">Argiloso (+40% de argila)</option>
                  <option value="2">Texture M??dia (25 a 40% de argila)</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-4" controlId="formBasicSelect">
                <Form.Label>Sistema de Cultivo</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setCultivo(e.target.value)}
                  required
                >
                  <option>Selecione o sistema de cultivo</option>
                  <option value="1">Plantio Direto</option>
                  <option value="2">Convencional</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-4" controlId="formBasicText">
                <Form.Label>Respons??vel T??cnico</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Respons??vel T??cnico"
                  value={responsavel}
                  onChange={(e) => setResponsavel(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-4" controlId="formBasicText">
                <Form.Label>Profundidade da amostra de solos (cm)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Profundidade da amostra de solos"
                  value={profundidade}
                  onChange={(e) => setProfundidade(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-5" controlId="formBasicText">
            <Form.Label>Resultado da an??lise de solos N??</Form.Label>
            <Form.Control
              type="text"
              placeholder="Resultado da an??lise"
              value={resultado}
              onChange={(e) => setResultado(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Pr??ximo
          </Button>
        </Form>
      </Container>
    </div>
  );
}
