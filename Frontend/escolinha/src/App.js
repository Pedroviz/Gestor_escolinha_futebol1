import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./components/About";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [nomeAluno, setNomeAluno] = useState("");
  const [idadeAluno, setIdadeAluno] = useState("");
  const [posicaoAluno, setPosicaoAluno] = useState("");
  const [escolaAluno, setEscolaAluno] = useState("");
  const [enderecoAluno, setEnderecoAluno] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const landingUrl = process.env.REACT_APP_LANDING_URL; // Nova variável de ambiente

  useEffect(() => {
    axios.get(`${apiUrl}/alunos`).then((res) => setAlunos(res.data));
  }, [apiUrl]);

  const cadastrarAluno = () => {
    axios
      .post(`${apiUrl}/alunos`, {
        nome: nomeAluno,
        idade: idadeAluno,
        posicao: posicaoAluno,
        escolaAluno: escolaAluno,
        enderecoAluno: enderecoAluno,
      })
      .then((res) => setAlunos([...alunos, res.data]));
  };

  return (
    <Router>
      <div className="min-h-screen bg-green-100">
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4">
            <li>
              {/* Alteração aqui: Substituir Link por <a> */}
              <a href={landingUrl} className="text-white">
                Home
              </a>
            </li>
            <li>
              <Link to="/about" className="text-white">
                Sobre nós
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
                  Escolinha de Futebol
                </h1>

                <div className="bg-white rounded shadow p-6 mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    Cadastro de Alunos
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      className="border p-2"
                      placeholder="Nome do Aluno"
                      onChange={(e) => setNomeAluno(e.target.value)}
                    />
                    <input
                      className="border p-2"
                      placeholder="Idade do Aluno"
                      onChange={(e) => setIdadeAluno(e.target.value)}
                    />
                    <input
                      className="border p-2"
                      placeholder="Posição do Aluno"
                      onChange={(e) => setPosicaoAluno(e.target.value)}
                    />
                    <input
                      className="border p-2"
                      placeholder="Nome da Escola"
                      onChange={(e) => setEscolaAluno(e.target.value)}
                    />
                    <input
                      className="border p-2"
                      placeholder="Endereço da Escola"
                      onChange={(e) => setEnderecoAluno(e.target.value)}
                    />
                  </div>
                  <button
                    className="bg-blue-500 text-white p-2 mt-4 rounded"
                    onClick={cadastrarAluno}
                  >
                    Cadastrar Aluno
                  </button>
                </div>

                <div className="bg-white rounded shadow p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Lista de Alunos
                  </h2>
                  <ul className="space-y-2">
                    {alunos.map((aluno, index) => (
                      <li key={index} className="border p-2 rounded">
                        {aluno.nome} - {aluno.idade} anos - {aluno.posicao} -{" "}
                        {aluno.escolaAluno} - {aluno.enderecoAluno}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;