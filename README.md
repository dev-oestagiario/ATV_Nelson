# React Native
Exercicios numerados, comentados e organizados por bimestres sobre React Native


## 📋 Estrutura do Projeto

O projeto está dividido em:

- **Componentes reutilizáveis**: criados para reaproveitar código.  
- **Manipuladores de eventos**: funções que lidam com cliques, inputs e interações do usuário.  
- **Funções auxiliares**: funções que retornam JSX dinamicamente ou ajudam na lógica de exibição.  

As atividades estão organizadas por bimestre, dentro de pastas específicas:

```bash
2Bim/
└─ atv-01/
3Bim/
└─ Atv01/
└─ app/
```

> Para cada bimestre, entre na pasta correspondente para ver a atividade.

---
## 📚 Exercícios Implementados

### 2Bimestre – `2Bim/atv-01`

1. **Estrutura do Projeto e Comentários**  
   Configuração inicial com Vite + TypeScript e explicações do `App.tsx`

2. **JSX com Template Expressions**  
   Variáveis dentro do JSX para frases dinâmicas

3. **Criação e Importação de Componente**  
   Componente `Mensagem.tsx` reutilizável

4. **Hierarquia de Componentes**  
   Componentes `Cabecalho`, `Conteudo` e `Rodape`

5. **Evento de Clique com Função Inline**  
   Botão que mostra `alert` ao clicar

6. **Evento de Clique com Função Externa**  
   Botão chamando função externa que imprime no console

7. **Função de Renderização**  
   Função `renderizarMensagem()` retornando JSX

8. **Layout com Múltiplos Componentes**  
   Componentes `Topo`, `Meio` e `Base` compondo layout completo

### 3Bimestre – `3Bim/Atv01/app`

1. **Ex01 — Saudação com Props**  
   Componente de classe `Greeting` exibindo “Olá, {name}!” com tamanho configurável

2. **Ex02 — Contador (State)**  
   Componente `Counter` com estado e botões `+1` e `-1`

3. **Ex03 — Alinhamentos na prática**  
   Card com três quadradinhos e botões alternando `justifyContent` e `alignItems`

4. **Ex04 — Tamanhos Fixos vs Dinâmicos**  
   Seção A: botões com tamanho fixo  
   Seção B: imagem responsiva usando `Dimensions`

---

## 🚀 Como executar o projeto

Para rodar uma atividade, siga os passos abaixo:

1. **Entre na pasta da atividade correspondente:**

- **2º Bimestre:**  
```bash
cd 2Bim/atv-01

```

- **3º Bimestre:**  
```bash
cd 3Bim/Atv01/app

```

2. **Instale as dependências**

```bash
npm install

```
3. **Inicie o servidor de desenvolvimento:**

```bash
npm run web
```

4. **Inicie o servidor de desenvolvimento:**
O servidor ira abrir no navegador