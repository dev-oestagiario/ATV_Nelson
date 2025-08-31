import Base from './components/Base'
import Cabecalho from './components/Cabecalho'
import Conteudo from './components/Conteudo'
import Meio from './components/Meio'
import Mensagem from './components/Mensagem'
import Rodape from './components/Rodape'
import Topo from './components/Topo'

// Função externa para evento de clique (exercício 6)
function executarAcao() {
  console.log("Função chamada com sucesso.")
}

// Função que retorna JSX (exercício 7)
function renderizarMensagem() {
  return (
    <p className="text-sm text-gray-700">
      Texto gerado por uma função de renderização.
    </p>
  )
}

// Componente principal da aplicação
const App = () => {
  // Declaração de variáveis (Exercício 2)
  const nome = "Ana"
  const anoNascimento = 2005

  return (
    // Container principal da tela
    // `w-full` faz ocupar 100% da largura da tela
    // `flex items-center justify-center` centraliza o conteúdo horizontal e verticalmente
    // `p-4 sm:p-6 md:p-8` define o espaçamento interno responsivo
    // `data-theme="lemonade"` aplica o tema "lemonade" do DaisyUI para esta seção
    <div className='h-full w-full flex items-center justify-center p-4 sm:p-6 md:p-8' data-theme="abyss">

      {/* Container interno com fundo e cor de texto base do tema */}
      <div className="bg-base-200 text-base-content px-4 ">

        {/* Conteúdo centralizado e com largura máxima de leitura confortável */}
        <div className="w-full max-w-2xl py-10 space-y-8">

          {/* Exercício 2: Template Expressions com JSX */}
          <div className="card bg-base-100 shadow-md p-6">
            <h1 className="text-xl font-bold">
              Olá, meu nome é {nome} e nasci em {anoNascimento}.
            </h1>
          </div>

          {/* Exercício 3: Componente reutilizável */}
          <Mensagem />

          {/* Exercício 4: Hierarquia de Componentes */}
          <div className="card bg-base-100 shadow-md p-6 space-y-2">
            <Cabecalho />
            <Conteudo />
            <Rodape />
          </div>

          {/* Exercícios 5 e 6: Botões com eventos de clique */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Exercício 5: Função inline no onClick */}
            <button
              className="btn btn-primary w-full sm:w-auto"
              onClick={() => alert("Você clicou no botão!")}
            >
              Mostrar Alerta
            </button>

            {/* Exercício 6: Função externa chamada ao clicar */}
            <button
              className="btn btn-secondary w-full sm:w-auto"
              onClick={executarAcao}
            >
              Executar Ação
            </button>
          </div>

          {/* Exercício 7: Função de renderização retornando JSX */}
          <div className="card bg-base-100 shadow-md p-6">
            {renderizarMensagem()}
          </div>

          {/* Exercício 8: Layout com múltiplos componentes organizados em blocos */}
          <div className="card bg-base-100 shadow-md p-6 space-y-2">
            <Topo />
            <Meio />
            <Base />
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
