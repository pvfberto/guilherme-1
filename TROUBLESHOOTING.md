# 🔧 Troubleshooting - Página em Branco

## Diagnóstico Passo a Passo

### 1. Verificar se o Cloudflare Pages está Funcionando

Acesse: `https://seu-dominio.pages.dev/test.html`

- **✅ Se a página de teste aparecer**: O Cloudflare Pages está OK, o problema é no código React
- **❌ Se também estiver em branco**: O problema é no build ou configuração do Cloudflare

### 2. Verificar o Console do Navegador

Abra o DevTools (F12) e vá na aba **Console**:

**Logs esperados:**
```
Main.jsx loaded
React version: 18.2.0
Root element: <div id="root">
Creating React root...
React app rendered successfully
```

**Se não aparecer nada:**
- O JavaScript não está carregando
- Verifique a aba **Network** para ver se há erros 404

**Se aparecer erros:**
- Anote a mensagem de erro exata
- Procure por erros relacionados a módulos não encontrados

### 3. Verificar a Aba Network (DevTools)

Vá em **Network** (F12) e recarregue a página:

**Arquivos que devem carregar:**
- ✅ `index.html` (200)
- ✅ `main.jsx` ou arquivo JS compilado (200)
- ✅ `index.css` ou arquivo CSS compilado (200)
- ✅ Arquivos de assets (imagens, fonts)

**Erros comuns:**
- **404 Not Found**: Arquivo não existe na pasta dist
- **MIME type error**: Configuração incorreta do servidor
- **CORS error**: Problema com recursos externos

### 4. Verificar Build no Cloudflare

**Acesse:** Dashboard do Cloudflare Pages → Seu projeto → View build logs

**O que verificar:**
- ✅ Build command executado: `npm run build`
- ✅ Build concluído sem erros
- ✅ Pasta `dist` foi criada
- ✅ Arquivos foram publicados

**Logs de build esperados:**
```
✓ built in Xms
✓ X modules transformed.
dist/index.html
dist/assets/main-[hash].js
dist/assets/main-[hash].css
Build completed successfully
```

### 5. Verificar Configurações do Cloudflare Pages

**Settings → Builds & deployments:**

```
Framework preset:        Vite
Build command:          npm run build
Build output directory: dist
Root directory:         / (ou em branco)
Node version:           18
```

### 6. Problemas Comuns e Soluções

#### Problema: Página totalmente em branco, sem erros no console

**Causa possível:** React não está renderizando

**Solução:**
1. Verifique se você vê "Carregando..." antes da página ficar branca
2. Se sim, o problema é no componente React
3. Abra o console e procure por erros silenciosos

#### Problema: Erro "Failed to load module"

**Causa possível:** Caminhos de import incorretos

**Solução:**
1. Verifique se `base: '/'` está configurado no `vite.config.js`
2. Verifique se todos os imports usam caminho relativo correto
3. Rebuild e redeploy

#### Problema: CSS não carrega (página sem estilo)

**Causa possível:** Tailwind não processado ou CSS não importado

**Solução:**
1. Verifique se `postcss.config.js` existe
2. Verifique se `tailwind.config.js` está correto
3. Verifique se `import './index.css'` está no `main.jsx`
4. Rebuild

#### Problema: "Cannot find module 'lucide-react'"

**Causa possível:** Dependência não instalada no build

**Solução:**
1. Verifique se `lucide-react` está em `dependencies` (não `devDependencies`) no `package.json`
2. Clear build cache no Cloudflare
3. Trigger novo deploy

#### Problema: Página funciona local mas não no Cloudflare

**Causa possível:** Diferença entre build dev e prod

**Solução:**
1. Teste localmente com build de produção:
   ```bash
   npm run build
   npm run preview
   ```
2. Se funcionar, o problema é no Cloudflare
3. Se não funcionar, o problema é no código

### 7. Forçar Rebuild Completo

Se nada funcionar, tente um rebuild completo:

1. **No Cloudflare Pages:**
   - Settings → Clear build cache
   - Deployments → Retry deployment

2. **No código:**
   - Delete `node_modules` e `package-lock.json` localmente
   - `npm install` novamente
   - Commit e push
   - Aguarde novo deploy

### 8. Teste de Integração

**Crie um teste simples:**

1. Comente todo o conteúdo de `App.jsx`
2. Deixe apenas:
   ```jsx
   function App() {
     return <div style={{padding: '20px'}}>Hello World</div>
   }
   ```
3. Se funcionar, o problema é em algum componente específico
4. Vá adicionando componentes um por um até encontrar o problema

### 9. Verificar _redirects

Certifique-se que o arquivo `public/_redirects` contém:

```
/* /index.html 200
```

**Este arquivo é CRUCIAL para SPAs funcionarem!**

### 10. Últimos Recursos

Se NADA funcionar:

1. **Delete o projeto no Cloudflare Pages**
2. **Recrie do zero:**
   - Connect to Git
   - Selecione o repositório
   - Configure as build settings
   - Deploy

2. **Ou use deploy manual via Wrangler:**
   ```bash
   npm install -g wrangler
   wrangler login
   npm run build
   wrangler pages deploy dist --project-name=seu-projeto
   ```

## 📞 Precisa de Ajuda?

Se nenhuma dessas soluções funcionou:

1. **Copie os logs completos do build** do Cloudflare
2. **Tire prints do console** do navegador (com erros visíveis)
3. **Anote a URL** do deploy
4. **Documente todos os passos** que você já tentou

## ✅ Checklist Final

Antes de desistir, verifique:

- [ ] Arquivo `public/_redirects` existe e está correto
- [ ] Build command é `npm run build`
- [ ] Output directory é `dist`
- [ ] Node version é 18+
- [ ] `vite.config.js` tem `base: '/'`
- [ ] Todas dependências estão em `dependencies` (não `devDependencies`)
- [ ] Build local funciona (`npm run build && npm run preview`)
- [ ] Console do navegador mostra os logs de debug
- [ ] Teste em navegador diferente (para descartar cache)
- [ ] Teste em aba anônima (para descartar extensões)
