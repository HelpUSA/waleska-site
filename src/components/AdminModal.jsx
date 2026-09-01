import React, { useState } from "react";
import { FaTimes, FaPlus, FaTrash, FaEdit, FaLock, FaCheck, FaBuilding, FaUser, FaSignOutAlt, FaFolderOpen, FaCloudUploadAlt, FaSave } from "react-icons/fa";

const AdminModal = ({ isOpen, onClose, properties, setProperties, user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState("NOVO"); // "NOVO" | "LISTA"

  // Editing property state
  const [editingId, setEditingId] = useState(null);

  // Form states
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("Apartamento");
  const [localizacao, setLocalizacao] = useState("Jardim Oceania, João Pessoa - PB");
  const [quartos, setQuartos] = useState("3");
  const [banheiros, setBanheiros] = useState("2");
  const [vagas, setVagas] = useState("2");
  const [area, setArea] = useState("75 m²");
  const [destaque, setDestaque] = useState("Destaque Exclusivo");
  const [descricao, setDescricao] = useState("");
  const [imagemInput, setImagemInput] = useState("");
  const [imagens, setImagens] = useState([]);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");

    if (email.toLowerCase().includes("waleska") || email.toLowerCase().includes("admin") || password === "123456" || password === "waleska123") {
      setUser({
        name: "Waleska Santos",
        email: email || "contato@waleska.com.br",
        creci: "CRECI 9962-F PB • CNAI 32415",
        role: "CORRETOR"
      });
    } else {
      setLoginError("E-mail ou senha incorretos. Use contato@waleska.com.br / 123456");
    }
  };

  // Direct File Selector & Drag-and-Drop Handler
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files || files.length === 0) return;

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImagens((prev) => [...prev, event.target.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddUrlImage = () => {
    if (!imagemInput) return;
    setImagens([...imagens, imagemInput]);
    setImagemInput("");
  };

  const handleRemoveImage = (index) => {
    setImagens(imagens.filter((_, i) => i !== index));
  };

  const handleStartCreate = () => {
    setEditingId(null);
    setTitulo("");
    setPreco("");
    setCategoria("Apartamento");
    setLocalizacao("Jardim Oceania, João Pessoa - PB");
    setQuartos("3");
    setBanheiros("2");
    setVagas("2");
    setArea("75 m²");
    setDestaque("Destaque Exclusivo");
    setDescricao("");
    setImagens([
      "/images/anuncio01.png"
    ]);
    setActiveTab("NOVO");
  };

  const handleStartEdit = (prop) => {
    setEditingId(prop.id);
    setTitulo(prop.titulo || "");
    setPreco(prop.preco || "");
    setCategoria(prop.categoria || "Apartamento");
    setLocalizacao(prop.localizacao || "Jardim Oceania, João Pessoa - PB");
    setQuartos(String(prop.quartos || 1));
    setBanheiros(String(prop.banheiros || 1));
    setVagas(String(prop.vagas || 1));
    setArea(prop.area || "75 m²");
    setDestaque(prop.destaque || "Destaque");
    setDescricao(prop.descricao || "");
    setImagens(prop.imagens || []);
    setActiveTab("NOVO");
  };

  const handleSaveProperty = (e) => {
    e.preventDefault();
    if (!titulo || !preco) return;

    const formattedPrice = preco.startsWith("R$") ? preco : `R$ ${preco}`;
    const formattedArea = area.includes("m²") ? area : `${area} m²`;

    if (editingId) {
      // Update existing property
      const updated = properties.map((p) => {
        if (p.id === editingId) {
          return {
            ...p,
            titulo,
            preco: formattedPrice,
            categoria,
            localizacao,
            quartos: parseInt(quartos) || 1,
            banheiros: parseInt(banheiros) || 1,
            vagas: parseInt(vagas) || 1,
            area: formattedArea,
            destaque,
            descricao,
            imagens: imagens.length > 0 ? imagens : p.imagens
          };
        }
        return p;
      });

      setProperties(updated);
      localStorage.setItem("waleska_properties", JSON.stringify(updated));
      alert("Alterações salvas com sucesso no imóvel!");
    } else {
      // Create new property
      const newProp = {
        id: `waleska-${Date.now()}`,
        titulo,
        preco: formattedPrice,
        categoria,
        localizacao,
        quartos: parseInt(quartos) || 1,
        banheiros: parseInt(banheiros) || 1,
        vagas: parseInt(vagas) || 1,
        area: formattedArea,
        destaque,
        descricao,
        imagens: imagens.length > 0 ? imagens : ["/images/anuncio01.png"]
      };

      const updated = [newProp, ...properties];
      setProperties(updated);
      localStorage.setItem("waleska_properties", JSON.stringify(updated));
      alert("Novo imóvel cadastrado e publicado na vitrine!");
    }

    setEditingId(null);
    setActiveTab("LISTA");
  };

  const handleDeleteProperty = (id) => {
    if (!confirm("Tem certeza de que deseja excluir este imóvel da vitrine?")) return;
    const updated = properties.filter((p) => p.id !== id);
    setProperties(updated);
    localStorage.setItem("waleska_properties", JSON.stringify(updated));
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 md:p-8 space-y-6 relative animate-fadeIn">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-amber-500 overflow-hidden shadow shrink-0">
              <img src="/images/waleska-chaves.png" alt="Waleska Santos" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "/images/waleska-logo.png"; }} />
            </div>
            <div>
              <h3 className="font-serif font-extrabold text-slate-900 text-lg">
                Painel da Corretora • Waleska Santos
              </h3>
              <p className="text-slate-500 text-xs font-mono">CRECI 8492-F PB • Sistema Gestor de Imóveis</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
          >
            <FaTimes className="text-base" />
          </button>
        </div>

        {/* State 1: Login View */}
        {!user ? (
          <form onSubmit={handleLogin} className="space-y-4 max-w-md mx-auto py-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-amber-500 overflow-hidden mx-auto shadow">
                <img src="/images/waleska-chaves.png" alt="Waleska Santos" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "/images/waleska-logo.png"; }} />
              </div>
              <h4 className="font-serif font-extrabold text-slate-900 text-xl">Login da Corretora</h4>
              <p className="text-slate-500 text-xs">
                Acesse para cadastrar novos imóveis, editar preços, enviar fotos do celular ou alterar descrições.
              </p>
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">E-mail de Acesso</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contato@waleska.com.br"
                className="w-full bg-slate-50 text-slate-900 text-sm rounded-xl p-3 border border-slate-200 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Senha</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 text-slate-900 text-sm rounded-xl p-3 border border-slate-200 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs shadow transition"
            >
              Entrar no Painel Gestor
            </button>
          </form>
        ) : (
          /* State 2: Realtor Management Dashboard */
          <div className="space-y-6">
            {/* Top Toolbar Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <FaUser className="text-amber-600" />
                <span>Conectado: <strong>{user.name}</strong> ({user.creci})</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleStartCreate}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    activeTab === "NOVO" && !editingId
                      ? "bg-slate-900 text-white shadow"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  <FaPlus /> Cadastrar Imóvel
                </button>

                <button
                  onClick={() => setActiveTab("LISTA")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    activeTab === "LISTA"
                      ? "bg-slate-900 text-white shadow"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  <FaBuilding /> Gerenciar Imóveis ({properties.length})
                </button>

                <button
                  onClick={() => setUser(null)}
                  className="px-3 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 border border-rose-200 transition"
                  title="Sair do Painel"
                >
                  <FaSignOutAlt />
                </button>
              </div>
            </div>

            {/* Form View (Cadastrar ou Editar Imóvel) */}
            {activeTab === "NOVO" && (
              <form onSubmit={handleSaveProperty} className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <h4 className="font-serif font-extrabold text-slate-900 text-lg uppercase tracking-wider text-amber-800">
                    {editingId ? "✏️ Editar Informações do Imóvel" : "➕ Cadastrar Novo Imóvel"}
                  </h4>
                  {editingId && (
                    <span className="text-xs font-mono px-3 py-1 bg-amber-100 text-amber-900 rounded-full font-bold border border-amber-300">
                      Modo de Edição Ativo
                    </span>
                  )}
                </div>

                {/* Título & Preço */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Título do Anúncio</label>
                  <input
                    type="text"
                    required
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Ex: Apartamento 3 Quartos no Jardim Oceania com Vista Mar"
                    className="w-full bg-slate-50 text-slate-900 text-sm rounded-xl p-3 border border-slate-200 focus:border-amber-500 focus:outline-none font-semibold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Valor de Venda (R$)</label>
                    <input
                      type="text"
                      required
                      value={preco}
                      onChange={(e) => setPreco(e.target.value)}
                      placeholder="R$ 790.000"
                      className="w-full bg-slate-50 text-slate-900 text-sm rounded-xl p-3 border border-slate-200 font-mono font-bold text-emerald-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Categoria / Tipo</label>
                    <select
                      value={categoria}
                      onChange={(e) => setCategoria(e.target.value)}
                      className="w-full bg-slate-50 text-slate-900 text-sm rounded-xl p-3 border border-slate-200 font-semibold"
                    >
                      <option value="Apartamento">Apartamento</option>
                      <option value="Flat / Studio">Flat / Studio</option>
                      <option value="Pé na Areia">Pé na Areia</option>
                      <option value="Cobertura">Cobertura</option>
                      <option value="Casa / Mansão">Casa / Mansão</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Selo de Destaque</label>
                    <input
                      type="text"
                      value={destaque}
                      onChange={(e) => setDestaque(e.target.value)}
                      placeholder="Ex: Última Unidade!"
                      className="w-full bg-slate-50 text-slate-900 text-sm rounded-xl p-3 border border-slate-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Localização (Bairro / Cidade)</label>
                  <input
                    type="text"
                    required
                    value={localizacao}
                    onChange={(e) => setLocalizacao(e.target.value)}
                    placeholder="Jardim Oceania, João Pessoa - PB"
                    className="w-full bg-slate-50 text-slate-900 text-sm rounded-xl p-3 border border-slate-200"
                  />
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Quartos</label>
                    <input
                      type="number"
                      value={quartos}
                      onChange={(e) => setQuartos(e.target.value)}
                      className="w-full bg-slate-50 text-slate-900 text-sm rounded-xl p-2.5 border border-slate-200 text-center font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Banheiros</label>
                    <input
                      type="number"
                      value={banheiros}
                      onChange={(e) => setBanheiros(e.target.value)}
                      className="w-full bg-slate-50 text-slate-900 text-sm rounded-xl p-2.5 border border-slate-200 text-center font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Vagas</label>
                    <input
                      type="number"
                      value={vagas}
                      onChange={(e) => setVagas(e.target.value)}
                      className="w-full bg-slate-50 text-slate-900 text-sm rounded-xl p-2.5 border border-slate-200 text-center font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Área (m²)</label>
                    <input
                      type="text"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      placeholder="75 m²"
                      className="w-full bg-slate-50 text-slate-900 text-sm rounded-xl p-2.5 border border-slate-200 text-center font-bold text-amber-800"
                    />
                  </div>
                </div>

                {/* Photo Upload Section */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h5 className="font-serif font-bold text-slate-900 text-sm uppercase tracking-wider text-amber-800">
                    2. Fotos do Imóvel
                  </h5>

                  {/* Direct File Uploader Box */}
                  <div className="p-6 rounded-2xl bg-emerald-50 border-2 border-dashed border-emerald-400 text-center space-y-3 shadow-sm hover:bg-emerald-100/50 transition">
                    <FaCloudUploadAlt className="mx-auto text-4xl text-emerald-700" />
                    <div>
                      <p className="text-sm font-extrabold text-slate-900 uppercase">
                        📤 Clique Aqui para Enviar Fotos do Celular ou Computador
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Selecione arquivos JPG, PNG ou WebP diretamente da sua galeria de fotos.
                      </p>
                    </div>

                    <label className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl cursor-pointer shadow transition">
                      <FaFolderOpen className="text-amber-400" /> Escolher Fotos do Aparelho
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Add URL link */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                      Ou se preferir, cole o link de uma imagem da internet (URL):
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={imagemInput}
                        onChange={(e) => setImagemInput(e.target.value)}
                        placeholder="https://images.unsplash.com/photo-..."
                        className="flex-1 bg-slate-50 text-slate-900 text-sm rounded-xl p-2.5 border border-slate-200"
                      />
                      <button
                        type="button"
                        onClick={handleAddUrlImage}
                        className="px-4 py-2 bg-slate-800 text-white font-bold rounded-xl text-xs flex items-center gap-1 shrink-0"
                      >
                        <FaPlus /> Adicionar Link
                      </button>
                    </div>
                  </div>

                  {/* Thumbnails Gallery */}
                  <div className="pt-2">
                    <p className="text-xs font-bold text-slate-800 mb-2">
                      Fotos Atuais do Anúncio ({imagens.length}):
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {imagens.map((img, i) => (
                        <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-300 shadow-sm group bg-slate-100">
                          <img src={img} alt={`Foto ${i}`} className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(i)}
                            className="absolute top-1.5 right-1.5 p-1.5 bg-rose-600 text-white rounded-full text-xs shadow-md opacity-90 group-hover:opacity-100 transition"
                            title="Remover foto"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Descrição Completa</label>
                  <textarea
                    rows={4}
                    required
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Descreva a arquitetura, acabamentos, suítes, vista..."
                    className="w-full bg-slate-50 text-slate-900 text-sm rounded-xl p-3 border border-slate-200"
                  ></textarea>
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-sm shadow transition flex items-center justify-center gap-2"
                  >
                    <FaSave className="text-base" />
                    {editingId ? "Salvar Alterações no Imóvel" : "Publicar Imóvel na Vitrine Waleska Santos"}
                  </button>

                  {editingId && (
                    <button
                      type="button"
                      onClick={handleStartCreate}
                      className="px-6 py-4 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-xs"
                    >
                      Cancelar Edição
                    </button>
                  )}
                </div>
              </form>
            )}

            {/* Tab 2: Lista de Imóveis Ativos */}
            {activeTab === "LISTA" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <h4 className="font-serif font-bold text-slate-900 text-base uppercase tracking-wider text-amber-800">
                    Gerenciar Vitrine ({properties.length} Imóveis Cadastrados)
                  </h4>
                  <button
                    onClick={handleStartCreate}
                    className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-lg shadow flex items-center gap-1"
                  >
                    <FaPlus /> Novo Imóvel
                  </button>
                </div>

                <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  {properties.map((item) => (
                    <div key={item.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white hover:bg-slate-50 transition">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-12 rounded-lg overflow-hidden bg-slate-100 border shrink-0">
                          <img src={item.imagens?.[0] || "/images/anuncio01.png"} alt={item.titulo} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-serif font-bold text-slate-900 text-sm line-clamp-1">{item.titulo}</p>
                          <p className="text-xs text-emerald-700 font-extrabold font-mono">{item.preco} • {item.categoria} ({item.localizacao})</p>
                        </div>
                      </div>

                      {/* Action Buttons: Editar & Excluir */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleStartEdit(item)}
                          className="px-3 py-1.5 bg-amber-100 text-amber-900 hover:bg-amber-500 hover:text-white rounded-lg text-xs font-bold border border-amber-300 transition flex items-center gap-1"
                        >
                          <FaEdit /> Editar
                        </button>

                        <button
                          onClick={() => handleDeleteProperty(item.id)}
                          className="px-3 py-1.5 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-lg text-xs font-bold border border-rose-200 transition flex items-center gap-1"
                        >
                          <FaTrash /> Excluir
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminModal;
