import { useState, useEffect } from 'react';

export default function App() {
  const [startups, setStartups] = useState([]);
  const [nome, setNome] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [erro, setErro] = useState(null);

  // 1. Procurar dados (GET)
  useEffect(() => {
    fetch('http://localhost:3000/startups')
      .then(res => res.json())
      .then(dados => setStartups(dados))
      .catch(() => setErro("Servidor Offline"));
  }, []);

  // 2. Cadastrar (POST)
  const cadastrar = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/startups', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, especialidade })
    })
      .then(res => res.json())
      .then(nova => {
        setStartups([...startups, nova]);
        setNome(''); setEspecialidade('');
      });
  };

  // 3. Eliminar (DELETE)
  const eliminar = (id) => {
    fetch(`http://localhost:3000/startups/${id}`, { method: 'DELETE' })
      .then(() => setStartups(startups.filter(s => s.id !== id)));
  };

  // Objetos de Estilo (Para garantir o visual verde e profissional)
  const s = {
    body: { backgroundColor: '#f0fdf4', minHeight: '100vh', padding: '40px 20px', fontFamily: 'system-ui, sans-serif' },
    card: { backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '24px', maxWidth: '800px', margin: '0 auto' },
    title: { color: '#064e3b', textAlign: 'center', fontSize: '32px', fontWeight: '800', marginBottom: '8px' },
    subtitle: { color: '#059669', textAlign: 'center', marginBottom: '32px', fontWeight: '500' },
    formBox: { backgroundColor: '#f9fafb', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb', marginBottom: '32px' },
    input: { width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', fontSize: '16px' },
    button: { width: '100%', padding: '14px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s' },
    list: { listStyle: 'none', padding: 0 },
    item: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderBottom: '1px solid #f3f4f6' },
    itemTitle: { fontWeight: '700', color: '#111827', margin: 0 },
    itemTag: { color: '#059669', fontSize: '14px', fontWeight: '600' },
    delBtn: { backgroundColor: '#fee2e2', color: '#dc2626', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }
  };

  return (
    <div style={s.body}>
      <div style={s.card}>
        <header>
          <h1 style={s.title}>AgroTech Connect</h1>
          <p style={s.subtitle}>Gestão Inteligente para o Produtor Rural</p>
        </header>

        {erro && <div style={{ backgroundColor: '#fef2f2', color: '#b91c1c', padding: '12px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>⚠️ {erro}</div>}

        <section style={s.formBox}>
          <h3 style={{ marginTop: 0, color: '#065f46' }}>🌱 Novo Registo</h3>
          <form onSubmit={cadastrar}>
            <input
              style={s.input}
              placeholder="Nome da Startup"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
            />
            <input
              style={s.input}
              placeholder="Especialidade (ex: Drones, Sensores)"
              value={especialidade}
              onChange={e => setEspecialidade(e.target.value)}
              required
            />
            <button style={s.button} type="submit">Cadastrar Startup</button>
          </form>
        </section>

        <section>
          <h3 style={{ color: '#065f46', borderBottom: '2px solid #ecfdf5', paddingBottom: '8px' }}>🚜 Startups Disponíveis</h3>
          <ul style={s.list}>
            {startups.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#9ca3af', marginTop: '20px' }}>Nenhuma startup encontrada no solo...</p>
            ) : (
              startups.map(startup => (
                <li key={startup.id} style={s.item}>
                  <div>
                    <p style={s.itemTitle}>{startup.nome}</p>
                    <span style={s.itemTag}>{startup.especialidade}</span>
                  </div>
                  <button onClick={() => eliminar(startup.id)} style={s.delBtn}>Excluir</button>
                </li>
              ))
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}